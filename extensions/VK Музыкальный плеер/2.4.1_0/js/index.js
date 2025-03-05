window.onload = function () {
    document.getElementById('play').onclick = function () {
        sendRequest("play");
    };

    document.getElementById('prev').onclick = function () {
        sendRequest("prev");
    };

    document.getElementById('next').onclick = function () {
        sendRequest("next");
    };

    document.getElementsByClassName('next').onclick = function () {
        sendRequest("next");
    };

    var options = document.getElementById('options').children;
    for (var i = 0; i < options.length; i++) {
        options[i].onclick = function () {
            var type = this.dataset['type'];
            var toggle = true;
            if (type == 'add') {
                sendRequest("add");
            } else if (type == 'repeat') {
                sendRequest("repeat");
            } else if (type == 'shuffle') {
                sendRequest("shuffle");
            } else if (type == 'open') {
                toggle = false;
                sendRequest("open");
            }

            if(toggle)
                toggleActive(this, !this.className);
        };
    }

    document.getElementById('settings').onclick = function () {
        chrome.tabs.create({url: 'settings.html'});
    };
};

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (!request.currentAudio && !request.errorMessage)
        return;

    var song, artist;
    if(request.currentAudio) {
        song = request.currentAudio[3];
        artist = request.currentAudio[4];
    } else if(request.errorMessage) {
        song = request.errorMessage;
        artist = 'Возникла проблема';
    }

    document.getElementById('song').innerText = song;
    document.getElementById('artist').innerText = artist;

    document.getElementById('play').children[0].className = request.isPlaying
        ? 'fa fa-pause fa-fw' : 'fa fa-play fa-fw';

    toggleActive(document.querySelector('[data-type=add]'), request.isMy);
    toggleActive(document.querySelector('[data-type=repeat]'), request.isRepeat);
    toggleActive(document.querySelector('[data-type=shuffle]'), request.isShuffle);
});

function toggleActive(context, condition) {
    context.className = condition ? 'active' : '';
}

function sendRequest(method, data) {
    if (!data)
        data = {};

    data.method = method;
    chrome.runtime.sendMessage(data);
}

sendRequest('init');
