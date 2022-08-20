import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "className", "disabled", "value", "hidden"];
import * as React from 'react';
import classNames from 'classnames';

var Option = function Option(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      value = _ref.value,
      _ref$hidden = _ref.hidden,
      hidden = _ref$hidden === void 0 ? false : _ref$hidden,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("option", _extends({
    className: classNames('select-option', className),
    value: value,
    disabled: disabled,
    hidden: hidden
  }, props), children);
};

Option.bdsName = 'Option';
export { Option };
export default Option;