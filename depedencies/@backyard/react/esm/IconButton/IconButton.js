import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "className", "variant", "shape", "color", "disabled", "size", "ariaTitle", "type"];
import * as React from 'react';
import classnames from 'classnames';
import { useBackyardTheme, getShape } from '../ThemeProvider';
import IconButtonBase from './styles/IconButtonBase';
/**
 * Backyard React Icon Button
 *
 * Used for display Icon-only buttons with proper squared spacing and size.
 * Utilizes `ButtonBase` found in `Button` styles for styling.
 */

var IconButton = /*#__PURE__*/React.forwardRef(function IconButton(_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'primary' : _ref$variant,
      shapeProp = _ref.shape,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'interactive' : _ref$color,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size,
      _ref$ariaTitle = _ref.ariaTitle,
      ariaTitle = _ref$ariaTitle === void 0 ? 'title' : _ref$ariaTitle,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'button' : _ref$type,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme Context
  var shapeContext = useBackyardTheme({
    validate: true,
    name: 'IconButton'
  }).context.shape; // Calculate shape

  var shape = getShape(shapeProp, shapeContext);
  /**
   * Layout:
   *
   *  <IconButtonBase>
   *      ...
   *  </IconButtonBase>
   */

  return /*#__PURE__*/React.createElement(IconButtonBase, _extends({
    className: classnames('icon-button', className),
    variant: variant,
    color: color,
    shape: shape,
    disabled: disabled,
    size: size,
    "aria-label": ariaTitle,
    type: type
  }, props, {
    ref: ref
  }), children);
});
IconButton.bdsName = 'IconButton';
export { IconButton };
export default IconButton;