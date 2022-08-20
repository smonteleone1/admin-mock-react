import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children"];
import * as React from 'react';
import { ParagraphRegular } from './styles';
/**
 * Backyard React Paragraph
 *
 * Internal Component for Typography
 */

var Paragraph = /*#__PURE__*/React.forwardRef(function Paragraph(_ref, ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(ParagraphRegular, _extends({}, props, {
    ref: ref
  }), children);
});
Paragraph.bdsName = 'Paragraph';
export { Paragraph };
export default Paragraph;