"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.FormHeading = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Typography = _interopRequireDefault(require("../Typography"));

var _ThemeProvider = require("../ThemeProvider");

var _excluded = ["children", "className", "variant"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
      other = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // Get Backyard Theme Context
  var theme = (0, _ThemeProvider.useBackyardTheme)();
  (0, _ThemeProvider.validateBackyardTheme)(theme, 'FormHeading');
  /**
   * Layout:
   *
   *  <Typography>
   *      ...
   *  </Typography>
   */

  return /*#__PURE__*/React.createElement(_Typography["default"], (0, _extends2["default"])({
    className: (0, _classnames["default"])('form-heading', className),
    variant: variant,
    ref: ref
  }, other), children);
});
exports.FormHeading = FormHeading;
FormHeading.bdsName = 'FormHeading';
var _default = FormHeading;
exports["default"] = _default;