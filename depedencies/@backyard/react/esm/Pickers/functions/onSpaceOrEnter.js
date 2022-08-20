var onSpaceOrEnter = function onSpaceOrEnter(innerFn, onFocus) {
  return function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
      innerFn(); // prevent any side effects

      event.preventDefault();
      event.stopPropagation();
    }

    if (onFocus) {
      onFocus(event);
    }
  };
};

export { onSpaceOrEnter };
export default onSpaceOrEnter;