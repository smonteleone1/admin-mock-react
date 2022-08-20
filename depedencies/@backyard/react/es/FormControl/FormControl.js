import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["children", "className", "component", "disabled", "state"];
import * as React from 'react';
import classNames from 'classnames';
import { useBackyardTheme, validateBackyardTheme } from '../ThemeProvider';
import FormControlWrapper from './styles/FormControlWrapper';
import FormControlProvider from './FormControlProvider';
/**
 * Backyard React Form Control
 *
 * Allows control over form components.
 * Passes `state` through form components and helper text, to sync visually.
 * Uses component's 'bdsName' metadata to configure helper text.
 *
 * Combine with `FormHeading`, `FormGroup` and `FormHelperText` to construct form heirarchy
 *
 * ```
 *  <FormControl>
 *      <FormHeading>What colors were Gandalf's robes in LotR?</FormHeading>
 *      <FormGroup>
 *          <FormControlLabel
 *              control={<Checkbox id="check_white" value="white" />}
 *              label="White"
 *          />
 *          <FormControlLabel
 *              control={<Checkbox id="check_gray" value="gray" />}
 *              label="Gray"
 *          />
 *          <FormControlLabel
 *              control={<Checkbox id="check_black" value="black" />}
 *              label="Black"
 *          />
 *      </FormGroup>
 *      <FormHelperText>Select all that apply</FormHelperText>
 *  </FormControl>
 * ```
 * or
 * ```
 *  <FormControl>
 *      <FormHeading>What colors were Gandalf's robes in LotR?</FormHeading>
 *      <Multiselect
 *          options={[
 *              { label: 'White', value: 'white' },
 *              { label: 'Gray', value: 'gray' },
 *              { label: 'Black', value: 'black' },
 *          ]}
 *      />
 *      <FormHelperText>Select all that apply</FormHelperText>
 *  </FormControl>
 * ```
 */

const FormControl = /*#__PURE__*/React.forwardRef(function FormControl(_ref, ref) {
  let {
    children,
    className,
    component = 'div',
    disabled,
    state
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const theme = useBackyardTheme();
  validateBackyardTheme(theme, 'FormControl');
  /**
   * Layout:
   *
   *  <FormControlWrapper>
   *      ...
   *  </FormControlWrapper>
   */

  return /*#__PURE__*/React.createElement(FormControlProvider, {
    disabled: disabled,
    state: state
  }, /*#__PURE__*/React.createElement(FormControlWrapper, _extends({
    className: classNames(className, state, 'form-control'),
    as: component
  }, props, {
    ref: ref
  }), children));
});
FormControl.bdsName = 'FormControl';
export { FormControl };
export default FormControl;