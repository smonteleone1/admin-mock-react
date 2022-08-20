import styled, { css } from 'styled-components';
var Wrapper = css(["border:none;display:flex;flex-direction:column;vertical-align:top;padding:0;position:relative;width:100%;input,textarea,legend,label,span,.suffix{font-family:", ";font-weight:var(--bds-font-weight-regular);font-size:var(--bds-sizes-size-16);line-height:var(--bds-sizes-size-24);background-color:transparent;&.disabled{color:var(--bds-color-text-disabled);}}svg{box-sizing:border-box;}input,textarea{box-sizing:border-box;border:none;outline:none;width:100%;padding:0 var(--bds-sizes-size-16);color:var(--bds-color-text-primary);}&.item--before input{padding:0;}.item--before{margin-left:var(--bds-sizes-size-4);margin-right:var(--bds-sizes-size-8);&.icon{margin-left:var(--bds-sizes-size-16);path,circle{fill:", ";}}}.item--after{margin-right:var(--bds-sizes-size-4);margin-left:var(--bds-sizes-size-8);&.icon{margin-right:var(--bds-sizes-size-16);path,circle{fill:var(--bds-color-icon-tertiary);}}}&.state--success svg.icon--success,&.state--error svg.item--after{margin-right:var(--bds-sizes-size-16);}&.state--error svg.item--after path{fill:var(--bds-color-icon-red);}&.has--placeholder{label{display:none;}legend{display:none;}}"], function (_ref) {
  var theme = _ref.theme;
  return theme.font.family[theme.context.font];
}, function (_ref2) {
  var customIcon = _ref2.customIcon;
  return customIcon ? '' : 'var(--bds-color-icon-tertiary)';
});
var TextInputWrapper = styled.div.withConfig({
  displayName: "TextInputWrapper",
  componentId: "sc-b3qmsm-0"
})(["", ""], Wrapper);
export { TextInputWrapper };
export default TextInputWrapper;