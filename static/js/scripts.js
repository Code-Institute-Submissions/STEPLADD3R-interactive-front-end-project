(function( $ ) {
    'use strict';
    
    // Tippy JS
    let elements = document.querySelectorAll('[title]');
    tippy(elements);
    
    // Change header colour
    $(window).scroll(function() {
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 5);
    });
    
    // MFP
    $('.open-popup-link').magnificPopup({
        type: 'inline',
        midClick: true,
    });

    // Handle searching location if empty
    $('#place-search-button').on('click', function() {
        if( $('#place-search-box').val() == '' || $('.filter-option-inner-inner').text() == 'Nothing selected' ) {
            alert('Please ensure that you have entered a destination and selected some attraction types!');
        }
    });
    
})( jQuery );