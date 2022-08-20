import styled, { css } from 'styled-components';
const FormHelperTextBase = css(["margin:0;padding-top:", ";"], ({
  theme
}) => theme.sizes.size_4);
const FormHelperTextWrapper = styled.span.withConfig({
  displayName: "FormHelperTextWrapper",
  componentId: "sc-12bbq8z-0"
})(["", " .typography{color:", ";.icon path{fill:", ";}}.icon{vertical-align:text-top;}.helper-text-icon{margin-right:", ";}&&.indent{.typography{padding-left:var(--helper-text-indent);}}&&.disabled{.typography{color:", ";.icon path{fill:", ";}}}&.error{.typography{color:", ";.icon path{fill:", ";}}}&.success{.typography{color:", ";.icon path{fill:", ";}}}&.warning{.typography{color:", ";.icon path{fill:", ";}}}&.info{.typography{color:", ";.icon path{fill:", ";}}}"], FormHelperTextBase, ({
  theme
}) => theme.color.text_tertiary, ({
  theme
}) => theme.color.text_tertiary, ({
  theme
}) => theme.sizes.size_8, ({
  theme
}) => theme.color.text_disabled, ({
  theme
}) => theme.color.text_disabled, ({
  theme
}) => theme.color.text_red, ({
  theme
}) => theme.color.text_red, ({
  theme
}) => theme.color.text_green, ({
  theme
}) => theme.color.text_green, ({
  theme
}) => theme.color.text_red, ({
  theme
}) => theme.color.text_red, ({
  theme
}) => theme.color.text_interactive, ({
  theme
}) => theme.color.text_interactive);
export { FormHelperTextBase, FormHelperTextWrapper };
export default FormHelperTextWrapper;