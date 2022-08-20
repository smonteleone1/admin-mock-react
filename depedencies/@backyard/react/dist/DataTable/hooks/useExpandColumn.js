"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useExpandColumn = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ChevronDown3 = _interopRequireDefault(require("@backyard/icons/ChevronDown"));

var _ChevronRight3 = _interopRequireDefault(require("@backyard/icons/ChevronRight"));

var _IconButton = _interopRequireDefault(require("../../IconButton"));

var _ChevronDown, _ChevronRight, _ChevronDown2, _ChevronRight2;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ExpandColumnWrapper = _styledComponents["default"].div.withConfig({
  displayName: "useExpandColumn__ExpandColumnWrapper",
  componentId: "sc-1x37w8p-0"
})(["&&& > .cell-content{display:flex;align-items:center;justify-content:center;}"]);

var baseExpandButtonProps = {
  variant: 'ghost',
  color: 'interactive',
  size: 'extra_small',
  shape: 'rounded'
};

var useExpandColumn = function useExpandColumn(theme, enableRowExpansion) {
  var addExpandColumn = function addExpandColumn(hooks) {
    hooks.visibleColumns.push(function (columns) {
      return [{
        id: 'expansion',
        Header: function Header(_ref) {
          var getToggleAllRowsExpandedProps = _ref.getToggleAllRowsExpandedProps,
              isAllRowsExpanded = _ref.isAllRowsExpanded;
          return /*#__PURE__*/React.createElement(_IconButton["default"], (0, _extends2["default"])({}, baseExpandButtonProps, getToggleAllRowsExpandedProps()), isAllRowsExpanded ? _ChevronDown || (_ChevronDown = /*#__PURE__*/React.createElement(_ChevronDown3["default"], null)) : _ChevronRight || (_ChevronRight = /*#__PURE__*/React.createElement(_ChevronRight3["default"], null)));
        },
        Cell: function Cell(_ref2) {
          var row = _ref2.row;
          return row.canExpand ? /*#__PURE__*/React.createElement(_IconButton["default"], (0, _extends2["default"])({}, baseExpandButtonProps, row.getToggleRowExpandedProps()), row.isExpanded ? _ChevronDown2 || (_ChevronDown2 = /*#__PURE__*/React.createElement(_ChevronDown3["default"], null)) : _ChevronRight2 || (_ChevronRight2 = /*#__PURE__*/React.createElement(_ChevronRight3["default"], null))) : null;
        },
        Filter: function Filter() {
          return null;
        },
        width: theme.sizes.size_56,
        minWidth: theme.sizes.size_56,
        maxWidth: theme.sizes.size_56,
        Wrapper: ExpandColumnWrapper
      }].concat((0, _toConsumableArray2["default"])(columns));
    });
  };

  return enableRowExpansion ? addExpandColumn : function () {
    return null;
  };
};

exports.useExpandColumn = useExpandColumn;
var _default = useExpandColumn;
exports["default"] = _default;