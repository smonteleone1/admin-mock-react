"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SelectFilter = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var React = _interopRequireWildcard(require("react"));

var _reactTable = require("react-table");

var _Dropdown = _interopRequireDefault(require("../../Dropdown"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var SelectFilter = function SelectFilter(optionValues) {
  return function (_ref) {
    var column = _ref.column;
    var filterValue = column.filterValue,
        setFilter = column.setFilter,
        id = column.id;

    var _React$useState = React.useState(filterValue),
        _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
        value = _React$useState2[0],
        setValue = _React$useState2[1];

    var handleChange = function handleChange(_, _ref2) {
      var val = _ref2.value;
      setValue(val);
    };

    var setDebounceValue = (0, _reactTable.useAsyncDebounce)(function (val) {
      setFilter(val || undefined);
    }, 200);
    React.useEffect(function () {
      if (filterValue !== value) {
        setDebounceValue(value);
      }
    }, [value]);
    React.useEffect(function () {
      if (filterValue !== value) {
        setValue(filterValue);
      }
    }, [filterValue]);
    return /*#__PURE__*/React.createElement(_Dropdown["default"], {
      onChange: handleChange,
      label: "Select",
      options: [{
        value: '',
        label: 'none'
      }].concat((0, _toConsumableArray2["default"])(optionValues.map(function (optionValue) {
        return {
          value: optionValue,
          label: optionValue
        };
      }))),
      size: "small",
      wrapperProps: {
        className: 'cell-filter'
      },
      className: "".concat(id, "-filter"),
      value: value
    });
  };
};

exports.SelectFilter = SelectFilter;
var _default = SelectFilter;
exports["default"] = _default;