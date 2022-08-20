import styled, { css } from 'styled-components';
import Variants from './variants';
import Sizes from './Sizes';
import Shapes from './Shapes';
const Shared = css(["&.disabled{cursor:not-allowed;&:active{pointer-events:none;}}"]);
const BrowserCSS = css(["&&&{outline:none;vertical-align:bottom;height:auto;&::-moz-focus-inner{border:0;}}"]);
const ButtonBase = styled.button.withConfig({
  displayName: "ButtonBase",
  componentId: "sc-1ngvxvr-0"
})(["display:inline-flex;align-items:center;justify-content:center;cursor:pointer;box-sizing:border-box;transition:all 0.2s ease-in-out;border-style:solid;border-width:var(--bds-border-width-sm);height:100%;.btn-label{display:inherit;align-items:center;justify-content:center;width:100%;letter-spacing:.015rem;font-family:", ";font-weight:", "}.btn-label > .btn-start-icon{margin-right:var(--bds-sizes-size-8);}.btn-label > .btn-end-icon{margin-left:var(--bds-sizes-size-8);svg{width:var(--bds-sizes-size-16);height:var(--bds-sizes-size-16);}}.btn-label > .btn-start-icon,.btn-label > .btn-end-icon,.btn-label > .icon{display:flex;}&.full-width{width:100%;padding:var(--bds-sizes-size-12) var(--bds-sizes-size-32);}&.elevation{box-shadow:var(--bds-shadows-shadow-03);}", " ", " ", " ", " ", ""], ({
  theme
}) => theme.font.family[theme.context.font], ({
  theme
}) => theme.context.font === 'roboto' ? theme.font.weight.medium : theme.font.weight.semibold, Variants, Shapes, Sizes, Shared, BrowserCSS);
export { ButtonBase };
export default ButtonBase;