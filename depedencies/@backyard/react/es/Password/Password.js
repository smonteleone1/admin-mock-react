import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["className", "disabled", "icon", "defaultToggle", "shape"];
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

const StyledTextInput = styled(TextInput).withConfig({
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

const Password = /*#__PURE__*/React.forwardRef(function Password(_ref, ref) {
  let {
    className,
    disabled,
    icon,
    defaultToggle = true,
    shape: shapeProp
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const {
    shape: shapeContext
  } = useBackyardTheme({
    validate: true,
    name: 'Password'
  }).context; // Calculate shape

  const shape = getShape(shapeProp, shapeContext); // Handle view toggle state

  const [toggle, setToggle] = React.useState(defaultToggle);
  /**
   * Handles toggle button click...
   */

  const handleToggle = () => {
    // If not disabled,
    if (!disabled) {
      // Toggle
      // eslint-disable-next-line no-shadow
      setToggle(toggle => !toggle);
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