// Change Navbar Colour
$(window).scroll(function() {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 5);
});

// MFP
jQuery(document).ready(function($) {
    $('.open-popup-link').magnificPopup({
        type: 'inline',
        midClick: true,
    })
});

// Slick
jQuery(document).ready(function($){
    $('.paris-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
});

// Tippy JS
let elements = document.querySelectorAll('[title]');
tippy(elements);