// Check if click is outside element
const isClickOutside = (event, elements) => {
  const excludedElements =
    elements.forEach === undefined ? [elements] : elements;
  let target = event.target;
  let isOutside = true;

  do {
    excludedElements.forEach((excludedElement) => {
      // this is a click inside
      if (target === excludedElement) {
        isOutside = false;
      }
    });
    // traverse upwards
    target = target.parentNode;
  } while (target);

  return isOutside;
};

export { isClickOutside };
