"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.BaseTabsWrapper = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Shapes = (0, _styledComponents.css)(["&.shape{&--rounded{.tablist{& > .tab{border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:0;border-bottom-right-radius:0;}}}&--squared{.tablist{border-radius:0;& > .tab{border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:0;border-bottom-right-radius:0;}}}}"]);

var BaseTabsWrapper = _styledComponents["default"].div.withConfig({
  displayName: "TabsWrapper__BaseTabsWrapper",
  componentId: "sc-z5f3tm-0"
})(["display:flex;flex-direction:column;width:100%;", " .tabs{position:relative;width:100%;z-index:1;padding:0;.tablist{display:flex;flex-direction:row;width:100%;background-color:trasparent;margin:0;padding:0;list-style:none;}}.content-container{width:100%;}.tabs .carousel-item{margin:0;flex-grow:1;flex-shrink:0;}.tabs .carousel-button-left.carousel-button-left.carousel-button-left.carousel-button-left,.tabs .carousel-button-right.carousel-button-right.carousel-button-right.carousel-button-right{background-color:transparent;width:2.375rem;height:2.375rem;padding:auto;&:hover{border-bottom-color:var(--bds-color-action-interactive-hover);}&:focus{box-shadow:inset 0 0 0 var(--bds-sizes-size-2) var(--bds-color-action-interactive);}& .icon path{fill:", ";}}.tabs .carousel-content{width:100%;padding:0;flex-wrap:nowrap;}"], Shapes, function (_ref) {
  var theme = _ref.theme;
  return theme.color.action_interactive;
});

exports.BaseTabsWrapper = BaseTabsWrapper;
var _default = BaseTabsWrapper;
exports["default"] = _default;