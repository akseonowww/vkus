var $jcarousel = $('.jcarousel');
var $control = $('.controls');
var $total = $control.children('output');
var $current = $('#currentTime');
var $source = $('#source');

var direction = 1;
$(function () {
    $jcarousel.jcarousel({
        wrap: 'circular',
    });

    $('.jcarousel-prev').click(function () {
        clearInterval(timerId);
        setProgressValue(0);

        direction = -1;
    });

    $('.jcarousel-next').click(function () {
        clearInterval(timerId);
        setProgressValue(0);

        direction = 1;
    });

    $('input[type="range"]').click(function () {
        $(this).animate({marginTop: '-150px'}, 500);
    });

    $('#position').on('input', function () {
        var progress = $(this).val() / total;
        var percent = progress * 100;

        $(this).css('background', '-webkit-linear-gradient(left, #e74c3c 0%, #e74c3c ' + percent + '%, #999 ' + percent + '%)');

        sendRequest('setProgress', {progress: progress});
    });

    $("#volume").on('input', function () {
        var $t = $(this);
        var percent = $t.val();
        $(this).css('background', '-webkit-linear-gradient(left, #e74c3c 0%, #e74c3c ' + percent + '%, #999 ' + percent + '%)');

        $t.attr('title', 'Громкость ' + percent + '%');

        //var volume = 0.0000015862851839992103523019643593339 * Math.pow(percent, 3) - 0.000095908486369131469681699464491231 * Math.pow(percent, 2) + 0.0037054209487937107662947067154846 * percent - 0.0087186650413148998606249762133302;
        sendRequest('setVolume', {volume: percent});
    });
});

var currentAudio, total = 100, timerId, audioId;
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (!request.currentAudio)
        return;

    currentAudio = request.currentAudio;

    var currentProgress = Math.floor(request.currentProgress * currentAudio[5]);
    $total.text(convertTime(currentAudio[5] - 1));
    $current.text(convertTime(currentProgress));
    $('#position').attr('max', request.currentAudio[5]).attr('value', currentProgress);
    $source.text(request.playlist.title);

    total = currentAudio[5] - 1;
    clearInterval(timerId);
    setProgressValue(currentProgress);
    if (request.isPlaying) {
        timerId = setInterval(function () {
            currentProgress++;

            if (total <= currentProgress) {
                clearInterval(timerId);
                return;
            }

            setProgressValue(currentProgress);
        }, 1000);
    }

    var $volume = $('#volume'), percent = request.volume;
    $volume.val(request.volume);
    $volume.css('background', '-webkit-linear-gradient(left, #e74c3c 0%, #e74c3c ' + percent + '%, #999 ' + percent + '%)');

    var src = currentAudio[14].split(',')[1];
    if (!src)
        src = 'empty_album.jpg';

    //console.log(audioId, currentAudio[0]);
    if (!audioId) {
        audioId = currentAudio[0];
        setImage(src);
    }
    if (audioId != currentAudio[0]) {
        audioId = currentAudio[0];

        var $active = $('.image-cover.active');
        var index = $active.parent().index() ? 0 : 1;
        $active.removeClass('active');

        $($jcarousel.find('li')[index]).children().addClass('active');
        $('.image-cover:not(.active)').attr('src', 'empty_album.jpg');

        setImage(src);

        if (direction === 1)
            $jcarousel.jcarousel('scroll', '+=1');
        else
            $jcarousel.jcarousel('scroll', '-=1');

        direction = 1;
    }
});

function setImage(src) {
    $('.image-cover.active').attr('src', src);
    $('div.overlay-image.active').css("background-image", "url('" + src + "')");
}

function setProgressValue(progress) {
    var $position = $('#position');
    $position.val(progress);
    $current.text(convertTime(progress));

    var percent = Math.ceil($position.val() / total * 100);
    $position.css('background', '-webkit-linear-gradient(left, #e74c3c 0%, #e74c3c ' + percent + '%, #999 ' + percent + '%)');
}

function convertTime(input) {
    var minutes = Math.floor(input / 60);
    var seconds = input % 60;

    return minutes + ":" + (seconds < 10 ? '0' + seconds : seconds);
}