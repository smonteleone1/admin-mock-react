"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.OrderedList = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _OrderedListWrapper = require("./styles/OrderedListWrapper");

var _ThemeProvider = require("../ThemeProvider");

var _excluded = ["children", "density", "className"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * OrderedList component
 *
 * This component is used to geneate an ordered list (<ol>) within an app.
 *
 * Has one dependent component for usage -- ListItem
 */
var OrderedList = /*#__PURE__*/React.forwardRef(function OrderedList(_ref, ref) {
  var children = _ref.children,
      density = _ref.density,
      className = _ref.className,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // Get Backyard Theme Context
  var theme = (0, _ThemeProvider.useBackyardTheme)();
  (0, _ThemeProvider.validateBackyardTheme)(theme, 'OrderedList');
  /**
   * Layout:
   *  <OrderedList density='normal'>
   *      <ListItem>Item List One</ListItem>
   *      <ListItem>Item List Two</ListItem>
   *  </OrderedList>
   */

  return /*#__PURE__*/React.createElement(_OrderedListWrapper.OrderedListWrapper, (0, _extends2["default"])({
    className: (0, _classnames["default"])(className, density && "density--".concat(density)),
    ref: ref
  }, props), children);
});
exports.OrderedList = OrderedList;
OrderedList.bdsName = 'OrderedList';
var _default = OrderedList;
exports["default"] = _default;