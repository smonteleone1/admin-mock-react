import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "className", "defaultValue", "exclusive", "enforceSelected", "buttonProps", "selectedButtonProps", "value", "shape", "onChange"];
import * as React from 'react';
import classNames from 'classnames';
import ButtonGroup from '../ButtonGroup';
import { useBackyardTheme, getShape } from '../ThemeProvider';
import { ToggleProvider, defaultSelectedButton, defaultUnselectedButton } from './ToggleProvider';
var ToggleButtonGroup = ButtonGroup;
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

var Toggle = /*#__PURE__*/React.forwardRef(function Toggle(_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      defaultValue = _ref.defaultValue,
      _ref$exclusive = _ref.exclusive,
      exclusive = _ref$exclusive === void 0 ? false : _ref$exclusive,
      _ref$enforceSelected = _ref.enforceSelected,
      enforceSelected = _ref$enforceSelected === void 0 ? false : _ref$enforceSelected,
      _ref$buttonProps = _ref.buttonProps,
      buttonProps = _ref$buttonProps === void 0 ? defaultUnselectedButton : _ref$buttonProps,
      _ref$selectedButtonPr = _ref.selectedButtonProps,
      selectedButtonProps = _ref$selectedButtonPr === void 0 ? defaultSelectedButton : _ref$selectedButtonPr,
      value = _ref.value,
      shapeProp = _ref.shape,
      onChange = _ref.onChange,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme Context
  var shapeContext = useBackyardTheme({
    validate: true,
    name: 'Toggle'
  }).context.shape; // Calculate shape

  var shape = getShape(shapeProp, shapeContext);
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