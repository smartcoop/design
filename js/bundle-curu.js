(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

require("./modules/table-of-content");

},{"./modules/table-of-content":2}],2:[function(require,module,exports){
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

/* Table of content components
   ========================================================================== */
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

      this.toc__nav__list__items.forEach(function (table_of_content__item, i) {
        _this3.toc__content__list__items__posTop_from_parent.push(Math.round(_this3.toc__content__list__items[i].offsetTop));
      });
      this.toc__content__list__items__posTop_from_parent.push(Math.round(this.toc__content__list__items[11].offsetTop + this.toc__content__list__items[11].offsetHeight)); //- Get # Hashtag from url (ex: lentreprise-partage)

      var hash = window.top.location.hash.substr(1);

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

},{}]},{},[1]);
