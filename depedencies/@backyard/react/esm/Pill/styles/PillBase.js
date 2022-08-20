import { css } from 'styled-components';
var Anchors = css(["&.anchor{&--top-right{top:0;right:0;transform:scale(1) translate(50%,-50%);transform-origin:100% 0%;}&--bottom-right{bottom:0;right:0;transform:scale(1) translate(50%,50%);transform-origin:100% 100%;}&--top-left{top:0;left:0;transform:scale(1) translate(-50%,-50%);transform-origin:0% 0%;}&--bottom-left{bottom:0;left:0;transform:scale(1) translate(-50%,50%);transform-origin:0% 100%;}}"]);
var PillBase = css(["position:relative;display:", ";vertical-align:middle;flex-shrink:0;.pill{position:absolute;display:flex;align-items:center;justify-content:center;&.invisible{visibility:hidden;}", " width:var(--bds-sizes-size-24);height:var(--bds-sizes-size-24);border:1px solid;border-radius:var(--bds-border-radius-circle);&.shape--dot{width:var(--bds-sizes-size-16);height:var(--bds-sizes-size-16);}font-family:", ";font-size:var(--bds-sizes-size-14);line-height:var(--bds-sizes-size-14);font-weight:var(--bds-font-weight-regular);pointer-events:none;transition:all 0.2s ease-in-out;&.over-max{font-size:var(--bds-sizes-size-12);line-height:var(--bds-sizes-size-12);}&.size--jumbo{width:var(--bds-sizes-size-40);height:var(--bds-sizes-size-40);font-size:var(--bds-sizes-size-20);line-height:var(--bds-sizes-size-20);&.shape--dot{width:var(--bds-sizes-size-32);height:var(--bds-sizes-size-32);}&.over-max{font-size:var(--bds-sizes-size-16);line-height:var(--bds-sizes-size-16);}}}"], function (_ref) {
  var display = _ref.display;
  return display || 'inline-flex';
}, Anchors, function (_ref2) {
  var theme = _ref2.theme;
  return theme.font.family[theme.context.font];
});
export { PillBase };
export default PillBase;