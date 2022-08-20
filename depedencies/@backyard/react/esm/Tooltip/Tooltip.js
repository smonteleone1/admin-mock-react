import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["arrow", "arrowProps", "children", "className", "icon", "invisible", "shadow", "title", "variant", "shape", "width", "style"];
import * as React from 'react';
import classNames from 'classnames';
import { useBackyardTheme, getShape, dropShadow } from '../ThemeProvider';
import TooltipWrapper from './styles/TooltipWrapper';
/**
 * Backyard React Tooltip
 *
 * @todo Comments
 */

var Tooltip = /*#__PURE__*/React.forwardRef(function Tooltip(_ref, ref) {
  var _ref$arrow = _ref.arrow,
      arrow = _ref$arrow === void 0 ? 'top' : _ref$arrow,
      arrowProps = _ref.arrowProps,
      children = _ref.children,
      className = _ref.className,
      icon = _ref.icon,
      _ref$invisible = _ref.invisible,
      invisible = _ref$invisible === void 0 ? false : _ref$invisible,
      _ref$shadow = _ref.shadow,
      shadow = _ref$shadow === void 0 ? 'shadow_04' : _ref$shadow,
      title = _ref.title,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'low_contrast' : _ref$variant,
      shapeProp = _ref.shape,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 'auto' : _ref$width,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme
  var theme = useBackyardTheme({
    validate: true,
    name: 'Tooltip'
  }); // Backyard Context from Theme

  var shapeContext = theme.context.shape; // Calculate shape

  var shape = getShape(shapeProp, shapeContext); // Tooltip CSS vars

  var tooltipCSSVars = React.useMemo(function () {
    return {
      // Tooltip drop shadow
      '--style-tooltip-drop-shadow': dropShadow(theme.shadows[shadow]),
      // Tooltip width
      '--style-tooltip-width': theme.sizes[width] || width,
      // Tooltip font family
      '--style-tooltip-font-family': theme.font.family[theme.context.font],
      // Tooltip font weight
      '--style-tooltip-font-weight': theme.context.font === 'roboto' ? theme.font.weight.medium : theme.font.weight.semibold
    };
  }, [theme.name, width, shadow]);
  /**
   * Layout:
   *  <div wrapper>
   *      <span icon />
   *      <span>
   *          <div title />
   *          <div subtitle />
   *      </span>
   *  </div>
   */

  return /*#__PURE__*/React.createElement(TooltipWrapper, _extends({
    className: classNames("tooltip variant--".concat(variant, " shape--").concat(shape), className, invisible && "invisible"),
    style: _extends({}, tooltipCSSVars, style)
  }, props, {
    ref: ref
  }), /*#__PURE__*/React.createElement("span", {
    className: "tooltip-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tooltip-title"
  }, icon ? /*#__PURE__*/React.createElement("span", {
    className: "tooltip-icon"
  }, icon) : null, title), /*#__PURE__*/React.createElement("div", {
    className: "tooltip-subtitle"
  }, children)), /*#__PURE__*/React.createElement("div", {
    className: "tooltip-background"
  }, arrow !== 'none' ? /*#__PURE__*/React.createElement("span", _extends({
    className: "tooltip-arrow placement--".concat(arrow)
  }, arrowProps)) : null));
});
Tooltip.bdsName = 'Tooltip';
export { Tooltip };
export default Tooltip;