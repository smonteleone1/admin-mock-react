import styled, { css } from 'styled-components';
import StepperBase from './StepperBase';
var Shared = css(["div.stepper--fields{input:disabled{cursor:not-allowed;}&.disabled + label{color:var(--bds-color-text-disabled);}}"]);
var StepperWrapper = styled.div.withConfig({
  displayName: "StepperWrapper",
  componentId: "sc-rxhh78-0"
})(["", " &&&{", "}"], StepperBase, Shared);
export { StepperWrapper };
export default StepperWrapper;