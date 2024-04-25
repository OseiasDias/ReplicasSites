

$(document).ready(function () {
    //HERO SLider

    $('#slider-troca').owlCarousel({

        loop: true,
        margin: 0,
        nav: false,
        items: 1,
        smartSpeed: 1000,
        dots: true,
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



$('#baxk').owlCarousel({
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
            items: 2,
            nav: false,
            margin: 5,
        },
        768: {
            items: 4,
            left: true,
        },
        1140: {
            items: 6,
            left: true,
         
        }
    }
})