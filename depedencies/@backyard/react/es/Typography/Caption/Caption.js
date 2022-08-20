import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["children"];
import * as React from 'react';
import { CaptionRegular } from './styles';
/**
 * Backyard React Caption
 *
 * Internal Component for Typography
 */

const Caption = /*#__PURE__*/React.forwardRef(function Caption(_ref, ref) {
  let {
    children
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(CaptionRegular, _extends({}, props, {
    ref: ref
  }), children);
});
Caption.bdsName = 'Caption';
export { Caption };
export default Caption;