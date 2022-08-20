import styled from 'styled-components';
import CheckboxBase from './CheckboxBase';
import CheckboxOff from './states/CheckboxOff';
import CheckboxOn from './states/CheckboxOn';
const CheckboxWrapper = styled.span.withConfig({
  displayName: "CheckboxWrapper",
  componentId: "sc-j2pgcr-0"
})(["", " input{&:not(:checked){", "}&:checked{", "}}"], CheckboxBase, CheckboxOff, CheckboxOn);
export { CheckboxWrapper };
export default CheckboxWrapper;