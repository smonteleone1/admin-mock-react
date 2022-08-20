import styled from 'styled-components';
import IconButton from '../../IconButton'; // @todo delete when not referenced by `Carousel`

var GalleryButton = styled(IconButton).withConfig({
  displayName: "GalleryButton",
  componentId: "sc-1fres5o-0"
})(["&&&&{z-index:1;&:enabled,&.enabled{background-color:var(--bds-color-surface-default);border-color:var(--bds-color-border-default);.icon path{fill:var(--bds-color-text-tertiary);}}&:hover,&.hover{background-color:var(--bds-color-action-neutral-subdued-hover);border-color:var(--bds-color-border-hover);}&:focus,&.focus{box-shadow:inset 0 0 0 1px var(--bds-color-border-subdued),inset 0px 0 0 2px var(--bds-color-surface-default);}&:focus:hover,&.focus:hover{box-shadow:inset 0 0 0 1px var(--bds-color-border-hover),inset 0px 0 0 2px var(--bds-color-surface-default);}&:active,&.active{background-color:var(--bds-color-action-neutral-pressed);border-color:var(--bds-color-border-pressed);}}"]);
export { GalleryButton };
export default GalleryButton;