import styled from 'styled-components';
import PaginationCondensedBase from './PaginationCondensedBase';
import Condensed from './variants/Condensed';
const PaginationCondensedWrapper = styled.nav.withConfig({
  displayName: "PaginationCondensedWrapper",
  componentId: "sc-1n9b8lo-0"
})(["", " &.variant{&--condensed{", "}}"], PaginationCondensedBase, Condensed);
export { PaginationCondensedWrapper };
export default PaginationCondensedWrapper;