import { css } from 'styled-components';
/**
 * Extend `TextInput` and apply `TextField` styles
 */

var TextFieldBase = css(["& + div:before{content:\"\";display:inline-block;box-sizing:content-box;padding:", " 0;height:", ";border-top:1px solid;border-bottom:1px solid;}"], function (_ref) {
  var theme = _ref.theme;
  return theme.sizes.size_16;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.sizes.size_18;
});
export { TextFieldBase };
export default TextFieldBase;