import { css } from 'styled-components';
import { lightOrDark } from '../../../utils/functions/lightOrDark';
const Filled = css(["&.color{&--dark-blue{background-color:var(--bds-color-marketing-dark-blue);border-color:var(--bds-color-marketing-dark-blue);color:", ";&+ .arrow{background-color:var(--bds-color-marketing-dark-blue);border-color:var(--bds-color-marketing-dark-blue);}}&--blue{background-color:var(--bds-color-marketing-blue);border-color:var(--bds-color-marketing-blue);color:", ";&+ .arrow{background-color:var(--bds-color-marketing-blue);border-color:var(--bds-color-marketing-blue);}}&--light-blue{background-color:var(--bds-color-marketing-light-blue);border-color:var(--bds-color-marketing-light-blue);color:", ";&+ .arrow{background-color:var(--bds-color-marketing-light-blue);border-color:var(--bds-color-marketing-light-blue);}}&--interactive{background-color:var(--bds-color-marketing-interactive);border-color:var(--bds-color-marketing-interactive);color:var(--bds-color-text-primary-inverse);&+ .arrow{background-color:var(--bds-color-marketing-interactive);border-color:var(--bds-color-marketing-interactive);}}&--green{background-color:var(--bds-color-action-green);border-color:var(--bds-color-action-green);color:var(--bds-color-text-primary-inverse);&+ .arrow{background-color:var(--bds-color-action-green);border-color:var(--bds-color-action-green);}}&--red{background-color:var(--bds-color-action-red);border-color:var(--bds-color-action-red);color:var(--bds-color-text-primary-inverse);&+ .arrow{background-color:var(--bds-color-action-red);border-color:var(--bds-color-action-red);}}&--gold{background-color:var(--bds-color-marketing-gold);border-color:var(--bds-color-marketing-gold);color:", ";&+ .arrow{background-color:var(--bds-color-marketing-gold);border-color:var(--bds-color-marketing-gold);}}&--lfp-yellow{background-color:var(--bds-color-marketing-lfp-yellow);border-color:var(--bds-color-marketing-lfp-yellow);color:", ";&+ .arrow{background-color:var(--bds-color-marketing-lfp-yellow);border-color:var(--bds-color-marketing-lfp-yellow);}}&--neutral{background-color:", ";border-color:", ";color:var(--bds-color-text-primary);&+ .arrow{background-color:", ";border-color:", ";}}}"], ({
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
}) => lightOrDark(theme, 'var(--bds-color-neutral-02)', 'var(--bds-color-elevation-02)'), ({
  theme
}) => lightOrDark(theme, 'var(--bds-color-neutral-02)', 'var(--bds-color-elevation-02)'), ({
  theme
}) => lightOrDark(theme, 'var(--bds-color-neutral-02)', 'var(--bds-color-elevation-02)'));
export { Filled };
export default Filled;