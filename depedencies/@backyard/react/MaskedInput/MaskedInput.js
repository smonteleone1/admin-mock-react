"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MaskedInput = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _InfoOutlined = _interopRequireDefault(require("@backyard/icons/InfoOutlined"));

var _TextInput = _interopRequireDefault(require("../TextInput"));

var _ThemeProvider = require("../ThemeProvider");

var _TextFieldBase = _interopRequireDefault(require("../TextField/styles/TextFieldBase"));

var _excluded = ["className", "value", "defaultValue", "icon", "info", "infoProps", "type", "shape", "mask", "onChange"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @todo comment
 */
var TextFieldWrapper = (0, _styledComponents["default"])(_TextInput["default"]).withConfig({
  displayName: "MaskedInput__TextFieldWrapper",
  componentId: "sc-zl8gml-0"
})(["", ""], _TextFieldBase["default"]);
var MaskedInput = /*#__PURE__*/React.forwardRef(function MaskedInput(_ref, ref) {
  var className = _ref.className,
      _ref$value = _ref.value,
      valueProp = _ref$value === void 0 ? '' : _ref$value,
      defaultValue = _ref.defaultValue,
      icon = _ref.icon,
      info = _ref.info,
      infoProps = _ref.infoProps,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'text' : _ref$type,
      shapeProp = _ref.shape,
      mask = _ref.mask,
      onChange = _ref.onChange,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // Get Backyard Theme Context
  var shapeContext = (0, _ThemeProvider.useBackyardTheme)({
    validate: true,
    name: 'TextField'
  }).context.shape; // Calculate shape

  var shape = (0, _ThemeProvider.getShape)(shapeProp, shapeContext); // Controls the component and handles the value of the component

  var _React$useState = React.useState(defaultValue || valueProp),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var _React$useState3 = React.useState(''),
      _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
      originalValue = _React$useState4[0],
      setOriginalValue = _React$useState4[1]; // eslint-disable-line @typescript-eslint/no-unused-vars
  // handle state of valueprop for text input


  React.useEffect(function () {
    if (valueProp !== value) {
      setValue(valueProp);
    }
  }, [valueProp]); // Processed the mask for phone entries

  var handlePhoneMask = function handlePhoneMask(value, mask) {
    var i = 0;
    var lastReplacedIndex = -1;
    var filledMask = mask.replace(/_/g, function (_, j) {
      if (i >= value.length) {
        return '_';
      }

      lastReplacedIndex = j;
      return value[i++]; // eslint-disable-line no-plusplus
    });
    return filledMask.substring(0, lastReplacedIndex + 1);
  }; // Processes the mask for currency. Builds number from back injecting needed leading zero's until there is a bit enough number


  var handleCurrencyMask = function handleCurrencyMask(value) {
    var numValue = parseInt(value, 10);
    var maskedValue;

    if (numValue.toString().length === 1) {
      maskedValue = "$ 0.0".concat(numValue);
    }

    if (numValue.toString().length === 2) {
      maskedValue = "$ 0.".concat(numValue);
    }

    if (numValue.toString().length >= 3) {
      var strValue = numValue.toString();
      var cents = strValue.slice(-2);
      var dollars = strValue.slice(0, -2).split(/(?=(?:\d{3})+$)/).join(",");
      maskedValue = "$ ".concat(dollars, ".").concat(cents);
    }

    return maskedValue;
  };

  var handleMasks = function handleMasks(value) {
    switch (mask) {
      case 'phone':
        return handlePhoneMask(value.replace(/[^\d]/g, ''), '(___) ___-____');

      case 'currency':
        return handleCurrencyMask(value.replace(/[^\d]/g, ''));

      default:
        return '';
    }
  };

  var handleChange = function handleChange(event, value) {
    var newValue = handleMasks(value);
    setValue(newValue);
    setOriginalValue(newValue.replace(/[^\d]/g, ''));

    if (typeof onChange === 'function') {
      onChange(event, {
        maskedValue: newValue,
        typedValue: newValue.replace(/[^\d]/g, '')
      });
    }
  };

  React.useEffect(function () {
    if (mask !== 'currency' && value !== '') {
      var newValue = handleMasks(value);
      setValue(newValue);
      setOriginalValue(newValue.replace(/[^\d]/g, ''));
    }
  }, []);
  /**
   * Layout:
   *
   *  <TextInput />
   */

  return /*#__PURE__*/React.createElement(TextFieldWrapper, (0, _extends2["default"])({
    className: (0, _classnames["default"])('textfield', className),
    type: type,
    value: value,
    defaultValue: defaultValue,
    shape: shape,
    iconBefore: icon,
    iconAfter: info ? /*#__PURE__*/React.createElement(_InfoOutlined["default"], (0, _extends2["default"])({}, infoProps, {
      title: info
    })) : null,
    onChange: handleChange
  }, props, {
    ref: ref
  }));
});
exports.MaskedInput = MaskedInput;
MaskedInput.bdsName = 'MaskedInput';
var _default = MaskedInput;
exports["default"] = _default;