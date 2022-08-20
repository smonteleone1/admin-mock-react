import { css } from 'styled-components';
const BadgeBase = css([".badge-label{position:relative;box-sizing:border-box;padding:0 var(--bds-sizes-size-8);border:var(--bds-sizes-size-1) solid;border-radius:var(--bds-border-radius-md);height:var(--bds-sizes-size-24);vertical-align:center;display:inline-flex;flex-direction:row;align-items:center;justify-content:center;height:var(--bds-sizes-size-24);z-index:1;font-size:var(--bds-sizes-size-14);line-height:var(--bds-sizes-size-14);font-family:", ";font-weight:var(--bds-font-weight-regular);&.arrow--left{margin-left:-0.75rem;&.size--jumbo{margin-left:-1.1rem;}}&.size--jumbo{font-size:var(--bds-sizes-size-20);line-height:var(--bds-sizes-size-32);padding:var(--bds-sizes-size-4) var(--bds-sizes-size-8);height:var(--bds-sizes-size-40);&+ .arrow{height:1.875rem;width:1.875rem;}}}"], ({
  theme
}) => theme.font.family[theme.context.font]);
export { BadgeBase };
export default BadgeBase;