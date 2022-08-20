import styled from 'styled-components';
import BadgeBase from './BadgeBase';
import Filled from './variants/Filled';
import Outlined from './variants/Outlined';
import Arrows from './Arrows';
var BadgeWrapper = styled.span.withConfig({
  displayName: "BadgeWrapper",
  componentId: "sc-ah9c1g-0"
})(["display:inline-flex;flex-direction:", ";align-items:center;justify-content:center;.arrow{box-sizing:border-box;height:1.125rem;width:1.125rem;border-width:0.0625rem;border-style:solid;transform:rotateY(0deg) rotate(45deg);border-radius:var(--bds-border-radius-md);}", " .badge-label{&.variant{&--filled{", "}&--outlined{", "}}", "}.bold{font-weight:", "}"], function (_ref) {
  var arrow = _ref.arrow;
  return arrow === 'left' ? 'row-reverse' : 'row';
}, BadgeBase, Filled, Outlined, Arrows, function (_ref2) {
  var theme = _ref2.theme;
  return theme.context.font === 'roboto' ? theme.font.weight.medium : theme.font.weight.semibold;
});
export { BadgeWrapper };
export default BadgeWrapper;