import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["anchor", "children", "className", "color", "display", "invisible", "max", "size", "shape", "value", "variant", "wrapperProps"];
import * as React from 'react';
import classNames from 'classnames';
import { useBackyardTheme, validateBackyardTheme } from '../ThemeProvider';
import PillWrapper from './styles/PillWrapper';
/**
 * Backyard React Pill
 *
 * Wraps a child and renders a colored number at the anchor position
 * Wrapped component should be a single element, such as an icon
 *
 * Can be used without children for further customizability
 *
 * If `value` prop is not defined, forces to 'dot' shape
 * If `value` prop is defined, defaults to `circle` shape
 * It is possible to set `shape` to 'dot' and still give a number
 *
 * If `invisible` flag is set, pill will still render, but not be visible
 *      Note: `children` will still be visible
 *
 *  <Pill
 *      color="red"
 *  >
 *      <Account />
 *  </Pill>
 *
 *  <Pill
 *      color="green"
 *      value={23}
 *  />
 */

var Pill = /*#__PURE__*/React.forwardRef(function Pill(_ref, ref) {
  var _ref$anchor = _ref.anchor,
      anchor = _ref$anchor === void 0 ? ['top', 'right'] : _ref$anchor,
      children = _ref.children,
      className = _ref.className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'brand' : _ref$color,
      _ref$display = _ref.display,
      display = _ref$display === void 0 ? 'inline-flex' : _ref$display,
      _ref$invisible = _ref.invisible,
      invisibleProp = _ref$invisible === void 0 ? false : _ref$invisible,
      _ref$max = _ref.max,
      max = _ref$max === void 0 ? 99 : _ref$max,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size,
      _ref$shape = _ref.shape,
      shapeProp = _ref$shape === void 0 ? 'circle' : _ref$shape,
      valueProp = _ref.value,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'filled' : _ref$variant,
      _ref$wrapperProps = _ref.wrapperProps,
      wrapperProps = _ref$wrapperProps === void 0 ? {} : _ref$wrapperProps,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme Context
  var theme = useBackyardTheme();
  validateBackyardTheme(theme, 'Pill'); // Cap value at max value

  var value = valueProp > max ? "".concat(max, "+") : valueProp; // If no variant is indicator set, set shape to dot

  var shape = variant === 'indicator' ? 'dot' : shapeProp; // If no value set and not indicator, set invisibility to true

  var invisible = !valueProp && variant !== 'indicator' ? true : invisibleProp;
  /**
   * Layout:
   *  <span wrapper>
   *      {children}
   *      <span pill>
   *          {value}
   *      </span>
   *  </span>
   */

  return /*#__PURE__*/React.createElement(PillWrapper, _extends({}, wrapperProps, {
    className: classNames('pill--wrapper', wrapperProps.className),
    display: display
  }), children, /*#__PURE__*/React.createElement("span", _extends({
    className: classNames("pill variant--".concat(variant, " color--").concat(color, " shape--").concat(shape, " anchor--").concat(anchor[0], "-").concat(anchor[1], " size--").concat(size), className, valueProp > max && 'over-max', invisible && "invisible")
  }, props, {
    ref: ref
  }), variant !== 'indicator' ? value : null));
});
Pill.bdsName = 'Pill';
export { Pill };
export default Pill;