$(document).foundation();

// UGA Branding Content Swap
// -------------------------
var ugaBranding = document.getElementById("ugaText");

// Default Check
function ugaResizeCheck() {
   if (Foundation.MediaQuery.current === 'small') {
      ugaBranding.innerHTML = "UGA";
   } else {
      ugaBranding.innerHTML = "University of Georgia";
   }
}

ugaResizeCheck();

// Check on Resize
window.onresize = function() {
   if (Foundation.MediaQuery.current === 'small') {
      ugaBranding.innerHTML = "UGA";
   } else {
      ugaBranding.innerHTML = "University of Georgia";
   }
};


// People Dropdown Size Calculation
// --------------------------------
$(window).resize(function(){
   // Closes the peopleDropdown on window resize
   $('#peopleDropdown').foundation('close');
   // Recalculates the width as the container changes
   var width = $('#peopleDropdown').css('width');
   $('.is-drilldown').css('width', width);
});


// Drilldown Height Fix -- Not sure why this fix is needed, but it is.
$('.is-drilldown').css('height', 'auto');
