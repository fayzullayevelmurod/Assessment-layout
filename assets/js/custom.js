$(document).ready(function() { 
    // Header select
    $('.header-select-btn').click(function () {
        let headerSelectValue = $(this).siblings('.header-select-value');
        headerSelectValue.addClass('active');
        $(this).addClass('active');
    });
    $('.header-select-bg').click(function () {
        let headerSelectValue = $(this).siblings('.header-select-value');
        headerSelectValue.removeClass('active');
        $('.header-select-btn').removeClass('active');
    });


    
    // Header menu
    $('.header-bars').click(function () {
        $('.header-mob').toggleClass('active');
    })
    $('.menu-close').click(function () {
        $('.header-mob').removeClass('active');
    })
    $('.header-mob-bg').click(function () {
        $('.header-mob').removeClass('active');
    })
});




// Economic slider
$('.economic-content').slick({
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    responsive: [
        {
            breakpoint: 1250,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 300,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});


// Company logo slider
$('.company-logo-links').slick({
    slidesToShow: 8.8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 800,
    responsive: [
        {
            breakpoint: 1700,
            settings: {
                centerMode: true,
                slidesToShow: 6
            }
        },
        {
            breakpoint: 1100,
            settings: {
                centerMode: true,
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 776,
            settings: {
                centerMode: true,
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 576,
            settings: {
                centerMode: true,
                slidesToShow: 2,
            }
        }
    ]
});