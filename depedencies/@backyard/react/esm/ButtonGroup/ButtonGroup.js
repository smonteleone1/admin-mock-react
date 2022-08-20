import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "children", "color", "size", "variant", "shape"];
import * as React from 'react';
import classNames from 'classnames';
import { useBackyardTheme, getShape } from '../ThemeProvider';
import ButtonGroupWrapper from './style/ButtonGroupWrapper';
/**
 * Backyard React ButtonGroup
 */

var ButtonGroup = /*#__PURE__*/React.forwardRef(function ButtonGroup(_ref, ref) {
  var className = _ref.className,
      children = _ref.children,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'interactive' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'secodnary' : _ref$variant,
      shapeProp = _ref.shape,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme Context
  var shapeContext = useBackyardTheme({
    validate: true,
    name: 'ButtonGroup'
  }).context.shape; // Calculate shape

  var shape = getShape(shapeProp, shapeContext);
  /**
   * Layout:
   *
   * <div wrapper>
   *  <children />
   * </div wrapper>
   */

  return /*#__PURE__*/React.createElement(ButtonGroupWrapper, _extends({
    className: classNames("button-group color--".concat(color, " shape--").concat(shape, " variant--").concat(variant), className),
    color: color
  }, props, {
    ref: ref
  }), React.Children.map(children, function (child) {
    return /*#__PURE__*/React.cloneElement(child, _extends({
      color: color,
      size: size,
      variant: 'ghost',
      shape: 'rounded',
      type: 'button'
    }, child.props));
  }));
});
ButtonGroup.bdsName = 'ButtonGroup';
export { ButtonGroup };
export default ButtonGroup;