import styled, { css } from 'styled-components';
import { TypographyBase } from '../styles/TypographyBase';
export var CaptionBase = css(["", " font-family:", ";font-weight:var(--bds-font-weight-regular);color:", ";"], TypographyBase, function (_ref) {
  var theme = _ref.theme;
  return theme.font.family[theme.context.caption];
}, function (_ref2) {
  var theme = _ref2.theme,
      color = _ref2.color;
  return theme.color[color] || theme.color.text_primary;
});
export var CaptionRegular = styled.span.withConfig({
  displayName: "styles__CaptionRegular",
  componentId: "sc-qyyr4e-0"
})(["", " font-size:var(--bds-font-tag-caption-mobile-font-size);line-height:var(--bds-font-tag-caption-mobile-line-height);@media only screen and (min-width:", "){font-size:var(--bds-font-tag-caption-desktop-font-size);line-height:var(--bds-font-tag-caption-desktop-line-height);}"], CaptionBase, function (_ref3) {
  var theme = _ref3.theme;
  return theme.grid.breakpoint.lg.min;
});