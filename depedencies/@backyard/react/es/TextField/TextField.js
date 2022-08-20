import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["className", "icon", "info", "infoProps", "type", "shape"];
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

const TextFieldWrapper = styled(TextInput).withConfig({
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

const TextField = /*#__PURE__*/React.forwardRef(function TextField(_ref, ref) {
  let {
    className,
    icon,
    info,
    infoProps,
    type = 'text',
    shape: shapeProp
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const {
    shape: shapeContext
  } = useBackyardTheme({
    validate: true,
    name: 'TextField'
  }).context; // Calculate shape

  const shape = getShape(shapeProp, shapeContext);
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