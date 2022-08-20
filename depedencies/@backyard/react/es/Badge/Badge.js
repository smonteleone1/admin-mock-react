import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["children", "className", "color", "variant", "size", "bold", "arrow"];
import * as React from 'react';
import classNames from 'classnames';
import { useBackyardTheme, validateBackyardTheme } from '../ThemeProvider';
import BadgeWrapper from './styles/BadgeWrapper';
/**
 * Backyard React Badge
 *
 * Simple text component with uppercased text and large letter spacing
 *
 * The `display` prop can be used to change the CSS display of the wrapper
 * This is useful for changing from an `inline-flex` to a blocking `flex` if needed
 *
 *  <Badge>
 *      Placeholder
 *  </Badge>
 */

const Badge = /*#__PURE__*/React.forwardRef(function Badge(_ref, ref) {
  let {
    children,
    className,
    color = 'dark-blue',
    variant = 'filled',
    size = 'medium',
    bold = false,
    arrow = 'none'
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme
  const theme = useBackyardTheme(); // Validate theme

  validateBackyardTheme(theme, 'Badge');
  /**
   * Layout:
   *  <span wrapper>
   *      {children}
   *  </span>
   */

  return /*#__PURE__*/React.createElement(BadgeWrapper, _extends({
    className: classNames('badge', className),
    arrow: arrow,
    ref: ref
  }, props), /*#__PURE__*/React.createElement("span", {
    className: `badge-label variant--${variant} size--${size} color--${color} arrow--${arrow}` + (bold ? " bold" : "")
  }, children), arrow !== 'none' && variant === 'filled' ? /*#__PURE__*/React.createElement("span", {
    className: `arrow size--${size}`
  }) : null);
});
Badge.bdsName = 'Badge';
export { Badge };
export default Badge;