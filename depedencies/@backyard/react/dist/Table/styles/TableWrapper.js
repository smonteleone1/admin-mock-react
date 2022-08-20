"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TableWrapper = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Shapes = (0, _styledComponents.css)(["&.shape{&--rounded{& > .table-head{& > .table-row > .table-cell{border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:0;border-bottom-right-radius:0;}& > .table-row:first-child{& > .table-cell:first-child{border-top-left-radius:var(--bds-border-radius-lg);}& > .table-cell:last-child{border-top-right-radius:var(--bds-border-radius-lg);}}}& > .table-body{& > .table-row > .table-cell{border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:0;border-bottom-right-radius:0;}&:first-child{& > .table-row:first-child{& > .table-cell:first-child{border-top-left-radius:var(--bds-border-radius-lg);}& > .table-cell:last-child{border-top-right-radius:var(--bds-border-radius-lg);}}}& > .table-row:last-child{& > .table-cell:first-child{border-bottom-left-radius:var(--bds-border-radius-lg);}& > .table-cell:last-child{border-bottom-right-radius:var(--bds-border-radius-lg);}}}}&--squared{& > .table-head,& > .table-body{& > .table-row > .table-cell{border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:0;border-bottom-right-radius:0;}}}}"]);

var TableWrapper = _styledComponents["default"].table.withConfig({
  displayName: "TableWrapper",
  componentId: "sc-ys35zb-0"
})(["width:100%;table-layout:fixed;border-collapse:collapse;border-spacing:0;box-sizing:border-box;thead,tbody,tfoot,tr,th,td{box-sizing:border-box;font-family:", ";font-weight:", "}&.variant--outlined{th{background-color:var(--bds-color-surface-default);}}&.right-rule-on{tr{th:not(:last-child),td:not(:last-child){border-right:1px solid var(--bds-color-border-subdued);}}}h5{margin:0;}", ""], function (_ref) {
  var theme = _ref.theme;
  return theme.font.family[theme.context.font];
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.context.font === 'roboto' ? theme.font.weight.medium : theme.font.weight.semibold;
}, Shapes);

exports.TableWrapper = TableWrapper;
var _default = TableWrapper;
exports["default"] = _default;