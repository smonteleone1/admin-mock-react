"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TableRow = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _TableRowWrapper = _interopRequireDefault(require("./styles/TableRowWrapper"));

var _excluded = ["children", "className"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Corresponding html '<tr>' tag of the Backyard Design System's table component.
 * Used with TableCell, TableHeader and TableBody to build out the body of a table.
 * Used with TableHeader and TableHead to build out the header of a table.
 *
 * ex.
 * <Table>
 *   <TableRow>
 *       <TableHeader>Header 1</TableHeader>
 *       <TableCell>Data 1</TableCell>
 *   </TableRow>
 *   <TableRow>
 *       <TableHeader>Header 2</TableHeader>
 *       <TableCell>Data 2</TableCell>
 *   </TableRow>
 * </Table>
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
 *       <TableRow>
 *           <TableCell>Data 1.1</TableCell>
 *           <TableCell>Data 1.2</TableCell>
 *           <TableCell>Data 1.3</TableCell>
 *       </TableRow>
 *       <TableRow>
 *           <TableCell>Data 2.1</TableCell>
 *           <TableCell>Data 2.2</TableCell>
 *           <TableCell>Data 2.3</TableCell>
 *       </TableRow>
 *   </TableBody>
 * </Table>
 */
var TableRow = /*#__PURE__*/React.forwardRef(function TableRow(_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/React.createElement(_TableRowWrapper["default"], (0, _extends2["default"])({
    className: (0, _classnames["default"])('table-row', className)
  }, props, {
    ref: ref
  }), children);
});
exports.TableRow = TableRow;
TableRow.bdsName = 'TableRow';
var _default = TableRow;
exports["default"] = _default;