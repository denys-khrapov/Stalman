jQuery(document).ready(function ($) {


	testWebPFunction();
	initAccordion();
	initSelectDropDown();
	initSlick();
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







	let swiper = new Swiper('.portfolio-slider', {
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
	
	swiper.on('slideChange', function() {
		let totalSlides = swiper.slides.length;
		let activeIndex = swiper.activeIndex;
		let hideContent = $('.hide-content');
		if (window.matchMedia('(min-width: 1200px)').matches) {
		if (totalSlides - activeIndex === 3) {
		  let lastTwoSlides = swiper.slides.slice(-2);
	
		  lastTwoSlides.forEach(function(slide) {
			//  slide.style.boxShadow = 'inset 0 0 4px rgba(255, 255, 255, 0.15)';
			//  hideContent.each(function() {
			// 	this.style.opacity = '1';
			// 	this.style.visibility = 'visible';
			//  });
			slide.classList.add('test');
		  });
		} else{
			let allSlides = swiper.slides;

			allSlides.forEach(function(slide) {
			//   slide.style.boxShadow = '';
			//   hideContent.each(function() {
			// 	this.style.opacity = '';
			// 	this.style.visibility = '';
			//  });
			slide.classList.remove('test');
			});
		}
	}
	});






