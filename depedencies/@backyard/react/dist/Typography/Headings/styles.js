"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RegularFontWeight = exports.HeadingBase = exports.H6 = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = exports.BoldFontWeight = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _TypographyBase = require("../styles/TypographyBase");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var RegularFontWeight = (0, _styledComponents.css)(["font-family:", ";font-weight:var(--bds-font-weight-regular);"], function (_ref) {
  var theme = _ref.theme;
  return theme.font.family[theme.context.paragraph];
});
exports.RegularFontWeight = RegularFontWeight;
var BoldFontWeight = (0, _styledComponents.css)(["font-family:", ";font-weight:", ";"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.font.family[theme.context.heading];
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.context.font === 'roboto' ? theme.font.weight.medium : theme.font.weight.semibold;
});
exports.BoldFontWeight = BoldFontWeight;
var HeadingBase = (0, _styledComponents.css)(["", " ", " color:", ";letter-spacing:", ";"], _TypographyBase.TypographyBase, function (_ref4) {
  var regular = _ref4.regular;
  return regular ? RegularFontWeight : BoldFontWeight;
}, function (_ref5) {
  var theme = _ref5.theme,
      color = _ref5.color;
  return theme.color[color] || theme.color.text_primary;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.context.font === 'fellix' ? '20%' : 'normal';
});
exports.HeadingBase = HeadingBase;

var H1 = _styledComponents["default"].h1.withConfig({
  displayName: "styles__H1",
  componentId: "sc-11vpuyu-0"
})(["", " font-size:var(--bds-font-tag-h1-mobile-font-size);line-height:var(--bds-font-tag-h1-mobile-line-height);@media only screen and (min-width:", "){font-size:var(--bds-font-tag-h1-desktop-font-size);line-height:var(--bds-font-tag-h1-desktop-line-height);}"], HeadingBase, function (_ref7) {
  var theme = _ref7.theme;
  return theme.grid.breakpoint.lg.min;
});

exports.H1 = H1;

var H2 = _styledComponents["default"].h2.withConfig({
  displayName: "styles__H2",
  componentId: "sc-11vpuyu-1"
})(["", " font-size:var(--bds-font-tag-h2-mobile-font-size);line-height:var(--bds-font-tag-h2-mobile-line-height);@media only screen and (min-width:", "){font-size:var(--bds-font-tag-h2-desktop-font-size);line-height:var(--bds-font-tag-h2-desktop-line-height);}"], HeadingBase, function (_ref8) {
  var theme = _ref8.theme;
  return theme.grid.breakpoint.lg.min;
});

exports.H2 = H2;

var H3 = _styledComponents["default"].h3.withConfig({
  displayName: "styles__H3",
  componentId: "sc-11vpuyu-2"
})(["", " font-size:var(--bds-font-tag-h3-mobile-font-size);line-height:var(--bds-font-tag-h3-mobile-line-height);@media only screen and (min-width:", "){font-size:var(--bds-font-tag-h3-desktop-font-size);line-height:var(--bds-font-tag-h3-desktop-line-height);}"], HeadingBase, function (_ref9) {
  var theme = _ref9.theme;
  return theme.grid.breakpoint.lg.min;
});

exports.H3 = H3;

var H4 = _styledComponents["default"].h4.withConfig({
  displayName: "styles__H4",
  componentId: "sc-11vpuyu-3"
})(["", " font-size:var(--bds-font-tag-h4-mobile-font-size);line-height:var(--bds-font-tag-h4-mobile-line-height);@media only screen and (min-width:", "){font-size:var(--bds-font-tag-h4-desktop-font-size);line-height:var(--bds-font-tag-h4-desktop-line-height);}"], HeadingBase, function (_ref10) {
  var theme = _ref10.theme;
  return theme.grid.breakpoint.lg.min;
});

exports.H4 = H4;

var H5 = _styledComponents["default"].h5.withConfig({
  displayName: "styles__H5",
  componentId: "sc-11vpuyu-4"
})(["", " font-size:var(--bds-font-tag-h5-mobile-font-size);line-height:var(--bds-font-tag-h5-mobile-line-height);@media only screen and (min-width:", "){font-size:var(--bds-font-tag-h5-desktop-font-size);line-height:var(--bds-font-tag-h5-desktop-line-height);}"], HeadingBase, function (_ref11) {
  var theme = _ref11.theme;
  return theme.grid.breakpoint.lg.min;
});

exports.H5 = H5;

var H6 = _styledComponents["default"].h6.withConfig({
  displayName: "styles__H6",
  componentId: "sc-11vpuyu-5"
})(["", " font-size:var(--bds-font-tag-h6-mobile-font-size);line-height:var(--bds-font-tag-h6-mobile-line-height);@media only screen and (min-width:", "){font-size:var(--bds-font-tag-h6-desktop-font-size);line-height:var(--bds-font-tag-h6-desktop-line-height);}"], HeadingBase, function (_ref12) {
  var theme = _ref12.theme;
  return theme.grid.breakpoint.lg.min;
});

exports.H6 = H6;