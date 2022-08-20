import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["className", "invisible", "open"];
import * as React from 'react';
import classNames from 'classnames';
import { useBackyardTheme, validateBackyardTheme } from '../ThemeProvider';
import OverlayBase from './styles/OverlayBase';
/**
 * Backyard React Overlay
 *
 * Simple fixed overlay using the overlay design token and position across entire screen
 */

const Overlay = /*#__PURE__*/React.forwardRef(function Overlay(_ref, ref) {
  let {
    className,
    invisible = false,
    open
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const theme = useBackyardTheme();
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