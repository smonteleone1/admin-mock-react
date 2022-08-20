import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* eslint-disable no-else-return */
import { isParsableDateObject, isParsableDateRange } from '../typings/types';

function parseDate(adapter, time) {
  if (adapter.isValid(time)) {
    return time ? adapter.date(time) : null;
  } else {
    var date = adapter.date("1/1/1970 ".concat(time));
    var newDate = adapter.setMinutes(adapter.setHours(adapter.date(0), adapter.getHours(date)), adapter.getMinutes(date));
    return newDate;
  }
}

var useListItems = function useListItems(_ref) {
  var optionsLabel = _ref.optionsLabel,
      adapter = _ref.adapter,
      type = _ref.type,
      format = _ref.format,
      _ref$options = _ref.options,
      optionsProp = _ref$options === void 0 ? [] : _ref$options;
  var isDate = type === 'date';
  var dateFormat = format ? [format] : isDate ? ['yyyy-MM-dd', 'MM/dd/yyyy'] : ['HH:mm', 'hh:mm aa'];
  var labelFormat = isDate ? 'MM/dd/yyyy' : 'hh:mm aa';
  var valueFormat = isDate ? 'yyyy-MM-dd' : 'HH:mm';

  var parseValue = function parseValue(value) {
    if (!value) {
      return null;
    } // eslint-disable-next-line no-restricted-syntax


    var _iterator = _createForOfIteratorHelper(dateFormat),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var form = _step.value;
        var date = adapter.parse(value, form);

        if (date) {
          return date;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    throw Error("Backyard: Picker: ListItem Error - The value '".concat(value, "' does ") + "not match any of the required formats for type '".concat(type, "': ").concat(JSON.stringify(dateFormat), "\n") + "You can specify your own format with the 'format' prop\n" + "See https://date-fns.org/v2.9.0/docs/parse for more.");
  };

  var times = optionsLabel ? [{
    label: optionsLabel,
    value: '',
    disabled: true
  }].concat(_toConsumableArray(optionsProp)) : optionsProp;
  return times.map(function (time, index) {
    var item = {};

    if (isParsableDateRange(time)) {
      var start = parseValue(time.start);
      var end = parseValue(time.end);
      item.label = time.label;
      item.value = JSON.stringify([adapter.format(start, valueFormat), adapter.format(end, valueFormat)]);
    } else if (isParsableDateObject(time)) {
      var date = parseValue(time.value);
      item.label = time.label;
      item.value = date ? adapter.format(date, valueFormat) : '';
    } else if (typeof time === 'string') {
      var _date = parseValue(time);

      item.label = adapter.format(_date, labelFormat);
      item.value = adapter.format(_date, valueFormat);
    } else {
      var _date2 = parseValue(time);

      item.label = adapter.format(_date2, valueFormat);
      item.value = _date2.toJSON();
    }

    return {
      key: index,
      value: item.value,
      disabled: isParsableDateObject(time) || isParsableDateRange(time) ? time.disabled : false,
      ariaLabel: item.label,
      children: item.label
    };
  });
};

export { useListItems, parseDate };
export default useListItems;