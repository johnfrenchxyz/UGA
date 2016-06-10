$(document).foundation();

// UGA Branding Content Swap
// -------------------------
function ugaResizeCheck() {
   if ( $(window).width() < 650 ) {
      $('#ugaText').html('UGA');
   } else { $('#ugaText').html('University of Georgia'); }
}
// Initial Run:
ugaResizeCheck();
// Run on Resize:
$(window).resize(function(){
   ugaResizeCheck();
});

// Drilldown Height Fix -- Not sure why this fix is needed, but it is.
//--------------------------------------------------------------------
// $('.is-drilldown').css('height', 'auto');
// $(window).resize(function(){
//    $('.is-drilldown').css('height', 'auto');
// });

var drilldownToggle = function() {
   $('.is-drilldown').addClass('drilldown-toggle-height');
   $('.menu-icon').click(function(){
      $('.is-drilldown').toggleClass('drilldown-toggle-height');
   });
};

// Initial Run
drilldownToggle();
// Run on Resize:
$(window).resize(function(){
   drilldownToggle();
});

// Drilldown/Small Screen Landing Page Links
//------------------------------------------
/*
   Problem: On large, you can click top level menu items to be taken to a
   landing page for that category, but on small, those top level links simply
   activate the drilldown menu.
   Solution: Create JavaScript that adds additional landing page links to the
   drilldown menu.
*/

// function landingPageLinks() {
//    if ( $(window).width() < 640 ) {
//       // Academics
//       $('#academics ul li:eq(0)').after('<li class="is-submenu-item is-drilldown-submenu-item landing-page-link" role="menuitem"><a href="#">Academics Home</a></li>');
//       // Departments
//       $('#departments ul li:eq(0)').after('<li class="is-submenu-item is-drilldown-submenu-item landing-page-link" role="menuitem"><a href="#">Departments Home</a></li>');
//       // Research
//       $('#research ul li:eq(0)').after('<li class="is-submenu-item is-drilldown-submenu-item landing-page-link" role="menuitem"><a href="#">Research Home</a></li>');
//       // Extension & Outreach
//       $('#outreach ul li:eq(0)').after('<li class="is-submenu-item is-drilldown-submenu-item landing-page-link" role="menuitem"><a href="#">Extension & Outreach Home</a></li>');
//       // Global
//       $('#global ul li:eq(0)').after('<li class="is-submenu-item is-drilldown-submenu-item landing-page-link" role="menuitem"><a href="#">Global Home</a></li>');
//       // About
//       $('#about ul li:eq(0)').after('<li class="is-submenu-item is-drilldown-submenu-item landing-page-link" role="menuitem"><a href="#">About Home</a></li>');
//    } else {
//       $('.landing-page-link').each(function(){
//          $(this).remove();
//       });
//    }
// }

// // Initial Run:
// landingPageLinks();
// // Run on Resize:
// $(window).resize(function(){
//    // Removes any current landing page links on resize -- this prevents there from being multiple links
//    $('.landing-page-link').each(function(){
//       $(this).remove();
//    });
//    landingPageLinks();
// });



// Plain List Responsive Column Control
//-------------------------------------
function responsivePlainList() {
   $('.plain-list-item').each(function(){
      if ( $(this).parent().width() < 700 ) {
         $(this).find('img').css('float', 'none');
         $(this).find('img').css('min-width', '100%');
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
$(window).resize(function(){
   responsivePlainList();
});
