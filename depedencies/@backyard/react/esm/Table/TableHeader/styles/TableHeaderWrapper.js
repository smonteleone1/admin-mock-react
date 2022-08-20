import styled, { css } from 'styled-components';
import TableCellBase from '../../TableCell/styles/TableCellBase';
var HeadContentOverflow = css([".cell-content{.header-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}&.overflow{overflow:hidden;}}"]);
var TableHeaderWrapper = styled.th.withConfig({
  displayName: "TableHeaderWrapper",
  componentId: "sc-1h9cp9g-0"
})(["", " ", " background-color:var(--bds-color-surface-subdued);"], TableCellBase, HeadContentOverflow);
export { TableHeaderWrapper };
export default TableHeaderWrapper;