import styled from 'styled-components';
export var HorizontalWrapper = styled.div.withConfig({
  displayName: "styles__HorizontalWrapper",
  componentId: "sc-17kauc2-0"
})(["display:flex;flex-direction:row;align-items:center;.skeleton--slider-bar{margin-left:", ";margin-right:", ";}.skeleton--slider-input{margin-left:", ";}"], function (_ref) {
  var theme = _ref.theme;
  return theme.sizes.size_16;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.sizes.size_16;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.sizes.size_16;
});
export var VerticalWrapper = styled.div.withConfig({
  displayName: "styles__VerticalWrapper",
  componentId: "sc-17kauc2-1"
})(["display:flex;flex-direction:row;.skeleton--slider-values{display:flex;flex-direction:column;justify-content:space-between;margin-left:", ";}"], function (_ref4) {
  var theme = _ref4.theme;
  return theme.sizes.size_12;
});