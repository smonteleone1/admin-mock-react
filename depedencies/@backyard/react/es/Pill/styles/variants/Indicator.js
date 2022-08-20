import { css } from 'styled-components';
import lightOrDark from '../../../utils/functions/lightOrDark';
const Filled = css(["&.color{&--dark-blue{background-color:var(--bds-color-marketing-dark-blue);border-color:var(--bds-color-marketing-dark-blue);}&--blue{background-color:var(--bds-color-marketing-blue);border-color:var(--bds-color-marketing-blue);}&--light-blue{background-color:var(--bds-color-marketing-light-blue);border-color:var(--bds-color-marketing-light-blue);}&--interactive{background-color:var(--bds-color-marketing-interactive);border-color:var(--bds-color-marketing-interactive);}&--green{background-color:var(--bds-color-action-green);border-color:var(--bds-color-action-green);}&--red{background-color:var(--bds-color-action-red);border-color:var(--bds-color-action-red);}&--gold{background-color:var(--bds-color-marketing-gold);border-color:var(--bds-color-marketing-gold);}&--lfp-yellow{background-color:var(--bds-color-marketing-lfp-yellow);border-color:var(--bds-color-marketing-lfp-yellow);}&--neutral{background-color:", ";border-color:", ";}}"], ({
  theme
}) => lightOrDark(theme, 'var(--bds-color-neutral-02)', 'var(--bds-color-elevation-02)'), ({
  theme
}) => lightOrDark(theme, 'var(--bds-color-neutral-02)', 'var(--bds-color-elevation-02)'));
export { Filled };
export default Filled;