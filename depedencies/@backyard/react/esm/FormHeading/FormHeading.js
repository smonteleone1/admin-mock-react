import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "className", "variant"];
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

var FormHeading = /*#__PURE__*/React.forwardRef(function FormHeading(_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'h5' : _ref$variant,
      other = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme Context
  var theme = useBackyardTheme();
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