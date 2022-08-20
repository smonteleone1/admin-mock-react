"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePreviousMonthDisabled = exports.useNextMonthDisabled = void 0;

var React = _interopRequireWildcard(require("react"));

var _useAdapter = _interopRequireDefault(require("./useAdapter"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useNextMonthDisabled = function useNextMonthDisabled(month, _ref) {
  var disableFuture = _ref.disableFuture,
      maxDate = _ref.maxDate;
  var adapter = (0, _useAdapter["default"])();
  return React.useMemo(function () {
    var now = adapter.date();
    var lastEnabledMonth = adapter.startOfMonth(disableFuture && adapter.isBefore(now, maxDate) ? now : maxDate);
    return !adapter.isAfter(lastEnabledMonth, month);
  }, [disableFuture, maxDate, month, adapter]);
};

exports.useNextMonthDisabled = useNextMonthDisabled;

var usePreviousMonthDisabled = function usePreviousMonthDisabled(month, _ref2) {
  var disablePast = _ref2.disablePast,
      minDate = _ref2.minDate;
  var adapter = (0, _useAdapter["default"])();
  return React.useMemo(function () {
    var now = adapter.date();
    var firstEnabledMonth = adapter.startOfMonth(disablePast && adapter.isAfter(now, minDate) ? now : minDate);
    return !adapter.isBefore(firstEnabledMonth, month);
  }, [disablePast, minDate, month, adapter]);
};

exports.usePreviousMonthDisabled = usePreviousMonthDisabled;