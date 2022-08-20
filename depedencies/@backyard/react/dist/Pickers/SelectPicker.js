"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SelectPicker = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Calendar = _interopRequireDefault(require("@backyard/icons/Calendar"));

var _HistoryOutlined = _interopRequireDefault(require("@backyard/icons/HistoryOutlined"));

var _CloseCircleFilled = _interopRequireDefault(require("@backyard/icons/CloseCircleFilled"));

var _IconButton = _interopRequireDefault(require("../IconButton"));

var _Select = _interopRequireDefault(require("../Select"));

var _ThemeProvider = require("../ThemeProvider");

var _useForwardedRef = _interopRequireDefault(require("../utils/hooks/useForwardedRef"));

var _useAdapter = _interopRequireDefault(require("./hooks/useAdapter"));

var _useListItems = require("./hooks/useListItems");

var _TextPickerWrapper = _interopRequireDefault(require("./styles/TextPickerWrapper"));

var _ClockIcon, _CalendarIcon, _CloseCircleFilledIco;

var _excluded = ["className", "onChange", "onClear", "optionsLabel", "type", "shape", "wrapperProps", "value", "defaultValue", "options", "format", "readOnly", "disableNative", "selectWrapperProps", "textWrapperProps", "clearButtonProps"],
    _excluded2 = ["ariaLabel"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var isArrayString = function isArrayString(str) {
  return str.match(/^\[.*\]$/);
};
/**
 * Backyard React Select Picker
 *
 * @todo Comments
 */


var SelectPicker = /*#__PURE__*/React.forwardRef(function SelectPicker(_ref, ref) {
  var className = _ref.className,
      onChange = _ref.onChange,
      onClear = _ref.onClear,
      _ref$optionsLabel = _ref.optionsLabel,
      optionsLabel = _ref$optionsLabel === void 0 ? '' : _ref$optionsLabel,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'date' : _ref$type,
      shapeProp = _ref.shape,
      wrapperProps = _ref.wrapperProps,
      valueProp = _ref.value,
      _ref$defaultValue = _ref.defaultValue,
      defaultValue = _ref$defaultValue === void 0 ? '' : _ref$defaultValue,
      options = _ref.options,
      format = _ref.format,
      readOnly = _ref.readOnly,
      disableNative = _ref.disableNative,
      selectWrapperProps = _ref.selectWrapperProps,
      textWrapperProps = _ref.textWrapperProps,
      _ref$clearButtonProps = _ref.clearButtonProps,
      clearButtonProps = _ref$clearButtonProps === void 0 ? {} : _ref$clearButtonProps,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // Get Backyard Theme Context
  var shapeContext = (0, _ThemeProvider.useBackyardTheme)({
    validate: true,
    name: 'SelectPicker'
  }).context.shape; // Calculate shape

  var shape = (0, _ThemeProvider.getShape)(shapeProp, shapeContext);
  var innerRef = (0, _useForwardedRef["default"])(ref);
  var adapter = (0, _useAdapter["default"])();

  var _React$useState = React.useState(valueProp || defaultValue),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var items = (0, _useListItems.useListItems)({
    adapter: adapter,
    value: value,
    type: type,
    format: format,
    options: options,
    optionsLabel: optionsLabel
  });
  /**
   * Force event.target to `innerRef`, the text `input`
   *
   * @param {Event} event - DOM Event
   */

  function getEvent(event) {
    return event;
  }
  /**
   * Handles the `onChange` event for the select
   *
   * @param event - change event
   * @param info - option info
   * @param bypassReadOnly - whether or not to bypass readonly check
   */


  var handleChange = function handleChange(event, info) {
    var bypassReadOnly = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var val = info.value;

    if (!readOnly || bypassReadOnly) {
      setValue(val);

      if (onChange) {
        var dateTime = isArrayString(val) ? {
          date: JSON.parse(val).map(function (date) {
            return adapter.parse(date, 'yyyy-MM-dd');
          }),
          time: JSON.parse(val).map(function (date) {
            var time = adapter.parse(date, 'HH:mm');
            return time ? adapter.format(time, 'HH:mm') : null;
          })
        } : {
          date: adapter.parse(info.value, 'yyyy-MM-dd'),
          time: function () {
            var time = adapter.parse(info.value, 'HH:mm');
            return time ? adapter.format(time, 'HH:mm') : null;
          }()
        };
        onChange(event, (0, _extends2["default"])({}, info, dateTime));
      }
    }
  };
  /**
   * Handles `onClick` event for clear button
   *
   * @param event - click event from clear button
   */


  var handleClearClick = function handleClearClick(event) {
    // Call empty change event
    handleChange(getEvent(event), {
      index: -1,
      value: '',
      text: '',
      disabled: false,
      label: ''
    }, true);

    if (onClear) {
      onClear(event);
    }
  }; // Default icon


  var defaultIcon = type === 'time' ? _ClockIcon || (_ClockIcon = /*#__PURE__*/React.createElement(_HistoryOutlined["default"], {
    className: "no-interaction"
  })) : _CalendarIcon || (_CalendarIcon = /*#__PURE__*/React.createElement(_Calendar["default"], {
    className: "no-interaction"
  })); // If value defined, use clear button instead

  var icon = value ? /*#__PURE__*/React.createElement("span", {
    className: "icon"
  }, /*#__PURE__*/React.createElement(_IconButton["default"], (0, _extends2["default"])({
    variant: "ghost",
    color: "neutral",
    size: "small"
  }, clearButtonProps, {
    className: (0, _classnames["default"])('picker-clear-button', clearButtonProps === null || clearButtonProps === void 0 ? void 0 : clearButtonProps.className),
    onClick: handleClearClick
  }), _CloseCircleFilledIco || (_CloseCircleFilledIco = /*#__PURE__*/React.createElement(_CloseCircleFilled["default"], null)))) : defaultIcon;
  React.useEffect(function () {
    return setValue(valueProp);
  }, [valueProp]);
  return /*#__PURE__*/React.createElement(_TextPickerWrapper["default"], (0, _extends2["default"])({
    className: "datepicker-select shape--".concat(shape),
    readOnly: readOnly
  }, wrapperProps), /*#__PURE__*/React.createElement(_Select["default"], (0, _extends2["default"])({
    className: (0, _classnames["default"])(className, value && "completed"),
    onChange: handleChange,
    value: value || '',
    iconClosed: icon,
    iconOpened: icon,
    readOnly: readOnly,
    wrapperProps: selectWrapperProps,
    shape: shape,
    options: items.map(function (_ref2) {
      var ariaLabel = _ref2.ariaLabel,
          itemProps = (0, _objectWithoutProperties2["default"])(_ref2, _excluded2);
      return (0, _extends2["default"])({}, itemProps, {
        label: ariaLabel,
        hidden: readOnly
      });
    })
  }, props, {
    ref: innerRef
  })));
});
exports.SelectPicker = SelectPicker;
SelectPicker.bdsName = 'SelectPicker';
var _default = SelectPicker;
exports["default"] = _default;