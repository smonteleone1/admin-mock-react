"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TextField = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _InfoOutlined = _interopRequireDefault(require("@backyard/icons/InfoOutlined"));

var _TextInput = _interopRequireDefault(require("../TextInput"));

var _ThemeProvider = require("../ThemeProvider");

var _TextFieldBase = _interopRequireDefault(require("./styles/TextFieldBase"));

var _excluded = ["className", "icon", "info", "infoProps", "type", "shape"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @todo comment
 */
var TextFieldWrapper = (0, _styledComponents["default"])(_TextInput["default"]).withConfig({
  displayName: "TextField__TextFieldWrapper",
  componentId: "sc-3vy6ks-0"
})(["", ""], _TextFieldBase["default"]);
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
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // Get Backyard Theme Context
  var shapeContext = (0, _ThemeProvider.useBackyardTheme)({
    validate: true,
    name: 'TextField'
  }).context.shape; // Calculate shape

  var shape = (0, _ThemeProvider.getShape)(shapeProp, shapeContext);
  /**
   * Layout:
   *
   *  <TextInput />
   */

  return /*#__PURE__*/React.createElement(TextFieldWrapper, (0, _extends2["default"])({
    className: (0, _classnames["default"])('textfield', className),
    type: type,
    shape: shape,
    itemBefore: icon,
    itemAfter: info ? /*#__PURE__*/React.createElement(_InfoOutlined["default"], (0, _extends2["default"])({}, infoProps, {
      title: info
    })) : null
  }, props, {
    ref: ref
  }));
});
exports.TextField = TextField;
TextField.bdsName = 'TextField';
var _default = TextField;
exports["default"] = _default;