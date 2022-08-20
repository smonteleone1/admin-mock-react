import styled, { css } from 'styled-components';
import { IconButtonBase } from '../../IconButton/styles/IconButtonBase';
const Unselected = css(["border-color:transparent;border-radius:var(--bds-border-radius-md);.btn-label{color:var(--bds-color-text-primary);}.btn-label > .icon path{fill:var(--bds-color-icon-primary);}&:enabled,&.enabled{background-color:transparent;}&:hover,&.hover{background-color:var(--bds-color-action-neutral-hover);.btn-label{color:var(--bds-color-text-primary);}.btn-label > .icon path{fill:var(--bds-color-icon-primary);}}&:focus,&.focus{box-shadow:0px 0 0 2px var(--bds-color-border-default);}&:active,&:focus:active,&.active{background-color:var(--bds-color-action-neutral-pressed);.btn-label{color:var(--bds-color-text-primary);}.btn-label > .icon path{fill:var(--bds-color-icon-primary);}}&:disabled,&.disabled{background-color:transparent;border-color:transparent;.btn-label{color:var(--bds-color-text-disabled);}.btn-label > .icon path{fill:var(--bds-color-icon-disabled);}}"]);
const Selected = css(["border-color:transparent;border-radius:var(--bds-border-radius-md);.btn-label{color:var(--bds-color-text-primary);}.btn-label > .icon path{fill:var(--bds-color-icon-primary);}&:enabled,&.enabled{background-color:var(--bds-color-neutral-03);}&:hover,&.hover{background-color:var(--bds-color-neutral-04);}&:focus,&.focus{box-shadow:0px 0 0 2px var(--bds-color-border-default);}&:active,&:focus:active,&.active{background-color:var(--bds-color-neutral-05);}"]);
const ToggleButtonBase = styled(IconButtonBase).withConfig({
  displayName: "ToggleButtonBase",
  componentId: "sc-16kri5-0"
})(["&&&{&.state{&--unselected{", "}&--selected{", "}}}"], Unselected, Selected);
export { ToggleButtonBase };
export default ToggleButtonBase;