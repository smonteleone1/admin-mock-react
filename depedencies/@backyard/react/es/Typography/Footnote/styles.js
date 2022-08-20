import styled, { css } from 'styled-components';
import { TypographyBase } from '../styles/TypographyBase';
export const FootnoteBase = css(["", " font-family:", ";font-weight:var(--bds-font-weight-regular);color:", ";"], TypographyBase, ({
  theme
}) => theme.font.family[theme.context.caption], ({
  theme,
  color
}) => theme.color[color] || theme.color.text_primary);
export const FootnoteRegular = styled.span.withConfig({
  displayName: "styles__FootnoteRegular",
  componentId: "sc-m22ho9-0"
})(["", " font-size:var(--bds-font-tag-footnote-mobile-font-size);line-height:var(--bds-font-tag-footnote-mobile-line-height);@media only screen and (min-width:", "){font-size:var(--bds-font-tag-footnote-desktop-font-size);line-height:var(--bds-font-tag-footnote-desktop-line-height);}"], FootnoteBase, ({
  theme
}) => theme.grid.breakpoint.lg.min);