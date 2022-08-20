import { css } from 'styled-components';
var Numbered = css(["& > ul{& > li{padding:", ";&:first-child,&:last-child{padding:0;}}.button{width:calc(", " + ", ");height:calc(", " + ", ");transition:0s padding ease-in-out;&.ellipsis{padding-top:", ";padding-bottom:", ";svg{width:", " !important;height:", " !important;}}}}"], function (_ref) {
  var theme = _ref.theme;
  return "0 ".concat(theme.sizes.size_8);
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.sizes.size_40;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.sizes.size_6;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.sizes.size_40;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.sizes.size_6;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.sizes.size_16;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.sizes.size_8;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.sizes.size_12;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.sizes.size_12;
});
export { Numbered };
export default Numbered;