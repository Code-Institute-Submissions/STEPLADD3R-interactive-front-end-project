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
jQuery(document).ready(function($) {
    $('.paris-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
});

jQuery(document).ready(function($) {
    $('#place-types select').on('change', function() {
        console.log($(this).val());
    });
});

// Tippy JS
let elements = document.querySelectorAll('[title]');
tippy(elements);