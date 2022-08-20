import styled from 'styled-components';
import PaginationBase from './PaginationBase';
import Numbered from './variants/Numbered';
import Dotted from './variants/Dotted';
const PaginationFullWrapper = styled.nav.withConfig({
  displayName: "PaginationFullWrapper",
  componentId: "sc-17xxfy9-0"
})(["", " &.variant{&--numbered{", "}&--dotted{", "}}"], PaginationBase, Numbered, Dotted);
export { PaginationFullWrapper };
export default PaginationFullWrapper;