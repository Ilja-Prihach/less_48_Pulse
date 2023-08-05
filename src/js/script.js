$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1300,
        variableWidth: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/chevron-left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/chevron-right.png"></button>',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
});