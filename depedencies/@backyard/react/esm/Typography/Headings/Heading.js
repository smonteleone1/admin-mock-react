import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/esm/extends";
var _excluded = ["children", "level", "regular"];
import * as React from 'react';
import { H1, H2, H3, H4, H5, H6 } from './styles';
var variants = {
  1: /*#__PURE__*/React.forwardRef(function (props, ref) {
    return /*#__PURE__*/React.createElement(H1, _extends({}, props, {
      ref: ref
    }));
  }),
  2: /*#__PURE__*/React.forwardRef(function (props, ref) {
    return /*#__PURE__*/React.createElement(H2, _extends({}, props, {
      ref: ref
    }));
  }),
  3: /*#__PURE__*/React.forwardRef(function (props, ref) {
    return /*#__PURE__*/React.createElement(H3, _extends({}, props, {
      ref: ref
    }));
  }),
  4: /*#__PURE__*/React.forwardRef(function (props, ref) {
    return /*#__PURE__*/React.createElement(H4, _extends({}, props, {
      ref: ref
    }));
  }),
  5: /*#__PURE__*/React.forwardRef(function (props, ref) {
    return /*#__PURE__*/React.createElement(H5, _extends({}, props, {
      ref: ref
    }));
  }),
  6: /*#__PURE__*/React.forwardRef(function (props, ref) {
    return /*#__PURE__*/React.createElement(H6, _extends({}, props, {
      ref: ref
    }));
  })
};
/**
 * Backyard React Heading
 *
 * Internal Component for Typography
 */

var Heading = /*#__PURE__*/React.forwardRef(function Heading(_ref, ref) {
  var children = _ref.children,
      _ref$level = _ref.level,
      level = _ref$level === void 0 ? 1 : _ref$level,
      regular = _ref.regular,
      props = _objectWithoutProperties(_ref, _excluded);

  var Component = variants[level] || variants[1];
  return /*#__PURE__*/React.createElement(Component, _extends({
    regular: regular
  }, props, {
    ref: ref
  }), children);
});
Heading.bdsName = 'Heading';
export { Heading };
export default Heading;