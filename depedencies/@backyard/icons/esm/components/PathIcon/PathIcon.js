import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "color", "size", "viewBox", "overrideColor", "title", "className", "transform", "style"];
import * as React from 'react';
import classNames from 'classnames'; // @todo remove dep for cssvars
// @ts-ignore

import useBackyardTheme from '@backyard/react/ThemeProvider/useBackyardTheme';
import StyledSVG from "./styles";
/**
 * SVG wrapper utility that provides a container for a given icon, svg path.
 * Additionally PathIcon provides some helper props to easily change the color, size, additional classnames
 * and a title for the Icon.
 *
 * ex:
 * ```
 *  <PathIcon
 *      color='interactive'
 *      size='S5'
 *      title='Circle'
 *  >
 *      <circle cx="50" cy="50" r="40" />
 *  </PathIcon>
 * ```
 */

var PathIcon = /*#__PURE__*/React.forwardRef(function PathIcon(_ref, ref) {
  var children = _ref.children,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'text_solid' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'size_16' : _ref$size,
      _ref$viewBox = _ref.viewBox,
      viewBox = _ref$viewBox === void 0 ? '0 0 16 16' : _ref$viewBox,
      _ref$overrideColor = _ref.overrideColor,
      overrideColor = _ref$overrideColor === void 0 ? false : _ref$overrideColor,
      title = _ref.title,
      className = _ref.className,
      transform = _ref.transform,
      styleProp = _ref.style,
      props = _objectWithoutProperties(_ref, _excluded);

  var theme = useBackyardTheme();
  var style = React.useMemo(function () {
    return _extends({
      '--style-icon-height': (theme === null || theme === void 0 ? void 0 : theme.sizes[size]) || size,
      '--style-icon-width': (theme === null || theme === void 0 ? void 0 : theme.sizes[size]) || size,
      '--style-icon-color': (theme === null || theme === void 0 ? void 0 : theme.color[color]) || color,
      transform: transform
    }, styleProp);
  }, [theme, transform, styleProp]);
  return /*#__PURE__*/React.createElement(StyledSVG, _extends({
    className: classNames('icon', {
      'color-override': overrideColor
    }, className),
    viewBox: viewBox,
    "aria-hidden": title ? null : true,
    role: title ? 'img' : 'presentation',
    style: style
  }, props, {
    ref: ref
  }), title ? /*#__PURE__*/React.createElement("title", null, title) : null, children);
});
export { PathIcon };
export default PathIcon;