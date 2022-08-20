"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.PaginationItem = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ChevronLeft = _interopRequireDefault(require("@backyard/icons/ChevronLeft"));

var _ChevronRight = _interopRequireDefault(require("@backyard/icons/ChevronRight"));

var _Dots = _interopRequireDefault(require("@backyard/icons/Dots"));

var _ChevronDoubleLeft = _interopRequireDefault(require("@backyard/icons/ChevronDoubleLeft"));

var _ChevronDoubleRight = _interopRequireDefault(require("@backyard/icons/ChevronDoubleRight"));

var _Bullet = _interopRequireDefault(require("@backyard/icons/Bullet"));

var _includes = _interopRequireDefault(require("core-js-pure/stable/array/includes"));

var _IconButton = _interopRequireDefault(require("../IconButton"));

var _excluded = ["className", "color", "component", "disabled", "page", "selected", "shape", "size", "type", "variant"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Backyard React PaginationItem
 *
 * @todo Comments
 */
var PaginationItem = /*#__PURE__*/React.forwardRef(function PaginationItem(_ref, ref) {
  var _normalizedIcons;

  var className = _ref.className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'interactive' : _ref$color,
      component = _ref.component,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      page = _ref.page,
      _ref$selected = _ref.selected,
      selected = _ref$selected === void 0 ? false : _ref$selected,
      _ref$shape = _ref.shape,
      shape = _ref$shape === void 0 ? 'custom' : _ref$shape,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'page' : _ref$type,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'ghost' : _ref$variant,
      other = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var ellipsis = (0, _includes["default"])(['start-ellipsis', 'end-ellipsis'], type);
  var normalizedIcons = (_normalizedIcons = {
    first: _ChevronDoubleLeft["default"],
    previous: _ChevronLeft["default"],
    next: _ChevronRight["default"],
    last: _ChevronDoubleRight["default"]
  }, (0, _defineProperty2["default"])(_normalizedIcons, 'start-ellipsis', _Dots["default"]), (0, _defineProperty2["default"])(_normalizedIcons, 'end-ellipsis', _Dots["default"]), (0, _defineProperty2["default"])(_normalizedIcons, "dot", _Bullet["default"]), _normalizedIcons);
  var Icon = normalizedIcons[type];
  return /*#__PURE__*/React.createElement(_IconButton["default"], (0, _extends2["default"])({
    key: type === 'page' ? page : ellipsis,
    disabled: ellipsis ? true : disabled,
    variant: selected ? 'primary' : variant,
    size: size,
    shape: shape,
    color: color,
    className: (0, _classnames["default"])("pagination-item type--".concat(type), className, selected && "selected", ellipsis && "ellipsis"),
    ref: ref
  }, other), type === 'page' && page, Icon ? /*#__PURE__*/React.createElement(Icon, null) : null);
});
exports.PaginationItem = PaginationItem;
PaginationItem.bdsName = 'PaginationItem';
var _default = PaginationItem;
exports["default"] = _default;