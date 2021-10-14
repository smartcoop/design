/* alert JS
   ========================================================================== */

 class CloseAlert {
  constructor(alert) {
      this.alertClass = alert;
      this.closeButton = alert.querySelector('[data-alert-close]');
      this.init();
  }

  init() {
    const parentClassScope = this;
    this.closeButton.addEventListener('click', function(e){
      parentClassScope.alertClass.remove();
    });
  }
}

const closableAlerts = document.querySelectorAll('[data-alert-closable]');

if (closableAlerts.length) {
  [...closableAlerts].map((closableAlertsWithClick) => new CloseAlert(closableAlertsWithClick));
}
