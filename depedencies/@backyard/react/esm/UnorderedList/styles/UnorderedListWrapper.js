import styled from 'styled-components';
var UnorderedListWrapper = styled.ul.withConfig({
  displayName: "UnorderedListWrapper",
  componentId: "sc-1ud08u2-0"
})(["list-style-type:disc;color:var(--bds-color-text-primary);padding-left:var(--bds-sizes-size-16);li{font-family:", ";font-weight:var(--bds-font-weight-regular);font-size:var(--bds-sizes-size-16);line-height:var(--bds-sizes-size-24);}& ul{padding-left:var(--bds-sizes-size-16);}&.density--condensed li{padding-top:var(--bds-sizes-size-4);}&.density--normal li{padding-top:var(--bds-sizes-size-8);}&.density--comfort li{padding-top:var(--bds-sizes-size-12);}"], function (_ref) {
  var theme = _ref.theme;
  return theme.font.family[theme.context.font];
});
export { UnorderedListWrapper };
export default UnorderedListWrapper;