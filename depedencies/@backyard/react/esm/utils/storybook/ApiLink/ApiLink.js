import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

var _ChevronRight;

var _excluded = ["to"];
import * as React from 'react';
import { ChevronRight } from '@backyard/icons';
import { Link } from '../../../Link';
import { Wrapper } from './styles';

var ApiLink = function ApiLink(_ref) {
  var to = _ref.to,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Wrapper, null, /*#__PURE__*/React.createElement(Link, _extends({
    to: to,
    size: "small",
    color: "text_link",
    iconAfter: _ChevronRight || (_ChevronRight = /*#__PURE__*/React.createElement(ChevronRight, null)),
    target: "_blank"
  }, props), "API Documentation"));
};

export { ApiLink };
export default ApiLink;