// Header select
$('.header-select-btn').click(function () {
    $('.header-select-value').toggleClass('active');
});
$('.header-select-value span').click(function () {
    var text = $(this).text(); // Tıklanan span'in metnini al
    $('.header-select-btn span').text(text); // Bu metni .header-select-btn içindeki span'e yerleştir
    $('.header-select-value').removeClass('active'); // header-select-value öğesinden 'active' sınıfını kaldır
});



// Economic slider
$('.economic-content').slick({
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 4,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
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
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});