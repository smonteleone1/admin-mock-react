"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.FormControlLabelWrapper = exports.FormControlLabelBase = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var FormControlLabelBase = (0, _styledComponents.css)(["position:relative;display:inline-flex;flex-direction:row;align-items:center;box-sizing:border-box;.typography{padding-left:var(--bds-sizes-size-16);-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}"]);
exports.FormControlLabelBase = FormControlLabelBase;

var FormControlLabelWrapper = _styledComponents["default"].label.withConfig({
  displayName: "FormControlLabelWrapper",
  componentId: "sc-1gmwmm4-0"
})(["", " .typography{cursor:pointer;color:var(--bds-color-text-primary);}&.disabled{.typography{cursor:not-allowed;color:var(--bds-color-text-disabled);}}"], FormControlLabelBase);

exports.FormControlLabelWrapper = FormControlLabelWrapper;
var _default = FormControlLabelWrapper;
exports["default"] = _default;