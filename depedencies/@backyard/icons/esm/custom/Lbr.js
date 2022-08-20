import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["color", "size", "className"];
import React from 'react';
import PathIcon from "./components";

var _ref2 = /*#__PURE__*/React.createElement("path", {
  fill: "#012169",
  d: "M13.5 4h-11a.5.5 0 00-.5.5v7a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-7a.5.5 0 00-.5-.5z"
});

var _ref3 = /*#__PURE__*/React.createElement("path", {
  fill: "url(#lba_linear_1)",
  d: "M2.5 5a.5.5 0 01.5-.5h10a.5.5 0 01.5.5v3.5h-3.394a.5.5 0 01-.203-.043L5.677 6.579a.5.5 0 00-.361-.018L2.5 7.5V5z"
});

var _ref4 = /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  fillRule: "evenodd",
  d: "M11 5l1.034.442h.643v.18H13v1.212H9V5.622h.323v-.18h.644L11 5zm.001.093l-1.015.434h-.578v.18h-.323v1.042h3.83V5.707h-.322v-.18h-.577l-1.015-.435zm1.304.825a.41.41 0 01.035.002c.104.014.207.075.209.075l.001.001v.144l-.005-.002-.102-.04a.365.365 0 00-.12-.027c-.027 0-.049.006-.062.02a.043.043 0 00-.015.038c.006.039.072.063.093.07l.003.002c.108.04.175.088.205.144l.003.006c.015.03.022.058.021.085a.219.219 0 01-.08.155.256.256 0 01-.152.038c-.126 0-.266-.043-.267-.043l-.002-.002v-.157l.009.003a1.5 1.5 0 00.23.06c.038 0 .067-.017.074-.04.006-.024-.01-.05-.04-.067a.828.828 0 00-.084-.04c-.066-.028-.136-.058-.18-.128a.193.193 0 01.01-.2c.048-.064.12-.097.216-.097zm-2.666-.165v.688h.279v.163h-.459v-.851h.18zm2.279.163v.162h-.246v.106h.246v.154h-.246v.106h.246v.16h-.426v-.688h.426zm-1.463 0c.047 0 .086.04.086.088v.513a.087.087 0 01-.087.087h-.351a.088.088 0 01-.08-.054.087.087 0 01-.006-.034v-.511c0-.049.038-.088.086-.088h.351zm.37 0v.527h.11v-.526h.162v.527h.112v-.527h.184v.6a.088.088 0 01-.087.087h-.218c-.037 0-.071-.025-.071-.062 0 .037-.035.062-.072.062h-.218a.088.088 0 01-.088-.088v-.6h.186zm-.466.162h-.16v.365h.16v-.365zm2.358-.162c.077 0 .143.061.143.143a.14.14 0 01-.088.133.141.141 0 01-.055.01.142.142 0 01-.144-.143c0-.082.066-.143.144-.143zm0 .024a.115.115 0 00-.115.119.115.115 0 00.229 0 .114.114 0 00-.114-.119zm.008.037c.037 0 .056.014.056.047 0 .03-.018.042-.041.045l.046.073h-.027l-.043-.072h-.029v.072h-.024v-.165h.062zm-.61-.224l-.029.196h-.135v-.196h.164z",
  clipRule: "evenodd"
});

var _ref5 = /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
  id: "lba_linear_1",
  x1: "2.5",
  x2: "12.385",
  y1: "6.236",
  y2: "9.83",
  gradientUnits: "userSpaceOnUse"
}, /*#__PURE__*/React.createElement("stop", {
  stopColor: "#EEE"
}), /*#__PURE__*/React.createElement("stop", {
  offset: ".445",
  stopColor: "#9B9B9C"
})));

var Lbr = /*#__PURE__*/React.forwardRef(function Lbr(_ref, ref) {
  var color = _ref.color,
      size = _ref.size,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(PathIcon, _extends({
    className: ['icon', 'icon-lbr', className].filter(Boolean).join(' '),
    overrideColor: true,
    size: size
  }, props, {
    ref: ref
  }), _ref2, _ref3, _ref4, _ref5);
});
export { Lbr };
export default Lbr;