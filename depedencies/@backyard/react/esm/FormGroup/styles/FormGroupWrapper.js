import styled, { css } from 'styled-components';

var getSpacing = function getSpacing(theme, spacing) {
  return theme.sizes[spacing] || spacing;
};

var FormGroupBase = css(["display:flex;flex-wrap:wrap;"]);
var FormGroupDirection = css(["&.direction{&--column{flex-direction:column;& > *{margin:", ";}}&--row{flex-direction:row;margin-left:-", ";& > *{margin:", ";}}}"], function (_ref) {
  var theme = _ref.theme,
      spacing = _ref.spacing;
  return "".concat(getSpacing(theme, spacing), " 0");
}, function (_ref2) {
  var theme = _ref2.theme,
      spacing = _ref2.spacing;
  return getSpacing(theme, spacing);
}, function (_ref3) {
  var theme = _ref3.theme,
      spacing = _ref3.spacing;
  return getSpacing(theme, spacing);
});
var FormGroupWrapper = styled.div.withConfig({
  displayName: "FormGroupWrapper",
  componentId: "sc-aruewk-0"
})(["", " ", ""], FormGroupBase, FormGroupDirection);
export default FormGroupWrapper;