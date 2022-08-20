"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DataTableWrapper = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Shapes = (0, _styledComponents.css)(["&.shape{&--rounded{&.no-toolbar{border-top-left-radius:var(--bds-border-radius-lg);border-top-right-radius:var(--bds-border-radius-lg);}&.no-footer{.data-table-body > .data-table-row:last-child{& > .data-table-cell:first-child{border-bottom-left-radius:var(--bds-border-radius-lg);}& > .data-table-cell:last-child{border-bottom-right-radius:var(--bds-border-radius-lg);}}}border-bottom-left-radius:0;border-bottom-right-radius:0;}&--squared{border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:0;border-bottom-right-radius:0;}}"]);

var DataTableWrapper = _styledComponents["default"].div.withConfig({
  displayName: "DataTableContentWrapper__DataTableWrapper",
  componentId: "sc-1a3wvdf-0"
})(["display:flex;flex-direction:column;border-collapse:separate;border-spacing:0;width:100%;max-height:100%;", " .data-table-content-scrollable{position:relative;display:flex;flex-direction:column;max-height:100%;border:var(--bds-sizes-size-1) solid var(--bds-color-border-subdued);", " .data-table-body{width:fit-content;min-width:100%;}}&:not(.disable-scrollbar) .data-table-content-scrollable{overflow-y:hidden;overflow-x:auto;.data-table-body{overflow-y:auto;overflow-x:hidden;}}.data-table-row{display:flex;flex-direction:row;}.data-table-row{& > .data-table-cell{border-bottom:0;}}.data-table-cell:not(:last-child){border-right:0;}"], Shapes, Shapes);

exports.DataTableWrapper = DataTableWrapper;
var _default = DataTableWrapper;
exports["default"] = _default;