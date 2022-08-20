"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MultiselectWrapper = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Shapes = (0, _styledComponents.css)(["&.shape{&--rounded{border-radius:var(--bds-border-radius-lg);}&--squared{border-radius:0;}}"]);

var MultiselectWrapper = _styledComponents["default"].div.withConfig({
  displayName: "MultiselectWrapper",
  componentId: "sc-lcynd4-0"
})(["&&{position:relative;label.completed{top:-12px;left:16px;font-size:var(--bds-sizes-size-14);&.size--small{top:-12px;left:16px;font-size:var(--bds-sizes-size-12);}&.size--large{top:-12px;}&.size--jumbo{font-size:var(--bds-sizes-size-20);top:-12px;}}fieldset.open{border-color:var(--bds-color-border-interactive);border-width:var(--bds-sizes-size-2);}.popover--wrapper{padding:var(--bds-sizes-size-8) 0;width:100%;max-height:", ";border:1px solid var(--bds-color-border-subdued);background-color:var(--bds-color-elevation-04);box-shadow:var(--bds-shadows-shadow-04);overflow-x:hidden;", "}.select--container{.select--value{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}}.toggle-button-group{flex-direction:column;.toggle-button{border:none;.label{justify-content:flex-start;height:calc(var(--bds-sizes-size-24) - var(--bds-sizes-size-2));font-family:", ";font-weight:var(--bds-font-weight-regular);font-size:var(--bds-sizes-size-14);line-height:var(--bds-sizes-size-24);.list-label{margin-left:var(--bds-sizes-size-16);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}@media only screen and (min-width:", "){font-size:var(--bds-sizes-size-16);line-height:var(--bsd-sizes-size-24);}}}}}"], function (_ref) {
  var theme = _ref.theme,
      maxHeight = _ref.maxHeight;
  return maxHeight || "calc(".concat(theme.sizes.size_16, " * 16.5)");
}, Shapes, function (_ref2) {
  var theme = _ref2.theme;
  return theme.font.family[theme.context.paragraph];
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.grid.breakpoint.lg.max;
});

exports.MultiselectWrapper = MultiselectWrapper;
var _default = MultiselectWrapper;
exports["default"] = _default;