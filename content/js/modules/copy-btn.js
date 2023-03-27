/* Copy btn JS
   ========================================================================== */

class CopyBtn {
  constructor(btn) {
    this.btn = btn;
    
    var copy_trad = this.btn.getAttribute('data-action-trad');
    var target__el = document.querySelector(this.btn.getAttribute('data-copy-content'));
    var target__el__content = target__el.innerHTML;
    
    this.btn.addEventListener('click', myFunc, false);
    this.btn.myBtn = this.btn;

    function myFunc(evt) {
      var tooltipContent = evt.currentTarget.myBtn.nextElementSibling.querySelector("span");
      navigator.clipboard.writeText(target__el__content).then(function(x) {
        tooltipContent.innerHTML = target__el__content + " "  + copy_trad;
      });
    }
  }
}

const copyBtns = document.querySelectorAll("[data-action='copy']");

if (copyBtns.length) {
  [...copyBtns].map((copyBtnsWithClick) => new CopyBtn(copyBtnsWithClick));
}