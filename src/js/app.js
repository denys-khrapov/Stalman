jQuery(document).ready(function ($) {
	testWebPFunction();
	initAccordion();
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

