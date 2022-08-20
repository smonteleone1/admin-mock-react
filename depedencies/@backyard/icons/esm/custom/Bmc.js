import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["color", "size", "className"];
import React from 'react';
import PathIcon from "./components";

var _ref2 = /*#__PURE__*/React.createElement("path", {
  fill: "#FE5000",
  d: "M4.976 14a1.012 1.012 0 01-.972-1.09v-1.716a2.225 2.225 0 011.017-1.781l2.37-1.405-2.37-1.404A2.227 2.227 0 014.004 4.82V3.104A1.011 1.011 0 014.987 2c.223.003.44.067.63.185l5.348 3.189a1.096 1.096 0 01.587.935 1.101 1.101 0 01-.587.938l-1.284.759 1.284.76a1.04 1.04 0 010 1.872l-5.362 3.177a1.205 1.205 0 01-.627.185zM8.53 8.697L5.603 10.42a1.079 1.079 0 00-.439.773v1.517l5.076-3.009-1.71-1.005zM5.17 3.289V4.82a1.079 1.079 0 00.438.787l2.922 1.73 1.713-1.014L5.17 3.289z"
});

var Bmc = /*#__PURE__*/React.forwardRef(function Bmc(_ref, ref) {
  var color = _ref.color,
      size = _ref.size,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(PathIcon, _extends({
    className: ['icon', 'icon-bmc', className].filter(Boolean).join(' '),
    overrideColor: true,
    size: size
  }, props, {
    ref: ref
  }), _ref2);
});
export { Bmc };
export default Bmc;