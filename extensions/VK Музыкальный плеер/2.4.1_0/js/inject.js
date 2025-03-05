var notify = false, injected = false, initTryCount = 0;

if (!injected) {
    injected = true;

    bind('start', function () {
        setCurrentAudio();
    });
    bind('pause', function () {
        if (ap.getCurrentProgress() < 1)
            setCurrentAudio();
    });
    bind('pause', function () {
        if (ap.getCurrentProgress() < 1)
            setCurrentAudio();
    });
    bind('seek', function () {
        setCurrentAudio();
    });

    audioLayer.toggle();
    audioLayer.toggle();

    init();
}

function init() {
    if (initTryCount > 20) {
        console.log('init error');
    }
    try {
        send('setPlaylist', {playlist: ap.getCurrentPlaylist()});
        setCurrentAudio();
    } catch (e) {
        initTryCount++;
        setTimeout(init, 300 + initTryCount * 100);
    }
}

function getCurrentAudio() {
    return ap.getCurrentAudio();
}

function bind(event, callback) {
    ap.on(ap, event, callback);
}

function initPlayList() {
    if (!vk.id) {
        send('error', {'type': 'auth', 'errorMessage': 'Для прослушивания аудиозаписей необходима авторизация на сайте vk.com'});
    } else if (!ap.getCurrentPlaylist()) {
        ap.playPlaylist(vk.id, AudioPlaylist.DEFAULT_PLAYLIST_ID);
        audioLayer.toggle();
        audioLayer.toggle();
    }
}

function setCurrentAudio() {
    var playlist = ap.getCurrentPlaylist();
    if (!playlist._title)
        playlist = playlist._ref;

    var currentAudio = getCurrentAudio();
    currentAudio[3] = clearSymbols(currentAudio[3]);
    currentAudio[4] = clearSymbols(currentAudio[4]);
    send('setCurrentAudio', {
        currentAudio: currentAudio,
        currentProgress: ap.getCurrentProgress(),
        playlist: {
            id: playlist._albumId,
            title: playlist._title
        },
        isPlaying: ap.isPlaying(),
        isMy: getIsMy(),
        isRepeat: getIsRepeat(),
        isShuffle: getIsShuffle(),
        notify: notify,
        volume: getVolume()
    });

    notify = false;
}

function getIsMy() {
    var res = false;
    try {
        res = ((" " + document.getElementById('add').className + " ").replace(/[\n\t]/g, " ").indexOf(" audio_player_btn_added ") > -1 )
    } catch (e) {
    }

    return res;
}

function getIsRepeat() {
    var res = false;
    try {
        res = ((" " + document.getElementsByClassName('audio_page_player_repeat')[0].className + " ").replace(/[\n\t]/g, " ").indexOf(" audio_page_player_btn_enabled ") > -1 )
    } catch (e) {
    }

    return res;
}

function getIsShuffle() {
    var res = false;
    try {
        res = ((" " + document.getElementsByClassName('audio_page_player_shuffle')[0].className + " ").replace(/[\n\t]/g, " ").indexOf(" audio_page_player_btn_enabled ") > -1 )
    } catch (e) {
    }

    return res;
}

function getVolume() {
    return document.getElementsByClassName('slider_amount')[0].style.width.replace('%', '');
}

const swapArray = function (arr, oldPlace, newPlace) {
    if ((Math.min(oldPlace, newPlace) < 0) || (Math.max(oldPlace, newPlace) >= arr.length)) {
        console.error('Out of range')
        return null;
    }
    const item = arr.splice(oldPlace, 1);
    arr.splice((newPlace > 0) ? newPlace - 1 : 0, 0, item[0])
    return arr;
};

function upCurrentAudio() {
    var oldPlace = null;
    var currentAudio = ap._currentAudio;
    var list = ap._currentPlaylist._list;
    for (var key in list) {
        var item = list[key];
        if (item[0] === currentAudio[0]) {
            oldPlace = key;
            break;
        }
    }
    if (oldPlace) {
        ap._currentPlaylist._list = swapArray(list, oldPlace, 0);
        ap.saveStateCurrentPlaylist();
        audioLayer.toggle();
        audioLayer.toggle();
    }
}

function send(method, data) {
    data.method = method;
    window.postMessage(data, '*');
}

function clearSymbols(string) {
    if (string) {
        string = string.replace('&amp;', '&');
        string = string.replace('&#039;', '\'');
    }

    return string;
}