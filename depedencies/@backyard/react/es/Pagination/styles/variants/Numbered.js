import { css } from 'styled-components';
const Numbered = css(["& > ul{& > li{padding:", ";&:first-child,&:last-child{padding:0;}}.button{width:calc(", " + ", ");height:calc(", " + ", ");transition:0s padding ease-in-out;&.ellipsis{padding-top:", ";padding-bottom:", ";svg{width:", " !important;height:", " !important;}}}}"], ({
  theme
}) => `0 ${theme.sizes.size_8}`, ({
  theme
}) => theme.sizes.size_40, ({
  theme
}) => theme.sizes.size_6, ({
  theme
}) => theme.sizes.size_40, ({
  theme
}) => theme.sizes.size_6, ({
  theme
}) => theme.sizes.size_16, ({
  theme
}) => theme.sizes.size_8, ({
  theme
}) => theme.sizes.size_12, ({
  theme
}) => theme.sizes.size_12);
export { Numbered };
export default Numbered;