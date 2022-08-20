import { css } from 'styled-components';
var ProgressStepperBase = css(["position:relative;display:flex;min-width:", ";min-height:", ";.progress-stepper{&.direction--row{min-width:", ";}&.direction--column{min-height:", ";}}"], function (_ref) {
  var stretch = _ref.stretch;
  return stretch ? '100%' : 'auto';
}, function (_ref2) {
  var stretch = _ref2.stretch;
  return stretch ? '100%' : 'auto';
}, function (_ref3) {
  var width = _ref3.width;
  return width || '100%';
}, function (_ref4) {
  var height = _ref4.height;
  return height || '100%';
});
export { ProgressStepperBase };
export default ProgressStepperBase;