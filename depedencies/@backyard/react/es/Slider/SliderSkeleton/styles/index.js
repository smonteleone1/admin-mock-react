import styled from 'styled-components';
export const HorizontalWrapper = styled.div.withConfig({
  displayName: "styles__HorizontalWrapper",
  componentId: "sc-17kauc2-0"
})(["display:flex;flex-direction:row;align-items:center;.skeleton--slider-bar{margin-left:", ";margin-right:", ";}.skeleton--slider-input{margin-left:", ";}"], ({
  theme
}) => theme.sizes.size_16, ({
  theme
}) => theme.sizes.size_16, ({
  theme
}) => theme.sizes.size_16);
export const VerticalWrapper = styled.div.withConfig({
  displayName: "styles__VerticalWrapper",
  componentId: "sc-17kauc2-1"
})(["display:flex;flex-direction:row;.skeleton--slider-values{display:flex;flex-direction:column;justify-content:space-between;margin-left:", ";}"], ({
  theme
}) => theme.sizes.size_12);