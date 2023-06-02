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
	var acc = document.getElementsByClassName("accordion__btn");
	var i;
	
	for (i = 0; i < acc.length; i++) {
	  acc[i].addEventListener("click", function() {
		 this.classList.toggle("active");
		 var panel = this.nextElementSibling;
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
		var itemValue = $(this).data('value');
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


