// Hello.
//
// This is The Scripts used for ___________ Theme
//
//

function main() {

(function () {
   'use strict';

    
 	// Smooth Scrolling
    //==========================================
    $(function() {
      $('a.scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top -50
            }, 1000);
            return false;
          }
        }
      });
    });

    /*====================================
    Portfolio Carousel 
    ======================================*/
  	$(document).ready(function() {
  	  var owl = $("#team");
  	  owl.owlCarousel({
  	     
  	      itemsCustom : [
  	        [0, 1],
  	        [450, 1],
  	        [660, 2],
  	        [700, 2],
  	        [1200, 3],
  	        [1600, 3]
  	      ],
  	      navigation : false,
  	      pagination: true,
  	  });
  	 
  	});

    /*====================================
    Portfolio Isotope Filter
    ======================================*/
    $(window).load(function() {
        var $container = $('#itemsWork , #itemsWorkTwo, #itemsWorkThree');
        $container.isotope({
            filter: '* , all',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });

    /*====================================
    Nivo Lightbox 
    ======================================*/
    // Agency Portfolio Popup
    $('#itemsWork a , #itemsWorkTwo a , #itemsWorkThree a , #popup a').nivoLightbox({
            effect: 'slideDown',  
            keyboardNav: true,                            
        });

    $(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
});

 


}());


}
main();