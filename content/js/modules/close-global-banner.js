/* banner JS
   ========================================================================== */

class CloseBanner {
  constructor(banner) {
      this.bannerClass = banner;
      this.closeIcon = banner.querySelector('[data-banner-close]');
      this.changeHeightClass = document.querySelector('.js-has-global-banner');
      this.init();
  }

  init() {
    const parentClassScope = this;
    this.closeIcon.addEventListener('click', function(e){
      parentClassScope.bannerClass.remove();
      if (parentClassScope.changeHeightClass != null) {
        parentClassScope.changeHeightClass.classList.remove('js-has-global-banner');
      }
    });
  }
}

const closablebanners = document.querySelectorAll('.c-global-banner');

if (closablebanners.length) {
  [...closablebanners].map((closablebannersWithClick) => new CloseBanner(closablebannersWithClick));
}