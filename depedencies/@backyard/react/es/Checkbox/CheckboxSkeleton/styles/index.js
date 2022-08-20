import styled from 'styled-components';
const SkeletonWrapper = styled.div.withConfig({
  displayName: "styles__SkeletonWrapper",
  componentId: "sc-fz68n6-0"
})(["display:inline-flex;flex-direction:column;.label-wrapper{display:inline-flex;flex-direction:row;.label--skeleton{margin-left:", ";}}.helper-text--skeleton{margin-top:", ";margin-left:", ";}"], ({
  theme
}) => theme.sizes.size_16, ({
  theme
}) => theme.sizes.size_8, ({
  theme
}) => theme.sizes.size_36);
export { SkeletonWrapper };
export default SkeletonWrapper;