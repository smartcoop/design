/* Accordion
   ========================================================================== */

var headersAcc = document.querySelectorAll('.c-accordion .c-accordion__item .c-accordion__item-header');

for(var i = 0; i < headersAcc.length; i++) {
  headersAcc[i].addEventListener('click', openCurrAcc);
}

//Use this as the callback if you would like multiple dropdowns to be open
function openAcc(e) {
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
function openCurrAcc(e) {
  for(var i = 0; i < headersAcc.length; i++) {
    var parent = headersAcc[i].parentElement;
    var article = headersAcc[i].nextElementSibling;

    if (this === headersAcc[i] && !parent.classList.contains('js-active')) {
      parent.classList.add('js-active');
      article.style.maxHeight = article.scrollHeight + 'px';
    }
    else {
      parent.classList.remove('js-active');
      article.style.maxHeight = '0px';
    }
  }
}
