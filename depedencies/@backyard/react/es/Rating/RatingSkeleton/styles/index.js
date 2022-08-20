import styled from 'styled-components';
const RatingSkeletonWrapper = styled.span.withConfig({
  displayName: "styles__RatingSkeletonWrapper",
  componentId: "sc-9phmby-0"
})(["display:inline-flex;flex-direction:row;align-items:center;&.size--jumbo{.variant--circle{margin-right:", ";}.variant--rect{margin-left:", ";}}&.size--large{.variant--circle{margin-right:", ";}.variant--rect{margin-left:", ";}}&.size--medium{.variant--rect{margin-left:", ";}}&.size--small{.variant--rect{margin-left:", ";}}"], ({
  theme
}) => theme.sizes.size_4, ({
  theme
}) => theme.sizes.size_10, ({
  theme
}) => theme.sizes.size_2, ({
  theme
}) => theme.sizes.size_6, ({
  theme
}) => theme.sizes.size_2, ({
  theme
}) => theme.sizes.size_2);
export { RatingSkeletonWrapper };
export default RatingSkeletonWrapper;