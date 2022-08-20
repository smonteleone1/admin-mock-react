import styled from 'styled-components';
var RatingSkeletonWrapper = styled.span.withConfig({
  displayName: "styles__RatingSkeletonWrapper",
  componentId: "sc-9phmby-0"
})(["display:inline-flex;flex-direction:row;align-items:center;&.size--jumbo{.variant--circle{margin-right:", ";}.variant--rect{margin-left:", ";}}&.size--large{.variant--circle{margin-right:", ";}.variant--rect{margin-left:", ";}}&.size--medium{.variant--rect{margin-left:", ";}}&.size--small{.variant--rect{margin-left:", ";}}"], function (_ref) {
  var theme = _ref.theme;
  return theme.sizes.size_4;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.sizes.size_10;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.sizes.size_2;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.sizes.size_6;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.sizes.size_2;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.sizes.size_2;
});
export { RatingSkeletonWrapper };
export default RatingSkeletonWrapper;