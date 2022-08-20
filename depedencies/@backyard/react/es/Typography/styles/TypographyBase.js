import styled, { css } from 'styled-components';
const TypographyBase = css(["color:", ";margin:0;", ";&.align--left{text-align:left;}&.align--center{text-align:center;}&.align--right{text-align:right;}&.display--block{display:block;}&.display--inline{display:inline;}b,bold,strong{font-family:", ";font-weight:", "}&.bold{font-weight:", "}"], ({
  theme,
  color
}) => theme.color[color] || theme.color.text_primary, ({
  theme,
  marginBottom
}) => marginBottom ? `margin-bottom: ${theme.sizes[marginBottom]};` : null, ({
  theme
}) => theme.font.family[theme.context.font], ({
  theme
}) => theme.context.font === 'roboto' ? theme.font.weight.medium : theme.font.weight.semibold, ({
  theme
}) => theme.context.font === 'roboto' ? theme.font.weight.medium : theme.font.weight.semibold);
const Label = styled.span.withConfig({
  displayName: "TypographyBase__Label",
  componentId: "sc-1sd048n-0"
})(["font-family:", ";font-weight:var(--bds-font-weight-regular);color:", ";font-size:var(--bds-font-tag-label-mobile-font-size);line-height:var(--bds-font-tag-label-mobile-line-height);@media only screen and (min-width:", "){font-size:var(--bds-font-tag-label-desktop-font-size);line-height:var(--bds-font-tag-label-desktop-line-height);}"], ({
  theme
}) => theme.font.family[theme.context.paragraph], ({
  theme,
  color
}) => theme.color[color] || theme.color.text_primary, ({
  theme
}) => theme.grid.breakpoint.md.max);
const FormHelperText = styled.span.withConfig({
  displayName: "TypographyBase__FormHelperText",
  componentId: "sc-1sd048n-1"
})(["font-family:", ";font-weight:var(--bds-font-weight-regular);color:", ";font-size:var(--bds-font-tag-helper-text-mobile-font-size);line-height:var(--bds-font-tag-helper-text-mobile-line-height);@media only screen and (min-width:", "){font-size:var(--bds-font-tag-helper-text-desktop-font-size);line-height:var(--bds-font-tag-helper-text-desktop-line-height);}"], ({
  theme
}) => theme.font.family[theme.context.paragraph], ({
  theme,
  color
}) => theme.color[color] || theme.color.text_primary, ({
  theme
}) => theme.grid.breakpoint.md.max);
const Overline = styled.span.withConfig({
  displayName: "TypographyBase__Overline",
  componentId: "sc-1sd048n-2"
})(["font-family:", ";font-weight:var(--bds-font-weight-regular);color:", ";font-size:var(--bds-font-tag-overline-mobile-font-size);line-height:var(--bds-font-tag-overline-mobile-line-height);@media only screen and (min-width:", "){font-size:var(--bds-font-tag-overline-desktop-font-size);line-height:var(--bds-font-tag-overline-desktop-line-height);}"], ({
  theme
}) => theme.font.family[theme.context.paragraph], ({
  theme,
  color
}) => theme.color[color] || theme.color.text_primary, ({
  theme
}) => theme.grid.breakpoint.md.max);
export { TypographyBase, Label, FormHelperText, Overline };