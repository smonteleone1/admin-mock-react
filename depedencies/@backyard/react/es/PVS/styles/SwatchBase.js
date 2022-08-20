import { css } from 'styled-components';
const Badge = css(["svg{position:absolute;bottom:-0.25rem;right:-0.25rem;border:1px solid var(--bds-color-surface-default);border-radius:100%;background-color:var(--bds-color-surface-default);}"]);
const SwatchBase = css([".swatch{width:var(--bds-sizes-size-36);height:var(--bds-sizes-size-36);border-radius:100%;border:none;img{width:100%;height:100%;object-fit:cover;border-radius:100%;display:block;}", "}"], Badge);
export { SwatchBase };
export default SwatchBase;