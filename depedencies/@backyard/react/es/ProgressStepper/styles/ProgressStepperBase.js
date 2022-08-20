import { css } from 'styled-components';
const ProgressStepperBase = css(["position:relative;display:flex;min-width:", ";min-height:", ";.progress-stepper{&.direction--row{min-width:", ";}&.direction--column{min-height:", ";}}"], ({
  stretch
}) => stretch ? '100%' : 'auto', ({
  stretch
}) => stretch ? '100%' : 'auto', ({
  width
}) => width || '100%', ({
  height
}) => height || '100%');
export { ProgressStepperBase };
export default ProgressStepperBase;