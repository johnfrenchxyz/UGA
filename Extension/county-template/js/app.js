$(document).foundation();

// Extension Menu Toggle Function
var extensionMenuToggle = function() {
    var $icon = $('.search-trigger i');
    if ( $icon.text() === 'search' ) {
        $icon.text('close');
    } else {
        $icon.text('search');
    }
    $('.sub-menu').slideToggle(200);
}

// Search Toggle
$('.search-trigger a').on('click', function() {
    extensionMenuToggle();
    // Focus on Form
    $('#searchField').focus();
});

// Extension Menu Toggle (Not active search)
$('.extension-logo').on('click', function() {
    extensionMenuToggle();
});

// Clone Nav
$('.side-nav').clone().appendTo('#offCanvas');

// Main Nav Toggle (off canvas)
$('.hamburger').on('click', function() {
    var $icon = $('.hamburger i');
    if ( $icon.text() === 'menu' ) {
        $icon.text('close');
    } else {
        $icon.text('menu');
    }
});

// Close on Window Resize
$(window).on('resize', function() {
    $('#offCanvas').foundation('close');
    var $icon = $('.hamburger i');
    $icon.text('menu');
});
