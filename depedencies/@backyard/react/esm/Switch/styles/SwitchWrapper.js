import styled from 'styled-components';
import SwitchBase from './SwitchBase';
import SwitchOff from './states/SwitchOff';
import SwitchOn from './states/SwitchOn';
var SwitchWrapper = styled.span.withConfig({
  displayName: "SwitchWrapper",
  componentId: "sc-1tok1ht-0"
})(["", " input{&:not(:checked){", "}&:checked{", "}}"], SwitchBase, SwitchOff, SwitchOn);
export { SwitchWrapper };
export default SwitchWrapper;