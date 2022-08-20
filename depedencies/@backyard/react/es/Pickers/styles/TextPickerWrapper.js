import styled, { css } from 'styled-components';
const EnabledNative = css(["input::-webkit-calendar-picker-indicator{opacity:0;cursor:pointer;margin-top:-", ";margin-right:-", ";height:", ";width:", ";}"], ({
  theme
}) => theme.sizes.size_18, ({
  theme
}) => theme.sizes.size_40, ({
  theme
}) => theme.sizes.size_32, ({
  theme
}) => theme.sizes.size_32);
const DisabledNative = css(["input::-webkit-calendar-picker-indicator{display:none;}"]);
const BrowserCSS = css(["input::-webkit-inner-spin-button,input::-webkit-clear-button,input::-ms-clear{display:none;}input::-moz-placeholder{opacity:1;color:black;}input::-webkit-input-placeholder{opacity:1;color:black;}input:-ms-input-placeholder{opacity:1;color:black;}", ";"], ({
  disableNative,
  theme
}) => disableNative || theme.isDesktop ? DisabledNative : EnabledNative);
const TextPickerWrapper = styled.div.withConfig({
  displayName: "TextPickerWrapper",
  componentId: "sc-1hgtwoq-0"
})(["width:calc(", " * 5);select{height:auto;margin-bottom:", ";}.textinput--wrapper input.incomplete:not(.focus):not(:focus){opacity:0;}.no-interaction{pointer-events:none;}&&&{.icon--after,&.icon--after{display:flex;align-items:center;justify-content:center;z-index:1;.picker-clear-button,&.picker-clear-button{height:", ";width:", ";padding:", ";z-index:1;pointer-events:all;.icon.icon.icon{path{fill:", ";}}}&.picker-clear-button{margin-right:", ";}}}", ""], ({
  theme
}) => theme.sizes.size_60, ({
  theme
}) => theme.sizes.size_8, ({
  theme
}) => theme.sizes.size_40, ({
  theme
}) => theme.sizes.size_40, ({
  theme
}) => theme.sizes.size_0, ({
  theme
}) => theme.color.text_tertiary, ({
  theme
}) => theme.sizes.size_10, BrowserCSS);
export { TextPickerWrapper };
export default TextPickerWrapper;