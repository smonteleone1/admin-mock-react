import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["children"];
import * as React from 'react';
import { FootnoteRegular } from './styles';
/**
 * Backyard React Footnote
 *
 * Internal Component for Typography
 */

const Footnote = /*#__PURE__*/React.forwardRef(function Footnote(_ref, ref) {
  let {
    children
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(FootnoteRegular, _extends({}, props, {
    ref: ref
  }), children);
});
Footnote.bdsName = 'Footnote';
export { Footnote };
export default Footnote;