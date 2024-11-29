$(function () {
    $('#header .inner .hamburger').on('click', function () {
        $(this).toggleClass('on');
        $('#header .gnb').toggleClass('on');
    });
})

$(function () {
    const MainVisual = new Swiper('.main_visual_slide', {
        loop: true,
        effect: "fade",
        speed: 1000,
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
    });
})