"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TextPicker = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactInputMask = _interopRequireDefault(require("react-input-mask"));

var _HistoryOutlined = _interopRequireDefault(require("@backyard/icons/HistoryOutlined"));

var _Calendar = _interopRequireDefault(require("@backyard/icons/Calendar"));

var _CloseCircleFilled = _interopRequireDefault(require("@backyard/icons/CloseCircleFilled"));

var _IconButton = _interopRequireDefault(require("../IconButton"));

var _TextInput = _interopRequireDefault(require("../TextInput"));

var _ThemeProvider = require("../ThemeProvider");

var _useAdapter = _interopRequireDefault(require("./hooks/useAdapter"));

var _TextPickerWrapper = _interopRequireDefault(require("./styles/TextPickerWrapper"));

var _hooks = require("../utils/hooks");

var _CalendarIcon, _ClockIcon, _CloseCircleFilledIco;

var _excluded = ["disableNative", "label", "mask", "maskPlaceholder", "alwaysShowMask", "beforeMaskedStateChange", "min", "max", "onChange", "onClear", "pattern", "step", "type", "shape", "value", "defaultValue", "selectWrapperProps", "textWrapperProps", "wrapperProps", "clearButtonProps"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var getTimeMaskProps = function getTimeMaskProps(step) {
  return {
    // One Hour (60m) == 3600 seconds
    3600: {
      mask: [/[01]/, /[0-9]/, ':', '0', '0', ' ', /[AP]/, /[M]/],
      maskPlaceholder: '--:00 --'
    },
    // Half Hour (30m) == 1800 seconds
    1800: {
      mask: [/[01]/, /[0-9]/, ':', /[03]/, '0', ' ', /[AP]/, /[M]/],
      maskPlaceholder: '--:-- --'
    },
    // Qarter Hour (15m) == 900 seconds
    900: {
      mask: [/[01]/, /[0-9]/, ':', /[0134]/, /[05]/, ' ', /[AP]/, /[M]/],
      maskPlaceholder: '--:-- --'
    },
    // Sixth Hour (10m) == 600 seconds
    600: {
      mask: [/[01]/, /[0-9]/, ':', /[0-5]/, '0', ' ', /[AP]/, /[M]/],
      maskPlaceholder: '--:-- --'
    },
    // Twelth Hour (5m) == 300 seconds
    300: {
      mask: [/[01]/, /[0-9]/, ':', /[0-5]/, /[05]/, ' ', /[AP]/, /[M]/],
      maskPlaceholder: '--:-- --'
    }
  }[step] || getTimeMaskProps(3600);
};
/**
 * Backyard React Text Picker
 *
 * @todo Comments
 */


var TextPicker = /*#__PURE__*/React.forwardRef(function TextPicker(_ref, ref) {
  var _ref$disableNative = _ref.disableNative,
      disableNative = _ref$disableNative === void 0 ? false : _ref$disableNative,
      label = _ref.label,
      maskProp = _ref.mask,
      maskPlaceholderProp = _ref.maskPlaceholder,
      alwaysShowMaskProp = _ref.alwaysShowMask,
      _ref$beforeMaskedStat = _ref.beforeMaskedStateChange,
      beforeMaskedStateChange = _ref$beforeMaskedStat === void 0 ? function (state) {
    return state;
  } : _ref$beforeMaskedStat,
      min = _ref.min,
      max = _ref.max,
      onChange = _ref.onChange,
      onClear = _ref.onClear,
      pattern = _ref.pattern,
      step = _ref.step,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'date' : _ref$type,
      shapeProp = _ref.shape,
      valueProp = _ref.value,
      defaultValue = _ref.defaultValue,
      selectWrapperProps = _ref.selectWrapperProps,
      _ref$textWrapperProps = _ref.textWrapperProps,
      textWrapperProps = _ref$textWrapperProps === void 0 ? {} : _ref$textWrapperProps,
      _ref$wrapperProps = _ref.wrapperProps,
      wrapperProps = _ref$wrapperProps === void 0 ? {} : _ref$wrapperProps,
      _ref$clearButtonProps = _ref.clearButtonProps,
      clearButtonProps = _ref$clearButtonProps === void 0 ? {} : _ref$clearButtonProps,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // Get Backyard Theme Context
  var theme = (0, _ThemeProvider.useBackyardTheme)({
    validate: true,
    name: 'TextPicker'
  });
  var isDesktop = theme.isDesktop;
  var shapeContext = theme.context.shape;
  var innerRef = (0, _hooks.useForwardedRef)(ref); // Calculate shape

  var shape = (0, _ThemeProvider.getShape)(shapeProp, shapeContext);
  var adapter = (0, _useAdapter["default"])();

  var _React$useState = React.useState(valueProp || defaultValue),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var isDate = type === 'date';
  /**
   * Force event.target to `innerRef`, the text `input`
   *
   * @param {Event} event - DOM Event
   */

  function getEvent(event) {
    return event;
  } // eslint-disable-next-line no-shadow


  var handleChange = function handleChange(event, value) {
    setValue(value);

    if (onChange) {
      onChange(event, value);
    }
  };
  /**
   * Handles clear button `onClick` event
   *
   * @param event - click even from clear button
   */


  var handleClearClick = function handleClearClick(event) {
    // Trigger change event
    handleChange(getEvent(event), '');

    if (onClear) {
      onClear(event);
    }
  }; // eslint-disable-next-line no-shadow


  var valueFromMask = function valueFromMask(value) {
    var matchesMask = isDate ? value.match(/[/]/g) : value.match(/[-]/g);

    if (!matchesMask) {
      var date = adapter.parse(value, isDate ? 'MM/dd/yyyy' : 'hh:mmaa');

      if (!date) {
        date = adapter.parse(value, isDate ? 'yyyy-MM-dd' : 'HH:mm');
      }

      if (adapter.isValid(date)) {
        return adapter.format(date, isDate ? 'MM/dd/yyyy' : 'hh:mm aa');
      }

      return null;
    }

    return null;
  }; // Default icon for text pickers


  var defaultIcon = isDate ? _CalendarIcon || (_CalendarIcon = /*#__PURE__*/React.createElement(_Calendar["default"], {
    className: "no-interaction"
  })) : _ClockIcon || (_ClockIcon = /*#__PURE__*/React.createElement(_HistoryOutlined["default"], {
    className: "no-interaction"
  })); // If value defined, use clear button instead

  var icon = value ? /*#__PURE__*/React.createElement(_IconButton["default"], (0, _extends2["default"])({
    variant: "ghost",
    color: "neutral",
    size: "small"
  }, clearButtonProps, {
    className: (0, _classnames["default"])('picker-clear-button', clearButtonProps === null || clearButtonProps === void 0 ? void 0 : clearButtonProps.className),
    onClick: handleClearClick
  }), _CloseCircleFilledIco || (_CloseCircleFilledIco = /*#__PURE__*/React.createElement(_CloseCircleFilled["default"], null))) : defaultIcon;
  var mask = maskProp || (isDate ? '99/99/9999' : getTimeMaskProps(step).mask);
  var maskPlaceholder = maskPlaceholderProp || (isDate ? 'mm/dd/yyyy' : getTimeMaskProps(step).maskPlaceholder);

  var handleMaskedStateChange = function handleMaskedStateChange(_ref2) {
    var nextState = _ref2.nextState;
    // eslint-disable-next-line no-shadow
    var value = nextState.value;
    var newValue = valueFromMask(value);
    return beforeMaskedStateChange((0, _extends2["default"])({}, nextState, {
      value: newValue || value
    }));
  };

  var nativeProps = disableNative ? {
    component: _reactInputMask["default"],
    mask: mask,
    maskPlaceholder: maskPlaceholder,
    alwaysShowMask: isDate && alwaysShowMaskProp,
    beforeMaskedStateChange: handleMaskedStateChange,
    type: 'text'
  } : {
    component: 'input',
    type: type
  };
  React.useEffect(function () {
    if (isDate && !alwaysShowMaskProp && !adapter.isValid(value)) {
      handleChange(null, '');
    }
  }, [alwaysShowMaskProp]);
  React.useEffect(function () {
    if (disableNative) {
      // eslint-disable-next-line no-shadow
      var _value = valueFromMask(valueProp);

      if (_value) {
        setValue(_value);
      }
    } else {
      setValue(valueProp);
    }
  }, [valueProp]);
  return /*#__PURE__*/React.createElement(_TextPickerWrapper["default"], (0, _extends2["default"])({}, wrapperProps, {
    disableNative: disableNative,
    isDesktop: isDesktop,
    className: (0, _classnames["default"])("datepicker-text shape--".concat(shape), wrapperProps.className)
  }), /*#__PURE__*/React.createElement(_TextInput["default"], (0, _extends2["default"])({
    required: true // Removes Firefox clear button
    ,
    value: value || '',
    onChange: handleChange,
    label: label,
    itemAfter: icon,
    step: step,
    min: min,
    max: max,
    pattern: pattern,
    wrapperProps: textWrapperProps,
    shape: shape
  }, props, nativeProps, {
    ref: innerRef
  })));
});
exports.TextPicker = TextPicker;
TextPicker.bdsName = 'TextPicker';
var _default = TextPicker;
exports["default"] = _default;