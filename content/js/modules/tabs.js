/* JS adapted from https://inclusive-components.design/tabbed-interfaces/ */
class Tabs {
  constructor(el) {
    this.el = el;
    this.tablist = this.el.querySelector("ul");
    this.tabs = this.el.querySelectorAll("a.c-tabs__item");
    this.panels = this.el.querySelectorAll(".c-tabs__section");

    this.init();
  }

  init() {
    // Add the tablist role to the first <ul> in the .tabbed container
    this.tablist.setAttribute("role", "tablist");

    // Add semantics and remove user focusability for each tab
    this.tabs.forEach((tab, i) => {
      tab.setAttribute("role", "tab");
      tab.setAttribute("id", "tab" + (i + 1));
      tab.setAttribute("tabindex", "-1");
      tab.parentNode.setAttribute("role", "presentation");

      // Attach events to the tabs if the tabs have panels. Otherwise they just act as links
      if (this.panels.length) this.attachEvents(tab, i);
    });

    // Add tab panel semantics and hide them all
    this.panels.forEach((panel, i) => {
      panel.setAttribute("role", "tabpanel");
      panel.setAttribute("tabindex", "-1");
      panel.setAttribute("aria-labelledby", this.tabs[i].id);
      panel.hidden = true;
    });

    // Initially activate the first tab and reveal the first tab panel
    if (this.panels[0]) {
      this.tabs[0].removeAttribute("tabindex");
      this.tabs[0].setAttribute("aria-selected", "true");
      this.panels[0].hidden = false;
    }
  }

  attachEvents(tab) {
    // Handle clicking of tabs for mouse users
    tab.addEventListener("click", (e) => {
      e.preventDefault();
      let currentTab = this.tablist.querySelector("[aria-selected]");
      if (e.currentTarget !== currentTab) {
        this.switchTab(currentTab, e.currentTarget);
      }
    });

    // Handle keydown events for keyboard users
    tab.addEventListener("keydown", (e) => {
      // Get the index of the current tab in the tabs node list
      let index = [...this.tabs].indexOf(e.currentTarget);

      // Work out which key the user is pressing and
      // Calculate the new tab's index where appropriate
      let dir =
        e.which === 37
          ? index - 1
          : e.which === 39
          ? index + 1
          : e.which === 40
          ? "down"
          : null;

      if (dir !== null) {
        e.preventDefault();
        // If the down key is pressed, move focus to the open panel,
        // otherwise switch to the adjacent tab
        dir === "down"
          ? this.panels[index].focus()
          : this.tabs[dir]
          ? this.switchTab(e.currentTarget, this.tabs[dir])
          : void 0;
      }
    });
  }

  switchTab(oldTab, newTab) {
    newTab.focus();
    // Make the active tab focusable by the user (Tab key)
    newTab.removeAttribute("tabindex");
    // Set the selected state
    newTab.setAttribute("aria-selected", "true");
    oldTab.removeAttribute("aria-selected");
    oldTab.setAttribute("tabindex", "-1");
    // Get the indices of the new and old tabs to find the correct
    // tab panels to show and hide
    let index = [...this.tabs].indexOf(newTab);
    let oldIndex = [...this.tabs].indexOf(oldTab);
    if (this.panels[oldIndex]) this.panels[oldIndex].hidden = true;
    if (this.panels[index]) this.panels[index].hidden = false;
  }
}

const tablists = document.querySelectorAll(".c-tabs");

if (tablists.length) {
  [...tablists].map((tablist) => new Tabs(tablist));
}
