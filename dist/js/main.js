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
