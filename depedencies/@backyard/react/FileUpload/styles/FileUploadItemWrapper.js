"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.FileUploadItemWrapper = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Shapes = (0, _styledComponents.css)(["&.shape{&--rounded{border-radius:var(--bds-border-radius-lg);}&--squared{border-radius:0;}}"]);

var FileUploadItemWrapper = _styledComponents["default"].li.withConfig({
  displayName: "FileUploadItemWrapper",
  componentId: "sc-1ftci05-0"
})(["position:relative;display:flex;justify-content:space-between;align-items:center;", " padding-left:var(--bds-sizes-size-16);padding-right:var(--bds-sizes-size-16);height:var(--bds-sizes-size-40);z-index:1;background-color:var(--bds-color-surface-subdued);.file-upload-item-label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-family:", ";font-weight:var(--bds-font-weight-regular);}.file-upload-item-icon{display:flex;align-items:center;justify-content:center;margin-left:var(--bds-sizes-size-20);min-width:var(--bds-sizes-size-16);min-height:var(--bds-sizes-size-16);.icon-close,.icon-close-circle-filled{cursor:pointer;}}@media only screen and (min-width:var(--bds-grid-breakpoint-md-max)){font-size:var(--bds-sizes-size-16);line-height:var(--bds-sizes-size-24);}"], Shapes, function (_ref) {
  var theme = _ref.theme;
  return theme.font.family[theme.context.font];
});

exports.FileUploadItemWrapper = FileUploadItemWrapper;
var _default = FileUploadItemWrapper;
exports["default"] = _default;