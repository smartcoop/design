(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

require("./modules/accordion");

require("./modules/close-alert");

require("./modules/close-global-banner");

require("./modules/design-system-website-mobile-menu");

require("./modules/dialogs");

require("./modules/input-password.js");

require("./modules/menu");

require("./modules/navbar-components");

require("./modules/popper-popover");

require("./modules/popper-tooltip");

require("./modules/tabs");

require("./modules/table-of-content");

},{"./modules/accordion":2,"./modules/close-alert":3,"./modules/close-global-banner":4,"./modules/design-system-website-mobile-menu":5,"./modules/dialogs":6,"./modules/input-password.js":7,"./modules/menu":8,"./modules/navbar-components":9,"./modules/popper-popover":10,"./modules/popper-tooltip":11,"./modules/table-of-content":12,"./modules/tabs":13}],2:[function(require,module,exports){
"use strict";

/* Accordion
   ========================================================================== */
var headersAcc = document.querySelectorAll('.c-accordion .c-accordion__item .c-accordion__item-header');

for (var i = 0; i < headersAcc.length; i++) {
  headersAcc[i].addEventListener('click', openCurrAcc);
} //Use this as the callback if you would like multiple dropdowns to be open


function openAcc(e) {
  var parent = this.parentElement;
  var article = this.nextElementSibling;

  if (!parent.classList.contains('js-active')) {
    parent.classList.add('js-active');
    article.style.maxHeight = article.scrollHeight + 'px';
  } else {
    parent.classList.remove('js-active');
    article.style.maxHeight = '0px';
  }
} //Use this as the callback if you would like no more than one dropdown to be open


function openCurrAcc(e) {
  for (var i = 0; i < headersAcc.length; i++) {
    var parent = headersAcc[i].parentElement;
    var article = headersAcc[i].nextElementSibling;

    if (this === headersAcc[i] && !parent.classList.contains('js-active')) {
      parent.classList.add('js-active');
      article.style.maxHeight = article.scrollHeight + 'px';
    } else {
      parent.classList.remove('js-active');
      article.style.maxHeight = '0px';
    }
  }
}

},{}],3:[function(require,module,exports){
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* alert JS
   ========================================================================== */
var CloseAlert = /*#__PURE__*/function () {
  function CloseAlert(alert) {
    _classCallCheck(this, CloseAlert);

    this.alertClass = alert;
    this.closeButton = alert.querySelector('[data-alert-close]');
    this.init();
  }

  _createClass(CloseAlert, [{
    key: "init",
    value: function init() {
      var parentClassScope = this;
      this.closeButton.addEventListener('click', function (e) {
        parentClassScope.alertClass.remove();
      });
    }
  }]);

  return CloseAlert;
}();

var closableAlerts = document.querySelectorAll('[data-alert-closable]');

if (closableAlerts.length) {
  _toConsumableArray(closableAlerts).map(function (closableAlertsWithClick) {
    return new CloseAlert(closableAlertsWithClick);
  });
}

},{}],4:[function(require,module,exports){
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* banner JS
   ========================================================================== */
var CloseBanner = /*#__PURE__*/function () {
  function CloseBanner(banner) {
    _classCallCheck(this, CloseBanner);

    this.bannerClass = banner;
    this.closeIcon = banner.querySelector('[data-banner-close]');
    this.changeHeightClass = document.querySelector('.js-has-global-banner');
    this.init();
  }

  _createClass(CloseBanner, [{
    key: "init",
    value: function init() {
      var parentClassScope = this;
      this.closeIcon.addEventListener('click', function (e) {
        parentClassScope.bannerClass.remove();

        if (parentClassScope.changeHeightClass != null) {
          parentClassScope.changeHeightClass.classList.remove('js-has-global-banner');
        }
      });
    }
  }]);

  return CloseBanner;
}();

var closablebanners = document.querySelectorAll('.c-global-banner');

if (closablebanners.length) {
  _toConsumableArray(closablebanners).map(function (closablebannersWithClick) {
    return new CloseBanner(closablebannersWithClick);
  });
}

},{}],5:[function(require,module,exports){
"use strict";

/* ==========================================================================
  Mobile menu
   ========================================================================== */
var htmlElement = document.querySelector('html');
var mobileNavigationOpenButton = document.querySelector('#c-design-system-nav-open');
var mobileNavigationCloseButton = document.querySelector('#c-design-system-nav-close');
var mobileMenu = document.querySelector('.c-design-system-nav__mobile');

var handleMenuOpen = function handleMenuOpen(e) {
  e.preventDefault();
  mobileMenu.classList.add('c-design-system-nav__mobile--visible');
  htmlElement.classList.add('u-kill-scroll');
};

var handleMenuClose = function handleMenuClose(e) {
  e.preventDefault();
  mobileMenu.classList.remove('c-design-system-nav__mobile--visible');
  htmlElement.classList.remove('u-kill-scroll');
};

mobileNavigationOpenButton && mobileNavigationOpenButton.addEventListener('click', handleMenuOpen, false);
mobileNavigationCloseButton && mobileNavigationCloseButton.addEventListener('click', handleMenuClose, false);

},{}],6:[function(require,module,exports){
"use strict";

var _util = require("./util.js");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Global settings
var dialogClass = 'c-dialog';
var backdropClass = 'c-dialog-backdrop';
var backdropVisibleclass = 'c-dialog-backdrop--visible';
var contextClass = 'c-dialog-context';
var contextVisibleClass = 'c-dialog-context--visible';
var menuActiveClass = '.c-menu--visible';
var queryParams = getQueryParameters(); // DOM elements

var bodyEl = document.querySelector('body');
var dialogTriggers = document.querySelectorAll('[data-dialog]');
var closeButtons = document.querySelectorAll('[data-dialog-close]');
var closeAllButtons = document.querySelectorAll("[data-dialog-close-all]");
var contexts = document.querySelectorAll(".".concat(contextClass));
var dialogs = document.querySelectorAll(".".concat(dialogClass));
var backdrop = document.querySelector(".".concat(backdropClass)); // Check for triggers on page

if (dialogTriggers.length > 0) {
  // Create backdrop if non-existent
  if (backdrop === null) {
    backdrop = document.createElement('div');
    backdrop.classList.add(backdropClass);
    bodyEl.appendChild(backdrop);
  }
} // Find parent context -- add try-catch to prevent error when class is not found


var findParentContext = function findParentContext(el) {
  var parentEl = el;

  try {
    while (!parentEl.classList.contains(contextClass)) {
      parentEl = parentEl.parentNode;
    }
  } catch (_unused) {
    return null;
  }

  return parentEl;
}; // Open dialog


var showdialog = function showdialog(contextEl) {
  if (contextEl) {
    contextEl.classList.add(contextVisibleClass);
    bodyEl.classList.add("u-kill-scroll");
    backdrop.classList.add(backdropVisibleclass);
  } // Push dialog to URL of browser


  window.history.pushState('page', 'Title', "".concat(window.location.origin).concat(window.location.pathname, "?dialog=").concat(contextEl.getAttribute('id')));
}; // Close dialog


var closedialog = function closedialog(contextEl) {
  if (contextEl) {
    contextEl.classList.remove(contextVisibleClass);
    bodyEl.classList.remove("u-kill-scroll");
    backdrop.classList.remove(backdropVisibleclass);
  } // Push normal URL to browser again


  window.history.pushState('page', 'Title', "".concat(window.location.origin).concat(window.location.pathname));
}; // Close all other dialogs in case multiple dialogs are opened after each other


var closedialogs = function closedialogs(contextEl) {
  _toConsumableArray(dialogs).filter(function (dialog) {
    return dialog.parentElement !== contextEl;
  }).forEach(function (dialog) {
    if (dialog.parentElement.classList.contains(contextVisibleClass)) {
      dialog.parentElement.classList.remove(contextVisibleClass);
      bodyEl.classList.remove("u-kill-scroll");
    }
  });
}; // Handle trigger clicks


var handleTriggerClick = function handleTriggerClick(e) {
  e.preventDefault();
  var contextId = e.currentTarget.getAttribute('data-dialog');
  var contextEl = document.getElementById(contextId);
  closedialogs(contextEl);
  showdialog(contextEl);
}; // Handle close button clicks


var handleCloseClicks = function handleCloseClicks(e) {
  e.preventDefault();
  var contextEl = findParentContext(e.currentTarget);
  closedialog(contextEl);
}; // Handle close all button clicks


var handleCloseAllClicks = function handleCloseAllClicks(e) {
  e.preventDefault();
  closedialogs(null);
  var contextEl = findParentContext(e.currentTarget);
  closedialog(contextEl);
}; // Close dialog on click outside


var handleContextClicks = function handleContextClicks(e) {
  var activeContext = document.querySelector(".".concat(contextVisibleClass));

  if ((0, _util.isClickOutside)(e, dialogs)) {
    if (!activeContext.querySelector(menuActiveClass)) closedialog(activeContext);
  }
}; // Close dialog on pressing escape key


var handleEscKey = function handleEscapeKey(e) {
  if (e.keyCode === 27) {
    var activeContext = document.querySelector(".".concat(contextVisibleClass));
    closedialog(activeContext);
  }
}; // Get query parameters to open dialogs if they're in the URL


function getQueryParameters(str) {
  return (str || document.location.search).replace(/(^\?)/, '').split('&').map(function (n) {
    return n = n.split('='), this[n[0]] = n[1], this;
  }.bind({}))[0];
} // If there is a parameter `dialog` in the URL, call that dialog


if (queryParams.dialog) {
  var calldialog = document.getElementById(queryParams.dialog);
  showdialog(calldialog);
} // Move contexts to root element


contexts.forEach(function (context) {
  return bodyEl.appendChild(context);
}); // Add click listener to triggers

dialogTriggers.forEach(function (dialogTrigger) {
  return dialogTrigger.addEventListener('click', handleTriggerClick, false);
}); // Add click listener to close buttons

closeButtons.forEach(function (closeButton) {
  return closeButton.addEventListener('click', handleCloseClicks, false);
}); // Add click listener to close buttons for all dialogs

closeAllButtons.forEach(function (closeAllButton) {
  return closeAllButton.addEventListener("click", handleCloseAllClicks, false);
}); // Add click listener to contexts

contexts.forEach(function (context) {
  return context.addEventListener('click', handleContextClicks, false);
}); // Add click listener to key press

document.addEventListener('keyup', handleEscKey, false);
/* Accessibility
   ========================================================================== */
// Needs to be reviewed/improved

window.addEventListener('load', function () {
  for (var i = 0; i < dialogs.length; i += 1) {
    focusTrap(dialogs[i]);
  }
});

var focusTrap = function focusTrap(dialog, e) {
  dialog.focusedElBeforeOpen;
  var focusableEls = dialog.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex]:not([tabindex="-1"]');
  dialog.focusableEls = Array.prototype.slice.call(focusableEls);
  dialog.firstFocusableEl = dialog.focusableEls[0];
  dialog.lastFocusableEl = dialog.focusableEls[dialog.focusableEls.length - 1];
  dialog.firstFocusableEl.focus();

  function handleKeyDown(e) {
    var KEY_TAB = 9;

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

},{"./util.js":14}],7:[function(require,module,exports){
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* ==========================================================================
  Input password (view password) toggle
   ========================================================================== */
var InputPassword = function InputPassword(el) {
  _classCallCheck(this, InputPassword);

  this.el = el;
  this.button = el.parentElement.querySelector("button[data-password-toggle]");
  this.button.addEventListener("click", function (event) {
    this.el = this.parentElement.querySelector("input");

    if (this.el.type === "password") {
      this.el.type = "text";
    } else {
      this.el.type = "password";
    }
  });
};

var passwordsInputs = document.querySelectorAll("input[type=password]");

if (passwordsInputs.length) {
  _toConsumableArray(passwordsInputs).map(function (input) {
    return new InputPassword(input);
  });
}

},{}],8:[function(require,module,exports){
"use strict";

var _core = require("@popperjs/core");

var _util = require("./util");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* Menu JS
========================================================================== */
// Collect all triggers on the page except for the sidebar
var menuTriggers = document.querySelectorAll('[data-menu]:not(.js-no-action)');
var selectOptions = document.querySelectorAll('[role="option"]'); // Global settings

var menuActiveClass = 'c-menu--visible';
var menuButtonActiveClass = 'c-menu-button-active';
var dropdownMargin = 6;
var popperInstances = []; // Find target dropdown element

var findDropdown = function findDropdown(triggerEl) {
  var targetId = triggerEl.getAttribute('data-menu');
  return document.getElementById(targetId);
}; // find Select for clicked option


var findSelect = function findSelect(element) {
  return document.querySelector("[data-menu=\"".concat(element.parentElement.id));
}; // Position dropdown


function create(triggerEl, targetEl) {
  var placement = triggerEl.dataset.menuPlacement || 'bottom-end';
  var samewidthEnable = !!triggerEl.dataset.menuSamewidth || false;
  var offset = triggerEl.dataset.menuOffset || dropdownMargin;
  var popperInstance = new _core.createPopper(triggerEl, targetEl, {
    placement: placement,
    modifiers: [_core.preventOverflow, {
      name: 'offset',
      options: {
        offset: [8, offset]
      }
    }, {
      name: 'sameWidth',
      enabled: samewidthEnable,
      phase: 'beforeWrite',
      requires: ['computeStyles'],
      fn: function fn(_ref) {
        var state = _ref.state;
        state.styles.popper.width = "".concat(state.rects.reference.width, "px");
      },
      effect: function effect(_ref2) {
        var state = _ref2.state;
        state.elements.popper.style.width = "".concat(state.elements.reference.offsetWidth, "px");
      }
    }]
  });
  popperInstances.push(popperInstance);
}

function showPopper(trigger, targetEl) {
  create(trigger, targetEl);
  trigger.classList.add(menuButtonActiveClass);
  targetEl.setAttribute('data-show', '');
  targetEl.classList.add(menuActiveClass);
}

function hidePopper(instance) {
  var popper = instance.state.elements.popper;
  var reference = instance.state.elements.reference;
  reference.classList.remove(menuButtonActiveClass);
  popper.removeAttribute('data-show');
  popper.classList.remove(menuActiveClass);
  destroy(instance);
}

function destroy(target) {
  var instance = popperInstances.find(function (instance) {
    return instance === target;
  });

  if (instance) {
    instance.destroy();
    popperInstances.splice(popperInstances.indexOf(target), 1);
  }
}

var findPopperInstance = function findPopperInstance(target) {
  return popperInstances.find(function (instance) {
    return instance.state.elements.popper === document.getElementById(target);
  });
}; // Add or remove classes on clicking a trigger


var handleClick = function handleClick(event) {
  // Detect if we are clicking another menu
  // if (event.target.dataset.menu) {
  //   [...popperInstances].map((instance) => {
  //     hidePopper(instance);
  //   });
  // }
  event.stopPropagation();
  var trigger = event.currentTarget;
  var targetEl = findDropdown(trigger);
  var instance = findPopperInstance(targetEl.id);

  if (!instance) {
    showPopper(trigger, targetEl);
  } else {
    hidePopper(instance);
  }

  if (popperInstances.length > 1) {
    hidePopper(popperInstances[0]);
  }
}; // Custom select


var handleSelectClick = function handleSelectClick(event) {
  var selectedItem = event.currentTarget.querySelector('.c-menu__label').cloneNode(true);
  var targetSelect = findSelect(event.currentTarget);
  var previousItem = targetSelect.querySelector('.c-select-custom__value');
  selectedItem.classList.replace('c-menu__label', 'c-select-custom__value');
  previousItem.parentNode.replaceChild(selectedItem, previousItem);
  var popper = findPopperInstance(targetSelect.dataset.menu);
  popper.state.elements.popper.removeAttribute('data-show');
  popper.state.elements.popper.classList.remove(menuActiveClass);
  destroy(popper);
}; // Hide all menus when clicking outside


var handleOutsideClick = function handleOutsideClick(event) {
  if (!popperInstances.length) return;
  event.stopImmediatePropagation();
  var poppers = popperInstances.map(function (instance) {
    return instance.state.elements.popper;
  });
  if ((0, _util.isClickOutside)(event, _toConsumableArray(poppers))) [].concat(popperInstances).map(function (instance) {
    hidePopper(instance);
  });
}; // Loop through all triggers on the page
// Attach event listeners


menuTriggers.forEach(function (trigger) {
  return trigger.addEventListener('click', handleClick);
}); // Custom select code
// Attach event listeners

selectOptions.forEach(function (option) {
  return option.addEventListener('click', handleSelectClick);
}); // Add click listener on outside

document.addEventListener('click', handleOutsideClick);

},{"./util":14,"@popperjs/core":15}],9:[function(require,module,exports){
"use strict";

/* Navbar components
   ========================================================================== */
var headers = document.querySelectorAll('.c-navbar-components .c-navbar-components__header');

for (var i = 0; i < headers.length; i++) {
  headers[i].addEventListener('click', openCurrNavbar);
} //Use this as the callback if you would like multiple dropdowns to be open


function openNavbar(e) {
  var parent = this.parentElement;
  var article = this.nextElementSibling;

  if (!parent.classList.contains('js-active')) {
    parent.classList.add('js-active');
    article.style.maxHeight = article.scrollHeight + 'px';
  } else {
    parent.classList.remove('js-active');
    article.style.maxHeight = '0px';
  }
} //Use this as the callback if you would like no more than one dropdown to be open


function openCurrNavbar(e) {
  for (var i = 0; i < headers.length; i++) {
    var parent = headers[i].parentElement;
    var article = headers[i].nextElementSibling;

    if (this === headers[i] && !parent.classList.contains('js-active')) {
      parent.classList.add('js-active');
      article.style.maxHeight = article.scrollHeight + 'px';
    } else {
      parent.classList.remove('js-active');
      article.style.maxHeight = '0px';
    }
  }
}

},{}],10:[function(require,module,exports){
"use strict";

var _core = require("@popperjs/core");

var _util = require("./util");

// Collect all triggers on the page
var popoverTriggers = document.querySelectorAll('[data-popover]'); // Global settings

var popoverMargin = '16';
var popoverOpen = false;
var targetEl;
var openPopover;
var popoverId;
var popoverTrigger; // Find target popover element

function findpopover(triggerEl) {
  var targetId = triggerEl.getAttribute('data-popover');
  return document.getElementById(targetId);
}

var popperInstance = null;

function create(triggerEl, targetEl) {
  var placement = triggerEl.getAttribute('data-popover-placement') || 'top';
  popperInstance = (0, _core.createPopper)(triggerEl, targetEl, {
    placement: placement,
    modifiers: [{
      name: 'offset',
      options: {
        offset: [0, popoverMargin]
      }
    }, {
      name: 'arrow',
      options: {
        padding: 4 // 4px from the edges of the popper

      }
    }]
  });
}

function destroy() {
  if (popperInstance) {
    popperInstance.destroy();
    popperInstance = null;
  }
}

function togglePopover(e) {
  if (popoverOpen) {
    openPopover = document.querySelector('.c-popover[data-show]');
    popoverId = openPopover.getAttribute('id');
    popoverTrigger = document.querySelector("[data-popover='".concat(popoverId, "']"));
  }

  if (openPopover && popoverTrigger && e.currentTarget !== popoverTrigger) {
    openPopover.removeAttribute('data-show');
    destroy();
    targetEl = findpopover(e.currentTarget);
    targetEl.setAttribute('data-show', '');
    create(e.currentTarget, targetEl);
    popoverOpen = true;
  } else {
    targetEl = findpopover(e.currentTarget);
    popoverOpen = !popoverOpen;

    if (popoverOpen) {
      create(e.currentTarget, targetEl);
      targetEl.setAttribute('data-show', '');
    } else {
      destroy();
      targetEl.removeAttribute('data-show');
    }
  }
}

popoverTriggers.forEach(function (trigger) {
  return trigger.addEventListener('click', togglePopover);
});
document.addEventListener('click', function (e) {
  if (popoverOpen) {
    openPopover = document.querySelector('.c-popover[data-show]');
    popoverId = openPopover.getAttribute('id');
    popoverTrigger = document.querySelector("[data-popover='".concat(popoverId, "']"));
  }

  if (popoverOpen && openPopover && popoverTrigger && (0, _util.isClickOutside)(e, [popoverTrigger, openPopover])) {
    popoverOpen = false;
    openPopover.removeAttribute('data-show');
    destroy();
  }
});

},{"./util":14,"@popperjs/core":15}],11:[function(require,module,exports){
"use strict";

var _core = require("@popperjs/core");

// Collect all triggers on the page
var tooltipTriggers = document.querySelectorAll('[data-tooltip]');
var tooltips = document.querySelectorAll('.c-tooltip'); // Global settings

var tooltipMargin = '16';
var showEvents = ['mouseenter', 'focus'];
var hideEvents = ['mouseleave', 'blur'];

var _loop = function _loop(i) {
  // Attach event listeners
  showEvents.forEach(function (event) {
    tooltipTriggers[i].addEventListener(event, show);
  });
  hideEvents.forEach(function (event) {
    tooltipTriggers[i].addEventListener(event, hide);
  });
};

for (var i = 0; i < tooltipTriggers.length; i += 1) {
  _loop(i);
} // Find target tooltip element


function findTooltip(triggerEl) {
  var targetId = triggerEl.getAttribute('data-tooltip');
  return document.getElementById(targetId);
}

;
var popperInstance = null;

function create(triggerEl, targetEl) {
  var placement = triggerEl.getAttribute('data-tooltip-placement') || 'top';
  popperInstance = (0, _core.createPopper)(triggerEl, targetEl, {
    placement: placement,
    modifiers: [{
      name: 'offset',
      options: {
        offset: [0, tooltipMargin]
      }
    }, {
      name: 'arrow',
      options: {
        padding: 4 // 4px from the edges of the popper

      }
    }]
  });
}

function destroy() {
  if (popperInstance) {
    popperInstance.destroy();
    popperInstance = null;
  }
}

function show(e) {
  var targetEl = findTooltip(e.currentTarget);
  targetEl.setAttribute('data-show', '');
  create(e.currentTarget, targetEl);
}

function hide(e) {
  var targetEl = findTooltip(e.currentTarget);
  targetEl.removeAttribute('data-show');
  destroy();
}

},{"@popperjs/core":15}],12:[function(require,module,exports){
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Toc = /*#__PURE__*/function () {
  function Toc(el) {
    _classCallCheck(this, Toc);

    this.el = el;
    this.toc__nav__list = this.el.querySelector(".c-table-of-content__nav");
    this.toc__nav__list__items = this.el.querySelectorAll("a.c-table-of-content__nav__item");
    this.toc__content__list = document.querySelector(".c-table-of-content__content");
    this.toc__content__list__items = document.querySelectorAll(".c-table-of-content__content__item");
    this.current__index = 0;
    this.current_state = this.el.querySelector(".current-state");
    this.relativeWidth = this.toc__nav__list.classList.contains('relativeWidth') ? true : false;
    this.toc__back_to_top_btn = this.el.querySelector(".back-to-top");
    this.toc__back_to_top_btn__link = this.toc__back_to_top_btn.querySelector("button");
    this.toc__back_to_top_btn__visible = false;
    this.el_init_top = this.el.offsetTop;
    this.header_height = document.querySelector("header").offsetHeight;
    this.main_title_height = document.querySelector(".main-title").offsetHeight;
    this.elPaddingTop = parseFloat(window.getComputedStyle(this.el, null).getPropertyValue('padding-top'));
    this.toc__content__list__items__posTop_from_parent = [];
    this.lastScrollTop = 0;
    this.lastScrollTopd = 0;
    this.currentUrl = window.location.href.split("#")[0];
    this.whatever = this.callBackScrollEvent.bind(this, el);
    this.whateverHash = this.callBackHashEvent.bind(this, el);
    console.log(this.el_init_top);
    console.log(this.header_height);
    console.log(this.main_title_height);
    this.init();
  }

  _createClass(Toc, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.current_nav_item = this.toc__nav__list.querySelector("[aria-selected]");
      this.toc__back_to_top_btn.style.display = 'none'; //- Set current item selected             

      var current_index = _toConsumableArray(this.toc__nav__list__items).indexOf(this.current_nav_item);

      this.toc__nav__list__items.forEach(function (table_of_content__item, i) {
        // Attach events to the toc__nav__list__items if the table_of_content__item have toc__content. Otherwise they just act as links
        table_of_content__item.setAttribute('data-id', _this.convertToSlug(table_of_content__item.textContent));

        _this.toc__content__list__items[i].setAttribute('data-id', _this.convertToSlug(table_of_content__item.textContent));

        if (_this.toc__content__list__items.length) _this.attachClickEvents(table_of_content__item, i);

        if (i === _this.toc__nav__list__items.length - 1) {
          _this.callbackItemsSet(current_index, _this.current_nav_item);
        }
      });
      this.toc__back_to_top_btn__link.addEventListener("click", function (e) {
        e.preventDefault();

        _this.scrollTo(_this.toc__nav__list);
      });
      window.addEventListener('hashchange', this.whateverHash);
    }
  }, {
    key: "attachClickEvents",
    value: function attachClickEvents(table_of_content__item, i) {
      var _this2 = this;

      // Handle clicking of toc__items for mouse users
      table_of_content__item.addEventListener("click", function (e) {
        e.preventDefault();
        e.currentTarget.classList.add("clicked");
        window.removeEventListener("scroll", _this2.whatever);
        window.removeEventListener("hashchange", _this2.whateverHash);

        var currentToc = _this2.toc__nav__list.querySelector("[aria-selected]");

        _this2.switchTocAfterClick(currentToc, e.currentTarget);
      });
    }
  }, {
    key: "attachScrollEvents",
    value: function attachScrollEvents() {
      window.addEventListener("scroll", this.whatever);
    }
  }, {
    key: "callBackScrollEvent",
    value: function callBackScrollEvent(el) {
      var toc__posTop_from_viewport = this.el.getBoundingClientRect().top - this.el_init_top - 128 - 26 - 120; // 126 for header and title fiex, 26 for padding, 50 for a gap

      var window__posTop_from_viewport = window.scrollY;
      var st = window.pageYOffset || document.documentElement.scrollTop; //- Handling back-to-top btn

      if (-this.el.getBoundingClientRect().top > this.toc__nav__list.clientHeight) {
        if (this.toc__back_to_top_btn__visible === false) {
          this.fadeIn(this.toc__back_to_top_btn);
          this.toc__back_to_top_btn__visible = true;
        }
      } else {
        if (this.toc__back_to_top_btn__visible === true) {
          this.fadeOut(this.toc__back_to_top_btn);
          this.toc__back_to_top_btn__visible = false;
        }
      }

      var std = window.pageYOffset || document.documentElement.scrollTop;
      var index_scroll = 1;

      if (std > this.lastScrollTop) {
        // downscroll
        index_scroll = -1;
      } else {
        // upscroll
        index_scroll = 1;
      }

      this.lastScrollTop = std <= 0 ? 0 : std; //- Handling active states on scroll

      for (var i = 0; i < this.toc__content__list__items__posTop_from_parent.length; i++) {
        if (-toc__posTop_from_viewport > this.toc__content__list__items__posTop_from_parent[i] && -toc__posTop_from_viewport < this.toc__content__list__items__posTop_from_parent[i + 1]) {
          if (this.current__index != this.toc__nav__list__items[i]) {
            window.removeEventListener("hashchange", this.whateverHash);
            this.resetActiveToc(this.toc__nav__list__items[i], this.toc__content__list__items[i], true);
            var that = this;
            setTimeout(function () {
              window.addEventListener("hashchange", that.whateverHash);
            }, 750);
          }
        }
      }
    }
  }, {
    key: "callBackHashEvent",
    value: function callBackHashEvent(el) {
      var hash = window.top.location.hash.substr(1);

      if (hash.length) {
        window.removeEventListener("scroll", this.whatever);
        var current_hash_content_item = this.toc__content__list.querySelector('[data-id="' + hash + '"]');
        this.resetActiveToc(this.toc__nav__list.querySelector('[data-id="' + hash + '"]'), current_hash_content_item, true);
        this.scrollTo(current_hash_content_item);
        var that = this;
        setTimeout(function () {
          window.addEventListener("scroll", that.whatever);
        }, 750);
      }
    }
  }, {
    key: "callbackItemsSet",
    value: function callbackItemsSet(current_index, current_nav_item) {
      var _this3 = this;

      console.log("callbackItemsSet");
      this.toc__nav__list__items.forEach(function (table_of_content__item, i) {
        _this3.toc__content__list__items__posTop_from_parent.push(Math.round(_this3.toc__content__list__items[i].offsetTop));
      }); //- Get # Hashtag from url (ex: lentreprise-partage)

      var hash = window.top.location.hash.substr(1);
      console.log(hash);

      if (hash.length) {
        var current_hash_content_item = this.toc__content__list.querySelector('[data-id="' + hash + '"]');

        var current_hash_index = _toConsumableArray(this.toc__content__list__items).indexOf(current_hash_content_item);

        this.resetActiveToc(this.toc__nav__list.querySelector('[data-id="' + hash + '"]'), current_hash_content_item, true);
        this.scrollTo(this.toc__content__list__items[current_hash_index]);
      } else {
        this.resetActiveToc(current_nav_item, this.toc__content__list__items[current_index], false);
      }

      var that = this;
      setTimeout(function () {
        that.attachScrollEvents();
      }, 750);
    }
  }, {
    key: "resetActiveToc",
    value: function resetActiveToc(newTocNavItem, newTocContentItem, setHash) {
      this.positionTopCurrentState(newTocNavItem);

      if (setHash) {
        window.location.hash = this.convertToSlug(newTocNavItem.textContent);
      }

      for (var i = 0; i < this.toc__nav__list__items.length; i++) {
        this.toc__nav__list__items[i].removeAttribute("aria-selected");
      }

      for (var j = 0; j < this.toc__content__list__items.length; j++) {
        this.toc__content__list__items[j].classList.remove("active");
      }

      if (newTocNavItem) newTocNavItem.setAttribute("aria-selected", "true");
      if (newTocContentItem) newTocContentItem.classList.add("active");
      this.current__index = newTocNavItem;
    }
  }, {
    key: "switchTocAfterClick",
    value: function switchTocAfterClick(oldTocNavItem, newTocNavItem) {
      newTocNavItem.focus();

      var index = _toConsumableArray(this.toc__nav__list__items).indexOf(newTocNavItem);

      this.resetActiveToc(newTocNavItem, this.toc__content__list__items[index], true);
      this.scrollTo(this.toc__content__list__items[index]);
      var that = this;
      setTimeout(function () {
        newTocNavItem.classList.remove("clicked");
      }, 400);
      setTimeout(function () {
        window.addEventListener("scroll", that.whatever);
        window.addEventListener("hashchange", that.whateverHash);
      }, 750);
    }
  }, {
    key: "positionTopCurrentState",
    value: function positionTopCurrentState(child) {
      // Position of the blue background
      var table_of_content_Y = this.toc__nav__list.getBoundingClientRect().top;

      if (child) {
        var itemHeight = child.clientHeight;
        var relativePosTop = child.getBoundingClientRect().top - table_of_content_Y;
        this.current_state.style.top = relativePosTop + 'px';
        this.current_state.style.height = itemHeight + 'px';

        if (this.relativeWidth) {
          var childWidth = child.offsetWidth;
          this.current_state.style.width = childWidth + 'px';
        }
      }
    }
  }, {
    key: "scrollTo",
    value: function scrollTo(element) {
      var parentPosition = this.el.getBoundingClientRect().top + window.scrollY - this.header_height - this.main_title_height;

      var index = _toConsumableArray(this.toc__content__list__items).indexOf(element);

      var gap = index === 0 ? 176 + this.elPaddingTop : 150 + this.elPaddingTop; // custom values from fixed elements

      var elementPosition = element.offsetTop + (parentPosition - gap);
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
  }, {
    key: "convertToSlug",
    value: function convertToSlug(str) {
      str = str.replace(/^\s+|\s+$/g, ''); // trim

      str = str.toLowerCase(); // remove accents, swap ñ for n, etc

      var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
      var to = "aaaaeeeeiiiioooouuuunc------";

      for (var i = 0, l = from.length; i < l; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
      }

      str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
      .replace(/\s+/g, '-') // collapse whitespace and replace by -
      .replace(/-+/g, '-'); // collapse dashes

      return str;
    }
  }, {
    key: "fadeOut",
    value: function fadeOut(el) {
      el.style.opacity = 1;

      (function fade() {
        if ((el.style.opacity -= .1) < 0) {
          el.style.display = "none";
        } else {
          requestAnimationFrame(fade);
        }
      })();
    }
  }, {
    key: "fadeIn",
    value: function fadeIn(el, display) {
      el.style.opacity = 0;
      el.style.display = display || "block";

      (function fade() {
        var val = parseFloat(el.style.opacity);

        if (!((val += .1) > 1)) {
          el.style.opacity = val;
          requestAnimationFrame(fade);
        }
      })();
    }
  }]);

  return Toc;
}();

var toclists = document.querySelectorAll(".c-table-of-content");

if (toclists.length) {
  _toConsumableArray(toclists).map(function (toclist) {
    return new Toc(toclist);
  });
}

},{}],13:[function(require,module,exports){
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* JS adapted from https://inclusive-components.design/tabbed-interfaces/ */
var Tabs = /*#__PURE__*/function () {
  function Tabs(el) {
    _classCallCheck(this, Tabs);

    this.el = el;
    console.log(this.el);
    this.tablist = this.el.querySelector("ul");
    this.tabs = this.el.querySelectorAll("a.c-tabs__item");
    this.panels = this.el.querySelectorAll(".c-tabs__section");
    this.init();
  }

  _createClass(Tabs, [{
    key: "init",
    value: function init() {
      var _this = this;

      // Add the tablist role to the first <ul> in the .tabbed container
      this.tablist.setAttribute("role", "tablist"); // Add semantics and remove user focusability for each tab

      this.tabs.forEach(function (tab, i) {
        tab.setAttribute("role", "tab");
        tab.setAttribute("id", "tab" + (i + 1));
        tab.setAttribute("tabindex", "-1");
        tab.parentNode.setAttribute("role", "presentation"); // Attach events to the tabs if the tabs have panels. Otherwise they just act as links

        if (_this.panels.length) _this.attachEvents(tab, i);
      }); // Add tab panel semantics and hide them all

      this.panels.forEach(function (panel, i) {
        panel.setAttribute("role", "tabpanel");
        panel.setAttribute("tabindex", "-1");
        panel.setAttribute("aria-labelledby", _this.tabs[i].id);
        panel.hidden = true;
      }); // Initially activate the first tab and reveal the first tab panel

      if (this.panels[0]) {
        this.tabs[0].removeAttribute("tabindex");
        this.tabs[0].setAttribute("aria-selected", "true");
        this.panels[0].hidden = false;
      }
    }
  }, {
    key: "attachEvents",
    value: function attachEvents(tab) {
      var _this2 = this;

      // Handle clicking of tabs for mouse users
      tab.addEventListener("click", function (e) {
        e.preventDefault();

        var currentTab = _this2.tablist.querySelector("[aria-selected]");

        if (e.currentTarget !== currentTab) {
          _this2.switchTab(currentTab, e.currentTarget);
        }
      }); // Handle keydown events for keyboard users

      tab.addEventListener("keydown", function (e) {
        // Get the index of the current tab in the tabs node list
        var index = _toConsumableArray(_this2.tabs).indexOf(e.currentTarget); // Work out which key the user is pressing and
        // Calculate the new tab's index where appropriate


        var dir = e.which === 37 ? index - 1 : e.which === 39 ? index + 1 : e.which === 40 ? "down" : null;

        if (dir !== null) {
          e.preventDefault(); // If the down key is pressed, move focus to the open panel,
          // otherwise switch to the adjacent tab

          dir === "down" ? _this2.panels[index].focus() : _this2.tabs[dir] ? _this2.switchTab(e.currentTarget, _this2.tabs[dir]) : void 0;
        }
      });
    }
  }, {
    key: "switchTab",
    value: function switchTab(oldTab, newTab) {
      newTab.focus(); // Make the active tab focusable by the user (Tab key)

      newTab.removeAttribute("tabindex"); // Set the selected state

      newTab.setAttribute("aria-selected", "true");
      oldTab.removeAttribute("aria-selected");
      oldTab.setAttribute("tabindex", "-1"); // Get the indices of the new and old tabs to find the correct
      // tab panels to show and hide

      var index = _toConsumableArray(this.tabs).indexOf(newTab);

      var oldIndex = _toConsumableArray(this.tabs).indexOf(oldTab);

      if (this.panels[oldIndex]) this.panels[oldIndex].hidden = true;
      if (this.panels[index]) this.panels[index].hidden = false;
    }
  }]);

  return Tabs;
}();

var tablists = document.querySelectorAll(".c-tabs");

if (tablists.length) {
  _toConsumableArray(tablists).map(function (tablist) {
    return new Tabs(tablist);
  });
}

},{}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isClickOutside = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Check if click is outside element
var isClickOutside = function isClickOutside(event, elements) {
  var excludedElements = elements.forEach === undefined ? [elements] : elements;
  var target = event.target;
  var isOutside = true;

  do {
    excludedElements.forEach(function (excludedElement) {
      // this is a click inside
      if (target === excludedElement) {
        isOutside = false;
      }
    }); // traverse upwards

    target = target.parentNode;
  } while (target);

  return isOutside;
};

exports.isClickOutside = isClickOutside;

var SwitchViewButton = /*#__PURE__*/function () {
  function SwitchViewButton(els) {
    _classCallCheck(this, SwitchViewButton);

    this.els = els;
    this.target__el = document.querySelector('.' + this.els[0].getAttribute('data-switch-target'));
    this.init();
  }

  _createClass(SwitchViewButton, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.els.forEach(function (el, i) {
        // Attach events
        el.addEventListener("click", function (e) {
          if (el.getAttribute('data-toggle') === "disabled") {
            _this.toggleAttribute(_this.target__el, "disabled");
          } else {
            e.preventDefault();

            _this.toggleClass(_this.target__el, el.getAttribute('data-switch-target') + '--' + el.getAttribute('data-toggle'));

            _this.els.forEach(function (il) {
              //- Toggle class for other buttons around
              _this.toggleClass(il, "c-button--secondary");

              _this.toggleClass(il, "c-button--primary");
            });
          }
        });
      });
    }
  }, {
    key: "toggleClass",
    value: function toggleClass(target, _toggleClass) {
      target.classList.toggle(_toggleClass);
    }
  }, {
    key: "toggleAttribute",
    value: function toggleAttribute(target, attribute) {
      if (target.hasAttribute(attribute)) {
        target.removeAttribute(attribute);
      } else {
        target.setAttribute(attribute, "");
      }
    }
  }]);

  return SwitchViewButton;
}();

var switchViewButtons = document.querySelectorAll("[data-toggle]");

if (switchViewButtons.length) {
  new SwitchViewButton(switchViewButtons);
}

var ScrollToLink = /*#__PURE__*/function () {
  function ScrollToLink(els) {
    _classCallCheck(this, ScrollToLink);

    this.els = els;
    this.target__el = document.querySelector('.' + this.els[0].getAttribute('data-scroll-target-id'));
    console.log(els);
    this.init();
  }

  _createClass(ScrollToLink, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      this.els.forEach(function (el, i) {
        // Attach events
        el.addEventListener("click", function (e) {
          e.preventDefault();
          var scrollToElement = document.querySelector('#' + el.getAttribute("data-scroll-target-id"));

          _this2.scrollTo(scrollToElement);
        });
      });
    }
  }, {
    key: "scrollTo",
    value: function scrollTo(element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth"
      });
    }
  }]);

  return ScrollToLink;
}();

var ScrollToLinks = document.querySelectorAll("[data-scroll-to]");

if (ScrollToLinks.length) {
  new ScrollToLink(ScrollToLinks);
}

},{}],15:[function(require,module,exports){
(function (process){(function (){
/**
 * @popperjs/core v2.9.2 - MIT License
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function getBoundingClientRect(element) {
  var rect = element.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
    x: rect.left,
    y: rect.top
  };
}

function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

// Composite means it takes into account transforms as well as layout.

function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement);
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}

function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element) // fallback

  );
}

function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }

  return getScrollParent(getParentNode(node));
}

/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}

function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
  var isIE = navigator.userAgent.indexOf('Trident') !== -1;

  if (isIE && isHTMLElement(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = getComputedStyle(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = getParentNode(element);

  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return [].concat(args).reduce(function (p, c) {
    return p.replace(/%s/, c);
  }, str);
}

var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];
function validateModifiers(modifiers) {
  modifiers.forEach(function (modifier) {
    Object.keys(modifier).forEach(function (key) {
      switch (key) {
        case 'name':
          if (typeof modifier.name !== 'string') {
            console.error(format(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
          }

          break;

        case 'enabled':
          if (typeof modifier.enabled !== 'boolean') {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
          }

        case 'phase':
          if (modifierPhases.indexOf(modifier.phase) < 0) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + modifierPhases.join(', '), "\"" + String(modifier.phase) + "\""));
          }

          break;

        case 'fn':
          if (typeof modifier.fn !== 'function') {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'effect':
          if (typeof modifier.effect !== 'function') {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'requires':
          if (!Array.isArray(modifier.requires)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
          }

          break;

        case 'requiresIfExists':
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
          }

          break;

        case 'options':
        case 'data':
          break;

        default:
          console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function (s) {
            return "\"" + s + "\"";
          }).join(', ') + "; but \"" + key + "\" was provided.");
      }

      modifier.requires && modifier.requires.forEach(function (requirement) {
        if (modifiers.find(function (mod) {
          return mod.name === requirement;
        }) == null) {
          console.error(format(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}

function uniqueBy(arr, fn) {
  var identifiers = new Set();
  return arr.filter(function (item) {
    var identifier = fn(item);

    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}

function getBasePlacement(placement) {
  return placement.split('-')[0];
}

function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

function getViewportRect(element) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}

var max = Math.max;
var min = Math.min;
var round = Math.round;

// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;

  if (getComputedStyle(body || html).direction === 'rtl') {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

function getInnerBoundingClientRect(element) {
  var rect = getBoundingClientRect(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isHTMLElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

  if (!isElement(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

function getVariation(placement) {
  return placement.split('-')[1];
}

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;
    }
  }

  return offsets;
}

function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var referenceElement = state.elements.reference;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(referenceElement);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(options) {
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason

        if (process.env.NODE_ENV !== "production") {
          var modifiers = uniqueBy([].concat(orderedModifiers, state.options.modifiers), function (_ref) {
            var name = _ref.name;
            return name;
          });
          validateModifiers(modifiers);

          if (getBasePlacement(state.options.placement) === auto) {
            var flipModifier = state.orderedModifiers.find(function (_ref2) {
              var name = _ref2.name;
              return name === 'flip';
            });

            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', 'present and enabled to work.'].join(' '));
            }
          }

          var _getComputedStyle = getComputedStyle(popper),
              marginTop = _getComputedStyle.marginTop,
              marginRight = _getComputedStyle.marginRight,
              marginBottom = _getComputedStyle.marginBottom,
              marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
          // cause bugs with positioning, so we'll warn the consumer


          if ([marginTop, marginRight, marginBottom, marginLeft].some(function (margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', 'between the popper and its reference element or boundary.', 'To replicate margin, use the `offset` modifier, as well as', 'the `padding` option in the `preventOverflow` and `flip`', 'modifiers.'].join(' '));
          }
        }

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          if (process.env.NODE_ENV !== "production") {
            console.error(INVALID_ELEMENT_ERROR);
          }

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (process.env.NODE_ENV !== "production") {
            __debug_loops__ += 1;

            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR);
              break;
            }
          }

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      if (process.env.NODE_ENV !== "production") {
        console.error(INVALID_ELEMENT_ERROR);
      }

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}

var passive = {
  passive: true
};

function effect$2(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


var eventListeners = {
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect$2,
  data: {}
};

function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var popperOffsets$1 = {
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
};

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(round(x * dpr) / dpr) || 0,
    y: round(round(y * dpr) / dpr) || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets;

  var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === 'function' ? roundOffsets(offsets) : offsets,
      _ref3$x = _ref3.x,
      x = _ref3$x === void 0 ? 0 : _ref3$x,
      _ref3$y = _ref3.y,
      y = _ref3$y === void 0 ? 0 : _ref3$y;

  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left;
  var sideY = top;
  var win = window;

  if (adaptive) {
    var offsetParent = getOffsetParent(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);

      if (getComputedStyle(offsetParent).position !== 'static') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === top) {
      sideY = bottom; // $FlowFixMe[prop-missing]

      y -= offsetParent[heightProp] - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === left) {
      sideX = right; // $FlowFixMe[prop-missing]

      x -= offsetParent[widthProp] - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref4) {
  var state = _ref4.state,
      options = _ref4.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  if (process.env.NODE_ENV !== "production") {
    var transitionProperty = getComputedStyle(state.elements.popper).transitionProperty || '';

    if (adaptive && ['transform', 'top', 'right', 'bottom', 'left'].some(function (property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(['Popper: Detected CSS transitions on at least one of the following', 'CSS properties: "transform", "top", "right", "bottom", "left".', '\n\n', 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', 'for smooth transitions, or remove these properties from the CSS', 'transition declaration on the popper element if only transitioning', 'opacity or background-color for example.', '\n\n', 'We recommend using the popper element as a wrapper around an inner', 'element that can have any CSS property transitioned for animations.'].join(' '));
    }
  }

  var commonStyles = {
    placement: getBasePlacement(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var computeStyles$1 = {
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
};

// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect$1(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


var applyStyles$1 = {
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect$1,
  requires: ['computeStyles']
};

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var offset$1 = {
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
};

var hash$1 = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash$1[matched];
  });
}

var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}

function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;

    if (process.env.NODE_ENV !== "production") {
      console.error(['Popper: The `allowedAutoPlacements` option did not allow any', 'placements. Ensure the `placement` option matches the variation', 'of the allowed placements.', 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(' '));
    }
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }

  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = getBasePlacement(placement);

    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }

    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


var flip$1 = {
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
};

function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}

function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis || checkAltAxis) {
    var mainSide = mainAxis === 'y' ? top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min$1 = popperOffsets[mainAxis] + overflow[mainSide];
    var max$1 = popperOffsets[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
    var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;

    if (checkMainAxis) {
      var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
      popperOffsets[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset;
    }

    if (checkAltAxis) {
      var _mainSide = mainAxis === 'x' ? top : left;

      var _altSide = mainAxis === 'x' ? bottom : right;

      var _offset = popperOffsets[altAxis];

      var _min = _offset + overflow[_mainSide];

      var _max = _offset - overflow[_altSide];

      var _preventedOffset = within(tether ? min(_min, tetherMin) : _min, _offset, tether ? max(_max, tetherMax) : _max);

      popperOffsets[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var preventOverflow$1 = {
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
};

var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? top : left;
  var maxProp = axis === 'y' ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (process.env.NODE_ENV !== "production") {
    if (!isHTMLElement(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', 'To use an SVG arrow, wrap it in an HTMLElement that will be used as', 'the arrow.'].join(' '));
    }
  }

  if (!contains(state.elements.popper, arrowElement)) {
    if (process.env.NODE_ENV !== "production") {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', 'element.'].join(' '));
    }

    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


var arrow$1 = {
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
};

function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


var hide$1 = {
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
};

var defaultModifiers$1 = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1];
var createPopper$1 = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers$1
}); // eslint-disable-next-line import/no-unused-modules

var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

exports.applyStyles = applyStyles$1;
exports.arrow = arrow$1;
exports.computeStyles = computeStyles$1;
exports.createPopper = createPopper;
exports.createPopperLite = createPopper$1;
exports.defaultModifiers = defaultModifiers;
exports.detectOverflow = detectOverflow;
exports.eventListeners = eventListeners;
exports.flip = flip$1;
exports.hide = hide$1;
exports.offset = offset$1;
exports.popperGenerator = popperGenerator;
exports.popperOffsets = popperOffsets$1;
exports.preventOverflow = preventOverflow$1;


}).call(this)}).call(this,require('_process'))
},{"_process":16}],16:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}]},{},[1]);
