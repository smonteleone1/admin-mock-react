import styled from 'styled-components';
const FormControlWrapper = styled.div.withConfig({
  displayName: "FormControlWrapper",
  componentId: "sc-1bq3tpz-0"
})(["display:flex;flex-direction:column;&.error{input{border-color:", ";}input:focus + label,input:active + label{color:", ";}label{color:", ";}.helper-text{color:", ";}}&.success{input{border-color:", ";}input:focus + label,input:active + label{color:", ";}label{color:", ";}.helper-text{color:", ";}}&.warning{input{border-color:", ";}input:focus + label,input:active + label{color:", ";}label{color:", ";}.helper-text{color:", ";}}"], ({
  theme
}) => theme.color.text_red, ({
  theme
}) => theme.color.text_red, ({
  theme
}) => theme.color.text_red, ({
  theme
}) => theme.color.text_red, ({
  theme
}) => theme.color.text_green, ({
  theme
}) => theme.color.text_green, ({
  theme
}) => theme.color.text_green, ({
  theme
}) => theme.color.text_green, ({
  theme
}) => theme.color.text_red, ({
  theme
}) => theme.color.text_primary, ({
  theme
}) => theme.color.text_primary, ({
  theme
}) => theme.color.text_primary);
export { FormControlWrapper };
export default FormControlWrapper;