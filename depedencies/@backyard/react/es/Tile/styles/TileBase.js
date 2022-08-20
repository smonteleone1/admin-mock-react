import { css } from 'styled-components';
import lightOrDark from '../../utils/functions/lightOrDark';
const Shapes = css(["&.shape{&--rounded{border-radius:var(--bds-border-radius-lg);input + label{border-radius:var(--bds-border-radius-lg);}}&--squared{border-radius:0;}}"]);
const DisabledStyles = css(["&:disabled,&.disabled{cursor:not-allowed;box-shadow:none;*{color:var(--bds-color-text-disabled);}path{fill:var(--bds-color-icon-disabled);}&:focus,&.focus,&.interaction--focus{}&.color--surface{border:1px solid var(--bds-color-border-subdued);}}"]);
const ColorStyles = css(["&.color--surface{background-color:var(--bds-color-elevation-03);}&.color--subdued{background-color:", ";background-color:var(--bds-color-surface-subdued);}"], ({
  theme
}) => lightOrDark(theme, theme.color.surface_subdued, theme.color.elevation_03));
const StateStyles = css(["&:hover,&.hover{cursor:pointer;box-shadow:0 0 0 1px var(--bds-color-border-interactive),var(--bds-shadows-shadow-03);}&:focus,&.focus,&.interaction--focus{outline:none;border:1px solid var(--bds-color-border-interactive);box-shadow:0 0 0 2px var(--bds-color-border-default),var(--bds-shadows-shadow-03);}", ""], DisabledStyles);
const TileVariants = css(["&.type{&--link{", ";}&--radio{", ";.tile-icon{display:none;}&&&{background:transparent;}input + label{z-index:0;}input:checked + label{box-shadow:0 0 0 1px var(--bds-color-border-interactive);.tile-icon{display:inline-block;}}input:focus + label{outline:none;box-shadow:0 0 0 1px var(--bds-color-border-interactive),0 0 0 3px var(--bds-color-border-default),var(--bds-shadows-shadow-03);}input + label:before,input + label:after{display:none;}}&--card{", ";}}"], StateStyles, StateStyles, DisabledStyles);
const TileBase = css(["display:inline-block;position:relative;min-width:3rem;min-height:3rem;box-sizing:border-box;", " box-shadow:", ";color:", ";.tile-input{position:absolute;top:0;left:0;right:0;bottom:0;input{top:0;}label{height:100%;width:100%;}}.tile-icon{position:absolute;bottom:", ";top:", ";right:", ";svg{display:block;}path{fill:", ";}}", " ", ""], Shapes, ({
  theme
}) => theme.shadows.shadow_03, ({
  theme
}) => theme.color.text_primary, ({
  theme,
  type
}) => type === 'link' ? theme.sizes.size_16 : undefined, ({
  theme,
  type
}) => type === 'link' ? undefined : theme.sizes.size_16, ({
  theme
}) => theme.sizes.size_16, ({
  theme,
  type
}) => type === 'link' ? theme.color.text_tertiary : theme.color.text_interactive, TileVariants, ColorStyles);
export { TileBase };
export default TileBase;