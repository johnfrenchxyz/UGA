$(document).foundation();

// UGA Branding Content Swap
// -------------------------
var ugaBranding = document.getElementById("ugaText");

// Default Check
function ugaResizeCheck() {
   if (Foundation.MediaQuery.current === 'small') {
      ugaBranding.innerHTML = "UGA";
   } else if (Foundation.MediaQuery.current === 'medium') {
      ugaBranding.innerHTML = "University of Georgia";
   } else { ugaBranding.innerHTML = "University of Georgia"; }
}

ugaResizeCheck();
$(window).on('resize', function(){
   ugaResizeCheck();
});

// Check on Resize
window.onresize = function() {
   if (Foundation.MediaQuery.current === 'small') {
      ugaBranding.innerHTML = "UGA";
   } else {
      ugaBranding.innerHTML = "University of Georgia";
   }
};


// Drilldown Height Fix -- Not sure why this fix is needed, but it is.
$('.is-drilldown').css('height', 'auto');
window.onresize = function() {
   $('.is-drilldown').css('height', 'auto');
};

// People Menu
// --------------------------------
// $(document).ready(function() {
//
//    var peopleMenuSmall = function(){
//       if( window.innerWidth < 400 ) {
//          $('.people-menu-small').css('overflow', 'scroll');
//
//       }
//    };
//
//    $(window).on('resize', function(){
//       peopleMenuSmall();
//    });
//
//    peopleMenuSmall();
// });
