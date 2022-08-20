import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["arrow", "arrowProps", "children", "className", "icon", "invisible", "shadow", "title", "variant", "shape", "width", "style"];
import * as React from 'react';
import classNames from 'classnames';
import { useBackyardTheme, getShape, dropShadow } from '../ThemeProvider';
import TooltipWrapper from './styles/TooltipWrapper';
/**
 * Backyard React Tooltip
 *
 * @todo Comments
 */

const Tooltip = /*#__PURE__*/React.forwardRef(function Tooltip(_ref, ref) {
  let {
    arrow = 'top',
    arrowProps,
    children,
    className,
    icon,
    invisible = false,
    shadow = 'shadow_04',
    title,
    variant = 'low_contrast',
    shape: shapeProp,
    // = 'rounded',
    width = 'auto',
    style
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme
  const theme = useBackyardTheme({
    validate: true,
    name: 'Tooltip'
  }); // Backyard Context from Theme

  const {
    shape: shapeContext
  } = theme.context; // Calculate shape

  const shape = getShape(shapeProp, shapeContext); // Tooltip CSS vars

  const tooltipCSSVars = React.useMemo(() => ({
    // Tooltip drop shadow
    '--style-tooltip-drop-shadow': dropShadow(theme.shadows[shadow]),
    // Tooltip width
    '--style-tooltip-width': theme.sizes[width] || width,
    // Tooltip font family
    '--style-tooltip-font-family': theme.font.family[theme.context.font],
    // Tooltip font weight
    '--style-tooltip-font-weight': theme.context.font === 'roboto' ? theme.font.weight.medium : theme.font.weight.semibold
  }), [theme.name, width, shadow]);
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
    className: classNames(`tooltip variant--${variant} shape--${shape}`, className, invisible && "invisible"),
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
    className: `tooltip-arrow placement--${arrow}`
  }, arrowProps)) : null));
});
Tooltip.bdsName = 'Tooltip';
export { Tooltip };
export default Tooltip;