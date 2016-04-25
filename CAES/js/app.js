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
$('.is-drilldown').css('height', 'auto');
$(window).resize(function(){
   $('.is-drilldown').css('height', 'auto');
});

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


// function peopleMenu() {
//    if( $(window).width() < 720 ){
//       $('.people-menu').css('display', 'none');
//    } else { $('.people-menu').css('display', 'block'); }
// }
//
// peopleMenu();
// $(window).resize(function(){
//    peopleMenu();
// });
