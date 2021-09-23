/* ==========================================================================
  Mono dialogs JS 0.4

  * 0.3 "Smart version"
    * Rename to dialog (JR)
  * 0.3 "BT version"
    * Improve closing (Fanny Benisek)
  * 0.2 "TB version"
    * Add query params and push state to URL (Erik Gelderblom)
  * 0.1 "NGD version"
    * Initial version (Simon Wuyts)
   ========================================================================== */

import { isClickOutside } from './util.js';

// Global settings
const dialogClass = 'c-dialog';
const backdropClass = 'c-dialog-backdrop';
const backdropVisibleclass = 'c-dialog-backdrop--visible';
const contextClass = 'c-dialog-context';
const contextVisibleClass = 'c-dialog-context--visible';
const menuActiveClass = '.c-menu--visible';
const queryParams = getQueryParameters();

// DOM elements
const bodyEl = document.querySelector('body');
const dialogTriggers = document.querySelectorAll('[data-dialog]');
const closeButtons = document.querySelectorAll('[data-dialog-close]');
const closeAllButtons = document.querySelectorAll("[data-dialog-close-all]");
let contexts = document.querySelectorAll(`.${contextClass}`);
const dialogs = document.querySelectorAll(`.${dialogClass}`);
let backdrop = document.querySelector(`.${backdropClass}`);


// Check for triggers on page
if (dialogTriggers.length > 0) {
  // Create backdrop if non-existent
  if (backdrop === null) {
    backdrop = document.createElement('div');
    backdrop.classList.add(backdropClass);
    bodyEl.appendChild(backdrop);
  }
}

// Find parent context -- add try-catch to prevent error when class is not found
const findParentContext = function findParentContext(el) {
  let parentEl = el;
  try {
    while (!parentEl.classList.contains(contextClass)) {
      parentEl = parentEl.parentNode;
    }
  }
  catch {
    return null;
  }
  return parentEl;
};

// Open dialog
const showdialog = function showdialog(contextEl) {
  if(contextEl) {
    contextEl.classList.add(contextVisibleClass);
    bodyEl.classList.add("u-kill-scroll");
    backdrop.classList.add(backdropVisibleclass);
  }
  // Push dialog to URL of browser
  window.history.pushState(
    'page',
    'Title',
    `${window.location.origin}${
      window.location.pathname
    }?dialog=${contextEl.getAttribute('id')}`
  );
};

// Close dialog
const closedialog = function closedialog(contextEl) {
  if(contextEl) {
    contextEl.classList.remove(contextVisibleClass);
    bodyEl.classList.remove("u-kill-scroll");
    backdrop.classList.remove(backdropVisibleclass);
  }
  // Push normal URL to browser again
  window.history.pushState(
    'page',
    'Title',
    `${window.location.origin}${window.location.pathname}`
  );
};

// Close all other dialogs in case multiple dialogs are opened after each other
const closedialogs = function closedialogs(contextEl) {
  [...dialogs]
  .filter((dialog) => dialog.parentElement !== contextEl)
   .forEach((dialog) => {
     if (dialog.parentElement.classList.contains(contextVisibleClass)) {
       dialog.parentElement.classList.remove(contextVisibleClass)
       bodyEl.classList.remove("u-kill-scroll");
     }
   }
  );
};

// Handle trigger clicks
const handleTriggerClick = function handleTriggerClick(e) {
  e.preventDefault();
  const contextId = e.currentTarget.getAttribute('data-dialog');
  const contextEl = document.getElementById(contextId);
  closedialogs(contextEl);
  showdialog(contextEl);
};

// Handle close button clicks
const handleCloseClicks = function handleCloseClicks(e) {
  e.preventDefault();
  const contextEl = findParentContext(e.currentTarget);
  closedialog(contextEl);
 };

 // Handle close all button clicks
const handleCloseAllClicks = function handleCloseAllClicks(e) {
  e.preventDefault();
  closedialogs(null);
  const contextEl = findParentContext(e.currentTarget);
  closedialog(contextEl);
};


// Close dialog on click outside
const handleContextClicks = function handleContextClicks(e) {
  const activeContext = document.querySelector(`.${contextVisibleClass}`);
  if (isClickOutside(e, dialogs)) {
    if (!activeContext.querySelector(menuActiveClass))
      closedialog(activeContext);
  }
};

// Close dialog on pressing escape key
const handleEscKey = function handleEscapeKey(e) {
  if (e.keyCode === 27) {
    const activeContext = document.querySelector(`.${contextVisibleClass}`);
    closedialog(activeContext);
  }
};

// Get query parameters to open dialogs if they're in the URL
function getQueryParameters(str) {
  return (str || document.location.search)
    .replace(/(^\?)/, '')
    .split('&')
    .map(
      function (n) {
        return (n = n.split('=')), (this[n[0]] = n[1]), this;
      }.bind({})
    )[0];
}

// If there is a parameter `dialog` in the URL, call that dialog
if (queryParams.dialog) {
  const calldialog = document.getElementById(queryParams.dialog);
  showdialog(calldialog);
}

// Move contexts to root element
contexts.forEach((context) => bodyEl.appendChild(context));

// Add click listener to triggers
dialogTriggers.forEach((dialogTrigger) =>
  dialogTrigger.addEventListener('click', handleTriggerClick, false)
);

// Add click listener to close buttons
closeButtons.forEach((closeButton) =>
  closeButton.addEventListener('click', handleCloseClicks, false)
);

// Add click listener to close buttons for all dialogs
closeAllButtons.forEach((closeAllButton) =>
 closeAllButton.addEventListener("click", handleCloseAllClicks, false)
);

// Add click listener to contexts
contexts.forEach((context) =>
  context.addEventListener('click', handleContextClicks, false)
);

// Add click listener to key press
document.addEventListener('keyup', handleEscKey, false);

/* Accessibility
   ========================================================================== */

// Needs to be reviewed/improved

window.addEventListener('load', function () {
  for (let i = 0; i < dialogs.length; i += 1) {
    focusTrap(dialogs[i]);
  }
});

const focusTrap = function focusTrap(dialog, e) {
  dialog.focusedElBeforeOpen;

  let focusableEls = dialog.querySelectorAll(
    'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex]:not([tabindex="-1"]'
  );
  dialog.focusableEls = Array.prototype.slice.call(focusableEls);

  dialog.firstFocusableEl = dialog.focusableEls[0];
  dialog.lastFocusableEl = dialog.focusableEls[dialog.focusableEls.length - 1];
  dialog.firstFocusableEl.focus();

  function handleKeyDown(e) {
    const KEY_TAB = 9;

    function handleBackwardTab() {
      if (document.activeElement === dialog.firstFocusableEl) {
        e.preventDefault();
        dialog.lastFocusableEl.focus();
      }
    }

    function handleForwardTab() {
      if (document.activeElement === dialog.lastFocusableEl) {
        e.preventDefault();
        dialog.firstFocusableEl.focus();
      }
    }

    switch (e.keyCode) {
      case KEY_TAB:
        if (dialog.focusableEls.length === 1) {
          e.preventDefault();
          break;
        }
        if (e.shiftKey) {
          handleBackwardTab();
        } else {
          handleForwardTab();
        }
        break;
      default:
        break;
    }
  }

  dialog.addEventListener('keydown', handleKeyDown, false);
};