import styled from 'styled-components';
import PillBase from './PillBase';
import Filled from './variants/Filled';
import Outlined from './variants/Outlined';
import Indicator from './variants/Indicator';
const PillWrapper = styled.span.withConfig({
  displayName: "PillWrapper",
  componentId: "sc-16kvfnm-0"
})(["", " .pill{&.variant{&--filled{", "}&--outlined{", "}&--indicator{", "}}}"], PillBase, Filled, Outlined, Indicator);
export { PillWrapper };
export default PillWrapper;