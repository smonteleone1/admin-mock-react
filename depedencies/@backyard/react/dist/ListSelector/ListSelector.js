"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ListSelector = exports.List = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _ThemeProvider = require("../ThemeProvider");

var _ListSelectorMultiple = _interopRequireDefault(require("./ListSelectorMultiple"));

var _ListSelectorSingle = _interopRequireDefault(require("./ListSelectorSingle"));

var _excluded = ["shape", "multiple", "children", "options"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * TypeScript guard for prop types
 */
var GuardMultipleProps = function GuardMultipleProps(props, multiple) {
  return multiple;
};
/**
 * Backyard React List Selector (List)
 *
 * `List` provides a method for selecting a single or multiple option out of a list of options.
 *
 * It functions similarly to a `Select` or `Multiselect` but offers a different, more customized presentation to the user.
 *
 * For a non-selected list of options for a user to trigger actions from, use `Menu`.
 *
 * Example:
 * ```
 *  <List>
 *      <ListOption
 *          icon={<Location />}
 *      >
 *          New York
 *      </ListOption>
 *      <ListOption
 *          icon={<Location />}
 *      >
 *          New Jersey
 *      </ListOption>
 *      <ListOption
 *          icon={<Location />}
 *      >
 *          Charlotte
 *      </ListOption>
 *      <ListOption
 *          icon={<Location />}
 *      >
 *          Atlanta
 *      </ListOption>
 *  </List>
 * ```
 */


GuardMultipleProps.propTypes = {
  children: _propTypes["default"].arrayOf(_propTypes["default"].element),
  multiple: _propTypes["default"].bool,
  renderItem: _propTypes["default"].func,
  defaultValue: _propTypes["default"].oneOfType([_propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]), _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]))]),
  value: _propTypes["default"].oneOfType([_propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]), _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]))]),
  shape: _propTypes["default"].oneOf(['rounded', 'squared'])
};
var ListSelector = /*#__PURE__*/React.forwardRef(function ListSelector(_ref, ref) {
  var shapeProp = _ref.shape,
      _ref$multiple = _ref.multiple,
      multiple = _ref$multiple === void 0 ? false : _ref$multiple,
      children = _ref.children,
      options = _ref.options,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // Get Backyard Theme Context
  var shapeContext = (0, _ThemeProvider.useBackyardTheme)({
    validate: true,
    name: 'ListSelector'
  }).context.shape; // Calculate shape

  var shape = (0, _ThemeProvider.getShape)(shapeProp, shapeContext); // Calculate size of the options

  var size = React.useMemo(function () {
    return children ? React.Children.count(children) : options === null || options === void 0 ? void 0 : options.length;
  }, [options, children]);
  return GuardMultipleProps(props, multiple) ? /*#__PURE__*/React.createElement(_ListSelectorMultiple["default"], (0, _extends2["default"])({
    key: "multiple-".concat(size) // re-render when size changes
    ,
    shape: shape,
    options: options
  }, props, {
    ref: ref
  }), children) : /*#__PURE__*/React.createElement(_ListSelectorSingle["default"], (0, _extends2["default"])({
    key: "single-".concat(size) // re-render when size changes
    ,
    shape: shape,
    options: options
  }, props, {
    ref: ref
  }), children);
});
exports.ListSelector = ListSelector;
// Rename `ListSelector` to `List` for backwards compatibility
var List = ListSelector;
exports.List = List;
var _default = ListSelector;
exports["default"] = _default;