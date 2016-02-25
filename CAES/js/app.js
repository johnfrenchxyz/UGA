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



// People Dropdown
// -------------------------
$("#revealPeopleDropdown").click(function(){
  $("#peopleDropdown").toggle();
});
