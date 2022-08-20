import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["color", "size", "className"];
import React from 'react';
import PathIcon from "./components";

var _ref2 = /*#__PURE__*/React.createElement("path", {
  d: "M12.1319 2H9.81746V8H12.1326L12.1319 2ZM5.3158 8H3V14H5.3158V8ZM8.7242 14H6.4084V2H8.72387L8.7242 14Z",
  fill: "#FBC600"
});

var Setpay = /*#__PURE__*/React.forwardRef(function Setpay(_ref, ref) {
  var color = _ref.color,
      size = _ref.size,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(PathIcon, _extends({
    className: ['icon', 'icon-setpay', className].filter(Boolean).join(' '),
    overrideColor: true,
    size: size
  }, props, {
    ref: ref
  }), _ref2);
});
export { Setpay };
export default Setpay;