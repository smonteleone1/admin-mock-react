import { css } from 'styled-components';
const TableCellBase = css(["padding:var(--bds-sizes-size-14) var(--bds-sizes-size-36) var(--bds-sizes-size-14) var(--bds-sizes-size-16);width:", ";font-size:var(--bds-sizes-size-16);svg{vertical-align:middle;}.td-container,.th-container{display:flex;flex-wrap:nowrap;align-items:center;.more-info{margin-left:var(--bds-sizes-size-4);flex-shrink:0;cursor:pointer;}}h6{margin:0;}.td-container > .cell-content{display:block;display:-webkit-box;max-height:var(--bds-sizes-size-48);margin:0;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){*{max-height:var(--bds-sizes-size-40);}}}"], ({
  width
}) => width ? `${width}%` : 'auto');
export { TableCellBase };
export default TableCellBase;