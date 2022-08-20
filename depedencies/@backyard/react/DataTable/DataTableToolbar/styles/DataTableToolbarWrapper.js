"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DataTableToolbarWrapper = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Shapes = (0, _styledComponents.css)(["&.shape{&--rounded{border-top-left-radius:var(--bds-border-radius-lg);border-top-right-radius:var(--bds-border-radius-lg);border-bottom-left-radius:0;border-bottom-right-radius:0;}&--squared{border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:0;border-bottom-right-radius:0;}}"]);
var Sizes = (0, _styledComponents.css)(["&.size{&--large{padding:var(--bds-sizes-size-12) 0;}&--medium{padding:var(--bds-sizes-size-7) 0;}&--small{padding:var(--bds-sizes-size-5) 0;}}"]);

var DataTableToolbarWrapper = _styledComponents["default"].div.withConfig({
  displayName: "DataTableToolbarWrapper",
  componentId: "sc-kdd0a2-0"
})(["display:flex;flex-direction:row;justify-content:flex-start;background-color:var(--bds-color-surface-subdued);margin-bottom:var(--bds-sizes-size-8);z-index:100;", " ", " &&{.table-toolbar-action-buttons{display:flex;flex-direction:row;align-items:center;margin-left:var(--bds-sizes-size-8);.button-group{padding:0;border:0;}& > .button,& > .button-group{margin:0 var(--bds-sizes-size-8);}}}.menu-popover{padding-right:var(--bds-sizes-size-16);}.toolbar-tools{display:flex;flex-grow:1;align-items:center;padding-left:var(--bds-sizes-size-16);padding-right:var(--bds-sizes-size-16);& > *:not(:last-child){margin-right:var(--bds-sizes-size-8);}& > *:not(:first-child){margin-left:var(--bds-sizes-size-8);}}"], Sizes, Shapes);

exports.DataTableToolbarWrapper = DataTableToolbarWrapper;
var _default = DataTableToolbarWrapper;
exports["default"] = _default;