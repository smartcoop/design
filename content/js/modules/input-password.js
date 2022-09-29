/* ==========================================================================
  Input password (view password) toggle
   ========================================================================== */

class InputPassword {
  constructor(el) {
    this.el = el;
    this.button = el.parentElement.querySelector(
      "button[data-password-toggle]"
      );
    this.button.addEventListener("click", function(event) {
      this.el = this.parentElement.querySelector("input");
      if (this.el.type === "password") {
        this.el.type = "text";
      } else {
        this.el.type = "password";
      }
    });
  }
}

const passwordsInputs = document.querySelectorAll("input[type=password]");

if (passwordsInputs.length) {
  [...passwordsInputs].map((input) => new InputPassword(input));
}
