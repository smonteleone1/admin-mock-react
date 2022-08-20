"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ParagraphRegular = exports.ParagraphBase = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _TypographyBase = require("../styles/TypographyBase");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ParagraphBase = (0, _styledComponents.css)(["", " font-family:", ";font-weight:var(--bds-font-weight-regular);color:", ";"], _TypographyBase.TypographyBase, function (_ref) {
  var theme = _ref.theme;
  return theme.font.family[theme.context.paragraph];
}, function (_ref2) {
  var theme = _ref2.theme,
      color = _ref2.color;
  return theme.color[color] || theme.color.text_primary;
});
exports.ParagraphBase = ParagraphBase;

var ParagraphRegular = _styledComponents["default"].p.withConfig({
  displayName: "styles__ParagraphRegular",
  componentId: "sc-1ljw3tp-0"
})(["", " &&&.body_1{font-size:var(--bds-font-tag-body-1-mobile-font-size);line-height:var(--bds-font-tag-body-1-mobile-line-height);}&&&.body_2{font-size:var(--bds-font-tag-body-2-mobile-font-size);line-height:var(--bds-font-tag-body-2-mobile-line-height);}@media only screen and (min-width:", "){&&&.body_1{font-size:var(--bds-font-tag-body-1-desktop-font-size);line-height:var(--bds-font-tag-body-1-desktop-line-height);}&&&.body_2{font-size:var(--bds-font-tag-body-2-desktop-font-size);line-height:var(--bds-font-tag-body-2-desktop-line-height);}}"], ParagraphBase, function (_ref3) {
  var theme = _ref3.theme;
  return theme.grid.breakpoint.lg.min;
});

exports.ParagraphRegular = ParagraphRegular;