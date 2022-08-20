"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.RadioGroup = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _FormGroup = _interopRequireDefault(require("../FormGroup"));

var _useForkRef = _interopRequireDefault(require("../utils/hooks/useForkRef"));

var _useControlled3 = _interopRequireDefault(require("../utils/hooks/useControlled"));

var _ThemeProvider = require("../ThemeProvider");

var _RadioGroupContext = _interopRequireDefault(require("./RadioGroupContext"));

var _excluded = ["children", "defaultValue", "name", "value", "onChange"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Backyard React Radio Group
 *
 * `RadioGroup` allows for grouping radio inputs and syncing them together.
 * It extends from `FormGroup` to provide extra functionality for `Radio` components.
 *
 * For `Checkbox` or `Switch` it is recommended to use `FormGroup`.
 *
 * This component is useful when combined with `FormControl` to
 * organize the visual structure of the form input. Example:
 *
 * ```
 *  <FormControl>
 *      <FormHeading>Heading</FormHeading>
 *      <RadioGroup
 *          name="radios"
 *          defaultValue="2"
 *          direction="row"
 *      >
 *          <FormControlLabel
 *              control={<Radio value="1" />}
 *              label="Label 1"
 *          />
 *          <FormControlLabel
 *              control={<Radio value="2" />}
 *              label="Label 2"
 *          />
 *          <FormControlLabel
 *              control={<Radio value="3" />}
 *              label="Label 3"
 *          />
 *      </FormGroup>
 *      <FormHelperText>Helper Text</FormHelperText>
 *  </FormControl>
 * ```
 */
var RadioGroup = /*#__PURE__*/React.forwardRef(function RadioGroup(_ref, ref) {
  var children = _ref.children,
      defaultValue = _ref.defaultValue,
      name = _ref.name,
      valueProp = _ref.value,
      onChange = _ref.onChange,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // Get Backyard Theme Context
  var theme = (0, _ThemeProvider.useBackyardTheme)();
  (0, _ThemeProvider.validateBackyardTheme)(theme, 'RadioGroup'); // Reference <FormControl>

  var rootRef = React.useRef(null); // Use Controlled to manage Uncontrolled behavior of the state of value
  // Determined through default value

  var _useControlled = (0, _useControlled3["default"])({
    controlled: valueProp,
    "default": defaultValue,
    name: "Backyard->RadioGroup->[name=\"".concat(name, "\"]")
  }),
      _useControlled2 = (0, _slicedToArray2["default"])(_useControlled, 2),
      value = _useControlled2[0],
      setValue = _useControlled2[1]; // Fork forwarded ref and <FormControl> ref


  var handleRef = (0, _useForkRef["default"])(ref, rootRef);
  /**
   * Handles `onChange` event of `input`
   * Triggers defined `onChange` from props if available
   *
   * @param {Event} event - DOM event
   */

  var handleChange = function handleChange(event) {
    // Set value from target
    setValue(event.target.value); // If `onChange` prop defined,

    if (onChange) {
      // Trigger `onChange` function
      // Provides `Event` type and current target value
      onChange(event, event.target.value);
    }
  };

  var radioGroupValue = {
    name: name,
    onChange: handleChange,
    value: value,
    defaultValue: defaultValue
  };
  /**
   * Layout:
   *
   *  <RadioGroupContext.Provider>
   *      <FormGroup>
   *          ...
   *      </FormGroup>
   *  </RadioGroupContext.Provider>
   */

  return /*#__PURE__*/React.createElement(_RadioGroupContext["default"].Provider, {
    value: radioGroupValue
  }, /*#__PURE__*/React.createElement(_FormGroup["default"], (0, _extends2["default"])({
    role: "radiogroup",
    ref: handleRef
  }, props), children));
});
exports.RadioGroup = RadioGroup;
RadioGroup.bdsName = 'RadioGroup';
var _default = RadioGroup;
exports["default"] = _default;