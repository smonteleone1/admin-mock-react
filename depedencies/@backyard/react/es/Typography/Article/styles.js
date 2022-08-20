import styled, { css } from 'styled-components';
import { TypographyBase } from '../styles/TypographyBase';
export const ArticleBase = css(["", " font-family:", ";font-weight:var(--bds-font-weight-regular);color:", ";"], TypographyBase, ({
  theme
}) => theme.font.family[theme.context.article], ({
  theme,
  color
}) => theme.color[color] || theme.color.text_primary);
export const ArticleRegular = styled.p.withConfig({
  displayName: "styles__ArticleRegular",
  componentId: "sc-1izs83r-0"
})(["", " font-size:var(--bds-font-tag-article-mobile-font-size);line-height:var(--bds-font-tag-article-mobile-line-height);@media only screen and (min-width:", "){font-size:var(--bds-font-tag-article-desktop-font-size);line-height:var(--bds-font-tag-article-desktop-line-height);}"], ArticleBase, ({
  theme
}) => theme.grid.breakpoint.lg.min);