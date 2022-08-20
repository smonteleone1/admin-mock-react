/* eslint-disable no-param-reassign */
var setRef = function setRef(ref, value) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
};

export { setRef };
export default setRef;