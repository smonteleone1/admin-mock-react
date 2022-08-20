import styled from 'styled-components';
import SpinnerBase from './SpinnerBase';
const SpinnerWrapper = styled.span.withConfig({
  displayName: "SpinnerWrapper",
  componentId: "sc-1ko0ltp-0"
})(["position:relative;z-index:", ";", ""], ({
  theme
}) => theme.zIndex.overlay, SpinnerBase);
export { SpinnerWrapper };
export default SpinnerWrapper;