/**
  * Custom JavaSctipt For County Extension
  * @author John French
  * @author Ben Whetstone
  * @author Robert Thrift
  * @author Other Contributors (specified below)
  * Property of the University of Georgia
*/


// Off Canvas Navigation Elements:
// - - - - - - - - - - - - - - - - - - - - - - - - -

   // Animated Hamburger Icon:
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


   $('.right-off-canvas-toggle, .js-off-canvas-exit').click(function(){
      $('.off-canvas-content').css('overflow', 'hidden');
   });


   // Disble Scrolling When Off Canvas is Active:
   // $(".right-off-canvas-toggle, .js-off-canvas-exit").click(function(){
   //    // $("main").toggleClass("hide-overflow");
   //    // $("#offCanvas").toggleClass("overflow-scroll");
   //    // $(body).css('height', '100%');
   //    $(body).css('overflow', 'hidden');
   // });

   // Close the Off Canvas when the window is resized:
   // $(window).resize(function() {
   //    $(".off-canvas-wrapper-inner").removeClass("is-open-right");
   //    $(".off-canvas-wrapper-inner").removeClass("is-off-canvas-open");
   //    $(".c-hamburger").removeClass("is-active");
   //    $("body").removeClass("hide-overflow");
   //    $(".off-canvas").removeClass("is-open");
   // });

   // Calculate the height of the off-canvas nav:
   // This allows the off canvas to scroll to the end
   // of the menu items even with different ammounts of body content.

   // $(document).ready(function(){
   //
   //    function getNavHeight () {
   //       var windowHeight = $(window).height();
   //       // Allows the off-canvas to scroll, reguardless of window or content height.
   //       $("#offCanvas").height(
   //          windowHeight - $('.extension-top-bar').outerHeight() - $('header').outerHeight() + ( $("footer").outerHeight() )
   //       );
   //    }
   //    getNavHeight();
   //
   //    // Re-run on resize
   //    $(window).resize(function(){
   //       getNavHeight();
   //    });
   //
   // });


   // Off Canvas Navigation Position
   $(document).ready(function(){
      $( ".side-nav" ).clone().appendTo( ".off-canvas-menu" );
   });

   // Dynamically moves the nav in the DOM, depending on the screen size:
   // $(document).ready(function(){
   //
   //    // Based on Screen Size - Puts Nav on Left for Desktop (Large) and Right Off-Canvas for Medium Down:
   //    function moveNav () {
   //
   //       if ( Foundation.MediaQuery.atLeast('large') ) {
   //
   //          if ( ! $.contains( $("#defaultNav"), $("#nav-outer-container") ) ) {
   //             $("#defaultNav").append( $("#nav-outer-container") );
   //          }
   //
   //       } else {
   //          if ( ! $.contains( $("#offCanvas"), $("#nav-outer-container") ) ) {
   //             $("#offCanvas").append( $("#nav-outer-container") );
   //          }
   //       }
   //    }
   //
   //    // Initial Nav Placement:
   //    moveNav();
   //    // Move Nav If Necessary:
   //    $(window).resize(function(){
   //       moveNav();
   //    });
   //
   // });

   // Main Nav Tab Fix
   // $(document).ready(function(){
   //
   //    var tabFix = function() {
   //       // On Large, show nav-inner-container
   //       if ( Foundation.MediaQuery.atLeast('large') ) {
   //          $('#nav-inner-container').css('display', 'block');
   //       } else {
   //          // On Small, hide nav-inner-container until hamburger icon is pressed
   //          $('#nav-inner-container').css('display', 'none');
   //          $('.c-hamburger').on('click', function(){
   //             $('#nav-inner-container').css('display', 'block');
   //          });
   //       }
   //    };
   //
   //    // Initial Run
   //    tabFix();
   //    // Run on Resize
   //    $(window).on('resize', function(){
   //       tabFix();
   //    });
   //
   // });





// Mobile Search (Expanding Input)
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
