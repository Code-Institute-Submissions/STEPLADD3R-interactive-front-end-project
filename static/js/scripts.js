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
    });
});


$('.image-popup img').click(function (e) {
    e.stopPropagation();
    e.preventDefault();
    setTimeout(function(){
      $('.image-popup').click();
    }, 1000);       
});