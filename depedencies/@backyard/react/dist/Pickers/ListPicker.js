"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ListPicker = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ListSelector = _interopRequireDefault(require("../ListSelector"));

var _ListOption = _interopRequireDefault(require("../ListOption"));

var _ThemeProvider = require("../ThemeProvider");

var _useAdapter = _interopRequireDefault(require("./hooks/useAdapter"));

var _useListItems = require("./hooks/useListItems");

var _ListPickerWrapper = _interopRequireDefault(require("./styles/ListPickerWrapper"));

var _excluded = ["className", "readOnly", "onChange", "wrapperProps", "value", "defaultValue", "options", "format", "type", "shape"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var isArrayString = function isArrayString(str) {
  return str.match(/^\[.*\]$/);
};
/**
 * Backyard React List Picker
 *
 * @todo Comments
 */


var ListPicker = /*#__PURE__*/React.forwardRef(function ListPicker(_ref, ref) {
  var className = _ref.className,
      _ref$readOnly = _ref.readOnly,
      readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
      onChange = _ref.onChange,
      wrapperProps = _ref.wrapperProps,
      valueProp = _ref.value,
      defaultValue = _ref.defaultValue,
      options = _ref.options,
      format = _ref.format,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'date' : _ref$type,
      shapeProp = _ref.shape,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // Get Backyard Theme Context
  var shapeContext = (0, _ThemeProvider.useBackyardTheme)({
    validate: true,
    name: 'ListPicker'
  }).context.shape; // Calculate shape

  var shape = (0, _ThemeProvider.getShape)(shapeProp, shapeContext);
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
    options: options
  });

  var handleChange = function handleChange(event, info) {
    if (!readOnly) {
      setValue(info.value);

      if (onChange) {
        var dateTime = isArrayString(info.value) ? {
          date: JSON.parse(info.value).map(function (date) {
            return adapter.parse(date, 'yyyy-MM-dd');
          }),
          time: JSON.parse(info.value).map(function (date) {
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

  React.useEffect(function () {
    return setValue(valueProp);
  }, [valueProp]);
  return /*#__PURE__*/React.createElement(_ListPickerWrapper["default"], (0, _extends2["default"])({
    className: (0, _classnames["default"])("datepicker-list shape--".concat(shape), className)
  }, wrapperProps), /*#__PURE__*/React.createElement(_ListSelector["default"], (0, _extends2["default"])({
    onChange: handleChange,
    value: value || null,
    shape: shape
  }, props, {
    ref: ref
  }), items.map(function (item) {
    return /*#__PURE__*/React.createElement(_ListOption["default"], (0, _extends2["default"])({
      shape: shape
    }, item, {
      tabIndex: -1
    }));
  })));
});
exports.ListPicker = ListPicker;
ListPicker.bdsName = 'ListPicker';
var _default = ListPicker;
exports["default"] = _default;