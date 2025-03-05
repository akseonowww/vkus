console.log('background started');
var _AnalyticsCode = 'UA-64361224-2';
var _gaq = _gaq || [];
_gaq.push(['_setAccount', _AnalyticsCode]);
(function () {
	var ga = document.createElement('script');
	ga.type = 'text/javascript';
	ga.async = true;
	ga.src = 'https://ssl.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(ga, s);
})();

var vkSongTab, notifType, currentAudio, currentProgress, volumePercent;

function inVkTab(callback) {
	chrome.tabs.query({url: '*://*.vk.com/*'}, function (tabs) {
		vkSongTab = null;
		for (var i = 0; i < tabs.length; ++i) {
			var tab = tabs[i];

			vkSongTab = tab.id;
			if (tab.audible) {
				vkSongTab = tab.id;
				break;
			}
		}

		if (vkSongTab) {
			callback();
		} else if (confirm('Вкладка ВК не найдена. Открыть страницу VK? Если эта ошибка все равно появляется, пожалуйста перезагрузите браузер.')) {
			chrome.tabs.create({url: 'https://vk.com/audio'});
		}
	});
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	if (request.method == 'error') {
		showErrorMessage('Возникла проблема', request.errorMessage);
	} else {
		inVkTab(function () {
			currentAudio = request.currentAudio;
			currentProgress = request.currentProgress;
			volumePercent = request.volume;

			if (request.notify)
				showAudioInfo();

			setTimeout(function () {
				sendToVK(request);
			}, 5);

			if (request.method == 'open') {
				openVkTab();
			}
		});
	}
});

var rateNotif;
chrome.storage.sync.get(['version', 'popup-simple', 'notifications', 'date_install', 'hotkey1', 'notifkey1', 'notifkey2'], function (items) {
	var updated = false;
	if (!chrome.runtime.error) {
		chrome.browserAction.setPopup({popup: items['popup-simple'] ? 'popup_simple.html' : 'popup_full.html'});

		function set(key, value) {
			if (!items[key]) {
				items[key] = value;

				var params = {};
				params[key] = value;
				chrome.storage.sync.set(params);

				updated = true;
			}
		}

		set('notifkey1', 'add');
		set('notifkey2', 'next');

		var version = '2.3';
		if (items['version'] != version) {
			chrome.tabs.create({url: 'news.html'});
			set('version', version);
		}

		set('notifications', true);

		if (!items['date_install']) {
			set('date_install', new Date().getTime());
			_gaq.push(['_trackEvent', 'install', 'other']);
		}
	}
});

function execute(action, src) {
	inVkTab(function () {
		if (action == 'mute')
			muteAll();
		else if (action == 'play')
			sendToVK({method: 'play'});
		else if (action == 'info')
			showAudioInfo(true);
		else if (action == 'next')
			sendToVK({method: 'next'});
		else if (action == 'prev')
			sendToVK({method: 'prev'});
		else if (action == 'add')
			sendToVK({method: 'add'});
		else if (action == 'repeat')
			sendToVK({method: 'repeat'});
		else if (action == 'shuffle')
			sendToVK({method: 'shuffle'});
		else if (action == 'volume_up') {
            callStorage(['volumeStepMax'], function(items) {
                var step = items['volumeStepMax'];
                if(step === undefined) {
                    step = 10;
                } else {
                    step = parseInt(step);
                }
                volumePercent = Math.max(0, Math.min(100, volumePercent + step));
                sendToVK({method: 'setVolume', volume: volumePercent});
            });
		} else if (action == 'volume_down') {
            callStorage(['volumeStepMin'], function(items) {
                var step = items['volumeStepMin'];
                if(step === undefined) {
                    step = 10;
                } else {
                    step = parseInt(step);
                }
                volumePercent = Math.max(0, Math.min(100, volumePercent - step));
                sendToVK({method: 'setVolume', volume: volumePercent});
            });
		} else if (action == 'progress_up') {
			sendToVK({method: 'setProgressUp'});
		} else if (action == 'progress_down') {
			sendToVK({method: 'setProgressDown'});
		} else if (action == 'open') {
			openVkTab();
		} else if (action == 'logout') {
			sendToVK({method: 'logout'});
		} else if (action == 'up_current_audio') {
			sendToVK({method: 'upCurrentAudio'});
		}

		_gaq.push(['_trackEvent', action, src]);
	});
}

chrome.commands.onCommand.addListener(function (command) {
	chrome.storage.sync.get(['date_install', 'rated'], function (items) {
		execute(command, 'hotkey');

		if (!items['rated'] && items['date_install'] && (new Date().getTime() - items['date_install']) > 259200000) {
			createNotiffication({
				type: 'basic',
				title: 'Нравится расширение?',
				message: 'Пожалуйста, не забудьте оценить его в магазине приложений Chrome',
				iconUrl: "notiff.jpg",
				buttons: [{title: 'Оценить'}]
			}, function (notificationId) {
				rateNotif = notificationId;
			});

			var params = {};
			params['rated'] = true;
			chrome.storage.sync.set(params)
		}
	});
});

function callStorage(params, callback) {
    chrome.storage.sync.get(params, callback);
}

chrome.notifications.onButtonClicked.addListener(function (notifId, btnIdx) {
	if (notifType == 'legacy') {
		chrome.tabs.create({url: 'chrome-extension://igfflgejgmkdlmedifojjnaohnmbhlag/news.html'});
	}
	else if (notifId == rateNotif) {
		chrome.tabs.create({url: 'https://chrome.google.com/webstore/detail/vk-%D0%BC%D1%83%D0%B7%D1%8B%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D0%BF%D0%BB%D0%B5%D0%B5%D1%80/jdcodafmbknbopclkbcnfkohmeaeapeg/reviews?hl=ru'});
		_gaq.push(['_trackEvent', 'rate', 'notifkey']);
	} else {
		btnIdx++;
		if (btnIdx) {
			chrome.storage.sync.get(['notifkey' + btnIdx], function (items) {
				execute(items['notifkey' + btnIdx], 'notifkey');
			});
		}
	}

	chrome.notifications.clear(notifId);
});

var lastNotiffId;
function createNotiffication(params, callback) {
	var views = chrome.extension.getViews({type: "popup"});
	if (views.length > 0)
		return;

	if (!Notification) {
		alert('Ваш браузер не поддерживает уведомления');
		return;
	}

	if (Notification.permission !== "granted")
		Notification.requestPermission();
	else {
		chrome.notifications.create("", params, callback);
	}
}

function showAudioInfo(force) {
	if (currentAudio) {
		if (lastNotiffId)
			chrome.notifications.clear(lastNotiffId);

		chrome.storage.sync.get(['notifications', 'notifkey1', 'notifkey2'], function (items) {
			var buttons = [getButton(items['notifkey1']), getButton(items['notifkey2'])];

			if (force || items['notifications']) {
				createNotiffication({
					type: 'basic',
					title: currentAudio[4],
					message: currentAudio[3],
					iconUrl: "notiff.jpg",
					buttons: buttons
				}, function (notificationId) {
					lastNotiffId = notificationId;
				});
			}
		});
	} else
		showErrorMessage('Вкладка ВК не найдена', 'Обновите страницу VK, включите музыку. Если не помогло, очистите кэш и попробуйте еще раз');
}

function showErrorMessage(title, message) {
	createNotiffication({
		type: 'basic',
		title: title,
		message: message,
		iconUrl: "notiff.jpg"
	});
}

function getButton(type) {
	var btn = [];

	if (type == 'play')
		btn = {title: 'Плей/Пауза'};
	else if (type == 'next')
		btn = {title: 'Следующая'};
	else if (type == 'prev')
		btn = {title: 'Предыдущая'};
	else if (type == 'add')
		btn = {title: 'Добавить'};
	else if (type == 'repeat')
		btn = {title: 'Повторять'};
	else if (type == 'shuffle')
		btn = {title: 'Случайный порядок'};
	else if (type == 'mute')
		btn = {title: 'Приглушить все вкладки'};

	return btn;
}

function sendToVK(request) {
	chrome.tabs.sendMessage(vkSongTab, request, function (response) {
		if (!response) {
			if (confirm('Вкладка ВК найдена, но для работы расширения необходимо её перезагрузить, продолжить?')) {
				chrome.tabs.reload(vkSongTab);
			}
		}
	});
}

function openVkTab() {
	chrome.tabs.update(vkSongTab, {active: true});
}

var isAllMuted = false;
function muteAll() {
	isAllMuted = !isAllMuted;

	chrome.tabs.query({audible: true}, function (tabs) {
		for (var i = 0; i < tabs.length; ++i) {
			var tab = tabs[i];
			chrome.tabs.update(tab.id, {muted: isAllMuted});
		}
	});
}