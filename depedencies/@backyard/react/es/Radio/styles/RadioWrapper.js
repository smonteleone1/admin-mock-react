import styled from 'styled-components';
import BaseRadio from './BaseRadio';
import RadioOff from './states/RadioOff';
import RadioOn from './states/RadioOn';
const RadioWrapper = styled.span.withConfig({
  displayName: "RadioWrapper",
  componentId: "sc-rdx1gv-0"
})(["", " input{&:not(:checked){", "}&:checked{", "}}"], BaseRadio, RadioOff, RadioOn);
export default RadioWrapper;