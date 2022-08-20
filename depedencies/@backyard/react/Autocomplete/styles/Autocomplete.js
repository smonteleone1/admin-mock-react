"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.AutocompleteWrapper = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Shapes = (0, _styledComponents.css)(["&.shape{&--rounded{.popover-wrapper{border-radius:var(--bds-border-radius-lg);}}&--squared{.popover-wrapper{border-radius:0;}}}"]);

var AutocompleteWrapper = _styledComponents["default"].div.withConfig({
  displayName: "Autocomplete__AutocompleteWrapper",
  componentId: "sc-eqbw9s-0"
})(["position:relative;.popover-wrapper{position:absolute;inset:none !important;top:0;left:var(--bds-sizes-size-24);box-sizing:border-box;width:100%;max-height:calc(var(--bds-sizes-size-16) * 30);border:1px solid var(--bds-color-border-subdued);background-color:var(--bds-color-elevation-04);box-shadow:var(--bds-shadows-shadow-04);overflow:auto;font-family:", ";font-weight:var(--bds-font-weight-regular);}", ""], function (_ref) {
  var theme = _ref.theme;
  return theme.font.family[theme.context.font];
}, Shapes);

exports.AutocompleteWrapper = AutocompleteWrapper;
var _default = AutocompleteWrapper;
exports["default"] = _default;