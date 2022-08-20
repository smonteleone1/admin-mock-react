import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";

var _ChevronRight;

const _excluded = ["to"];
import * as React from 'react';
import { ChevronRight } from '@backyard/icons';
import { Link } from '../../../Link';
import { Wrapper } from './styles';

const ApiLink = _ref => {
  let {
    to
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

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