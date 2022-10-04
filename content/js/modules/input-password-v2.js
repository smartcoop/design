/* ==========================================================================
Input password (view password) toggle
========================================================================== */
var InputPassword = /*#__PURE__*/function () {
  function InputPassword(el) {
    _classCallCheck(this, InputPassword);
    
    this.el = el;
    this.button = el.parentElement.querySelector("[data-password-toggle]");
    this.attach();
  }
  
  _createClass(InputPassword, [{
    key: "attach",
    value: function attach() {
      if (this.button) {
        this.button.addEventListener("click", this.onClick.bind(this));
      }
    }
  }, {
    key: "onClick",
    value: function onClick(event) {
      event.preventDefault();
      
      if (this.el.type === "password") {
        this.el.type = "text";
      } else {
        this.el.type = "password";
      }
    }
  }]);
  
  return InputPassword;
}();

var passwordsInputs = document.querySelectorAll("input[type=password]");

if (passwordsInputs.length) {
  _toConsumableArray(passwordsInputs).map(function (input) {
    return new InputPassword(input);
  });
}