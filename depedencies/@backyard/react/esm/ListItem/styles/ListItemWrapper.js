import styled from 'styled-components';
var ListItemWrapper = styled.li.withConfig({
  displayName: "ListItemWrapper",
  componentId: "sc-fph8wd-0"
})(["font-size:var(--bds-sizes-size-14);line-height:var(--bds-sizes-size-20);font-family:", ";font-weight:", ";@media only screen and (min-width:", "){font-size:var(--bds-sizes-size-16);line-height:var(--bds-sizes-size-24);}"], function (_ref) {
  var theme = _ref.theme;
  return theme.font.family[theme.context.font];
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.context.font === 'roboto' ? theme.font.weight.medium : theme.font.weight.semibold;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.grid.breakpoint.lg.max;
});
export { ListItemWrapper };
export default ListItemWrapper;