import styled, { css } from 'styled-components';
var Shapes = css(["&.shape{&--rounded{.popover-wrapper{border-radius:var(--bds-border-radius-lg);}}&--squared{.popover-wrapper{border-radius:0;}}}"]);
var AutocompleteWrapper = styled.div.withConfig({
  displayName: "Autocomplete__AutocompleteWrapper",
  componentId: "sc-eqbw9s-0"
})(["position:relative;.popover-wrapper{position:absolute;inset:none !important;top:0;left:var(--bds-sizes-size-24);box-sizing:border-box;width:100%;max-height:calc(var(--bds-sizes-size-16) * 30);border:1px solid var(--bds-color-border-subdued);background-color:var(--bds-color-elevation-04);box-shadow:var(--bds-shadows-shadow-04);overflow:auto;font-family:", ";font-weight:var(--bds-font-weight-regular);}", ""], function (_ref) {
  var theme = _ref.theme;
  return theme.font.family[theme.context.font];
}, Shapes);
export { AutocompleteWrapper };
export default AutocompleteWrapper;