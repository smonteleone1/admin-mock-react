import { css } from 'styled-components';
const ListOptionSizes = css(["&.size--normal{padding-top:var(--bds-sizes-size-8);padding-bottom:var(--bds-sizes-size-8);}&.size--condensed{padding-top:0;padding-bottom:0;}"]);
const ListOptionBase = css(["position:relative;display:flex;justify-content:stretch;box-sizing:border-box;&&& > .button{width:100%;padding-left:var(--bds-sizes-size-16);padding-right:var(--bds-sizes-size-48);", " &.focus,&:focus{z-index:1;}.label{justify-content:flex-start;height:calc(var(--bds-sizes-size-24) - var(--bds-sizes-size-2));font-family:", ";font-weight:var(--bds-font-weight-regular);font-size:var(--bds-sizes-size-14);line-height:var(--bds-sizes-size-24);.list-label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}@media only screen and (min-width:", "){font-size:var(--bds-sizes-size-14);line-height:var(--bds-sizes-size-24);}}.icon{margin-right:var(--bds-sizes-size-8);width:var(--bds-sizes-size-20);height:var(--bds-sizes-size-20);}&.selected{z-index:0;.btn-label{font-weight:", ";color:var(--bds-color-text-primary) !important;}}}"], ListOptionSizes, ({
  theme
}) => theme.font.family[theme.context.paragraph], ({
  theme
}) => theme.grid.breakpoint.lg.max, ({
  theme
}) => theme.context.font === 'roboto' ? theme.font.weight.medium : theme.font.weight.semibold);
export { ListOptionBase };
export default ListOptionBase;