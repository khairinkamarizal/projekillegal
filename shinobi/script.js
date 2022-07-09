var viewModel = {
	data: {
		shoeOptions: [{
			"shoeColor": "Home",
			"RRP": "assets/black-back.png",
			"discountPrice": "RM60",
			"className": "cpc-product-green",
			"rating": "blackBG()",
			"inputID": "rad1",
			"labelClass": "cpc-radio-green",
			"shoeImage": "assets/black-front.png"
		}, {
			"shoeColor": "Away",
			"RRP": "assets/white-back.png",
			"discountPrice": "RM60",
			"className": "cpc-product-yellow",
			"rating": "whiteBG()",
			"inputID": "rad2",
			"labelClass": "cpc-radio-yellow",
			"shoeImage": "assets/white-front.png"
		}],
		currentShoeOption: ko.observable({
				"shoeColor": "Home",
				"RRP": "assets/black-back.png",
				"discountPrice": "RM60",
				"className": "cpc-product-green",
				"rating": "blackBG()",
				"inputID": "rad1",
				"shoeImage": "assets/black-front.png"
			}) // Passing this first line in to set as a default value
	},
	functions: {
		colorOptionClick: function(index) {
			viewModel.data.currentShoeOption(viewModel.data.shoeOptions[index]);
			var image = $('#cpc-img').clone().removeClass();
			$('#cpc-img').remove();
			$('.cpc-img-wrapper').append(image);
			$('#cpc-img').addClass('cpc-product-shoe-img animated fadeInLeft');
			$('#cpc-img').prop("src", viewModel.data.currentShoeOption().shoeImage)

		},
		checkedRadio: function() {
			return true;
		},
		shareShoe: function() {
			var link = window.location.href,
				text = "Get Shinobi V2 on here now before it Sold Out!",
				tweet = "https://twitter.com/intent/tweet?text=" + text + "&url=" + encodeURI(link);
			window.open(tweet, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600")
		}
	}
};
ko.applyBindings(viewModel);

$(document).ready(function() {
	$("#rad1").prop("checked", true)
});

$.preloadImages = function() {
	for (var i = 0; i < arguments.length; i++) {
		$("<img />").attr("src", arguments[i]);
	}
}

$.preloadImages("assets/black-front.png", "assets/black-front.png", "assets/black-front.png", "assets/black-front.png");

function whiteBG() {
   document.getElementById("changeBG").style.backgroundImage = "url(assets/white.png)";
}
function blackBG() {
   document.getElementById("changeBG").style.backgroundImage = "url(assets/black.png)";
}

$(document).ready(function() {

	$('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
		
	});

	$('.image-popup-fit-width').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		image: {
			verticalFit: false
		}
	});

	$('.image-popup-no-margins').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

});


$('.slider').each(function() {
  var $this = $(this);
  var $group = $this.find('.slide_group');
  var $slides = $this.find('.slide');
  var bulletArray = [];
  var currentIndex = 0;
  var timeout;
  
  function move(newIndex) {
    var animateLeft, slideLeft;
    
    advance();
    
    if ($group.is(':animated') || currentIndex === newIndex) {
      return;
    }
    
    bulletArray[currentIndex].removeClass('active');
    bulletArray[newIndex].addClass('active');
    
    if (newIndex > currentIndex) {
      slideLeft = '100%';
      animateLeft = '-100%';
    } else {
      slideLeft = '-100%';
      animateLeft = '100%';
    }
    
    $slides.eq(newIndex).css({
      display: 'block',
      left: slideLeft
    });
    $group.animate({
      left: animateLeft
    }, function() {
      $slides.eq(currentIndex).css({
        display: 'none'
      });
      $slides.eq(newIndex).css({
        left: 0
      });
      $group.css({
        left: 0
      });
      currentIndex = newIndex;
    });
  }
  
  function advance() {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      if (currentIndex < ($slides.length - 1)) {
        move(currentIndex + 1);
      } else {
        move(0);
      }
    }, 4000);
  }
  
  $('.next_btn').on('click', function() {
    if (currentIndex < ($slides.length - 1)) {
      move(currentIndex + 1);
    } else {
      move(0);
    }
  });
  
  $('.previous_btn').on('click', function() {
    if (currentIndex !== 0) {
      move(currentIndex - 1);
    } else {
      move(3);
    }
  });
  
  $.each($slides, function(index) {
    var $button = $('<a class="slide_btn">&bull;</a>');
    
    if (index === currentIndex) {
      $button.addClass('active');
    }
    $button.on('click', function() {
      move(index);
    }).appendTo('.slide_buttons');
    bulletArray.push($button);
  });
  
  advance();
});

$(window).on('load', function() { // makes sure the whole site is loaded 
  $('#status').fadeOut(); // will first fade out the loading animation 
  $('#preloader').delay(1500).fadeOut('slow'); // will fade out the white DIV that covers the website. 
  $('body').delay(350).css({'overflow':'visible'});
})