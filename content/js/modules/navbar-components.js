/* Navbar components
   ========================================================================== */

var headers = document.querySelectorAll('.c-navbar-components .c-navbar-components__header');

for(var i = 0; i < headers.length; i++) {
	headers[i].addEventListener('click', openCurrNavbar);
}

//Use this as the callback if you would like multiple dropdowns to be open
function openNavbar(e) {
	var parent = this.parentElement;
	var article = this.nextElementSibling;
	
	if (!parent.classList.contains('js-active')) {
		parent.classList.add('js-active');
		article.style.maxHeight = article.scrollHeight + 'px';
	}
	else {
		parent.classList.remove('js-active');
		article.style.maxHeight = '0px';
	}
}

//Use this as the callback if you would like no more than one dropdown to be open
function openCurrNavbar(e) {
	for(var i = 0; i < headers.length; i++) {
		var parent = headers[i].parentElement;
		var article = headers[i].nextElementSibling;

		if (this === headers[i] && !parent.classList.contains('js-active')) {
			parent.classList.add('js-active');
			article.style.maxHeight = article.scrollHeight + 'px';
		}
		else {
			parent.classList.remove('js-active');
			article.style.maxHeight = '0px';
		}
	}
}