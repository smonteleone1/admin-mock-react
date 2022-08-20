import styled, { css } from 'styled-components';
import { TypographyBase } from '../styles/TypographyBase';
export const RegularFontWeight = css(["font-family:", ";font-weight:var(--bds-font-weight-regular);"], ({
  theme
}) => theme.font.family[theme.context.paragraph]);
export const BoldFontWeight = css(["font-family:", ";font-weight:", ";"], ({
  theme
}) => theme.font.family[theme.context.heading], ({
  theme
}) => theme.context.font === 'roboto' ? theme.font.weight.medium : theme.font.weight.semibold);
export const HeadingBase = css(["", " ", " color:", ";letter-spacing:", ";"], TypographyBase, ({
  regular
}) => regular ? RegularFontWeight : BoldFontWeight, ({
  theme,
  color
}) => theme.color[color] || theme.color.text_primary, ({
  theme
}) => theme.context.font === 'fellix' ? '20%' : 'normal');
export const H1 = styled.h1.withConfig({
  displayName: "styles__H1",
  componentId: "sc-11vpuyu-0"
})(["", " font-size:var(--bds-font-tag-h1-mobile-font-size);line-height:var(--bds-font-tag-h1-mobile-line-height);@media only screen and (min-width:", "){font-size:var(--bds-font-tag-h1-desktop-font-size);line-height:var(--bds-font-tag-h1-desktop-line-height);}"], HeadingBase, ({
  theme
}) => theme.grid.breakpoint.lg.min);
export const H2 = styled.h2.withConfig({
  displayName: "styles__H2",
  componentId: "sc-11vpuyu-1"
})(["", " font-size:var(--bds-font-tag-h2-mobile-font-size);line-height:var(--bds-font-tag-h2-mobile-line-height);@media only screen and (min-width:", "){font-size:var(--bds-font-tag-h2-desktop-font-size);line-height:var(--bds-font-tag-h2-desktop-line-height);}"], HeadingBase, ({
  theme
}) => theme.grid.breakpoint.lg.min);
export const H3 = styled.h3.withConfig({
  displayName: "styles__H3",
  componentId: "sc-11vpuyu-2"
})(["", " font-size:var(--bds-font-tag-h3-mobile-font-size);line-height:var(--bds-font-tag-h3-mobile-line-height);@media only screen and (min-width:", "){font-size:var(--bds-font-tag-h3-desktop-font-size);line-height:var(--bds-font-tag-h3-desktop-line-height);}"], HeadingBase, ({
  theme
}) => theme.grid.breakpoint.lg.min);
export const H4 = styled.h4.withConfig({
  displayName: "styles__H4",
  componentId: "sc-11vpuyu-3"
})(["", " font-size:var(--bds-font-tag-h4-mobile-font-size);line-height:var(--bds-font-tag-h4-mobile-line-height);@media only screen and (min-width:", "){font-size:var(--bds-font-tag-h4-desktop-font-size);line-height:var(--bds-font-tag-h4-desktop-line-height);}"], HeadingBase, ({
  theme
}) => theme.grid.breakpoint.lg.min);
export const H5 = styled.h5.withConfig({
  displayName: "styles__H5",
  componentId: "sc-11vpuyu-4"
})(["", " font-size:var(--bds-font-tag-h5-mobile-font-size);line-height:var(--bds-font-tag-h5-mobile-line-height);@media only screen and (min-width:", "){font-size:var(--bds-font-tag-h5-desktop-font-size);line-height:var(--bds-font-tag-h5-desktop-line-height);}"], HeadingBase, ({
  theme
}) => theme.grid.breakpoint.lg.min);
export const H6 = styled.h6.withConfig({
  displayName: "styles__H6",
  componentId: "sc-11vpuyu-5"
})(["", " font-size:var(--bds-font-tag-h6-mobile-font-size);line-height:var(--bds-font-tag-h6-mobile-line-height);@media only screen and (min-width:", "){font-size:var(--bds-font-tag-h6-desktop-font-size);line-height:var(--bds-font-tag-h6-desktop-line-height);}"], HeadingBase, ({
  theme
}) => theme.grid.breakpoint.lg.min);