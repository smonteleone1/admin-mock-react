import { css } from 'styled-components';
const Shapes = css(["&.shape{li > button{border-radius:0;}}"]);
const ListBase = css(["display:flex;flex-direction:column;justify-content:stretch;width:", ";padding:0;list-style:none;", ""], ({
  theme,
  width
}) => theme.sizes[width] || width, Shapes);
export { ListBase };
export default ListBase;