import styled, { css } from 'styled-components';
var Sizes = css(["&.size--small{padding:var(--bds-sizes-size-5) var(--bds-sizes-size-16);}&.size--medium{padding:var(--bds-sizes-size-8) var(--bds-sizes-size-16);}&.size--large{padding:var(--bds-sizes-size-12) var(--bds-sizes-size-16);}"]);
var DataTablePaginationWrapper = styled.div.withConfig({
  displayName: "DataTablePaginationWrapper",
  componentId: "sc-19xg8d4-0"
})(["&.table-pagination{display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%;", ";.select--container{height:2.375rem;}.table-pagination-container{display:flex;flex-direction:row;justify-content:center;align-items:center;.item-count{display:flex;flex-direction:row;align-items:center;margin-right:var(--bds-sizes-size-12);}}.table-pagination-rows{min-width:6.5rem;}}"], Sizes);
export { DataTablePaginationWrapper };
export default DataTablePaginationWrapper;