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


// Main Nav Class Toggle
// -------------------------
function navToggle() {
   if (window.innerWidth <= 640) {
      document.getElementById('ul').classList.remove('horizontal');
      document.getElementById('ul').classList.add('vertical');
   } else {
      document.getElementById('ul').classList.remove('vertical');
      document.getElementById('ul').classList.add('horizontal');
   }
}

navToggle();

$(window).on('changed.zf.mediaquery', function(event, newSize, oldSize){
   navToggle();
});
