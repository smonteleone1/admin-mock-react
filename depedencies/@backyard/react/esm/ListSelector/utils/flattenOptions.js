import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "options"];

var flattenOptions = function flattenOptions(options, parent) {
  return options.reduce(function (opts, opt, index) {
    var children = opt.children,
        options = opt.options,
        option = _objectWithoutProperties(opt, _excluded);

    opts.push(_extends({
      'data-option-id': parent > -1 ? "".concat(parent, "-").concat(index) : "".concat(index)
    }, option));

    if (options) {
      opts.push(flattenOptions(options, index));
    }

    return opts.flat();
  }, []);
};

export { flattenOptions };
export default flattenOptions;