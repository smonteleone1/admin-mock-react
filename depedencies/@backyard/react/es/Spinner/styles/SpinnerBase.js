import { css, keyframes } from 'styled-components';
const spin = keyframes(["0%{-moz-transform:rotate(0deg);-webkit-transform:rotate(0deg);transform:rotate(0deg);}100%{-moz-transform:rotate(360deg);-webkit-transform:rotate(360deg);transform:rotate(360deg);}"]);
const SpinnerBase = css(["&.inline-spinner{margin-left:var(--bds-sizes-size-8);display:", ";justify-content:center;align-items:center;vertical-align:middle;}.spinner-overlay{display:flex;justify-content:center;align-items:center;.icon-wrapper{background-color:var(--bds-color-text-tertiary);border-radius:100%;padding:var(--bds-sizes-size-32);&.size--small{padding:var(--bds-sizes-size-16);}}svg{display:block;}}&.inline-spinner,.icon-wrapper{svg{height:var(--bds-sizes-size-64);width:var(--bds-sizes-size-64);-webkit-animation:", " 1s linear infinite;-moz-animation:", " 1s linear infinite;animation:", " 1s linear infinite;path{fill:", ";}}&.size--small{svg{height:var(--bds-sizes-size-16);width:var(--bds-sizes-size-16);}}}"], ({
  show
}) => show ? 'inline-flex' : 'none', spin, spin, spin, ({
  theme,
  color
}) => theme.color[color]);
export { SpinnerBase };
export default SpinnerBase;