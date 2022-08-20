import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends from "@babel/runtime/helpers/esm/extends";
const _excluded = ["children", "level", "regular"];
import * as React from 'react';
import { H1, H2, H3, H4, H5, H6 } from './styles';
const variants = {
  1: /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/React.createElement(H1, _extends({}, props, {
    ref: ref
  }))),
  2: /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/React.createElement(H2, _extends({}, props, {
    ref: ref
  }))),
  3: /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/React.createElement(H3, _extends({}, props, {
    ref: ref
  }))),
  4: /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/React.createElement(H4, _extends({}, props, {
    ref: ref
  }))),
  5: /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/React.createElement(H5, _extends({}, props, {
    ref: ref
  }))),
  6: /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/React.createElement(H6, _extends({}, props, {
    ref: ref
  })))
};
/**
 * Backyard React Heading
 *
 * Internal Component for Typography
 */

const Heading = /*#__PURE__*/React.forwardRef(function Heading(_ref, ref) {
  let {
    children,
    level = 1,
    regular
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  const Component = variants[level] || variants[1];
  return /*#__PURE__*/React.createElement(Component, _extends({
    regular: regular
  }, props, {
    ref: ref
  }), children);
});
Heading.bdsName = 'Heading';
export { Heading };
export default Heading;