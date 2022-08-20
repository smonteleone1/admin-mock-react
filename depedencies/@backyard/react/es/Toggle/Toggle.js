import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["children", "className", "defaultValue", "exclusive", "enforceSelected", "buttonProps", "selectedButtonProps", "value", "shape", "onChange"];
import * as React from 'react';
import classNames from 'classnames';
import ButtonGroup from '../ButtonGroup';
import { useBackyardTheme, getShape } from '../ThemeProvider';
import { ToggleProvider, defaultSelectedButton, defaultUnselectedButton } from './ToggleProvider';
const ToggleButtonGroup = ButtonGroup;
/**
 * Backyard React Toggle
 *
 * Toggle wrapper to manage state of a group of `ToggleButton`s
 *
 * Examples:
 *
 * - [Toggle](https://dev.carbon.gcp.lowes.com/bds/documentation/Components/Toggle)
 *
 * API:
 *
 * - [Toggle API](https://dev.carbon.gcp.lowes.com/bds/documentation/ComponentsAPI/Toggle)
 * - inherits [ButtonGroup API](https://dev.carbon.gcp.lowes.com/bds/documentation/ComponentsAPI/ButtonGroup)
 *
 * - [ToggleButton API](https://dev.carbon.gcp.lowes.com/bds/documentation/ComponentsAPI/ToggleButton)
 */

const Toggle = /*#__PURE__*/React.forwardRef(function Toggle(_ref, ref) {
  let {
    children,
    className,
    defaultValue,
    exclusive = false,
    enforceSelected = false,
    buttonProps = defaultUnselectedButton,
    selectedButtonProps = defaultSelectedButton,
    value,
    shape: shapeProp,
    // = 'rounded',
    onChange
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const {
    shape: shapeContext
  } = useBackyardTheme({
    validate: true,
    name: 'Toggle'
  }).context; // Calculate shape

  const shape = getShape(shapeProp, shapeContext);
  return /*#__PURE__*/React.createElement(ToggleButtonGroup, _extends({
    className: classNames('toggle-button-group', className),
    shape: shape,
    color: "neutral"
  }, buttonProps, props, {
    ref: ref
  }), /*#__PURE__*/React.createElement(ToggleProvider, {
    defaultValue: defaultValue,
    exclusive: exclusive,
    enforceSelected: enforceSelected,
    buttonProps: buttonProps,
    selectedButtonProps: selectedButtonProps,
    value: value,
    onChange: onChange
  }, children));
});
Toggle.bdsName = 'Toggle';
export { Toggle };
export default Toggle;