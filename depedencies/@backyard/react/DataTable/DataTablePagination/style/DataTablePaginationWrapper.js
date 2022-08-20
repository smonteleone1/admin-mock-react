"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DataTablePaginationWrapper = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Sizes = (0, _styledComponents.css)(["&.size--small{padding:var(--bds-sizes-size-5) var(--bds-sizes-size-16);}&.size--medium{padding:var(--bds-sizes-size-8) var(--bds-sizes-size-16);}&.size--large{padding:var(--bds-sizes-size-12) var(--bds-sizes-size-16);}"]);

var DataTablePaginationWrapper = _styledComponents["default"].div.withConfig({
  displayName: "DataTablePaginationWrapper",
  componentId: "sc-19xg8d4-0"
})(["&.table-pagination{display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%;", ";.select--container{height:2.375rem;}.table-pagination-container{display:flex;flex-direction:row;justify-content:center;align-items:center;.item-count{display:flex;flex-direction:row;align-items:center;margin-right:var(--bds-sizes-size-12);}}.table-pagination-rows{min-width:6.5rem;}}"], Sizes);

exports.DataTablePaginationWrapper = DataTablePaginationWrapper;
var _default = DataTablePaginationWrapper;
exports["default"] = _default;