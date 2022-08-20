"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useHighlightCell = exports["default"] = exports.addHighlightCell = exports.HighlightText = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var React = _interopRequireWildcard(require("react"));

var _excluded = ["Cell"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function escapeRegExp(string) {
  return string.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
}

var HighlightText = function HighlightText(_ref) {
  var _ref$text = _ref.text,
      text = _ref$text === void 0 ? '' : _ref$text,
      _ref$highlight = _ref.highlight,
      highlight = _ref$highlight === void 0 ? '' : _ref$highlight;

  if (!highlight) {
    return /*#__PURE__*/React.createElement("span", null, text);
  }

  var regex = new RegExp("(".concat(escapeRegExp(highlight), ")"), 'gi');
  var parts = text.split(regex);
  return /*#__PURE__*/React.createElement("span", null, parts.filter(function (part) {
    return part;
  }).map(function (part, i) {
    return regex.test(part) ? /*#__PURE__*/React.createElement("b", {
      key: i,
      style: {
        textDecoration: 'underline'
      }
    }, part) : /*#__PURE__*/React.createElement("span", {
      key: i
    }, part);
  }));
};

exports.HighlightText = HighlightText;

var addHighlightCell = function addHighlightCell(hooks) {
  hooks.visibleColumns.push(function (columns) {
    return (0, _toConsumableArray2["default"])(columns.map(function (_ref2) {
      var _Cell = _ref2.Cell,
          column = (0, _objectWithoutProperties2["default"])(_ref2, _excluded);
      return (0, _extends2["default"])({}, column, {
        OriginalCell: _Cell,
        Cell: function Cell(_ref3) {
          var cell = _ref3.cell,
              state = _ref3.state;
          var text = String(cell.value);
          var filter = state.globalFilter;
          return typeof _Cell !== 'undefined' ? cell.render('OriginalCell') : /*#__PURE__*/React.createElement(HighlightText, {
            text: text,
            highlight: filter
          });
        }
      });
    }));
  });
};

exports.addHighlightCell = addHighlightCell;

var useHighlightCell = function useHighlightCell(disableFuzzyHighlight) {
  return !disableFuzzyHighlight ? addHighlightCell : function () {
    return null;
  };
};

exports.useHighlightCell = useHighlightCell;
var _default = useHighlightCell;
exports["default"] = _default;