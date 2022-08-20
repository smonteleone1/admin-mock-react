"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.FileUploadWrapper = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Shapes = (0, _styledComponents.css)(["&.shape{&--rounded{.file-upload-dropzone{border-radius:var(--bds-border-radius-lg);}}&--squared{.file-upload-dropzone{border-radius:0;}}}"]);

var FileUploadWrapper = _styledComponents["default"].div.withConfig({
  displayName: "FileUploadWrapper",
  componentId: "sc-1ainx55-0"
})([".file-upload-dropzone{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:var(--bds-sizes-size-24);border-width:var(--bds-sizes-size-2);border-color:var(--bds-color-border-default);border-style:dashed;height:var(--bds-sizes-size-128);box-sizing:border-box;outline:none;.file-upload-dropzone-label{color:var(--bds-color-text-interactive);font-size:var(--bds-sizes-size-14);line-height:var(--bds-sizes-size-24);max-width:10rem;text-align:center;font-family:", ";font-weight:var(--bds-font-weight-regular);}&,*{cursor:pointer;}&:hover,&.hover,&.drag-active{border-style:dashed;border-color:var(--bds-color-action-interactive-hover);}&:focus,&.focus{border-style:solid;border-color:var(--bds-color-action-interactive);box-shadow:0px 0 0 2px var(--bds-color-action-interactive);}&:disabled,&.disabled{border-color:var(--bds-color-border-disabled);pointer-events:none;.file-upload-dropzone-label{color:var(--bds-color-text-disabled);}}}.file-upload-alert{margin-top:var(--bds-sizes-size-16);}.file-upload-label{.file-upload-heading{margin-bottom:var(--bds-sizes-size-16);}.file-upload-caption{margin-bottom:var(--bds-sizes-size-16);}}.file-upload-items{margin-top:var(--bds-sizes-size-16);padding-left:0;position:relative;.file-upload-item:not(:last-child){margin-bottom:var(--bds-sizes-size-8);}}", ""], function (_ref) {
  var theme = _ref.theme;
  return theme.font.family[theme.context.font];
}, Shapes);

exports.FileUploadWrapper = FileUploadWrapper;
var _default = FileUploadWrapper;
exports["default"] = _default;