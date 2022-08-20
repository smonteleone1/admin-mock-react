import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "icon", "info", "infoProps", "type", "shape"];
import * as React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import Info from '@backyard/icons/InfoOutlined';
import TextInput from '../TextInput';
import { useBackyardTheme, getShape } from '../ThemeProvider';
import TextFieldBase from './styles/TextFieldBase';
/**
 * @todo comment
 */

var TextFieldWrapper = styled(TextInput).withConfig({
  displayName: "TextField__TextFieldWrapper",
  componentId: "sc-3vy6ks-0"
})(["", ""], TextFieldBase);
/**
 * Backyard React Text Field
 *
 * Standard text input that extends `TextInput` for functionality
 *
 *  <TextField label="Label" />
 *
 * To include helper text, use `FormControl` and `FormHelperText` to sync states
 *
 *  <FormControl>
 *      <TextField label="Username" />
 *      <FormHelperText>Enter a username</FormHelperText>
 *  </FormControl>
 */

var TextField = /*#__PURE__*/React.forwardRef(function TextField(_ref, ref) {
  var className = _ref.className,
      icon = _ref.icon,
      info = _ref.info,
      infoProps = _ref.infoProps,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'text' : _ref$type,
      shapeProp = _ref.shape,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme Context
  var shapeContext = useBackyardTheme({
    validate: true,
    name: 'TextField'
  }).context.shape; // Calculate shape

  var shape = getShape(shapeProp, shapeContext);
  /**
   * Layout:
   *
   *  <TextInput />
   */

  return /*#__PURE__*/React.createElement(TextFieldWrapper, _extends({
    className: classNames('textfield', className),
    type: type,
    shape: shape,
    itemBefore: icon,
    itemAfter: info ? /*#__PURE__*/React.createElement(Info, _extends({}, infoProps, {
      title: info
    })) : null
  }, props, {
    ref: ref
  }));
});
TextField.bdsName = 'TextField';
export { TextField };
export default TextField;