import styled, { css } from 'styled-components';
var TypographyBase = css(["color:", ";margin:0;", ";&.align--left{text-align:left;}&.align--center{text-align:center;}&.align--right{text-align:right;}&.display--block{display:block;}&.display--inline{display:inline;}b,bold,strong{font-family:", ";font-weight:", "}&.bold{font-weight:", "}"], function (_ref) {
  var theme = _ref.theme,
      color = _ref.color;
  return theme.color[color] || theme.color.text_primary;
}, function (_ref2) {
  var theme = _ref2.theme,
      marginBottom = _ref2.marginBottom;
  return marginBottom ? "margin-bottom: ".concat(theme.sizes[marginBottom], ";") : null;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.font.family[theme.context.font];
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.context.font === 'roboto' ? theme.font.weight.medium : theme.font.weight.semibold;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.context.font === 'roboto' ? theme.font.weight.medium : theme.font.weight.semibold;
});
var Label = styled.span.withConfig({
  displayName: "TypographyBase__Label",
  componentId: "sc-1sd048n-0"
})(["font-family:", ";font-weight:var(--bds-font-weight-regular);color:", ";font-size:var(--bds-font-tag-label-mobile-font-size);line-height:var(--bds-font-tag-label-mobile-line-height);@media only screen and (min-width:", "){font-size:var(--bds-font-tag-label-desktop-font-size);line-height:var(--bds-font-tag-label-desktop-line-height);}"], function (_ref6) {
  var theme = _ref6.theme;
  return theme.font.family[theme.context.paragraph];
}, function (_ref7) {
  var theme = _ref7.theme,
      color = _ref7.color;
  return theme.color[color] || theme.color.text_primary;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.grid.breakpoint.md.max;
});
var FormHelperText = styled.span.withConfig({
  displayName: "TypographyBase__FormHelperText",
  componentId: "sc-1sd048n-1"
})(["font-family:", ";font-weight:var(--bds-font-weight-regular);color:", ";font-size:var(--bds-font-tag-helper-text-mobile-font-size);line-height:var(--bds-font-tag-helper-text-mobile-line-height);@media only screen and (min-width:", "){font-size:var(--bds-font-tag-helper-text-desktop-font-size);line-height:var(--bds-font-tag-helper-text-desktop-line-height);}"], function (_ref9) {
  var theme = _ref9.theme;
  return theme.font.family[theme.context.paragraph];
}, function (_ref10) {
  var theme = _ref10.theme,
      color = _ref10.color;
  return theme.color[color] || theme.color.text_primary;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.grid.breakpoint.md.max;
});
var Overline = styled.span.withConfig({
  displayName: "TypographyBase__Overline",
  componentId: "sc-1sd048n-2"
})(["font-family:", ";font-weight:var(--bds-font-weight-regular);color:", ";font-size:var(--bds-font-tag-overline-mobile-font-size);line-height:var(--bds-font-tag-overline-mobile-line-height);@media only screen and (min-width:", "){font-size:var(--bds-font-tag-overline-desktop-font-size);line-height:var(--bds-font-tag-overline-desktop-line-height);}"], function (_ref12) {
  var theme = _ref12.theme;
  return theme.font.family[theme.context.paragraph];
}, function (_ref13) {
  var theme = _ref13.theme,
      color = _ref13.color;
  return theme.color[color] || theme.color.text_primary;
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.grid.breakpoint.md.max;
});
export { TypographyBase, Label, FormHelperText, Overline };