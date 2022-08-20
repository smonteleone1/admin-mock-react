import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["anchor", "children", "className", "color", "display", "invisible", "max", "size", "shape", "value", "variant", "wrapperProps"];
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

const Pill = /*#__PURE__*/React.forwardRef(function Pill(_ref, ref) {
  let {
    anchor = ['top', 'right'],
    children,
    className,
    color = 'brand',
    display = 'inline-flex',
    invisible: invisibleProp = false,
    max = 99,
    size = 'medium',
    shape: shapeProp = 'circle',
    value: valueProp,
    variant = 'filled',
    wrapperProps = {}
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const theme = useBackyardTheme();
  validateBackyardTheme(theme, 'Pill'); // Cap value at max value

  const value = valueProp > max ? `${max}+` : valueProp; // If no variant is indicator set, set shape to dot

  const shape = variant === 'indicator' ? 'dot' : shapeProp; // If no value set and not indicator, set invisibility to true

  const invisible = !valueProp && variant !== 'indicator' ? true : invisibleProp;
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
    className: classNames(`pill variant--${variant} color--${color} shape--${shape} anchor--${anchor[0]}-${anchor[1]} size--${size}`, className, valueProp > max && 'over-max', invisible && "invisible")
  }, props, {
    ref: ref
  }), variant !== 'indicator' ? value : null));
});
Pill.bdsName = 'Pill';
export { Pill };
export default Pill;