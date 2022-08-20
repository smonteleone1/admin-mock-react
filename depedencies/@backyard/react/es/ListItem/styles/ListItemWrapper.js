import styled from 'styled-components';
const ListItemWrapper = styled.li.withConfig({
  displayName: "ListItemWrapper",
  componentId: "sc-fph8wd-0"
})(["font-size:var(--bds-sizes-size-14);line-height:var(--bds-sizes-size-20);font-family:", ";font-weight:", ";@media only screen and (min-width:", "){font-size:var(--bds-sizes-size-16);line-height:var(--bds-sizes-size-24);}"], ({
  theme
}) => theme.font.family[theme.context.font], ({
  theme
}) => theme.context.font === 'roboto' ? theme.font.weight.medium : theme.font.weight.semibold, ({
  theme
}) => theme.grid.breakpoint.lg.max);
export { ListItemWrapper };
export default ListItemWrapper;