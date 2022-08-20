import styled from 'styled-components';
const CarouselItemWrapper = styled.div.withConfig({
  displayName: "CarouselItemWrapper",
  componentId: "sc-34ce9d-0"
})(["flex-shrink:0;margin:0 ", ";"], ({
  theme,
  padding
}) => padding === 'none' ? 0 : theme.sizes[padding] || padding);
export { CarouselItemWrapper };
export default CarouselItemWrapper;