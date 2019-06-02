// Vanilla
// Tippy JS
let elements = document.querySelectorAll('[title]');
tippy(elements);

// jQuery
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

jQuery(document).ready(function($) {
    $('.dc-select-menu').attr('disabled', 'disabled');
    $('.dc-select-menu').css('display', 'none');
})