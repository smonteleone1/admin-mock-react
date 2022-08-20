import styled from 'styled-components';
import AlertBase from './AlertBase';
import DefaultColors from './variants/Default';
const AlertWrapper = styled.div.withConfig({
  displayName: "AlertWrapper",
  componentId: "sc-1uch1a4-0"
})(["", " ", ""], AlertBase, DefaultColors);
export { AlertWrapper };
export default AlertWrapper;