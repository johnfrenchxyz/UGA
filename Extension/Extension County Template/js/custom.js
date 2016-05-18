/**
  * Custom JavaSctipt For County Extension
  * @author John French
  * @author Ben Whetstone
  * @author Robert Thrift
  * @author Other Contributors (specified below)
  * Property of the University of Georgia
*/

// Off-Canvas Hamburger Icon
//--------------------------
// Taken from @author callmenick.com and editied by project authors.

// Function for default button toggle
(function() {
   "use strict";
   var toggles = document.querySelectorAll(".c-hamburger");
   for (var i = toggles.length - 1; i >= 0; i--) {
      var toggle = toggles[i];
      toggleHandler(toggle);
   }

   function toggleHandler(toggle) {
      toggle.addEventListener( "click", function(e) {
         e.preventDefault();
         (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
      });
   }
})();

// Toggle the hamburger icon if the user exits by clicking the page
$( ".js-off-canvas-exit" ).click(function() {
   $(".c-hamburger").removeClass("is-active");
});

// Off-Canvas Navigation Position
//-------------------------------
$(document).ready(function(){
   $( ".side-nav" ).clone().appendTo( ".off-canvas-menu" );
});

// Off-Canavs Toggle Visibility (For Tab Accessibility)
//-----------------------------------------------------
$(document).ready(function(){
   // Make the off-canvas invisible by default.
   $('.off-canvas-menu').css('visibility', 'hidden');
   // Make the off-canvas visible on click.
   $('.right-off-canvas-toggle').click(function(){
      $('.off-canvas-menu').css('visibility', 'visible');
   });
   $('.js-off-canvas-exit').click(function(){
      $('.off-canvas-menu').css('visibility', 'hidden');
   });
});

// Off-Canvas Resize Close
//------------------------
$(window).resize(function() {
   $(".off-canvas-wrapper-inner").removeClass("is-open-right");
   $(".off-canvas-wrapper-inner").removeClass("is-off-canvas-open");
   $(".c-hamburger").removeClass("is-active");
   $("body").removeClass("hide-overflow");
   $(".off-canvas").removeClass("is-open");
});

// Mobile Search (Expanding Input)
//--------------------------------
// Taken from @author Codrops and modified by project authors.
$(document).ready(function(){
    var submitIcon = $('.searchbox-icon');
    var inputBox = $('.searchbox-input');
    var searchBox = $('.searchbox');
    var isOpen = false;

    submitIcon.click(function(){
      if (isOpen === false) {
            searchBox.addClass('searchbox-open');
            $(".extension-logo").fadeOut(100);
            inputBox.focus();
            isOpen = true;
      } else {
            searchBox.removeClass('searchbox-open');
            $(".extension-logo").fadeIn(200);
            inputBox.focusout();
            isOpen = false;
      }


    });
     submitIcon.mouseup(function(){
            return false;
      });
    searchBox.mouseup(function(){
           return false;
    });
    $(document).mouseup(function(){
            if(isOpen == true){
                $('.searchbox-icon').css('display','block');
                submitIcon.click();
            }
      });
});
    function buttonUp(){
      var inputVal = $('.searchbox-input').val();
      inputVal = $.trim(inputVal).length;
      if( inputVal !== 0){
            $('.searchbox-icon').css('display','none');
      } else {
            $('.searchbox-input').val('');
            $('.searchbox-icon').css('display','block');
      }
    }


    // Plain List Component
    //---------------------
    $(document).ready(function(){

      // Initial Run
      var responsivePlainList = function(){
         $('.plain-list-component').each(function(){
            if ( $(this).parent().width() < 500 ) {
              $(this).find('img').css('float', 'none');
              $(this).find('img').css('min-width', '100%');
              $(this).find('.personnel-list-item img').css('min-width', '100px');
              $(this).find('.personnel-list-item img').css('float', 'left');
           } else {
              $(this).find('img').css('float', 'left');
              $(this).find('img').css('min-width', '200px');
              $(this).find('.personnel-list-item img').css('min-width', '100px');
           }
         });
      };

      responsivePlainList();

     // Run on resize
     $(window).on('resize', function(){
        responsivePlainList();
     });

   });


    // Personnel List
    //---------------
    $(document).ready(function(){

      // Functions
      var responsivePersonnel = function(){
         if ( $('.personnel-contact-info').parent().width() < 500 ) {
           $('.personnel-contact-info').css('display', 'block');
        } else {
           $('.personnel-contact-info').css('display', 'inline-block');
        }
      };

      // Initial Run
      responsivePersonnel();

     // Run on resize
     $(window).on('resize', function(){
        responsivePersonnel();
     });

   });


   // Office Information Component
   //-----------------------------
   $(document).ready(function(){

      // Functions
      var responsiveOfficeInfo = function(){

         // Display Map
         $('.office-map').css('display', 'block');
         // Responsive
         $('.office-information-component').each(function(){
            if ( $(this).parent().width() < 500 ) {
              $(this).find('.office-info').css('width', '100%');
              $(this).find('.office-map').css('width', '100%');
           } else {
             $(this).find('.office-info').css('width', '50%');
             $(this).find('.office-map').css('width', '50%');
           }
         });

      };

      // Initial Run
      responsiveOfficeInfo();

      // Run on Resize
      $(window).on('resize', function(){
        responsiveOfficeInfo();
     });

     // Disable Scrolling for Google Maps
     $('.office-map').each(function(){
        // Disable Scroll by Default
        $(this).find('iframe').addClass('scrolloff');
        // Enable Scroll on Click
        $(this).on('click', function(){
           $(this).find('iframe').removeClass('scrolloff');
        });
        // Disable scroll when mouse leaves map
        $(this).mouseleave(function(){
           $(this).find('iframe').addClass('scrolloff');
        });
     });

   });
