import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["children", "className", "disabled", "value", "hidden"];
import * as React from 'react';
import classNames from 'classnames';

const Option = _ref => {
  let {
    children,
    className,
    disabled = false,
    value,
    hidden = false
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

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