import { createPopper } from '@popperjs/core';

// Collect all triggers on the page
const tooltipTriggers = document.querySelectorAll('[data-tooltip]');
const tooltips = document.querySelectorAll('.c-tooltip');

// Global settings
const tooltipMargin = '16';

const showEvents = ['mouseenter', 'focus'];
const hideEvents = ['mouseleave', 'blur'];

for (let i = 0; i < tooltipTriggers.length; i += 1) {
  // Attach event listeners
  showEvents.forEach(event => {
    tooltipTriggers[i].addEventListener(event, show);
  });
  hideEvents.forEach(event => {
    tooltipTriggers[i].addEventListener(event, hide);
  });
}

// Find target tooltip element
function findTooltip(triggerEl) {
  const targetId = triggerEl.getAttribute('data-tooltip');
  return document.getElementById(targetId);
};

let popperInstance = null;

function create(triggerEl, targetEl) {
  const placement = triggerEl.getAttribute('data-tooltip-placement') || 'top';
  popperInstance = createPopper(triggerEl, targetEl, {
    placement: placement,
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, tooltipMargin],
        },
      },
      {
        name: 'arrow',
        options: {
          padding: 4, // 4px from the edges of the popper
        },
      },
    ],
  });
}

function destroy() {
  if (popperInstance) {
    popperInstance.destroy();
    popperInstance = null;
  }
}

function show(e) {
  const targetEl = findTooltip(e.currentTarget);
  targetEl.setAttribute('data-show', '');
  create(e.currentTarget, targetEl);
}

function hide(e) {
  const targetEl = findTooltip(e.currentTarget);
  targetEl.removeAttribute('data-show');
  destroy();
}
