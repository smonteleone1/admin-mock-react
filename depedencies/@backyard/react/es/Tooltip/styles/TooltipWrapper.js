import styled from 'styled-components';
import TooltipBase from './TooltipBase';
import LowContrast from './variants/LowContrast';
import HighContrast from './variants/HighContrast';
const TooltipWrapper = styled.div.withConfig({
  displayName: "TooltipWrapper",
  componentId: "sc-6i8spg-0"
})(["", " &.variant{&--low_contrast{", "}&--high_contrast{", "}}"], TooltipBase, LowContrast, HighContrast);
export { TooltipBase, TooltipWrapper };
export default TooltipWrapper;