(function() {
    "use strict";
    $('#loader').delay(700).fadeOut();
    $('#mask').delay(1200).fadeOut("slow");

    // Global DOM elements
    // Global DOM elements
	window.madness 	   = {ele : {}};
	madness.ele['win']    = $(window);
	madness.ele['doc']    = $(document);
	
	/* Madness Menu */
    $('.navbar-toggler').on('click', function() {
		$(this).closest('.navbar-minimal').toggleClass('open');
	})
	
	$('a[href*="#"]:not([href="#"])').on('click', function() {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
			  $('html, body').animate({
				scrollTop: target.offset().top
			  }, 1000);
			  return false;
			}
		});
		
	if (document.getElementsByClassName("load-more").length){ 
		var eventFired = false,
		objectPositionTop = $('.load-more').offset().top;
	}
	madness.ele['win'].on('scroll', function() {
		// Counter On Scroll
            var currentPosition = madness.ele['doc'].scrollTop();
            if (currentPosition > objectPositionTop && eventFired === false) {
                eventFired = true;
                $('.counter').each(function() {
                    $(this).prop('count', 100).animate({
                        count: $(this).text()
                    }, {
                        duration: 4000,
                        easing: 'swing',
                        step: function(now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
                });
            }
			
        // Back to Top On Scroll
        if ($(this).scrollTop() > 100) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
	
	// Slider Home
    $('.fullBg-img').each(function() {
        var $src = $(this).attr('src');
        $(this).parent().css({
            'background': 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), rgba(0, 0, 0, 0.4) url(' + $src + ')',
            'height': '100%',
			'background-position': 'center',
			'background-repeat': 'no-repeat',
			'background-size': 'cover',	
        });
        $(this).remove();
    });
    

	// Animation Load
    $('.animated').appear(function() {
        var element = $(this);
        var animation = element.data('animation');
        var animationDelay = element.data('delay');
        if (animationDelay) {
            setTimeout(function() {
                element.addClass(animation + " visible");
                element.removeClass('hiding');
            }, animationDelay);
        } else {
            element.addClass(animation + " visible");
            element.removeClass('hiding');
        }

    }, {
        accY: -150
    });
	
	// Portfolio Eqal Height
	if (madness.ele['win'].width() >= 768) {
	   var equalHeight = 0;
			$('.eq-height').each(function(){  
					if($(this).height() > equalHeight){  
					equalHeight = $(this).height();  
			}
		});    
		$('.eq-height').height(equalHeight);
	}
	
	// Load More Item
	$(".load-item").slice(0, 8).show();
    $(".load-more").on('click', function (e) {
        e.preventDefault();
        $(".load-item:hidden").slice(0, 4).slideDown();
        if ($(".load-item:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
    });
	// Contact Form
   $('.contact-form').on('submit', function(e) {
        e.preventDefault();
        $.post('mail/send.php', $(this).serialize()).done(function(data) {
            $('.contact-form').fadeOut('slow', function() {
                $('.contact-form').fadeIn('slow').html(data);
            });
        }).fail(function() {
            alert('SOMETHING WENT WRONG! PLEASE TRY AGAIN.');
        });
    });

})();