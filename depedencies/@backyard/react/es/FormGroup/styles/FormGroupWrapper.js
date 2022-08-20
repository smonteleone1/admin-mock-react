import styled, { css } from 'styled-components';

const getSpacing = (theme, spacing) => theme.sizes[spacing] || spacing;

const FormGroupBase = css(["display:flex;flex-wrap:wrap;"]);
const FormGroupDirection = css(["&.direction{&--column{flex-direction:column;& > *{margin:", ";}}&--row{flex-direction:row;margin-left:-", ";& > *{margin:", ";}}}"], ({
  theme,
  spacing
}) => `${getSpacing(theme, spacing)} 0`, ({
  theme,
  spacing
}) => getSpacing(theme, spacing), ({
  theme,
  spacing
}) => getSpacing(theme, spacing));
const FormGroupWrapper = styled.div.withConfig({
  displayName: "FormGroupWrapper",
  componentId: "sc-aruewk-0"
})(["", " ", ""], FormGroupBase, FormGroupDirection);
export default FormGroupWrapper;