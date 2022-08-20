import styled from 'styled-components';
var CarouselItemWrapper = styled.div.withConfig({
  displayName: "CarouselItemWrapper",
  componentId: "sc-34ce9d-0"
})(["flex-shrink:0;margin:0 ", ";"], function (_ref) {
  var theme = _ref.theme,
      padding = _ref.padding;
  return padding === 'none' ? 0 : theme.sizes[padding] || padding;
});
export { CarouselItemWrapper };
export default CarouselItemWrapper;