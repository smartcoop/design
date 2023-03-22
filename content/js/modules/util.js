// Check if click is outside element
const isClickOutside = (event, elements) => {
  const excludedElements =
    elements.forEach === undefined ? [elements] : elements;
  let target = event.target;
  let isOutside = true;

  do {
    excludedElements.forEach((excludedElement) => {
      // this is a click inside
      if (target === excludedElement) {
        isOutside = false;
      }
    });
    // traverse upwards
    target = target.parentNode;
  } while (target);

  return isOutside;
};

export { isClickOutside };

class SwitchViewButton {
  constructor(els) {
      this.els = els;
      this.init();
    }
    
    init() {
      this.els.forEach((el, i) => {
        // Attach events
        el.addEventListener("click", (e) => {
            var target__el = document.querySelector('.' + el.getAttribute('data-switch-target') );
            if(el.getAttribute('data-switch-target') === el.getAttribute('data-toggle')){
              // This way you can remove the target classname of the element you are targeting
              target__el.classList.remove(el.getAttribute('data-toggle'));
            }else if(el.getAttribute('data-toggle') === "disabled"){
              this.toggleAttribute(target__el, "disabled");
            }else{
              e.preventDefault();
              this.toggleClass(target__el, ( el.getAttribute('data-switch-target') + '--' + el.getAttribute('data-toggle')));
              this.els.forEach((il) => {
                  this.toggleClass(il, "c-button--secondary");
                  this.toggleClass(il, "c-button--primary");
              });
            }

          });
      });
     
  }

  toggleClass(target, toggleClass){
      target.classList.toggle(toggleClass);
  }
  
  toggleAttribute(target, attribute){
      if (target.hasAttribute(attribute)) {
          target.removeAttribute(attribute) 
      }else{
          target.setAttribute(attribute, "");
      }
  }

}

const switchViewButtons = document.querySelectorAll("[data-toggle]");

if (switchViewButtons.length) {
  new SwitchViewButton(switchViewButtons);
}

class ScrollToLink {
  constructor(els) {
      this.els = els;
      this.target__el = document.querySelector('.' + this.els[0].getAttribute('data-scroll-target-id') );
      this.init();
  }

  init() {
      this.els.forEach((el, i) => {
          // Attach events
          el.addEventListener("click", (e) => {
            e.preventDefault();
            var scrollToElement = document.querySelector('#' + el.getAttribute("data-scroll-target-id"));
            this.scrollTo(scrollToElement)
          });
      });
     
  }

  scrollTo(element) {
    window.scrollTo({
        top:  element.offsetTop,
        behavior: "smooth"
    });
  }

}

const ScrollToLinks = document.querySelectorAll("[data-scroll-to]");

if (ScrollToLinks.length) {
  new ScrollToLink(ScrollToLinks);
}
