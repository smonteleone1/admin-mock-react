"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Column = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _GridStyles = require("../styles/GridStyles");

var _ThemeProvider = require("../../ThemeProvider");

var _excluded = ["className", "children", "sm", "md", "lg", "xl"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Column = /*#__PURE__*/React.forwardRef(function Column(_ref, ref) {
  var className = _ref.className,
      children = _ref.children,
      sm = _ref.sm,
      md = _ref.md,
      lg = _ref.lg,
      xl = _ref.xl,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // Get Backyard Theme Context
  var theme = (0, _ThemeProvider.useBackyardTheme)();
  (0, _ThemeProvider.validateBackyardTheme)(theme, 'Grid.Column');
  var cols = [];

  if (sm) {
    cols.push("sm-".concat(sm));
  }

  if (md) {
    cols.push("md-".concat(md));
  }

  if (lg) {
    cols.push("lg-".concat(lg));
  }

  if (xl) {
    cols.push("xl-".concat(xl));
  }

  return /*#__PURE__*/React.createElement(_GridStyles.GridColumn, (0, _extends2["default"])({
    className: (0, _classnames["default"])('col', className, cols)
  }, props, {
    ref: ref
  }), children);
});
exports.Column = Column;
Column.bdsName = 'Column';
var _default = Column;
exports["default"] = _default;