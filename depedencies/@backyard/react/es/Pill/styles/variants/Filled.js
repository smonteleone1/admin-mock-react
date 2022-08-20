import { css } from 'styled-components';
import lightOrDark from '../../../utils/functions/lightOrDark';
const Filled = css(["&.color{&--dark-blue{background-color:var(--bds-color-marketing-dark-blue);border-color:var(--bds-color-marketing-dark-blue);color:", ";}&--blue{background-color:var(--bds-color-marketing-blue);border-color:var(--bds-color-marketing-blue);color:", ";}&--light-blue{background-color:var(--bds-color-marketing-light-blue);border-color:var(--bds-color-marketing-light-blue);color:", ";}&--interactive{background-color:var(--bds-color-marketing-interactive);border-color:var(--bds-color-marketing-interactive);color:var(--bds-color-text-primary-inverse);}&--green{background-color:var(--bds-color-action-green);border-color:var(--bds-color-action-green);color:var(--bds-color-text-primary-inverse);}&--red{background-color:var(--bds-color-action-red);border-color:var(--bds-color-action-red);color:var(--bds-color-text-primary-inverse);}&--gold{background-color:var(--bds-color-marketing-gold);border-color:var(--bds-color-marketing-gold);color:", ";}&--lfp-yellow{background-color:var(--bds-color-marketing-lfp-yellow);border-color:var(--bds-color-marketing-lfp-yellow);color:", ";}&--neutral{background-color:", ";border-color:", ";color:var(--bds-color-text-primary);}}"], ({
  theme
}) => lightOrDark(theme, 'var(--bds-color-text-primary-inverse)', 'var(--bds-color-text-primary)'), ({
  theme
}) => lightOrDark(theme, 'var(--bds-color-text-primary)', 'var(--bds-color-text-primary-inverse)'), ({
  theme
}) => lightOrDark(theme, 'var(--bds-color-text-primary)', 'var(--bds-color-text-primary-inverse)'), ({
  theme
}) => lightOrDark(theme, 'var(--bds-color-text-primary)', 'var(--bds-color-text-primary-inverse)'), ({
  theme
}) => lightOrDark(theme, 'var(--bds-color-text-primary)', 'var(--bds-color-text-primary-inverse)'), ({
  theme
}) => lightOrDark(theme, 'var(--bds-color-neutral-02)', 'var(--bds-color-elevation-02)'), ({
  theme
}) => lightOrDark(theme, 'var(--bds-color-neutral-02)', 'var(--bds-color-elevation-02)'));
export { Filled };
export default Filled;