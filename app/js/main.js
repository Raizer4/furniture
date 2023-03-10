$(function () {
    $('.header__btn').on('click', function () {
        $('.rightside-menu').removeClass('rightside-menu--close');
    });
});

$(function () {
    $('.rightside-menu__close').on('click', function () {
        $('.rightside-menu').addClass('rightside-menu--close');
    });
});
