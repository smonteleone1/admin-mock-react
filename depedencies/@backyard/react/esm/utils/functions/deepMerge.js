import _extends from "@babel/runtime/helpers/esm/extends";
import _typeof from "@babel/runtime/helpers/esm/typeof";

var isPlainObject = function isPlainObject(item) {
  return item && _typeof(item) === 'object' && item.constructor === Object;
};

var deepMerge = function deepMerge(target, source) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    clone: true
  };
  var output = options.clone ? _extends({}, target) : target;

  if (isPlainObject(target) && isPlainObject(source)) {
    Object.keys(source).forEach(function (key) {
      // Avoid prototype pollution
      if (key === '__proto__') {
        return;
      }

      if (isPlainObject(source[key]) && key in target) {
        output[key] = deepMerge(target[key], source[key], options);
      } else {
        output[key] = source[key];
      }
    });
  }

  return output;
};

export { isPlainObject, deepMerge };
export default deepMerge;