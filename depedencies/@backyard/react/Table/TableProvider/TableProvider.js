"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TableProvider = exports.TableContext = exports.TableConsumer = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _ThemeProvider = require("../../ThemeProvider");

var _excluded = ["children", "shape"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Table Context
 */
var TableContext = /*#__PURE__*/React.createContext(null);
/**
 * Table Consumer
 */

exports.TableContext = TableContext;
var TableConsumer = TableContext.Consumer;
/**
 * Backyard React Table Provider
 *
 * Provides values to children and handles state management of the `Table`.
 */

exports.TableConsumer = TableConsumer;

var TableProvider = function TableProvider(_ref) {
  var children = _ref.children,
      shapeProp = _ref.shape,
      override = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var shapeContext = (0, _ThemeProvider.useBackyardTheme)({
    validate: true,
    name: 'Table'
  }).context.shape;
  var shape = (0, _ThemeProvider.getShape)(shapeProp, shapeContext);
  var context = React.useMemo(function () {
    return {
      shape: shape
    };
  }, [shape]);
  return /*#__PURE__*/React.createElement(TableContext.Provider, {
    value: (0, _extends2["default"])({}, context, override)
  }, children);
};
/**
 * Context values that can be passed to children via
 *
 * `const context = React.useContext(TableContext)`
 */


exports.TableProvider = TableProvider;
process.env.NODE_ENV !== "production" ? TableProvider.propTypes = {
  children: _propTypes["default"].node.isRequired
} : void 0;
var _default = TableProvider;
exports["default"] = _default;