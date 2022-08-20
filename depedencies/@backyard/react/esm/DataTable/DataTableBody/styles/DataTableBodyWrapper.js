import styled from 'styled-components';
import DataTableCellBase from './DataTableCellBase';
var DataTableBodyWrapper = styled.div.withConfig({
  displayName: "DataTableBodyWrapper",
  componentId: "sc-y5wudd-0"
})(["display:flex;flex-direction:column;.data-table-row:first-child{.data-table-cell{border-top:0;}}&&&{.data-table-row:hover:not(.sub-row){& > .data-table-body-cell{background-color:var(--bds-color-action-neutral-hover);}}.data-table-row.selected{& > .data-table-body-cell,& > .data-table-header-cell{background-color:var(--bds-color-highlight);}}}", ""], DataTableCellBase);
export { DataTableBodyWrapper };
export default DataTableBodyWrapper;