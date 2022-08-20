import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "invisible", "open"];
import * as React from 'react';
import classNames from 'classnames';
import { useBackyardTheme, validateBackyardTheme } from '../ThemeProvider';
import OverlayBase from './styles/OverlayBase';
/**
 * Backyard React Overlay
 *
 * Simple fixed overlay using the overlay design token and position across entire screen
 */

var Overlay = /*#__PURE__*/React.forwardRef(function Overlay(_ref, ref) {
  var className = _ref.className,
      _ref$invisible = _ref.invisible,
      invisible = _ref$invisible === void 0 ? false : _ref$invisible,
      open = _ref.open,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme Context
  var theme = useBackyardTheme();
  validateBackyardTheme(theme, 'Overlay'); // Render if open, else we use invisible CSS

  return open ? /*#__PURE__*/React.createElement(OverlayBase, _extends({
    className: classNames('overlay', className, invisible && "invisible"),
    "aria-hidden": true,
    ref: ref
  }, props)) : null;
});
Overlay.bdsName = 'Overlay';
export { Overlay };
export default Overlay;