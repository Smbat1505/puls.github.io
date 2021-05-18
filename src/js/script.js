$(document).ready(function(){
    $('.carousel__inner').slick({
        dots: false,
        speed: 1200,
        // slidesToShow: 1,
        adaptiveHeight: false,
        prevArrow: '<button type="button" class="slick-prev"><img src"../icons/chevron_left_solid.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src"icons/chevron_right_solid.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    infinite: true,
                    // dots: true,
                    arrow: false
                }
            }
        ]
    });
});
/* var slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    speed: 1200,
    nav: false
});

document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
}); */