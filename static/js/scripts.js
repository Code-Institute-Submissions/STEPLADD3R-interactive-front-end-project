(function( $ ) {
    'use strict';
    
    // Tippy JS
    let elements = document.querySelectorAll('[title]');
    tippy(elements);
    
    // MFP
    $('.open-popup-link').magnificPopup({
        type: 'inline',
        midClick: true,
    });

    // Handle searching location if empty
    $('#place-search-button').on('click', function() {
        if( $('#place-search-box').val() == '' ) {
            alert('Please ensure that you have entered a destination!');
        }
    });

    // Reset select / destination on button click
    $('#reset-button').on('click', function() {
        $('#place-search-box').val('');
        $('#place-types-select').val('default');
        $('#place-types-select').selectpicker('refresh');
    });
    
})( jQuery );