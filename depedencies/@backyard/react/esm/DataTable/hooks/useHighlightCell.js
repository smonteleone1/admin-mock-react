import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
var _excluded = ["Cell"];
import * as React from 'react';

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

var addHighlightCell = function addHighlightCell(hooks) {
  hooks.visibleColumns.push(function (columns) {
    return _toConsumableArray(columns.map(function (_ref2) {
      var _Cell = _ref2.Cell,
          column = _objectWithoutProperties(_ref2, _excluded);

      return _extends({}, column, {
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

var useHighlightCell = function useHighlightCell(disableFuzzyHighlight) {
  return !disableFuzzyHighlight ? addHighlightCell : function () {
    return null;
  };
};

export { useHighlightCell, addHighlightCell, HighlightText };
export default useHighlightCell;