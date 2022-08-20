import styled, { css } from 'styled-components';
import { TypographyBase } from '../styles/TypographyBase';
export var FootnoteBase = css(["", " font-family:", ";font-weight:var(--bds-font-weight-regular);color:", ";"], TypographyBase, function (_ref) {
  var theme = _ref.theme;
  return theme.font.family[theme.context.caption];
}, function (_ref2) {
  var theme = _ref2.theme,
      color = _ref2.color;
  return theme.color[color] || theme.color.text_primary;
});
export var FootnoteRegular = styled.span.withConfig({
  displayName: "styles__FootnoteRegular",
  componentId: "sc-m22ho9-0"
})(["", " font-size:var(--bds-font-tag-footnote-mobile-font-size);line-height:var(--bds-font-tag-footnote-mobile-line-height);@media only screen and (min-width:", "){font-size:var(--bds-font-tag-footnote-desktop-font-size);line-height:var(--bds-font-tag-footnote-desktop-line-height);}"], FootnoteBase, function (_ref3) {
  var theme = _ref3.theme;
  return theme.grid.breakpoint.lg.min;
});