import styled, { css } from 'styled-components';
import { TypographyBase } from '../styles/TypographyBase';
export var ParagraphBase = css(["", " font-family:", ";font-weight:var(--bds-font-weight-regular);color:", ";"], TypographyBase, function (_ref) {
  var theme = _ref.theme;
  return theme.font.family[theme.context.paragraph];
}, function (_ref2) {
  var theme = _ref2.theme,
      color = _ref2.color;
  return theme.color[color] || theme.color.text_primary;
});
export var ParagraphRegular = styled.p.withConfig({
  displayName: "styles__ParagraphRegular",
  componentId: "sc-1ljw3tp-0"
})(["", " &&&.body_1{font-size:var(--bds-font-tag-body-1-mobile-font-size);line-height:var(--bds-font-tag-body-1-mobile-line-height);}&&&.body_2{font-size:var(--bds-font-tag-body-2-mobile-font-size);line-height:var(--bds-font-tag-body-2-mobile-line-height);}@media only screen and (min-width:", "){&&&.body_1{font-size:var(--bds-font-tag-body-1-desktop-font-size);line-height:var(--bds-font-tag-body-1-desktop-line-height);}&&&.body_2{font-size:var(--bds-font-tag-body-2-desktop-font-size);line-height:var(--bds-font-tag-body-2-desktop-line-height);}}"], ParagraphBase, function (_ref3) {
  var theme = _ref3.theme;
  return theme.grid.breakpoint.lg.min;
});