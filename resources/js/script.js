$(document).ready(function () {

	/* Google maps */
	var map = new GMaps({
		div: '.map',
		lat: -23.1133706,
		lng: -46.5675734,
		zoom: 18,
		draggable: false,
		scrollwheel: false
	});


	/* Google maps marker */
	map.addMarker({
		lat: -23.1133706,
		lng: -46.5675734,
	  	title: 'Atibaia',
	  	infoWindow: {
	  	  content: '<p>Arval Máquinas Gráficas</p>'
	  	}
	});

	/* Nav buttons scrolling */
	$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1500);
	        return false;
	      }
	    }
	  });
	});

	//about us section - load more button click
	$('.js--load-more').click(function(event) {
		var f = !$(this).data("toggleFlag");
			if (f) {
		    	$('.js--load-more-text').css('display', 'block');
			} else {
		    	$('.js--load-more-text').css('display', 'none');
			}
		  
		  $(this).data("toggleFlag", f);
	});


	// Adast Dominant 547
	$('.fb-adast-dominant-547').magnificPopup({
	    items: [
	      {
	        src: 'resources/img/machines/adast-dominant-547/1.jpg'
	      },
	      {
	        src: 'resources/img/machines/adast-dominant-547/2.jpg'
	      },
	      {
	        src: 'resources/img/machines/adast-dominant-547/3.jpg'
	      },
	      {
	        src: 'resources/img/machines/adast-dominant-547/4.jpg'
	      },
	      {
	        src: 'resources/img/machines/adast-dominant-547/5.jpg'
	      },
	      {
	        src: 'resources/img/machines/adast-dominant-547/6.jpg'
	      },
	      {
	        src: 'resources/img/machines/adast-dominant-547/7.jpg'
	      },
	      {
	        src: 'resources/img/machines/adast-dominant-547/8.jpg'
	      },
	      {
	        src: 'resources/img/machines/adast-dominant-547/9.jpg'
	      },
	      {
	        src: 'resources/img/machines/adast-dominant-547/10.jpg'
	      }
	    ],
	    gallery: {
	      enabled: true
	    },
	    type: 'image' // this is default type
	});

	// Heidelberg GTO52Z
	$('.fb-gto52z').magnificPopup({
	    items: [
	     	{
	     		src : 'resources/img/machines/gto52z/1.jpg',
	     	}, {
	     		src : 'resources/img/machines/gto52z/2.jpg',
	     	}, {
	     		src : 'resources/img/machines/gto52z/3.jpg'
	     	}, {
	     		src : 'resources/img/machines/gto52z/4.jpg'
	     	}, {
	     		src : 'resources/img/machines/gto52z/5.jpg'
	     	}, {
	     		src : 'resources/img/machines/gto52z/6.jpg'
	     	}, {
	     		src : 'resources/img/machines/gto52z/7.jpg'
	     	}, {
	     		src : 'resources/img/machines/gto52z/8.jpg'
	     	}, {
	     		src : 'resources/img/machines/gto52z/9.jpg'
	     	}, {
	     		src : 'resources/img/machines/gto52z/10.jpg'
	     	}
	     ],
	    gallery: {
	      enabled: true
	    },
	    type: 'image' // this is default type
	});

	// Adast Dominant 725
	$('.fb-adast-725').magnificPopup({
	    items: [
	     	{
	     		src : 'resources/img/machines/adast-725/1.jpg',
	     	}, {
	     		src : 'resources/img/machines/adast-725/2.jpg',
	     	}, {
	     		src : 'resources/img/machines/adast-725/3.jpg'
	     	}, {
	     		src : 'resources/img/machines/adast-725/4.jpg'
	     	}, {
	     		src : 'resources/img/machines/adast-725/5.jpg'
	     	}, {
	     		src : 'resources/img/machines/adast-725/6.jpg'
	     	}, {
	     		src : 'resources/img/machines/adast-725/7.jpg'
	     	}, {
	     		src : 'resources/img/machines/adast-725/8.jpg'
	     	}, {
	     		src : 'resources/img/machines/adast-725/9.jpg'
	     	}, {
	     		src : 'resources/img/machines/adast-725/10.jpg'
	     	}
	     ],
	    gallery: {
	      enabled: true
	    },
	    type: 'image' // this is default type
	});

	// Adast Dominant 526
	$('.fb-adast-526').magnificPopup({
	    items: [
	     	{
	     		src : 'resources/img/machines/adast-526/1.jpg',
	     	}, {
	     		src : 'resources/img/machines/adast-526/2.jpg',
	     	}, {
	     		src : 'resources/img/machines/adast-526/3.jpg'
	     	}, {
	     		src : 'resources/img/machines/adast-526/4.jpg'
	     	}, {
	     		src : 'resources/img/machines/adast-526/5.jpg'
	     	}, {
	     		src : 'resources/img/machines/adast-526/6.jpg'
	     	}, {
	     		src : 'resources/img/machines/adast-526/7.jpg'
	     	}, {
	     		src : 'resources/img/machines/adast-526/8.jpg'
	     	}, {
	     		src : 'resources/img/machines/adast-526/9.jpg'
	     	}, {
	     		src : 'resources/img/machines/adast-526/10.jpg'
	     	}
	     ],
	    gallery: {
	      enabled: true
	    },
	    type: 'image' // this is default type
	});

	// Adast Dominant 525
	$('.fb-adast-525').magnificPopup({
	    items: [
		    {
		    	src : 'resources/img/machines/adast-525/1.jpg',
		    }, {
		    	src : 'resources/img/machines/adast-525/2.jpg',
		    }, {
		    	src : 'resources/img/machines/adast-525/3.jpg'
		    }, {
		    	src : 'resources/img/machines/adast-525/4.jpg'
		    }, {
		    	src : 'resources/img/machines/adast-525/5.jpg'
		    }, {
		    	src : 'resources/img/machines/adast-525/6.jpg'
		    }, {
		    	src : 'resources/img/machines/adast-525/7.jpg'
		    }, {
		    	src : 'resources/img/machines/adast-525/8.jpg'
		    }, {
		    	src : 'resources/img/machines/adast-525/9.jpg'
		    }, {
		    	src : 'resources/img/machines/adast-525/10.jpg'
		    }
	     ],
	    gallery: {
	      enabled: true
	    },
	    type: 'image' // this is default type
	});

	// Roland 202
	$('.fb-roland-202').magnificPopup({
	    items: [
			{
				src : 'resources/img/machines/roland-202/1.jpg',
			}, {
				src : 'resources/img/machines/roland-202/2.jpg',
			}, {
				src : 'resources/img/machines/roland-202/3.jpg'
			}, {
				src : 'resources/img/machines/roland-202/4.jpg'
			}, {
				src : 'resources/img/machines/roland-202/5.jpg'
			}, {
				src : 'resources/img/machines/roland-202/6.jpg'
			}, {
				src : 'resources/img/machines/roland-202/7.jpg'
			}, {
				src : 'resources/img/machines/roland-202/8.jpg'
			}, {
				src : 'resources/img/machines/roland-202/9.jpg'
			}, {
				src : 'resources/img/machines/roland-202/10.jpg'
			}
	     ],
	    gallery: {
	      enabled: true
	    },
	    type: 'image' // this is default type
	});

	// Roland Practica
	$('.fb-roland-practica').magnificPopup({
	    items: [
		    {
		    	src : 'resources/img/machines/roland-practica/1.jpg',
		    }, {
		    	src : 'resources/img/machines/roland-practica/2.jpg',
		    }, {
		    	src : 'resources/img/machines/roland-practica/3.jpg'
		    }, {
		    	src : 'resources/img/machines/roland-practica/4.jpg'
		    }, {
		    	src : 'resources/img/machines/roland-practica/5.jpg'
		    }, {
		    	src : 'resources/img/machines/roland-practica/6.jpg'
		    }, {
		    	src : 'resources/img/machines/roland-practica/7.jpg'
		    }
	     ],
	    gallery: {
	      enabled: true
	    },
	    type: 'image' // this is default type
	});

	// Heidelberg GTO52
	$('.fb-gto52').magnificPopup({
	    items: [
		    {
		    	src : 'resources/img/machines/gto52/1.jpg',
		    }, {
		    	src : 'resources/img/machines/gto52/2.jpg',
		    }, {
		    	src : 'resources/img/machines/gto52/3.jpg'
		    }, {
		    	src : 'resources/img/machines/gto52/4.jpg'
		    }, {
		    	src : 'resources/img/machines/gto52/5.jpg'
		    }, {
		    	src : 'resources/img/machines/gto52/6.jpg'
		    }
	     ],
	    gallery: {
	      enabled: true
	    },
	    type: 'image' // this is default type
	});

	// Adast Dominant mod 516A
	$('.fb-adast-516').magnificPopup({
	    items: [
		    {
		    	src : 'resources/img/machines/adast-516/1.jpg',
		    }, {
		    	src : 'resources/img/machines/adast-516/2.jpg',
		    }, {
		    	src : 'resources/img/machines/adast-516/3.jpg'
		    }, {
		    	src : 'resources/img/machines/adast-516/4.jpg'
		    }, {
		    	src : 'resources/img/machines/adast-516/5.jpg'
		    }, {
		    	src : 'resources/img/machines/adast-516/6.jpg'
		    }, {
		    	src : 'resources/img/machines/adast-516/7.jpg'
		    }, {
		    	src : 'resources/img/machines/adast-516/8.jpg'
		    }, {
		    	src : 'resources/img/machines/adast-516/9.jpg'
		    }, {
		    	src : 'resources/img/machines/adast-516/10.jpg'
		    }
	     ],
	    gallery: {
	      enabled: true
	    },
	    type: 'image' // this is default type
	});

	// Adast Dominant 715
	$('.fb-adast-715').magnificPopup({
	    items: [
		    {
		    	src : 'resources/img/machines/adast-715/1.jpg',
		    }, {
		    	src : 'resources/img/machines/adast-715/2.jpg',
		    }, {
		    	src : 'resources/img/machines/adast-715/3.jpg'
		    }, {
		    	src : 'resources/img/machines/adast-715/4.jpg'
		    }, {
		    	src : 'resources/img/machines/adast-715/5.jpg'
		    }, {
		    	src : 'resources/img/machines/adast-715/6.jpg'
		    }, {
		    	src : 'resources/img/machines/adast-715/7.jpg'
		    }
	     ],
	    gallery: {
	      enabled: true
	    },
	    type: 'image' // this is default type
	});

});