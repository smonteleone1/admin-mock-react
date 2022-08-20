import styled from 'styled-components';
export const GridContainer = styled.div.withConfig({
  displayName: "GridStyles__GridContainer",
  componentId: "sc-1ko1581-0"
})(["width:100%;box-sizing:border-box;&.container--xs{margin:0 auto;max-width:", ";}&.container--sm{margin:0 auto;max-width:", ";}&.container--md{margin:0 auto;max-width:", ";}&.container--lg{margin:0 auto;max-width:", ";}&.container--xl{margin:0 auto;max-width:", ";}&.container--xxl{margin:0 auto;max-width:", ";}"], ({
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
export const GridRow = styled.div.withConfig({
  displayName: "GridStyles__GridRow",
  componentId: "sc-1ko1581-1"
})(["display:grid;grid-template-columns:repeat(var(--cols-default),1fr);grid-column-gap:var(--gap-default);box-sizing:border-box;margin-left:var(--gutter-default);margin-right:var(--gutter-default);@media only screen and (max-width:", "){grid-template-columns:repeat(var(--cols-xs),1fr);grid-column-gap:var(--gap-xs);margin-left:var(--gutter-xs);margin-right:var(--gutter-xs);}@media only screen  and (min-width:", ")  and (max-width:", "){grid-template-columns:repeat(var(--cols-sm),1fr);grid-column-gap:var(--gap-sm);margin-left:var(--gutter-sm);margin-right:var(--gutter-sm);}@media only screen  and (min-width:", ")  and (max-width:", "){grid-template-columns:repeat(var(--cols-md),1fr);grid-column-gap:var(--gap-md);margin-left:var(--gutter-md);margin-right:var(--gutter-md);}@media only screen  and (min-width:", ")  and (max-width:", "){grid-template-columns:repeat(var(--cols-lg),1fr);grid-column-gap:var(--gap-lg);margin-left:var(--gutter-lg);margin-right:var(--gutter-lg);}@media only screen  and (min-width:", ")  and (max-width:", "){grid-template-columns:repeat(var(--cols-xl),1fr);grid-column-gap:var(--gap-xl);margin-left:var(--gutter-xl);margin-right:var(--gutter-xl);}@media only screen  and (min-width:", ")  and (max-width:", "){grid-template-columns:repeat(var(--cols-xxl),1fr);grid-column-gap:var(--gap-xxl);margin-left:var(--gutter-xxl);margin-right:var(--gutter-xxl);}"], ({
  theme
}) => theme.grid.breakpoint.xs.max, ({
  theme
}) => theme.grid.breakpoint.sm.min, props => props.theme.grid.breakpoint.sm.max, ({
  theme
}) => theme.grid.breakpoint.md.min, props => props.theme.grid.breakpoint.md.max, ({
  theme
}) => theme.grid.breakpoint.lg.min, props => props.theme.grid.breakpoint.lg.max, ({
  theme
}) => theme.grid.breakpoint.xl.min, props => props.theme.grid.breakpoint.xl.max, ({
  theme
}) => theme.grid.breakpoint.xxl.min, props => props.theme.grid.breakpoint.xxl.max);
export const GridColumn = styled.div.withConfig({
  displayName: "GridStyles__GridColumn",
  componentId: "sc-1ko1581-2"
})(["box-sizing:border-box;width:100%;grid-column-start:var(--col-start);grid-column-end:var(--col-end);display:flex;justify-content:var(--justify-content);justify-items:var(--justify-items);align-content:var(--align-content);align-items:var(--align-items);"]);