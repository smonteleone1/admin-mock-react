import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["children", "className", "disabled", "label"];
import * as React from 'react';
import classNames from 'classnames';

const OptionGroup = _ref => {
  let {
    children,
    className,
    disabled = false,
    label = 'Option Group Label'
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement("optgroup", _extends({
    className: classNames(`select-option-group`, className),
    label: label,
    disabled: disabled
  }, props), React.Children.map(children, child => /*#__PURE__*/React.isValidElement(child) ? /*#__PURE__*/React.cloneElement(child, {
    disabled
  }) : child));
};

OptionGroup.bdsName = 'OptionGroup';
export { OptionGroup };
export default OptionGroup;