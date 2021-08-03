/* Modal JS
   ========================================================================== */
import { isClickOutside } from "./util";

// Global settings
const modalClass = "c-modal";
const backdropClass = "c-modal-backdrop";
const backdropVisibleclass = "c-modal-backdrop--visible";
const contextClass = "c-modal-context";
const contextVisibleClass = "c-modal-context--visible";
const menuActiveClass = ".c-menu--visible";
const queryParams = getQueryParameters();

// DOM elements
const bodyEl = document.querySelector("body");
const modalTriggers = document.querySelectorAll("[data-modal]");
const closeButtons = document.querySelectorAll("[data-modal-close]");
let contexts = document.querySelectorAll(`.${contextClass}`);
const modals = document.querySelectorAll(`.${modalClass}`);
let backdrop = document.querySelector(`.${backdropClass}`);


// Check for triggers on page
if (modalTriggers.length > 0) {
  // Create backdrop if non-existent
  if (backdrop === null) {
    backdrop = document.createElement("div");
    backdrop.classList.add(backdropClass);
    bodyEl.appendChild(backdrop);
  }
}

// Find parent context
const findParentContext = function findParentContext(el) {
  let parentEl = el;
  while (!parentEl.classList.contains(contextClass)) {
    parentEl = parentEl.parentNode;
  }
  return parentEl;
};

// Open modal
const showModal = function showModal(contextEl) {
  contextEl.classList.add(contextVisibleClass);
  backdrop.classList.add(backdropVisibleclass);
  // Push modal to URL of browser
  window.history.pushState(
    "page",
    "Title",
    `${window.location.origin}${
      window.location.pathname
    }?modal=${contextEl.getAttribute("id")}`
  );
};

// Close modal
const closeModal = function closeModal(contextEl) {
  contextEl.classList.remove(contextVisibleClass);
  backdrop.classList.remove(backdropVisibleclass);
  // Push normal URL to browser again
  window.history.pushState(
    "page",
    "Title",
    `${window.location.origin}${window.location.pathname}`
  );
};

// Close all other modals in case multiple modals are opened after each other
const closeModals = function closeModals(contextEl) {
  [...modals]
    .filter((modal) => modal.parentElement !== contextEl)
    .forEach((modal) =>
      modal.parentElement.classList.remove(contextVisibleClass)
    );
};

// Handle trigger clicks
const handleTriggerClick = function handleTriggerClick(e) {
  e.preventDefault();
  const contextId = e.currentTarget.getAttribute("data-modal");
  const contextEl = document.getElementById(contextId);
  closeModals(contextEl);
  showModal(contextEl);
};

// Handle close button clicks
const handleCloseClicks = function handleCloseClicks(e) {
  e.preventDefault();
  const contextEl = findParentContext(e.currentTarget);
  closeModal(contextEl);
};

// Close modal on click outside
const handleContextClicks = function handleContextClicks(e) {
  const activeContext = document.querySelector(`.${contextVisibleClass}`);
  if (isClickOutside(e, modals)) {
    if (!activeContext.querySelector(menuActiveClass))
      closeModal(activeContext);
  }
};

// Close modal on pressing escape key
const handleEscKey = function handleEscapeKey(e) {
  if (e.keyCode === 27) {
    const activeContext = document.querySelector(`.${contextVisibleClass}`);
    closeModal(activeContext);
  }
};

// Get query parameters to open modals if they're in the URL
function getQueryParameters(str) {
  return (str || document.location.search)
    .replace(/(^\?)/, "")
    .split("&")
    .map(
      function (n) {
        return (n = n.split("=")), (this[n[0]] = n[1]), this;
      }.bind({})
    )[0];
}

// If there is a parameter `modal` in the URL, call that modal
if (queryParams.modal) {
  const callModal = document.getElementById(queryParams.modal);
  showModal(callModal);
}

// Move contexts to root element
contexts.forEach((context) => bodyEl.appendChild(context));

// Add click listener to triggers
modalTriggers.forEach((modalTrigger) =>
  modalTrigger.addEventListener("click", handleTriggerClick, false)
);

// Add click listener to close buttons
closeButtons.forEach((closeButton) =>
  closeButton.addEventListener("click", handleCloseClicks, false)
);

// Add click listener to modals
// modals.forEach((modal) =>
//   modal.addEventListener('click', handleModalClicks, false)
// );

// Add click listener to contexts
contexts.forEach((context) =>
  context.addEventListener("click", handleContextClicks, false)
);

// Add click listener to key press
document.addEventListener("keyup", handleEscKey, false);

/* Accessibility
   ========================================================================== */

// Needs to be reviewed/improved

window.addEventListener("load", function () {
  for (let i = 0; i < modals.length; i += 1) {
    focusTrap(modals[i]);
  }
});

const focusTrap = function focusTrap(modal, e) {
  modal.focusedElBeforeOpen;

  let focusableEls = modal.querySelectorAll(
    'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'
  );
  modal.focusableEls = Array.prototype.slice.call(focusableEls);

  modal.firstFocusableEl = modal.focusableEls[0];
  modal.lastFocusableEl = modal.focusableEls[modal.focusableEls.length - 1];

  modal.firstFocusableEl.focus();

  function handleKeyDown(e) {
    const KEY_TAB = 9;

    function handleBackwardTab() {
      if (document.activeElement === modal.firstFocusableEl) {
        e.preventDefault();
        modal.lastFocusableEl.focus();
      }
    }

    function handleForwardTab() {
      if (document.activeElement === modal.lastFocusableEl) {
        e.preventDefault();
        modal.firstFocusableEl.focus();
      }
    }

    switch (e.keyCode) {
      case KEY_TAB:
        if (modal.focusableEls.length === 1) {
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

  modal.addEventListener("keydown", handleKeyDown, false);
};
