"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useScrollbarColumn = exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var useScrollbarColumn = function useScrollbarColumn(scrollbarWidth, disableScrollbar) {
  var addScrollbarColumn = function addScrollbarColumn(hooks) {
    hooks.visibleColumns.push(function (columns) {
      return [].concat((0, _toConsumableArray2["default"])(columns), [{
        id: 'scrollbar',
        Filter: function Filter() {
          return null;
        },
        width: scrollbarWidth,
        minWidth: scrollbarWidth,
        maxWidth: scrollbarWidth
      }]);
    });
  };

  return !disableScrollbar ? addScrollbarColumn : function () {
    return null;
  };
};

exports.useScrollbarColumn = useScrollbarColumn;
var _default = useScrollbarColumn;
exports["default"] = _default;