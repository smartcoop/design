import { createPopper } from '@popperjs/core';
import { isClickOutside } from './util';

// Collect all triggers on the page
const popoverTriggers = document.querySelectorAll('[data-popover]');

// Global settings
const popoverMargin = '16';

let popoverOpen = false;
let targetEl;
let openPopover;
let popoverId;
let popoverTrigger;

// Find target popover element
function findpopover(triggerEl) {
  const targetId = triggerEl.getAttribute('data-popover');
  return document.getElementById(targetId);
}

let popperInstance = null;

function create(triggerEl, targetEl) {
  const placement = triggerEl.getAttribute('data-popover-placement') || 'top';

  popperInstance = createPopper(triggerEl, targetEl, {
    placement: placement,
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, popoverMargin],
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

function togglePopover(e) {
  if (popoverOpen) {
    openPopover = document.querySelector('.c-popover[data-show]');
    popoverId = openPopover.getAttribute('id');
    popoverTrigger = document.querySelector(`[data-popover='${popoverId}']`);
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

popoverTriggers.forEach((trigger) =>
  trigger.addEventListener('click', togglePopover)
);

document.addEventListener('click', function (e) {
  if (popoverOpen) {
    openPopover = document.querySelector('.c-popover[data-show]');
    popoverId = openPopover.getAttribute('id');
    popoverTrigger = document.querySelector(`[data-popover='${popoverId}']`);
  }
  if (
    popoverOpen &&
    openPopover &&
    popoverTrigger &&
    isClickOutside(e, [popoverTrigger, openPopover])
  ) {
    popoverOpen = false;
    openPopover.removeAttribute('data-show');
    destroy();
  }
});
