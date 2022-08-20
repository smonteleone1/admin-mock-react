import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["children"];
import * as React from 'react';
import { ParagraphRegular } from './styles';
/**
 * Backyard React Paragraph
 *
 * Internal Component for Typography
 */

const Paragraph = /*#__PURE__*/React.forwardRef(function Paragraph(_ref, ref) {
  let {
    children
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(ParagraphRegular, _extends({}, props, {
    ref: ref
  }), children);
});
Paragraph.bdsName = 'Paragraph';
export { Paragraph };
export default Paragraph;