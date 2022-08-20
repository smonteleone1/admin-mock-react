import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["children", "className", "variant", "shape", "color", "disabled", "size", "ariaTitle", "type"];
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

const IconButton = /*#__PURE__*/React.forwardRef(function IconButton(_ref, ref) {
  let {
    children,
    className,
    variant = 'primary',
    shape: shapeProp,
    // = 'rounded',
    color = 'interactive',
    disabled = false,
    size = 'medium',
    ariaTitle = 'title',
    type = 'button'
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const {
    shape: shapeContext
  } = useBackyardTheme({
    validate: true,
    name: 'IconButton'
  }).context; // Calculate shape

  const shape = getShape(shapeProp, shapeContext);
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