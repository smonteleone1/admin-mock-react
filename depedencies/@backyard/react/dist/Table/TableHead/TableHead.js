"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TableHead = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _TableHeadWrapper = _interopRequireDefault(require("./styles/TableHeadWrapper"));

var _excluded = ["children", "className"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Corresponding html '<thead>' tag of the Backyard Design System's table component.
 * Used with TableRow and TableHeader to build out the headers for a table.
 *
 * ex.
 * <Table>
 *   <TableHead>
 *       <TableRow>
 *           <TableHeader>Column 1</TableHeader>
 *           <TableHeader>Column 2</TableHeader>
 *           <TableHeader>Column 3</TableHeader>
 *       </TableRow>
 *   </TableHead>
 *   <TableBody>
 * ...
 */
var TableHead = /*#__PURE__*/React.forwardRef(function TableHead(_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/React.createElement(_TableHeadWrapper["default"], (0, _extends2["default"])({
    className: (0, _classnames["default"])('table-head', className)
  }, props, {
    ref: ref
  }), children);
});
exports.TableHead = TableHead;
TableHead.bdsName = 'TableHead';
var _default = TableHead;
exports["default"] = _default;