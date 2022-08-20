import styled, { css } from 'styled-components';
import { TypographyBase } from '../styles/TypographyBase';
export var ArticleBase = css(["", " font-family:", ";font-weight:var(--bds-font-weight-regular);color:", ";"], TypographyBase, function (_ref) {
  var theme = _ref.theme;
  return theme.font.family[theme.context.article];
}, function (_ref2) {
  var theme = _ref2.theme,
      color = _ref2.color;
  return theme.color[color] || theme.color.text_primary;
});
export var ArticleRegular = styled.p.withConfig({
  displayName: "styles__ArticleRegular",
  componentId: "sc-1izs83r-0"
})(["", " font-size:var(--bds-font-tag-article-mobile-font-size);line-height:var(--bds-font-tag-article-mobile-line-height);@media only screen and (min-width:", "){font-size:var(--bds-font-tag-article-desktop-font-size);line-height:var(--bds-font-tag-article-desktop-line-height);}"], ArticleBase, function (_ref3) {
  var theme = _ref3.theme;
  return theme.grid.breakpoint.lg.min;
});