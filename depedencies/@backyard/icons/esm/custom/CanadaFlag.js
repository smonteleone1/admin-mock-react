import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["color", "size", "className"];
import React from 'react';
import PathIcon from "./components";

var _ref2 = /*#__PURE__*/React.createElement("path", {
  fill: "red",
  d: "M2 5h3l.124.124h5.752L11 5h3v6h-3l-.124-.124H5.124L5 11H2V5z"
});

var _ref3 = /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M5 5h6v6H5V5zm3.113 5.537L8.056 9.46a.119.119 0 01.139-.123l1.074.189-.145-.4a.081.081 0 01.025-.091l1.176-.953-.265-.123a.081.081 0 01-.043-.1l.233-.714-.678.143a.081.081 0 01-.09-.047l-.132-.309-.529.568a.081.081 0 01-.139-.071l.255-1.316-.408.237a.081.081 0 01-.114-.034L8 5.5l-.415.815a.081.081 0 01-.114.034l-.409-.237.255 1.316a.081.081 0 01-.138.07l-.529-.567-.131.309a.081.081 0 01-.091.047l-.678-.143.232.715a.081.081 0 01-.042.098l-.265.124 1.176.953a.081.081 0 01.025.091l-.145.4 1.074-.189a.119.119 0 01.139.123l-.056 1.079h.225z"
});

var CanadaFlag = /*#__PURE__*/React.forwardRef(function CanadaFlag(_ref, ref) {
  var color = _ref.color,
      size = _ref.size,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(PathIcon, _extends({
    className: ['icon', 'icon-canada-flag', className].filter(Boolean).join(' '),
    overrideColor: true,
    size: size
  }, props, {
    ref: ref
  }), _ref2, _ref3);
});
export { CanadaFlag };
export default CanadaFlag;