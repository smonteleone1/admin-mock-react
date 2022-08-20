"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TextInputWrapper = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Wrapper = (0, _styledComponents.css)(["border:none;display:flex;flex-direction:column;vertical-align:top;padding:0;position:relative;width:100%;input,textarea,legend,label,span,.suffix{font-family:", ";font-weight:var(--bds-font-weight-regular);font-size:var(--bds-sizes-size-16);line-height:var(--bds-sizes-size-24);background-color:transparent;&.disabled{color:var(--bds-color-text-disabled);}}svg{box-sizing:border-box;}input,textarea{box-sizing:border-box;border:none;outline:none;width:100%;padding:0 var(--bds-sizes-size-16);color:var(--bds-color-text-primary);}&.item--before input{padding:0;}.item--before{margin-left:var(--bds-sizes-size-4);margin-right:var(--bds-sizes-size-8);&.icon{margin-left:var(--bds-sizes-size-16);path,circle{fill:", ";}}}.item--after{margin-right:var(--bds-sizes-size-4);margin-left:var(--bds-sizes-size-8);&.icon{margin-right:var(--bds-sizes-size-16);path,circle{fill:var(--bds-color-icon-tertiary);}}}&.state--success svg.icon--success,&.state--error svg.item--after{margin-right:var(--bds-sizes-size-16);}&.state--error svg.item--after path{fill:var(--bds-color-icon-red);}&.has--placeholder{label{display:none;}legend{display:none;}}"], function (_ref) {
  var theme = _ref.theme;
  return theme.font.family[theme.context.font];
}, function (_ref2) {
  var customIcon = _ref2.customIcon;
  return customIcon ? '' : 'var(--bds-color-icon-tertiary)';
});

var TextInputWrapper = _styledComponents["default"].div.withConfig({
  displayName: "TextInputWrapper",
  componentId: "sc-b3qmsm-0"
})(["", ""], Wrapper);

exports.TextInputWrapper = TextInputWrapper;
var _default = TextInputWrapper;
exports["default"] = _default;