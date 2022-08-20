import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["color", "size", "className"];
import React from 'react';
import PathIcon from "./components";

var _ref2 = /*#__PURE__*/React.createElement("path", {
  fill: "#2684FF",
  d: "M2.39 3a.385.385 0 00-.385.446l1.632 9.908a.523.523 0 00.511.437h7.83a.385.385 0 00.385-.323l1.632-10.02a.385.385 0 00-.384-.446L2.389 3zm6.872 7.161h-2.5l-.676-3.535h3.782l-.606 3.535z"
});

var _ref3 = /*#__PURE__*/React.createElement("path", {
  fill: "url(#bitbucket_linear_1)",
  d: "M13.476 6.626H9.868l-.606 3.535h-2.5l-2.95 3.503c.094.08.213.126.336.127h7.832a.385.385 0 00.385-.323l1.111-6.842z"
});

var _ref4 = /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
  id: "bitbucket_linear_1",
  x1: "14.31",
  x2: "9.364",
  y1: "8.783",
  y2: "12.644",
  gradientUnits: "userSpaceOnUse"
}, /*#__PURE__*/React.createElement("stop", {
  offset: ".18",
  stopColor: "#0052CC"
}), /*#__PURE__*/React.createElement("stop", {
  offset: "1",
  stopColor: "#2684FF"
})));

var Bitbucket = /*#__PURE__*/React.forwardRef(function Bitbucket(_ref, ref) {
  var color = _ref.color,
      size = _ref.size,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(PathIcon, _extends({
    className: ['icon', 'icon-bitbucket', className].filter(Boolean).join(' '),
    overrideColor: true,
    size: size
  }, props, {
    ref: ref
  }), _ref2, _ref3, _ref4);
});
export { Bitbucket };
export default Bitbucket;