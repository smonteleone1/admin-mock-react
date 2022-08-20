"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Text = exports.Rect = exports.Circle = exports.Animate = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("../");

var _2 = require("./");

var _addonKnobs = require("@storybook/addon-knobs");

var _ApiLink2 = require("../utils/storybook/ApiLink");

var _Grid$Column, _Grid$Column2, _Grid$Column3, _Skeleton, _ApiLink;

var _default = {
  title: '@backyard/react/Skeleton',
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;

var Text = function Text() {
  return _Grid$Column || (_Grid$Column = /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_2.Skeleton, {
    variant: "text"
  }), /*#__PURE__*/_react["default"].createElement(_2.Skeleton, {
    variant: "text"
  }), /*#__PURE__*/_react["default"].createElement(_2.Skeleton, {
    variant: "text"
  }), /*#__PURE__*/_react["default"].createElement(_2.Skeleton, {
    variant: "text"
  }), /*#__PURE__*/_react["default"].createElement(_ApiLink2.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Skeleton"
  })));
};

exports.Text = Text;

var Rect = function Rect() {
  return _Grid$Column2 || (_Grid$Column2 = /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_2.Skeleton, {
    variant: "rect",
    height: "size_64",
    width: "size_128"
  }), /*#__PURE__*/_react["default"].createElement(_ApiLink2.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Skeleton"
  })));
};

exports.Rect = Rect;

var Circle = function Circle() {
  return _Grid$Column3 || (_Grid$Column3 = /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_2.Skeleton, {
    variant: "circle",
    height: "size_128",
    width: "size_128"
  }), /*#__PURE__*/_react["default"].createElement(_ApiLink2.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Skeleton"
  })));
};

exports.Circle = Circle;

var Animate = function Animate() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_2.Skeleton, {
    variant: "text",
    animate: true,
    style: {
      marginBottom: '16px',
      width: '16rem'
    }
  }), /*#__PURE__*/_react["default"].createElement(_2.Skeleton, {
    variant: "rect",
    height: "size_64",
    width: "16rem",
    animate: true,
    style: {
      marginBottom: '16px'
    }
  }), _Skeleton || (_Skeleton = /*#__PURE__*/_react["default"].createElement(_2.Skeleton, {
    variant: "circle",
    height: "size_64",
    width: "size_64",
    animate: true
  })), _ApiLink || (_ApiLink = /*#__PURE__*/_react["default"].createElement(_ApiLink2.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Skeleton"
  })));
};

exports.Animate = Animate;