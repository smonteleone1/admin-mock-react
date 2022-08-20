import styled, { css } from 'styled-components';
import Button from '../../Button';
var Sizes = css(["&.size{&--extra_small{min-width:var(--bds-sizes-size-32);min-height:var(--bds-sizes-size-32);.btn-label{& > .btn-start-icon,& > .btn-end-icon,& > .icon{width:var(--bds-sizes-size-14);height:var(--bds-sizes-size-14);}}}&--small{min-width:var(--bds-sizes-size-40);min-height:var(--bds-sizes-size-40);padding:var(--bds-sizes-size-8);.btn-label{& > .btn-start-icon,& > .btn-end-icon,& > .icon{width:var(--bds-sizes-size-16);height:var(--bds-sizes-size-16);}}}&--medium{min-width:var(--bds-sizes-size-48);min-height:var(--bds-sizes-size-48);padding:var(--bds-sizes-size-12);.btn-label{& > .btn-start-icon,& > .btn-end-icon,& > .icon{width:var(--bds-sizes-size-20);height:var(--bds-sizes-size-20);}}}&--large{min-width:var(--bds-sizes-size-56);min-height:var(--bds-sizes-size-56);padding:var(--bds-sizes-size-16);.btn-label{& > .btn-start-icon,& > .btn-end-icon,& > .icon{width:var(--bds-sizes-size-24);height:var(--bds-sizes-size-24);}}}&--jumbo{min-width:var(--bds-sizes-size-96);min-height:var(--bds-sizes-size-96);padding:var(--bds-sizes-size-32);.btn-label{& > .btn-start-icon,& > .btn-end-icon,& > .icon{width:var(--bds-sizes-size-48);height:var(--bds-sizes-size-48);}}}}"]);
/** Default Base Button Styles */

var IconButtonBase = styled(Button).withConfig({
  displayName: "IconButtonBase",
  componentId: "sc-y8g6tj-0"
})(["", ""], Sizes);
export { IconButtonBase };
export default IconButtonBase;