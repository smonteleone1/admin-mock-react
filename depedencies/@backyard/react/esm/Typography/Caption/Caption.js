import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children"];
import * as React from 'react';
import { CaptionRegular } from './styles';
/**
 * Backyard React Caption
 *
 * Internal Component for Typography
 */

var Caption = /*#__PURE__*/React.forwardRef(function Caption(_ref, ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(CaptionRegular, _extends({}, props, {
    ref: ref
  }), children);
});
Caption.bdsName = 'Caption';
export { Caption };
export default Caption;