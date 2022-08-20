import { css } from 'styled-components';
import lightOrDark from '../../../utils/functions/lightOrDark';
const Outlined = css(["&.variant{&--outlined{&.shape{&--dot{visibility:hidden;}}}}&.color{&--dark-blue{background-color:transparent;border-color:var(--bds-color-marketing-dark-blue);color:", ";}&--blue{background-color:transparent;border-color:var(--bds-color-marketing-blue);color:var(--bds-color-text-primary);}&--light-blue{background-color:transparent;border-color:var(--bds-color-marketing-light-blue);color:var(--bds-color-text-primary);}&--interactive{background-color:transparent;border-color:var(--bds-color-marketing-interactive);color:var(--bds-color-text-interactive);}&--green{background-color:transparent;border-color:var(--bds-color-action-green);color:var(--bds-color-text-green);}&--red{background-color:transparent;border-color:var(--bds-color-action-red);color:var(--bds-color-text-red);}&--gold{background-color:transparent;border-color:var(--bds-color-marketing-gold);color:var(--bds-color-text-primary);}&--lfp-yellow{background-color:transparent;border-color:var(--bds-color-marketing-lfp-yellow);color:var(--bds-color-text-primary);}&--neutral{background-color:transparent;border-color:", ";color:var(--bds-color-text-primary);}}"], ({
  theme
}) => lightOrDark(theme, 'var(--bds-color-marketing-dark-blue)', 'var(--bds-color-text-primary)'), ({
  theme
}) => lightOrDark(theme, 'var(--bds-color-neutral-02)', 'var(--bds-color-elevation-02)'));
export { Outlined };
export default Outlined;