import styled from 'styled-components';
var SkeletonWrapper = styled.div.withConfig({
  displayName: "styles__SkeletonWrapper",
  componentId: "sc-2ognqx-0"
})(["display:flex;flex-direction:column;width:", ";&.density--normal{.variant--rect{margin-top:", ";}}&.density--comfort{.variant--rect{margin-top:", ";}}&.density--condensed{.variant--rect{margin-top:", ";}}"], function (_ref) {
  var width = _ref.width;
  return width;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.sizes.size_8;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.sizes.size_12;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.sizes.size_4;
});
export { SkeletonWrapper };
export default SkeletonWrapper;