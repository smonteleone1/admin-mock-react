"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSelectColumn = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Checkbox = _interopRequireDefault(require("../../Checkbox"));

var _excluded = ["indeterminate", "checked"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var SelectColumnWrapper = _styledComponents["default"].div.withConfig({
  displayName: "useSelectColumn__SelectColumnWrapper",
  componentId: "sc-5ixt1m-0"
})(["&&& > .cell-content{display:flex;align-items:center;justify-content:center;}"]);

var useSelectColumn = function useSelectColumn(theme, enableRowSelection) {
  var addSelectColumn = function addSelectColumn(hooks) {
    hooks.visibleColumns.push(function (columns) {
      return [{
        id: 'selection',
        Header: function Header(_ref) {
          var getToggleAllPageRowsSelectedProps = _ref.getToggleAllPageRowsSelectedProps;

          var _getToggleAllPageRows = getToggleAllPageRowsSelectedProps({
            className: 'row-selection-all'
          }),
              indeterminate = _getToggleAllPageRows.indeterminate,
              checked = _getToggleAllPageRows.checked,
              props = (0, _objectWithoutProperties2["default"])(_getToggleAllPageRows, _excluded);

          return /*#__PURE__*/React.createElement(_Checkbox["default"], (0, _extends2["default"])({
            checked: checked || indeterminate,
            indeterminate: indeterminate
          }, props));
        },
        Cell: function Cell(_ref2) {
          var row = _ref2.row;
          var isSubRow = row.id.indexOf('.') > -1;
          return !isSubRow ? /*#__PURE__*/React.createElement(_Checkbox["default"], row.getToggleRowSelectedProps({
            className: 'row-selection'
          })) : null;
        },
        Filter: function Filter() {
          return null;
        },
        width: theme.sizes.size_56,
        minWidth: theme.sizes.size_56,
        maxWidth: theme.sizes.size_56,
        Wrapper: SelectColumnWrapper
      }].concat((0, _toConsumableArray2["default"])(columns));
    });
  };

  return enableRowSelection ? addSelectColumn : function () {
    return null;
  };
};

exports.useSelectColumn = useSelectColumn;
var _default = useSelectColumn;
exports["default"] = _default;