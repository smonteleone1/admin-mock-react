import styled from 'styled-components';
const SkeletonWrapper = styled.div.withConfig({
  displayName: "styles__SkeletonWrapper",
  componentId: "sc-2ognqx-0"
})(["display:flex;flex-direction:column;width:", ";&.density--normal{.variant--rect{margin-top:", ";}}&.density--comfort{.variant--rect{margin-top:", ";}}&.density--condensed{.variant--rect{margin-top:", ";}}"], ({
  width
}) => width, ({
  theme
}) => theme.sizes.size_8, ({
  theme
}) => theme.sizes.size_12, ({
  theme
}) => theme.sizes.size_4);
export { SkeletonWrapper };
export default SkeletonWrapper;