"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.FormControl = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ThemeProvider = require("../ThemeProvider");

var _FormControlWrapper = _interopRequireDefault(require("./styles/FormControlWrapper"));

var _FormControlProvider = _interopRequireDefault(require("./FormControlProvider"));

var _excluded = ["children", "className", "component", "disabled", "state"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
var FormControl = /*#__PURE__*/React.forwardRef(function FormControl(_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$component = _ref.component,
      component = _ref$component === void 0 ? 'div' : _ref$component,
      disabled = _ref.disabled,
      state = _ref.state,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // Get Backyard Theme Context
  var theme = (0, _ThemeProvider.useBackyardTheme)();
  (0, _ThemeProvider.validateBackyardTheme)(theme, 'FormControl');
  /**
   * Layout:
   *
   *  <FormControlWrapper>
   *      ...
   *  </FormControlWrapper>
   */

  return /*#__PURE__*/React.createElement(_FormControlProvider["default"], {
    disabled: disabled,
    state: state
  }, /*#__PURE__*/React.createElement(_FormControlWrapper["default"], (0, _extends2["default"])({
    className: (0, _classnames["default"])(className, state, 'form-control'),
    as: component
  }, props, {
    ref: ref
  }), children));
});
exports.FormControl = FormControl;
FormControl.bdsName = 'FormControl';
var _default = FormControl;
exports["default"] = _default;