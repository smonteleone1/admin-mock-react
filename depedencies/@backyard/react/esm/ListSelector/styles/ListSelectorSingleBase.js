import { css } from 'styled-components';
var Shapes = css(["&.shape{li > button{border-radius:0;}}"]);
var ListBase = css(["display:flex;flex-direction:column;justify-content:stretch;width:", ";padding:0;list-style:none;", ""], function (_ref) {
  var theme = _ref.theme,
      width = _ref.width;
  return theme.sizes[width] || width;
}, Shapes);
export { ListBase };
export default ListBase;