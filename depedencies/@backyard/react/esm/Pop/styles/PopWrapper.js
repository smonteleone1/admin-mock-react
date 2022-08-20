import styled, { css } from 'styled-components';
var Shapes = css(["&.shape{&--rounded{.popover-wrapper{border-radius:var(--bds-border-radius-lg);}}&--squared{.popover-wrapper{border-radius:0;}}}"]);
var PopWrapper = styled.div.withConfig({
  displayName: "PopWrapper",
  componentId: "sc-1flinpk-0"
})(["position:relative;.popover-wrapper{padding:var(--bds-sizes-size-8) 0;width:100%;max-height:calc(var(--bds-sizes-size-16) * 30);border:1px solid var(--bds-color-border-subdued);background-color:var(--bds-color-elevation-04);box-shadow:var(--bds-shadows-shadow-04);overflow:auto;font-family:", ";font-weight:var(--bds-font-weight-regular);}ul{width:100%;}", ""], function (_ref) {
  var theme = _ref.theme;
  return theme.font.family[theme.context.font];
}, Shapes);
export { PopWrapper };
export default PopWrapper;