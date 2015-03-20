$('.menu').hide();
$('.menu-show').show();
$('.menu-hide').hide();
$('.menu-show').click(function () {
    $('.menu-show').toggle();
    $('.menu-hide').toggle();
    $('.menu').slideDown();
});
$('.menu-hide').click(function () {
    $('.menu-hide').toggle();
    $('.menu-show').toggle();
    $('.menu').slideUp();
});

// zeroclipboard
var client = new window.ZeroClipboard(document.getElementById('copy-button'));
client.on('ready', function (readyEvent) {
    // alert( "ZeroClipboard SWF is ready!" );
    window.alert('swfVersion:' + readyEvent.swfVersion + 'type:' + readyEvent.type + 'version:' + readyEvent.version);
    client.on('aftercopy', function (event) {
        // `this` === `client`
        // `event.target` === the element that was clicked
        event.target.style.display = 'none';
        window.alert('Copied text to clipboard: ' + event.data['text/plain']);
    });
});
