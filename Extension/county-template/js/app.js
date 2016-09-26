$(document).foundation();

// Search
$('.search-trigger a').on('click', function() {
    var $icon = $('.search-trigger i');
    if ( $icon.text() === 'search' ) {
        $icon.text('close');
    } else {
        $icon.text('search');
    }
    $('.sub-menu').slideToggle(200);
    // Focus on Form
    $('#searchField').focus();
});
