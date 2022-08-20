import styled from 'styled-components';
import PaginationBase from './PaginationBase';
import Numbered from './variants/Numbered';
import Dotted from './variants/Dotted';
const PillWrapper = styled.nav.withConfig({
  displayName: "PaginationWrapper__PillWrapper",
  componentId: "sc-1mx0qk9-0"
})(["", " &.variant{&--numbered{", "}&--dotted{", "}}"], PaginationBase, Numbered, Dotted);
export { PillWrapper };
export default PillWrapper;