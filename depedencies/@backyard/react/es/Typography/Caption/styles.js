import styled, { css } from 'styled-components';
import { TypographyBase } from '../styles/TypographyBase';
export const CaptionBase = css(["", " font-family:", ";font-weight:var(--bds-font-weight-regular);color:", ";"], TypographyBase, ({
  theme
}) => theme.font.family[theme.context.caption], ({
  theme,
  color
}) => theme.color[color] || theme.color.text_primary);
export const CaptionRegular = styled.span.withConfig({
  displayName: "styles__CaptionRegular",
  componentId: "sc-qyyr4e-0"
})(["", " font-size:var(--bds-font-tag-caption-mobile-font-size);line-height:var(--bds-font-tag-caption-mobile-line-height);@media only screen and (min-width:", "){font-size:var(--bds-font-tag-caption-desktop-font-size);line-height:var(--bds-font-tag-caption-desktop-line-height);}"], CaptionBase, ({
  theme
}) => theme.grid.breakpoint.lg.min);