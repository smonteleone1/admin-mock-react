import styled, { css } from 'styled-components';
import { TypographyBase } from '../styles/TypographyBase';
export var RegularFontWeight = css(["font-family:", ";font-weight:var(--bds-font-weight-regular);"], function (_ref) {
  var theme = _ref.theme;
  return theme.font.family[theme.context.paragraph];
});
export var BoldFontWeight = css(["font-family:", ";font-weight:", ";"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.font.family[theme.context.heading];
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.context.font === 'roboto' ? theme.font.weight.medium : theme.font.weight.semibold;
});
export var HeadingBase = css(["", " ", " color:", ";letter-spacing:", ";"], TypographyBase, function (_ref4) {
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
export var H1 = styled.h1.withConfig({
  displayName: "styles__H1",
  componentId: "sc-11vpuyu-0"
})(["", " font-size:var(--bds-font-tag-h1-mobile-font-size);line-height:var(--bds-font-tag-h1-mobile-line-height);@media only screen and (min-width:", "){font-size:var(--bds-font-tag-h1-desktop-font-size);line-height:var(--bds-font-tag-h1-desktop-line-height);}"], HeadingBase, function (_ref7) {
  var theme = _ref7.theme;
  return theme.grid.breakpoint.lg.min;
});
export var H2 = styled.h2.withConfig({
  displayName: "styles__H2",
  componentId: "sc-11vpuyu-1"
})(["", " font-size:var(--bds-font-tag-h2-mobile-font-size);line-height:var(--bds-font-tag-h2-mobile-line-height);@media only screen and (min-width:", "){font-size:var(--bds-font-tag-h2-desktop-font-size);line-height:var(--bds-font-tag-h2-desktop-line-height);}"], HeadingBase, function (_ref8) {
  var theme = _ref8.theme;
  return theme.grid.breakpoint.lg.min;
});
export var H3 = styled.h3.withConfig({
  displayName: "styles__H3",
  componentId: "sc-11vpuyu-2"
})(["", " font-size:var(--bds-font-tag-h3-mobile-font-size);line-height:var(--bds-font-tag-h3-mobile-line-height);@media only screen and (min-width:", "){font-size:var(--bds-font-tag-h3-desktop-font-size);line-height:var(--bds-font-tag-h3-desktop-line-height);}"], HeadingBase, function (_ref9) {
  var theme = _ref9.theme;
  return theme.grid.breakpoint.lg.min;
});
export var H4 = styled.h4.withConfig({
  displayName: "styles__H4",
  componentId: "sc-11vpuyu-3"
})(["", " font-size:var(--bds-font-tag-h4-mobile-font-size);line-height:var(--bds-font-tag-h4-mobile-line-height);@media only screen and (min-width:", "){font-size:var(--bds-font-tag-h4-desktop-font-size);line-height:var(--bds-font-tag-h4-desktop-line-height);}"], HeadingBase, function (_ref10) {
  var theme = _ref10.theme;
  return theme.grid.breakpoint.lg.min;
});
export var H5 = styled.h5.withConfig({
  displayName: "styles__H5",
  componentId: "sc-11vpuyu-4"
})(["", " font-size:var(--bds-font-tag-h5-mobile-font-size);line-height:var(--bds-font-tag-h5-mobile-line-height);@media only screen and (min-width:", "){font-size:var(--bds-font-tag-h5-desktop-font-size);line-height:var(--bds-font-tag-h5-desktop-line-height);}"], HeadingBase, function (_ref11) {
  var theme = _ref11.theme;
  return theme.grid.breakpoint.lg.min;
});
export var H6 = styled.h6.withConfig({
  displayName: "styles__H6",
  componentId: "sc-11vpuyu-5"
})(["", " font-size:var(--bds-font-tag-h6-mobile-font-size);line-height:var(--bds-font-tag-h6-mobile-line-height);@media only screen and (min-width:", "){font-size:var(--bds-font-tag-h6-desktop-font-size);line-height:var(--bds-font-tag-h6-desktop-line-height);}"], HeadingBase, function (_ref12) {
  var theme = _ref12.theme;
  return theme.grid.breakpoint.lg.min;
});