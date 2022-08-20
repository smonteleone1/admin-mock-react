import { css } from 'styled-components';
const Dotted = css(["&&& > ul{& > li{display:flex;align-items:center;padding:", ";&:first-child{padding-left:0;}&:last-child{padding-right:0;}}.button{background:transparent;border:none;padding:0;svg path{fill:", ";}&.selected{svg path{fill:", ";}&:focus,&.focus{svg path{stroke:", ";stroke-width:", ";}}}&:focus,&.focus{box-shadow:none;svg path{stroke:", ";stroke-width:", ";}}&:hover:not(.selected),&.hover{svg path{fill:", ";}}&.size{&--medium{.label{height:", ";}svg{width:", ";height:", ";min-width:", ";min-height:", ";}}&--small{.label{height:", ";}svg{width:", ";height:", ";min-width:", ";min-height:", ";}}}}}"], ({
  theme
}) => `0 ${theme.sizes.size_4}`, ({
  theme
}) => theme.color.border_subdued, ({
  theme,
  color
}) => theme.color[`${color}_01`] || theme.color[color], ({
  theme
}) => theme.color.border_subdued, ({
  theme
}) => theme.sizes.size_2, ({
  theme,
  color
}) => theme.color[`${color}_01`] || theme.color[color], ({
  theme
}) => theme.sizes.size_2, ({
  theme
}) => theme.color.border_default, ({
  theme
}) => theme.sizes.size_16, ({
  theme
}) => theme.sizes.size_16, ({
  theme
}) => theme.sizes.size_16, ({
  theme
}) => theme.sizes.size_16, ({
  theme
}) => theme.sizes.size_16, ({
  theme
}) => theme.sizes.size_12, ({
  theme
}) => theme.sizes.size_12, ({
  theme
}) => theme.sizes.size_12, ({
  theme
}) => theme.sizes.size_12, ({
  theme
}) => theme.sizes.size_12);
export { Dotted };
export default Dotted;