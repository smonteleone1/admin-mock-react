import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children"];
import * as React from 'react';
import { FootnoteRegular } from './styles';
/**
 * Backyard React Footnote
 *
 * Internal Component for Typography
 */

var Footnote = /*#__PURE__*/React.forwardRef(function Footnote(_ref, ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(FootnoteRegular, _extends({}, props, {
    ref: ref
  }), children);
});
Footnote.bdsName = 'Footnote';
export { Footnote };
export default Footnote;