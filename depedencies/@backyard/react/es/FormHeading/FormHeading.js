import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["children", "className", "variant"];
import * as React from 'react';
import classNames from 'classnames';
import Typography from '../Typography';
import { useBackyardTheme, validateBackyardTheme } from '../ThemeProvider';
/**
 * Backyard React Form Heading
 *
 * `FormHeading` is intended to be used in conjunction with `FormControl`
 *
 * Use it on top of multiple form inputs inside `FormGroup` to give the
 * user visual context of the group of inputs. Example:
 *
 * ```
 *  <FormControl>
 *      <FormHeading>Heading Above FormGroup</FormHeading>
 *      <FormGroup>
 *          <Checkbox id="1" />
 *          <Checkbox id="2" />
 *          <Checkbox id="3" />
 *      </FormGroup>
 *      <FormHelperText>Helper Text Below FormGroup</FormHelperText>
 *  </FormControl>
 * ```
 */

const FormHeading = /*#__PURE__*/React.forwardRef(function FormHeading(_ref, ref) {
  let {
    children,
    className,
    variant = 'h5'
  } = _ref,
      other = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const theme = useBackyardTheme();
  validateBackyardTheme(theme, 'FormHeading');
  /**
   * Layout:
   *
   *  <Typography>
   *      ...
   *  </Typography>
   */

  return /*#__PURE__*/React.createElement(Typography, _extends({
    className: classNames('form-heading', className),
    variant: variant,
    ref: ref
  }, other), children);
});
FormHeading.bdsName = 'FormHeading';
export { FormHeading };
export default FormHeading;