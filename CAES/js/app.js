$(document).foundation();

// Search
//-------
$('#searchTrigger').on('click', function() {
    var $icon = $('#searchTrigger i');
    $icon.toggleClass('is-active')
    if ( $icon.hasClass('is-active') ) {
        $icon.text('close');
    } else {
        $icon.text('search');
    }
    // Show Form
    $('.search-form').slideToggle('fast');
    // Focus on Form
    $('#searchField').focus();
});

// Drilldown Height Fix for Mobile Menu
//--------------------------------------------------------------------
var navHeight = function() {
    if ( $('#mainNav').css('display') === 'none' ) {
        $('.is-drilldown').css('display', 'none');
    } else {
        $('.is-drilldown').css('display', 'block');
    }

}

$('.is-drilldown').hide();

$(window).on('resize', function(){
    $('.is-drilldown').hide();
});

$('.menu-icon').on('click', function(){
    navHeight();
});




// Plain List Responsive Column Control
//-------------------------------------
function responsivePlainList() {
    $('.plain-list-item').each(function() {
        if ($(this).parent().width() < 700) {
            $(this).find('img').css('float', 'none');
            $(this).find('img').css('max-width', '100%');
            $(this).find('img').css('padding-right', '0');
        } else {
            $(this).find('img').css('float', 'left');
            $(this).find('img').css('max-width', '200px');
            $(this).find('img').css('min-width', '0px');
            $(this).find('img').css('padding-right', '1em');
        }
    });
}

// Initial Run:
responsivePlainList();
// Run on Resize:
$(window).resize(function() {
    responsivePlainList();
});


// Custom Accordion
//-----------------
$('.news-accordion-title').click(function() {
    $(this).next('.news-accordion-body').slideToggle("fast");
});


// Filter Accordion (for News Main page)
//--------------------------------------
// Hide .subfilters by default for JS fallback
$('.subfilters').hide();
$('.filter-control').click(function() {
    $(this).next('.subfilters').slideToggle("fast");
});


// Event Entry for CAES Calendar
//------------------------------

// For Adding Additional Dates:
$(function() {
    $(".datepicker").datepicker();
});

var dateBlock = $('.date-block').html();

$(document).ready(function() {
    $('#addDate').click(function() {
        $('.date-block-container').append('<div class="date-block">' + dateBlock + '</div>');
        $(".datepicker").on('focus', function() {
            var $this = $(this);
            if (!$this.data('datepicker')) {
                $this.removeClass("hasDatepicker");
                $this.datepicker();
                $this.datepicker("show");
            }
        });
        // Show the Remove Date Button
        $('.remove-date').css('display', 'block');
        // Remove Button Action
        $('.remove-date-button').each(function() {
            $(this).click(function() {
                $(this).closest('.date-block').remove();
            });
        });
    });

    $('body').on('focus', ".datepicker", function() {
        $(this).datepicker();
    });
});

// For Adding Additional Locations
var locationBlock = $('.location-block').html();
$(document).ready(function() {
    $('#addLocation').click(function() {
        $('.location-container').append('<div class="location-block">' + locationBlock + '</div>');
        // Show the Remove Location Button
        $('.remove-location').css('display', 'block');
        // Remove Button Action
        $('.remove-location-button').each(function() {
            $(this).click(function() {
                $(this).closest('.location-block').remove();
            });
        });
    });
    $(document).on("change", ".building-id-checkbox", function() {
        if (this.value) {
            $(this).siblings(".manual-location").hide();
            $(this).siblings(".room-no").show();
        } else {
            $(this).siblings(".manual-location").show();
            $(this).siblings(".room-no").hide();
        }
    });
    // For Online Event
    $(document).on("change", ".is-online-event", function() {
        if (this.value == "Yes") {
            $(this).parent().siblings(".online-event").show();
			$(this).parent().siblings(".physical-location").hide();
        } else {
            $(this).parent().siblings(".online-event").hide();
			$(this).parent().siblings(".physical-location").show();
        }
    });
});

// Filter Accordion for CAES News Page
//------------------------------------
// $('.subfilter-container').hide();
$('.filter-toggle').on('click', function(e){
    // $(this).next('.subfilter-container').slideToggle("fast");
    e.preventDefault();
    if ( $(this).html() === '<i class="material-icons">keyboard_arrow_down</i>' ) {
        $(this).html('<i class="material-icons">keyboard_arrow_up</i>');
        $(this).addClass('arrow-up');
        $(this).nextAll('.subfilter-container').removeClass('filter-hide');
    } else {
        $(this).html('<i class="material-icons">keyboard_arrow_down</i>');
        $(this).nextAll('.subfilter-container').addClass('filter-hide');
        $(this).removeClass('arrow-up');
    }
    if ( $(this).nextAll('.subfilter-container').hasClass('filter-hide') === true ) {
        $(this).html('<i class="material-icons">keyboard_arrow_down</i>');
    } else {
        $(this).html('<i class="material-icons">keyboard_arrow_up</i>');
    }
});

$('.arrow-up').text('keyboard_arrow_up');


// Accordion
$('.top-filter').click(function(){
    if ( $(this).is(':checked') ) {
        // $('.entity').prop('checked', true);
        $(this).nextAll('.subfilter-container').find('input').prop('checked', true);
    } else {
        // $('.entity').prop('checked', false);
        $(this).nextAll('.subfilter-container').find('input').prop('checked', false);
    }
});

// Apply Filter
$('input').on('change', function(){
    $('.apply-filter').removeClass('disabled');
});
