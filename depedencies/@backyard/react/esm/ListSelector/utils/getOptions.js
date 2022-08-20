import _extends from "@babel/runtime/helpers/esm/extends";
import * as React from 'react';

/**
 * Get options from either input, `options` prop or `children`
 *
 * @param options - options format for multiselect
 * @param children - children `Option`s for multiselect
 */
var getOptions = function getOptions(options) {
  var children = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return (// If options are defined,
    (options === null || options === void 0 ? void 0 : options.length) > 0 ? // Then use options format
    options : // Else, map children props to `options` format
    children ? React.Children.map(children, // If child is an option group or list option group,
    function (child) {
      var _type, _child$props;

      return ['OptionGroup', 'ListOptionGroup'].includes((_type = child.type) === null || _type === void 0 ? void 0 : _type.bdsName) // Recursively add option levels
      ? _extends({}, child === null || child === void 0 ? void 0 : child.props, {
        options: getOptions([], child.props.children)
      }) // Else, just add option
      : _extends({}, child === null || child === void 0 ? void 0 : child.props, {
        label: child === null || child === void 0 ? void 0 : (_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props.children
      });
    }) : []
  );
};

export { getOptions };
export default getOptions;