import styled, { css } from 'styled-components';
var Shapes = css(["&.shape{&--rounded{border-radius:var(--bds-border-radius-lg);}&--squared{border-radius:0;}}"]);
var SkeletonWrapper = styled.div.withConfig({
  displayName: "styles__SkeletonWrapper",
  componentId: "sc-1e8y019-0"
})(["background:var(--bds-color-skeleton-01);position:relative;padding:0;border:none;box-shadow:none;pointer-events:none;overflow:hidden;&.style--animated{&::before{position:absolute;content:'';top:0;left:0;right:0;bottom:0;background:var(--bds-color-skeleton-01);animation-name:pulse;animation-duration:2s;animation-timing-function:ease-in-out;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal;animation-fill-mode:none;animation-play-state:running;}@keyframes pulse{0%{background:var(--bds-color-skeleton-01);}50%{background:var(--bds-color-skeleton-02);opacity:80%;}100%{background:var(--bds-color-skeleton-01);}}}&.variant--circle{width:", ";height:", ";border-radius:var(--bds-border-radius-circle);}&.variant--rect{width:", ";height:", ";", "}&.variant--text{width:100%;height:16px;margin-bottom:var(--bds-sizes-size-6);", "}"], function (_ref) {
  var theme = _ref.theme,
      width = _ref.width;
  return theme.sizes[width] || width;
}, function (_ref2) {
  var theme = _ref2.theme,
      height = _ref2.height;
  return theme.sizes[height] || height;
}, function (_ref3) {
  var theme = _ref3.theme,
      width = _ref3.width;
  return theme.sizes[width] || width;
}, function (_ref4) {
  var theme = _ref4.theme,
      height = _ref4.height;
  return theme.sizes[height] || height;
}, Shapes, Shapes);
export default SkeletonWrapper;