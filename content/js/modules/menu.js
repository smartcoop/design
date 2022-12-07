import { createPopper, preventOverflow } from '@popperjs/core';
import { isClickOutside } from './util';

/* Menu JS
========================================================================== */

// Collect all triggers on the page except for the sidebar
const menuTriggers = document.querySelectorAll('[data-menu]:not(.js-no-action)');
const selectOptions = document.querySelectorAll('[role="option"]');

// Global settings
const menuActiveClass = 'c-menu--visible';
var menuButtonActiveClass = 'c-menu-button-active';
const dropdownMargin = 6;
let popperInstances = [];

// Find target dropdown element
const findDropdown = (triggerEl) => {
  const targetId = triggerEl.getAttribute('data-menu');
  return document.getElementById(targetId);
};

// find Select for clicked option
const findSelect = (element) => {
  return document.querySelector(`[data-menu="${element.parentElement.id}`);
};

// Position dropdown
function create(triggerEl, targetEl) {
  const placement = triggerEl.dataset.menuPlacement || 'bottom-end';
  const samewidthEnable = !!triggerEl.dataset.menuSamewidth || false;
  const offset = triggerEl.dataset.menuOffset || dropdownMargin;
  
  let popperInstance = new createPopper(triggerEl, targetEl, {
    placement,
    modifiers: [
      preventOverflow,
      {
        name: 'offset',
        options: {
          offset: [8, offset],
        },
      },
      {
        name: 'sameWidth',
        enabled: samewidthEnable,
        phase: 'beforeWrite',
        requires: ['computeStyles'],
        fn: ({ state }) => {
          state.styles.popper.width = `${state.rects.reference.width}px`;
        },
        effect: ({ state }) => {
          state.elements.popper.style.width = `${state.elements.reference.offsetWidth}px`;
        },
      },
    ],
  });
  
  popperInstances.push(popperInstance);
  
  
}

function showPopper(trigger, targetEl) {
  create(trigger, targetEl);
  trigger.classList.add(menuButtonActiveClass)
  targetEl.setAttribute('data-show', '');
  targetEl.classList.add(menuActiveClass);
}

function hidePopper(instance) {
  const popper = instance.state.elements.popper;
  var reference = instance.state.elements.reference;
  reference.classList.remove(menuButtonActiveClass);
  popper.removeAttribute('data-show');
  popper.classList.remove(menuActiveClass);
  destroy(instance);
}

function destroy(target) {
  const instance = popperInstances.find((instance) => instance === target);
  if (instance) {
    instance.destroy();
    popperInstances.splice(popperInstances.indexOf(target), 1);
  }
}

const findPopperInstance = (target) => popperInstances.find(
  (instance) =>
    instance.state.elements.popper === document.getElementById(target)
  ); // Add or remove classes on clicking a trigger

  const handleClick = (event) => {  
    // Detect if we are clicking another menu
    // if (event.target.dataset.menu) {
    //   [...popperInstances].map((instance) => {
    //     hidePopper(instance);
    //   });
    // }
    
    event.stopPropagation();
    const trigger = event.currentTarget;
    const targetEl = findDropdown(trigger);
    const instance = findPopperInstance(targetEl.id);
    
    if (!instance) {
      showPopper(trigger, targetEl);
    } else {
      hidePopper(instance);
    }
    
    if(popperInstances.length > 1) {
      hidePopper(popperInstances[0]);
    }
  };
  
  // Custom select
  const handleSelectClick = (event) => {
    const selectedItem = event.currentTarget
    .querySelector('.c-menu__label')
    .cloneNode(true);
    
    const targetSelect = findSelect(event.currentTarget);
    const previousItem = targetSelect.querySelector('.c-select-custom__value');
    
    selectedItem.classList.replace('c-menu__label', 'c-select-custom__value');
    previousItem.parentNode.replaceChild(selectedItem, previousItem);
    let popper = findPopperInstance(targetSelect.dataset.menu);
    popper.state.elements.popper.removeAttribute('data-show');
    popper.state.elements.popper.classList.remove(menuActiveClass);
    destroy(popper);
  };
  
  // Hide all menus when clicking outside
  const handleOutsideClick = (event) => {
    if (!popperInstances.length) return;
    
    event.stopImmediatePropagation();
    
    const poppers = popperInstances.map(
      (instance) => instance.state.elements.popper
      );
      
      if (isClickOutside(event, [...poppers]))
      [...popperInstances].map((instance) => {
        hidePopper(instance);
      });
    };
    
    // Loop through all triggers on the page
    // Attach event listeners
    menuTriggers.forEach((trigger) =>
    trigger.addEventListener('click', handleClick)
    );
    
    // Custom select code
    // Attach event listeners
    selectOptions.forEach((option) =>
    option.addEventListener('click', handleSelectClick)
    );
    
    // Add click listener on outside
    document.addEventListener('click', handleOutsideClick);