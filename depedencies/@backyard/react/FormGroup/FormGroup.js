"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.FormGroup = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ThemeProvider = require("../ThemeProvider");

var _FormGroupWrapper = _interopRequireDefault(require("./styles/FormGroupWrapper"));

var _excluded = ["children", "className", "direction", "spacing"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
      other = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // Get Backyard Theme Context
  var theme = (0, _ThemeProvider.useBackyardTheme)();
  (0, _ThemeProvider.validateBackyardTheme)(theme, 'FormGroup'); // Set spacing...

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

  return /*#__PURE__*/React.createElement(_FormGroupWrapper["default"], (0, _extends2["default"])({
    className: (0, _classnames["default"])("form-group direction--".concat(direction), className),
    spacing: spacing,
    ref: ref
  }, other), children);
});
exports.FormGroup = FormGroup;
FormGroup.bdsName = 'FormGroup';
var _default = FormGroup;
exports["default"] = _default;