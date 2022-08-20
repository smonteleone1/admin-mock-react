import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "className", "direction", "spacing"];
import * as React from 'react';
import classNames from 'classnames';
import { useBackyardTheme, validateBackyardTheme } from '../ThemeProvider';
import FormGroupWrapper from './styles/FormGroupWrapper';
/**
 * Backyard React Form Group
 *
 * `FormGroup` allows for grouping inputs such as
 * `Checkbox` and `Switch` and align them into columns or rows.
 *
 * For `Radio` it is recommended to use `RadioGroup` because
 * it provides extra functionality for handling `radio` inputs.
 *
 * This component is useful when combined with `FormControl` to
 * organize the visual structure of the form input. Example:
 *
 * ```
 *  <FormControl>
 *      <FormHeading>Heading Above FormGroup</FormHeading>
 *      <FormGroup>
 *          <FormControlLabel
 *              control={<Checkbox id="1" />}
 *              label="Label 1"
 *          />
 *          <FormControlLabel
 *              control={<Checkbox id="2" />}
 *              label="Label 2"
 *          />
 *          <FormControlLabel
 *              control={<Checkbox id="3" />}
 *              label="Label 3"
 *          />
 *      </FormGroup>
 *      <FormHelperText>Helper Text Below FormGroup</FormHelperText>
 *  </FormControl>
 * ```
 */

var FormGroup = /*#__PURE__*/React.forwardRef(function FormGroup(_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$direction = _ref.direction,
      direction = _ref$direction === void 0 ? 'column' : _ref$direction,
      spacingProp = _ref.spacing,
      other = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme Context
  var theme = useBackyardTheme();
  validateBackyardTheme(theme, 'FormGroup'); // Set spacing...

  var spacing = // If spacing prop defined,
  spacingProp || (direction === 'column' ? // Default spacing for column
  'size_4' : // Else, default spacing for row
  'size_8');
  /**
   * Layout:
   *
   *  <FormGroupWrapper>
   *      ...
   *  </FormGroupWrapper>
   */

  return /*#__PURE__*/React.createElement(FormGroupWrapper, _extends({
    className: classNames("form-group direction--".concat(direction), className),
    spacing: spacing,
    ref: ref
  }, other), children);
});
FormGroup.bdsName = 'FormGroup';
export { FormGroup };
export default FormGroup;