

$(document).ready(function () {
    //HERO SLider

    $('#slider-projecto').owlCarousel({

        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        smartSpeed: 1000,
        dots: false,
        //navText: ['PREV','NEXT'],
        autoplay: true,
        autoplayTimeOut: 7000,
        autoplayHovePause: false,
        Responsive: {
            0: {
                nav: false,
            },
            768: {
                nav: true,
            },
            1024: {
                nav: true,
            }
        }
    });

    //Projecto Slider

    $('#portefolio').owlCarousel({

        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        margin: 14,
        smartSpeed: 1000,
        dots: true,
        autoplay: true,
        autoplayTimeOut: 7000,
        autoplayHovePause: false,
        responsive: {
            0: {
                items: 1,
                nav: false,
                margin: 0,
            },
            768: {
                items: 2,
                nav: false,
                center: true,
            },
            1140: {
                items: 2,
                center: true,
                nav: false,
            }
        }
    })
});



$('#reviews').owlCarousel({

    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    items: 1,
    smartSpeed: 800,

    autoplay: true,
    autoplayTimeOut: 7000,

})
