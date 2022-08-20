import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "disabled", "icon", "defaultToggle", "shape"];
import * as React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import Quickview from '@backyard/icons/QuickviewOutlined';
import QuickviewOff from '@backyard/icons/QuickviewOffOutlined';
import TextInput from '../TextInput';
import { useBackyardTheme, getShape } from '../ThemeProvider';
import PasswordBase from './styles/PasswordBase';
/**
 * Extend `TextInput` with Password styles
 */

var StyledTextInput = styled(TextInput).withConfig({
  displayName: "Password__StyledTextInput",
  componentId: "sc-1wm2toe-0"
})(["", ""], PasswordBase);
/**
 * Backyard React Password
 *
 * Password text input that extends on TextInput's API
 *
 *  <Password />
 *
 * To include helper text, use `FormControl` and `FormHelperText` to sync states
 *
 *  <FormControl>
 *      <Password label="Password" />
 *      <FormHelperText>Enter a password</FormHelperText>
 *  </FormControl>
 */

var Password = /*#__PURE__*/React.forwardRef(function Password(_ref, ref) {
  var className = _ref.className,
      disabled = _ref.disabled,
      icon = _ref.icon,
      _ref$defaultToggle = _ref.defaultToggle,
      defaultToggle = _ref$defaultToggle === void 0 ? true : _ref$defaultToggle,
      shapeProp = _ref.shape,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme Context
  var shapeContext = useBackyardTheme({
    validate: true,
    name: 'Password'
  }).context.shape; // Calculate shape

  var shape = getShape(shapeProp, shapeContext); // Handle view toggle state

  var _React$useState = React.useState(defaultToggle),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      toggle = _React$useState2[0],
      setToggle = _React$useState2[1];
  /**
   * Handles toggle button click...
   */


  var handleToggle = function handleToggle() {
    // If not disabled,
    if (!disabled) {
      // Toggle
      // eslint-disable-next-line no-shadow
      setToggle(function (toggle) {
        return !toggle;
      });
    }
  };
  /**
   * Layout:
   *
   *  <TextInput />
   */


  return /*#__PURE__*/React.createElement(StyledTextInput, _extends({
    className: classNames('input--password', className),
    disabled: disabled,
    type: toggle ? 'password' : 'text',
    shape: shape,
    itemBefore: icon,
    itemAfter: toggle ? /*#__PURE__*/React.createElement(Quickview, {
      onClick: handleToggle
    }) : /*#__PURE__*/React.createElement(QuickviewOff, {
      onClick: handleToggle
    }),
    ref: ref
  }, props));
});
Password.bdsName = 'Password';
export { Password };
export default Password;