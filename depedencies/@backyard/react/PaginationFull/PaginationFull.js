"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.PaginationFull = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ThemeProvider = require("../ThemeProvider");

var _PaginationItem = _interopRequireDefault(require("../Pagination/PaginationItem"));

var _usePagination2 = _interopRequireDefault(require("../Pagination/usePagination"));

var _PaginationFullWrapper = _interopRequireDefault(require("./styles/PaginationFullWrapper"));

var _excluded = ["boundaryCount", "className", "count", "defaultPage", "disabled", "getItemAriaLabel", "showFirstButton", "hideNextButton", "hidePrevButton", "showLastButton", "onChange", "page", "renderItem", "siblingCount", "size", "shape", "variant"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function defaultGetAriaLabel(type, page, selected) {
  if (type === 'page') {
    return "".concat(selected ? '' : 'Go to ', "page ").concat(page);
  }

  return "Go to ".concat(type, " page");
}
/**
 * Backyard React Pagination
 *
 * @todo Comments
 */


var PaginationFull = /*#__PURE__*/React.forwardRef(function PaginationFull(props, ref) {
  var boundaryCountProp = props.boundaryCount,
      className = props.className,
      count = props.count,
      defaultPage = props.defaultPage,
      disabled = props.disabled,
      _props$getItemAriaLab = props.getItemAriaLabel,
      getItemAriaLabel = _props$getItemAriaLab === void 0 ? defaultGetAriaLabel : _props$getItemAriaLab,
      _props$showFirstButto = props.showFirstButton,
      showFirstButton = _props$showFirstButto === void 0 ? false : _props$showFirstButto,
      hideNextButtonProp = props.hideNextButton,
      hidePrevButtonProp = props.hidePrevButton,
      _props$showLastButton = props.showLastButton,
      showLastButton = _props$showLastButton === void 0 ? false : _props$showLastButton,
      onChange = props.onChange,
      page = props.page,
      _props$renderItem = props.renderItem,
      renderItem = _props$renderItem === void 0 ? function (item, index) {
    return /*#__PURE__*/React.createElement(_PaginationItem["default"], (0, _extends2["default"])({
      key: index
    }, item));
  } : _props$renderItem,
      siblingCount = props.siblingCount,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      _props$shape = props.shape,
      shapeProp = _props$shape === void 0 ? 'circle' : _props$shape,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'numbered' : _props$variant,
      other = (0, _objectWithoutProperties2["default"])(props, _excluded); // Get Backyard Theme Context

  var shapeContext = (0, _ThemeProvider.useBackyardTheme)({
    validate: true,
    name: 'PaginationFull'
  }).context.shape; // Calculate shape

  var shape = (0, _ThemeProvider.getShape)(shapeProp, shapeContext);
  var boundaryCount = variant === 'dotted' ? 10 : boundaryCountProp;
  var hideNextButton = variant === 'dotted' ? true : hideNextButtonProp;
  var hidePrevButton = variant === 'dotted' ? true : hidePrevButtonProp;

  var _usePagination = (0, _usePagination2["default"])((0, _extends2["default"])({}, props, {
    boundaryCount: boundaryCount,
    showFirstButton: showFirstButton,
    hideNextButton: hideNextButton,
    hidePrevButton: hidePrevButton,
    showLastButton: showLastButton,
    componentName: 'PaginationFull'
  })),
      items = _usePagination.items;

  return /*#__PURE__*/React.createElement(_PaginationFullWrapper["default"], (0, _extends2["default"])({
    "aria-label": "pagination navigation",
    color: "interactive",
    className: (0, _classnames["default"])("pagination variant--".concat(variant, " size--").concat(size, " shape--").concat(shape), // `color--${color}`,
    className),
    ref: ref
  }, other), /*#__PURE__*/React.createElement("ul", null, items.map(function (item, index) {
    return /*#__PURE__*/React.createElement("li", {
      key: index
    }, renderItem((0, _extends2["default"])({}, item, {
      type: variant === 'dotted' ? 'dot' : item.type,
      color: 'interactive',
      'aria-label': getItemAriaLabel(item.type, item.page, item.selected),
      shape: shape,
      size: size
    }), index));
  })));
});
exports.PaginationFull = PaginationFull;
PaginationFull.bdsName = 'PaginationFull';
var _default = PaginationFull;
exports["default"] = _default;