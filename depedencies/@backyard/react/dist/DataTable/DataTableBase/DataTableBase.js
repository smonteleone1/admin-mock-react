"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DataTableBase = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _DataTableBaseWrapper = _interopRequireDefault(require("./styles/DataTableBaseWrapper"));

var _DataTableToolbar2 = _interopRequireDefault(require("../DataTableToolbar"));

var _DataTableContent2 = _interopRequireDefault(require("../DataTableContent"));

var _hooks = require("../hooks");

var _DataTableToolbar, _DataTableContent;

var _excluded = ["children", "className", "height", "style"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Backyard React Data Table Base
 *
 * @internal
 *
 * This component is for the `DataTable` component to auto render with our base layout
 */
var DataTableBase = function DataTableBase(_ref) {
  var children = _ref.children,
      className = _ref.className,
      height = _ref.height,
      style = _ref.style,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _useDataTable = (0, _hooks.useDataTable)(),
      showToolbar = _useDataTable.showToolbar,
      shape = _useDataTable.shape;

  return /*#__PURE__*/React.createElement(_DataTableBaseWrapper["default"], (0, _extends2["default"])({
    className: (0, _classnames["default"])("data-table shape--".concat(shape), className),
    style: (0, _extends2["default"])({
      height: height
    }, style)
  }, props), showToolbar && (_DataTableToolbar || (_DataTableToolbar = /*#__PURE__*/React.createElement(_DataTableToolbar2["default"], null))), _DataTableContent || (_DataTableContent = /*#__PURE__*/React.createElement(_DataTableContent2["default"], null)));
};

exports.DataTableBase = DataTableBase;
var _default = DataTableBase;
exports["default"] = _default;