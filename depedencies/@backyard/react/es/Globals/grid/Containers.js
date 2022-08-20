import { css } from 'styled-components';
const Containers = css([".grid{display:grid;}.gap{grid-column-gap:", ";}.container-xs{max-width:", ";margin:auto;padding:0 var(--bds-sizes-size-16);}.container-sm{max-width:", ";margin:auto;padding:0 var(--bds-sizes-size-32);}.container-md{max-width:", ";margin:auto;padding:0 var(--bds-sizes-size-32);}.container-lg{max-width:", ";margin:auto;padding:0 var(--bds-sizes-size-32);}.container-xl{max-width:", ";margin:auto;padding:0 var(--bds-sizes-size-40);}.container-xxl{max-width:", ";margin:auto;padding:0 var(--bds-sizes-size-56);}.container-fluid{width:100%;}"], ({
  theme
}) => theme.sizes.size_32, ({
  theme
}) => theme.grid.breakpoint.xs.max, ({
  theme
}) => theme.grid.breakpoint.sm.max, ({
  theme
}) => theme.grid.breakpoint.md.max, ({
  theme
}) => theme.grid.breakpoint.lg.max, ({
  theme
}) => theme.grid.breakpoint.xl.max, ({
  theme
}) => theme.grid.breakpoint.xxl.max);
export default Containers;