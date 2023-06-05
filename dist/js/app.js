jQuery(document).ready(function ($) {
	testWebPFunction();
	initAccordion();
	initSelectDropDown();
	initSlick();
	initSwiper();
	initHoverandClickCard();
});


function testWebPFunction() {
	//Проверка поддержки webp
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	// Добавление класса _webp или _no-webp для HTML
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	})
}


function initAccordion() {
	let acc = document.getElementsByClassName("accordion__btn");
	let i;
	
	for (i = 0; i < acc.length; i++) {
	  acc[i].addEventListener("click", function() {
		 this.classList.toggle("active");
		 let panel = this.nextElementSibling;
		 if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		 } else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		 } 
	  });
	}
}


function initSelectDropDown(){
	$('.select-dropdown__button').on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		$('.select-dropdown__list').toggleClass('active');
	});
	$('.select-dropdown__list-item').on('click', function(){
		let itemValue = $(this).data('value');
		$('.select-dropdown__button span').text($(this).text()).parent().attr('data-value', itemValue);
		$('.select-dropdown__list').toggleClass('active');
		$('.select-dropdown__button').toggleClass('active');
	});
}


function initSlick() {
	$('.stages-slick').slick({
		dots: false,
		arrows: true,
		infinite: true,
		speed: 500,
		variableWidth: true,
		rows: 0,
		prevArrow: $('.stages-prev.prev-btn'),
		nextArrow: $('.stages-next.next-btn'),
		responsive:[
			{
				breakpoint: 1200,
				settings: {
				dots: true
				}
			},
		]
	});
}


function initSwiper(){

	let swiperPortfolio = new Swiper('.portfolio-slider', {
		navigation:{
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		slidesPerView: 'auto',
		pagination:{
			el:'.swiper-pagination',
			clickable: true,
		},
		breakpoints:{
			320:{
				spaceBetween: 16,
				loop: true
			},
			1200	:{
				spaceBetween: 24,
				loop: false,
				pagination: false,
			}
		}
	});

	let swiperWhat = new Swiper('.what-slider',{
		navigation:{
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		slidesPerView: 'auto',
		pagination:{
			el:'.swiper-pagination',
			clickable: true,
		},
		breakpoints:{
			320:{
				spaceBetween: 16,
				loop: true
			},
			1200	:{
				spaceBetween: 24,
				loop: false,
				pagination: false,
			}
		}
		
	})
}


function initHoverandClickCard(){
	var mediaQuery = window.matchMedia("(min-width: 1200px)");
 
	function applyHoverEffect() {
	  $(".what__swiper-inner").each(function() {
		 var $this = $(this);
		 var hideContent = $this.find(".hide-content");
		 var imageHolder = $this.find(".what__image-holder img");
		 var originalHeight = imageHolder.height();
 
		 $this.hover(
			function() {
			  hideContent.addClass("active");
			  imageHolder.addClass("active");
			  updateImageHeight(imageHolder, hideContent, originalHeight, true);
			},
			function() {
			  hideContent.removeClass("active");
			  imageHolder.removeClass("active");
			  updateImageHeight(imageHolder, hideContent, originalHeight, false);
			}
		 );
	  });
	}
 
	function applyClickEffect() {
	  $(".what__swiper-inner").each(function() {
		 var $this = $(this);
		 var hideContent = $this.find(".hide-content");
		 var imageHolder = $this.find(".what__image-holder img");
		 var originalHeight = imageHolder.height();
 
		 $this.on("click", function() {
			hideContent.toggleClass("active");
			imageHolder.toggleClass("active");
			updateImageHeight(imageHolder, hideContent, originalHeight, true);
		 });
	  });
	}

	function applyClickEffect() {
		$(".what__swiper-inner").each(function() {
		  var $this = $(this);
		  var hideContent = $this.find(".hide-content");
		  var imageHolder = $this.find(".what__image-holder img");
		  var originalHeight = imageHolder.height();
	 
		  $this.on("click", function() {
			 hideContent.toggleClass("active");
			 imageHolder.toggleClass("active");
			 updateImageHeight(imageHolder, hideContent, originalHeight, true);
	 
			 $this.closest(".swiper-slide").toggleClass("hide-after", hideContent.hasClass("active"));
			 $this.closest(".swiper-slide").toggleClass("hide-grayScale", hideContent.hasClass("active"));
			 $this.closest(".swiper-slide").toggleClass("hide-outline", hideContent.hasClass("active"));
		  });
		});
	 }
	 
	if (mediaQuery.matches) {
	  applyHoverEffect();
	} else {
	  applyClickEffect();
	}
 
	mediaQuery.addListener(function() {
	  if (mediaQuery.matches) {
		 applyHoverEffect();
	  } else {
		 applyClickEffect();
	  }
	});

	function updateImageHeight(imageHolder, hideContent, originalHeight, animate) {
		if (hideContent.hasClass("active")) {
		  var hideContentHeight = hideContent.outerHeight();
		  var newHeight = originalHeight - hideContentHeight;
		  if (animate) {
			 imageHolder.addClass("transition-height");
			 imageHolder.css("height", newHeight);
		  } else {
			 imageHolder.removeClass("transition-height");
			 imageHolder.css("height", newHeight);
		  }
		  imageHolder.css({
			 "border-bottom-right-radius": "0px",
			 "border-bottom-left-radius": "0px"
		  });
		} else {
		  if (animate) {
			 imageHolder.addClass("transition-height");
			 setTimeout(function() {
				imageHolder.css("height", originalHeight);
			 }, 0);
		  } else {
			 imageHolder.removeClass("transition-height");
			 imageHolder.css("height", originalHeight);
		  }
		  imageHolder.css({
			 "border-bottom-right-radius": "",
			 "border-bottom-left-radius": ""
		  });
		}
	 }
	
}





