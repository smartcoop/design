/* ==========================================================================
  Mobile menu
   ========================================================================== */

const htmlElement = document.querySelector('html');
const mobileNavigationOpenButton = document.querySelector('#c-design-system-nav-open');
const mobileNavigationCloseButton = document.querySelector('#c-design-system-nav-close');
const mobileMenu = document.querySelector('.c-design-system-nav__mobile');

const handleMenuOpen = function handleMenuOpen(e) {
  e.preventDefault();
  mobileMenu.classList.add('c-design-system-nav__mobile--visible');
  htmlElement.classList.add('u-kill-scroll');
}

const handleMenuClose = function handleMenuClose(e) {
  e.preventDefault();
  mobileMenu.classList.remove('c-design-system-nav__mobile--visible');
  htmlElement.classList.remove('u-kill-scroll');
}

mobileNavigationOpenButton && mobileNavigationOpenButton.addEventListener('click', handleMenuOpen, false);
mobileNavigationCloseButton && mobileNavigationCloseButton.addEventListener('click', handleMenuClose, false);
