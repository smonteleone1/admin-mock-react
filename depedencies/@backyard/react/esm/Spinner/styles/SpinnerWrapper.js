import styled from 'styled-components';
import SpinnerBase from './SpinnerBase';
var SpinnerWrapper = styled.span.withConfig({
  displayName: "SpinnerWrapper",
  componentId: "sc-1ko0ltp-0"
})(["position:relative;z-index:", ";", ""], function (_ref) {
  var theme = _ref.theme;
  return theme.zIndex.overlay;
}, SpinnerBase);
export { SpinnerWrapper };
export default SpinnerWrapper;