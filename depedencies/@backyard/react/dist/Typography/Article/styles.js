"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArticleRegular = exports.ArticleBase = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _TypographyBase = require("../styles/TypographyBase");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ArticleBase = (0, _styledComponents.css)(["", " font-family:", ";font-weight:var(--bds-font-weight-regular);color:", ";"], _TypographyBase.TypographyBase, function (_ref) {
  var theme = _ref.theme;
  return theme.font.family[theme.context.article];
}, function (_ref2) {
  var theme = _ref2.theme,
      color = _ref2.color;
  return theme.color[color] || theme.color.text_primary;
});
exports.ArticleBase = ArticleBase;

var ArticleRegular = _styledComponents["default"].p.withConfig({
  displayName: "styles__ArticleRegular",
  componentId: "sc-1izs83r-0"
})(["", " font-size:var(--bds-font-tag-article-mobile-font-size);line-height:var(--bds-font-tag-article-mobile-line-height);@media only screen and (min-width:", "){font-size:var(--bds-font-tag-article-desktop-font-size);line-height:var(--bds-font-tag-article-desktop-line-height);}"], ArticleBase, function (_ref3) {
  var theme = _ref3.theme;
  return theme.grid.breakpoint.lg.min;
});

exports.ArticleRegular = ArticleRegular;