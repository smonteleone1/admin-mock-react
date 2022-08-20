"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.FormHelperTextWrapper = exports.FormHelperTextBase = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var FormHelperTextBase = (0, _styledComponents.css)(["margin:0;padding-top:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.sizes.size_4;
});
exports.FormHelperTextBase = FormHelperTextBase;

var FormHelperTextWrapper = _styledComponents["default"].span.withConfig({
  displayName: "FormHelperTextWrapper",
  componentId: "sc-12bbq8z-0"
})(["", " .typography{color:", ";.icon path{fill:", ";}}.icon{vertical-align:text-top;}.helper-text-icon{margin-right:", ";}&&.indent{.typography{padding-left:var(--helper-text-indent);}}&&.disabled{.typography{color:", ";.icon path{fill:", ";}}}&.error{.typography{color:", ";.icon path{fill:", ";}}}&.success{.typography{color:", ";.icon path{fill:", ";}}}&.warning{.typography{color:", ";.icon path{fill:", ";}}}&.info{.typography{color:", ";.icon path{fill:", ";}}}"], FormHelperTextBase, function (_ref2) {
  var theme = _ref2.theme;
  return theme.color.text_tertiary;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.color.text_tertiary;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.sizes.size_8;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.color.text_disabled;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.color.text_disabled;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.color.text_red;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.color.text_red;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.color.text_green;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.color.text_green;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.color.text_red;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.color.text_red;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.color.text_interactive;
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.color.text_interactive;
});

exports.FormHelperTextWrapper = FormHelperTextWrapper;
var _default = FormHelperTextWrapper;
exports["default"] = _default;