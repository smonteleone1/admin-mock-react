import styled from 'styled-components';
import PickerBase from './PickerBase';
const ListPickerWrapper = styled.div.withConfig({
  displayName: "ListPickerWrapper",
  componentId: "sc-e378cy-0"
})(["", " padding:", " 0;overflow-y:auto;li{overflow:overlay;}"], PickerBase, ({
  theme
}) => theme.sizes.size_8);
export { ListPickerWrapper };
export default ListPickerWrapper;