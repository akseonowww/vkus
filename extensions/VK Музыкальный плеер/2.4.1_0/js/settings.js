$(document).ready(function () {
    $('.configureCommands').click(function () {
        chrome.tabs.create({url: 'chrome://extensions/configureCommands'});
    });

    $('input').change(function () {
        setOption($(this).attr('id'), $(this).val());
    });

    $('.hot-keys').change(function () {
        setOption($(this).attr('id'), $(this).val());
    });

    $('.checkbox').change(function () {
        var val = $(this).is(':checked');
        setOption($(this).attr('id'), val);

        if($(this).attr('id') === 'popup-simple') {
            chrome.browserAction.setPopup({popup: val ? 'popup_simple.html' : 'popup_full.html'});
        }
    });

    chrome.storage.sync.get([
        'popup-simple',
        'notifications',
        'notifkey1',
        'notifkey2',
        'volumeStepMin',
        'volumeStepMax'
    ], function (items) {
        if (!chrome.runtime.error) {

            function markChecked(key) {
                $('#' + key).prop('checked', items[key]);
            }

            function set(key, defaultValue) {
                var val = items[key];
                if(val === undefined) {
                    val = defaultValue;
                }

                $('#' + key).val(val);
                markChecked(key);
            }

            set('notifkey1', 'add');
            set('notifkey2', 'next');
            set('popup-simple', false);
            set('volumeStepMin', 10);
            set('volumeStepMax', 10);

            $('#notifications').prop('checked', items['notifications']);

            $('select').material_select();
        }
    });

    function setDefault(items, key, value) {
        if (items[key] === undefined) {
            setOption(key, value);
        }
    }

    function setOption(key, value) {
        var params = {};
        params[key] = value;
        chrome.storage.sync.set(params);
    }

    chrome.commands.getAll(function (e) {
        for (var i = 1; i <= 4; i++) {
            if (e[i].shortcut) {
                var $l = $('#hotkey-label' + i);
                $l.text($l.text() + ' (' + e[i].shortcut + ')');
            }
        }
    });
});