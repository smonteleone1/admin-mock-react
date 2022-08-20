import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "className", "disabled", "label"];
import * as React from 'react';
import classNames from 'classnames';

var OptionGroup = function OptionGroup(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? 'Option Group Label' : _ref$label,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("optgroup", _extends({
    className: classNames("select-option-group", className),
    label: label,
    disabled: disabled
  }, props), React.Children.map(children, function (child) {
    return /*#__PURE__*/React.isValidElement(child) ? /*#__PURE__*/React.cloneElement(child, {
      disabled: disabled
    }) : child;
  }));
};

OptionGroup.bdsName = 'OptionGroup';
export { OptionGroup };
export default OptionGroup;