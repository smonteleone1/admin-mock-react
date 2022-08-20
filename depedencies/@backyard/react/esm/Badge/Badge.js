import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "className", "color", "variant", "size", "bold", "arrow"];
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

var Badge = /*#__PURE__*/React.forwardRef(function Badge(_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'dark-blue' : _ref$color,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'filled' : _ref$variant,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size,
      _ref$bold = _ref.bold,
      bold = _ref$bold === void 0 ? false : _ref$bold,
      _ref$arrow = _ref.arrow,
      arrow = _ref$arrow === void 0 ? 'none' : _ref$arrow,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme
  var theme = useBackyardTheme(); // Validate theme

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
    className: "badge-label variant--".concat(variant, " size--").concat(size, " color--").concat(color, " arrow--").concat(arrow) + (bold ? " bold" : "")
  }, children), arrow !== 'none' && variant === 'filled' ? /*#__PURE__*/React.createElement("span", {
    className: "arrow size--".concat(size)
  }) : null);
});
Badge.bdsName = 'Badge';
export { Badge };
export default Badge;