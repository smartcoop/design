class InputPassword {
  constructor(el) {
    this.el = el;
    this.icons = el.parentElement.querySelectorAll(
      ".o-svg-icon-eye,.o-svg-icon-eye-off"
    );

    this.attach();
  }

  attach() {
    [...this.icons].map((icon) =>
      icon.addEventListener("click", this.onClick.bind(this))
    );
  }

  onClick(event) {
    event.preventDefault();

    if (this.el.type === "password") {
      this.el.type = "text";
    } else {
      this.el.type = "password";
    }
  }
}

const passwordsInputs = document.querySelectorAll("input[type=password]");

if (passwordsInputs.length) {
  [...passwordsInputs].map((input) => new InputPassword(input));
}
