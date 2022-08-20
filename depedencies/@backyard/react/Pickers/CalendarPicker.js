"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.CalendarPicker = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ThemeProvider = require("../ThemeProvider");

var _useAdapter = _interopRequireDefault(require("./hooks/useAdapter"));

var _Calendar = require("./Calendar");

var _excluded = ["className", "shape", "date", "onChange"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Backyard React Calendar Picker
 *
 * @todo Comments
 */
var CalendarPicker = /*#__PURE__*/React.forwardRef(function CalendarPicker(_ref, ref) {
  var className = _ref.className,
      shapeProp = _ref.shape,
      dateProp = _ref.date,
      onChange = _ref.onChange,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // Get Backyard Theme Context
  var shapeContext = (0, _ThemeProvider.useBackyardTheme)({
    validate: true,
    name: 'CalendarPicker'
  }).context.shape; // Calculate shape

  var shape = (0, _ThemeProvider.getShape)(shapeProp, shapeContext);
  var adapter = (0, _useAdapter["default"])();

  var _React$useState = React.useState(adapter.parse(dateProp, 'yyyy-MM-dd')),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      date = _React$useState2[0],
      setDate = _React$useState2[1];

  React.useEffect(function () {
    var parsedDateValue = adapter.parse(dateProp);
    setDate(function (curDate) {
      if (!adapter.isEqual(curDate, parsedDateValue)) {
        return parsedDateValue;
      }

      return curDate;
    });
  }, [dateProp]);

  var handleChange = function handleChange(newDate) {
    setDate(newDate);

    if (onChange) {
      onChange(newDate);
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    className: (0, _classnames["default"])("datepicker-calendar shape--".concat(shape), className)
  }, /*#__PURE__*/React.createElement(_Calendar.Calendar, (0, _extends2["default"])({
    date: date,
    onChange: handleChange,
    shape: shape
  }, props, {
    ref: ref
  })));
});
exports.CalendarPicker = CalendarPicker;
CalendarPicker.bdsName = 'CalendarPicker';
var _default = CalendarPicker;
exports["default"] = _default;