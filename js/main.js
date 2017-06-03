jQuery(document).ready(function($){
	//cache some jQuery objects
	var modalTrigger = $('.cd-modal-trigger'),
		transitionLayer = $('.cd-transition-layer'),
		transitionBackground = transitionLayer.children(),
		modalWindow = $('.cd-modal');

	var frameProportion = 1.78, //png frame aspect ratio
		frames = 25, //number of png frames
		resize = false;

	//set transitionBackground dimentions
	setLayerDimensions();
	$(window).on('resize', function(){
		if( !resize ) {
			resize = true;
			(!window.requestAnimationFrame) ? setTimeout(setLayerDimensions, 300) : window.requestAnimationFrame(setLayerDimensions);
		}
	});

	//open modal window
	modalTrigger.on('click', function(event){	
		event.preventDefault();
		transitionLayer.addClass('visible opening');
		var delay = ( $('.no-cssanimations').length > 0 ) ? 0 : 600;
		setTimeout(function(){
			modalWindow.addClass('visible');
		}, delay);
	});

	//close modal window
	modalWindow.on('click', '.modal-close', function(event){
		event.preventDefault();
		transitionLayer.addClass('closing');
		modalWindow.removeClass('visible');
		transitionBackground.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
			transitionLayer.removeClass('closing opening visible');
			transitionBackground.off('webkitAnimationEnd oanimationend msAnimationEnd animationend');
		});
	});

	function setLayerDimensions() {
		var windowWidth = $(window).width(),
			windowHeight = $(window).height(),
			layerHeight, layerWidth;

		if( windowWidth/windowHeight > frameProportion ) {
			layerWidth = windowWidth;
			layerHeight = layerWidth/frameProportion;
		} else {
			layerHeight = windowHeight*1.2;
			layerWidth = layerHeight*frameProportion;
		}

		transitionBackground.css({
			'width': layerWidth*frames+'px',
			'height': layerHeight+'px',
		});

		resize = false;
	}
	
});

	// loader
		$(document).ready(function() {
		setTimeout(function() {
			$('.color-layer').hide();
			$('.cd-transition-layer').removeClass('opening');
			$('.cd-transition-layer').addClass('closing');
			$('.loader-img').fadeOut();
		}, 500);
		setTimeout(function() {
			$('.tekstt').addClass('start');
			$('.za_svg_text').addClass('start');
			$('.closing').css({
				"z-index": "-2"
			});
		}, 3000);
		$('body').click(function() {
			// $('.za_svg').toggleClass('start');
			// $('.tekstt').toggleClass('start');
			// $('.za_svg_text').toggleClass('start');
		});
		$(".za_svg_dugme").hover(
			function() {
				$(this).addClass("hoverr");
			},
			function() {
				$(this).removeClass("hoverr");
			}
		);
		/*
$('body').mousemove(function(e){
	$('.za_svg svg').css({"left":e.pageX, "top":e.pageY, "transform":"translateX(-50%)"});
});
*/
	});
	
	// end of loader