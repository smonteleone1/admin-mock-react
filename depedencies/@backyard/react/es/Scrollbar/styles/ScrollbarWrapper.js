import styled, { css } from 'styled-components';
const NoScrollbar = css(["-ms-overflow-style:none;scrollbar-width:none;::-webkit-scrollbar{display:none;}"]);
const ScrollbarWrapper = styled.div.withConfig({
  displayName: "ScrollbarWrapper",
  componentId: "sc-1mmz41n-0"
})(["height:auto;width:auto;.content-container{overflow-x:scroll;", " .scrollbar-content{display:flex;flex-direction:row;}}"], NoScrollbar);
export { ScrollbarWrapper };
export default ScrollbarWrapper;