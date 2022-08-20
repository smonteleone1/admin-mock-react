"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TableHeaderWrapper = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _TableCellBase = _interopRequireDefault(require("../../TableCell/styles/TableCellBase"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var HeadContentOverflow = (0, _styledComponents.css)([".cell-content{.header-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}&.overflow{overflow:hidden;}}"]);

var TableHeaderWrapper = _styledComponents["default"].th.withConfig({
  displayName: "TableHeaderWrapper",
  componentId: "sc-1h9cp9g-0"
})(["", " ", " background-color:var(--bds-color-surface-subdued);"], _TableCellBase["default"], HeadContentOverflow);

exports.TableHeaderWrapper = TableHeaderWrapper;
var _default = TableHeaderWrapper;
exports["default"] = _default;