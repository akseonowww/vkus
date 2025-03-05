if (!injected) {
	var injected = true;

	var e = document.createElement('script');
	e.src = chrome.extension.getURL('js/inject.js');
	e.onload = function () {
		window.addEventListener('message', function (e) {
			if (e.data.method)
				chrome.runtime.sendMessage(e.data);
		}, false);
	};
	document.body.appendChild(e);
}

function convertVolume(volumePercent) {
	return 0.0000015862851839992103523019643593339 * Math.pow(volumePercent, 3) - 0.000095908486369131469681699464491231 * Math.pow(volumePercent, 2) + 0.0037054209487937107662947067154846 * volumePercent - 0.0087186650413148998606249762133302;
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	if (request.method === 'init') {
		registerScript("try{window.setCurrentAudio();} catch(e) {console.log('Ошибка загрузки расширения VK Music Player');}");
	} else if (request.method === 'play') {
		registerScript("if(ap.isPlaying()) ap.pause(); else ap.play();");
	} else if (request.method === 'prev') {
		registerScript("ap.playPrev();");
	} else if (request.method === 'next') {
		registerScript("window.notify = true;ap.playNext();");
	} else if (request.method === 'setProgress') {
		registerScript("ap.seek(" + request.progress + ");");
	} else if (request.method === 'setProgressUp') {
		registerScript("ap.seek(ap.getCurrentProgress() * 1.05);");
	} else if (request.method === 'setProgressDown') {
		registerScript("ap.seek(ap.getCurrentProgress() * 0.95);");
	} else if (request.method === 'add') {
		registerScript("document.getElementById('add').click();");
	} else if (request.method === 'repeat') {
		registerScript("document.getElementsByClassName('audio_page_player_repeat')[0].click();");
	} else if (request.method === 'shuffle') {
		registerScript("document.getElementsByClassName('audio_page_player_shuffle')[0].click();");
	} else if (request.method === 'setVolume') {
		registerScript("ap.setVolume(" + convertVolume(request.volume) + ");");
	} else if (request.method === 'logout') {
		registerScript("document.getElementById('top_logout_link').click()");
	} else if (request.method === 'upCurrentAudio') {
		registerScript("window.upCurrentAudio()");
	}

	sendResponse(true);
});

function registerScript(src) {
	var script = document.createElement('script');

	script.textContent = 'window.initPlayList(); ' + src;
	(document.head || document.documentElement).appendChild(script);
	script.parentNode.removeChild(script);
}
	
