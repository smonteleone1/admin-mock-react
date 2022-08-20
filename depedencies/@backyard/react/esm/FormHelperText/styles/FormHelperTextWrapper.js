import styled, { css } from 'styled-components';
var FormHelperTextBase = css(["margin:0;padding-top:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.sizes.size_4;
});
var FormHelperTextWrapper = styled.span.withConfig({
  displayName: "FormHelperTextWrapper",
  componentId: "sc-12bbq8z-0"
})(["", " .typography{color:", ";.icon path{fill:", ";}}.icon{vertical-align:text-top;}.helper-text-icon{margin-right:", ";}&&.indent{.typography{padding-left:var(--helper-text-indent);}}&&.disabled{.typography{color:", ";.icon path{fill:", ";}}}&.error{.typography{color:", ";.icon path{fill:", ";}}}&.success{.typography{color:", ";.icon path{fill:", ";}}}&.warning{.typography{color:", ";.icon path{fill:", ";}}}&.info{.typography{color:", ";.icon path{fill:", ";}}}"], FormHelperTextBase, function (_ref2) {
  var theme = _ref2.theme;
  return theme.color.text_tertiary;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.color.text_tertiary;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.sizes.size_8;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.color.text_disabled;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.color.text_disabled;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.color.text_red;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.color.text_red;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.color.text_green;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.color.text_green;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.color.text_red;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.color.text_red;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.color.text_interactive;
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.color.text_interactive;
});
export { FormHelperTextBase, FormHelperTextWrapper };
export default FormHelperTextWrapper;