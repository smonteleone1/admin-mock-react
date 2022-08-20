import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["className", "children", "color", "size", "variant", "shape"];
import * as React from 'react';
import classNames from 'classnames';
import { useBackyardTheme, getShape } from '../ThemeProvider';
import ButtonGroupWrapper from './style/ButtonGroupWrapper';
/**
 * Backyard React ButtonGroup
 */

const ButtonGroup = /*#__PURE__*/React.forwardRef(function ButtonGroup(_ref, ref) {
  let {
    className,
    children,
    color = 'interactive',
    size = 'medium',
    variant = 'secodnary',
    shape: shapeProp
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const {
    shape: shapeContext
  } = useBackyardTheme({
    validate: true,
    name: 'ButtonGroup'
  }).context; // Calculate shape

  const shape = getShape(shapeProp, shapeContext);
  /**
   * Layout:
   *
   * <div wrapper>
   *  <children />
   * </div wrapper>
   */

  return /*#__PURE__*/React.createElement(ButtonGroupWrapper, _extends({
    className: classNames(`button-group color--${color} shape--${shape} variant--${variant}`, className),
    color: color
  }, props, {
    ref: ref
  }), React.Children.map(children, child => /*#__PURE__*/React.cloneElement(child, _extends({
    color,
    size,
    variant: 'ghost',
    shape: 'rounded',
    type: 'button'
  }, child.props))));
});
ButtonGroup.bdsName = 'ButtonGroup';
export { ButtonGroup };
export default ButtonGroup;