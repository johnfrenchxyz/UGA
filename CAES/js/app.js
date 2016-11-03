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

// Drilldown Height Fix -- Not sure why this fix is needed, but it is.
//--------------------------------------------------------------------
$('.is-drilldown').css('height', 'auto');
$(window).resize(function() {
    $('.is-drilldown').css('height', 'auto');
});

var drilldownToggle = function() {
    $('.is-drilldown').addClass('drilldown-toggle-height');
    $('.menu-icon').click(function() {
        $('.is-drilldown').toggleClass('drilldown-toggle-height');
    });
};

// Initial Run
drilldownToggle();
// Run on Resize:
$(window).resize(function() {
    drilldownToggle();
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
// $('.subfilter-container').hide();
// $('.top-filter').on('change', function(){
//   $('.subfilter-container').slideToggle('fast');
//   if ( $('.plus-minus').text() === '+' ) {
//     $('.plus-minus').text("-");
//   } else {
//     $('.plus-minus').text("+");
//   }
// });
//
// $(function(){
//   $('.selectAll').on('click', function(evt){
//     var group = $(this).attr('data-group'),
//         isChecked = !!($(this).prop('checked'));
//     $('input[value="' + group + '"]').prop('checked', isChecked);
//   })
//
//   $('.entity').on('click', function(evt){
//     var group = $(this).attr('value'),
//         siblings = $('input[value="' + group + '"]'),
//         isChecked = true;
//     siblings.each(function(idx, el){
//       if(!$(el).prop('checked')) {
//         isChecked = false;
//         return;
//       }
//     })
//
//     $('.selectAll[data-group="' + group + '"]').prop('checked', isChecked);
//
//   })
// })
