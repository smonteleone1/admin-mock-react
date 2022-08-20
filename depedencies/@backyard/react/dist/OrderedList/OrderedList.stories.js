"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Skeleton = exports.Nested = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("../");

var _ApiLink3 = require("../utils/storybook/ApiLink");

var _addonKnobs = require("@storybook/addon-knobs");

var _ListItem, _ListItem2, _ListItem3, _ListItem4, _ApiLink, _ListItem5, _ListItem6, _ListItem7, _ListItem8, _ApiLink2;

var _default = {
  title: '@backyard/react/OrderedList',
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;
var densities = ['Density', {
  condensed: 'condensed',
  normal: 'normal',
  comfort: 'comfort'
}, 'normal'];

var Default = function Default() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.OrderedList, {
    density: _addonKnobs.select.apply(void 0, densities)
  }, _ListItem || (_ListItem = /*#__PURE__*/_react["default"].createElement(_.ListItem, null, "Lorem ipsum dolor sit amet, consectetur adipiscing.")), _ListItem2 || (_ListItem2 = /*#__PURE__*/_react["default"].createElement(_.ListItem, null, "Lorem ipsum dolor sit amet, consectetur adipiscing.")), _ListItem3 || (_ListItem3 = /*#__PURE__*/_react["default"].createElement(_.ListItem, null, "Lorem ipsum dolor sit amet, consectetur adipiscing.")), _ListItem4 || (_ListItem4 = /*#__PURE__*/_react["default"].createElement(_.ListItem, null, "Lorem ipsum dolor sit amet, consectetur adipiscing."))), _ApiLink || (_ApiLink = /*#__PURE__*/_react["default"].createElement(_ApiLink3.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/OrderedList"
  })));
};

exports.Default = Default;

var Nested = function Nested() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.OrderedList, {
    density: _addonKnobs.select.apply(void 0, densities)
  }, _ListItem5 || (_ListItem5 = /*#__PURE__*/_react["default"].createElement(_.ListItem, null, "Lorem ipsum dolor sit amet, consectetur adipiscing.")), _ListItem6 || (_ListItem6 = /*#__PURE__*/_react["default"].createElement(_.ListItem, null, "Lorem ipsum dolor sit amet, consectetur adipiscing.")), _ListItem7 || (_ListItem7 = /*#__PURE__*/_react["default"].createElement(_.ListItem, null, "Lorem ipsum dolor sit amet, consectetur adipiscing.", /*#__PURE__*/_react["default"].createElement(_.OrderedList, null, /*#__PURE__*/_react["default"].createElement(_.ListItem, null, "Look at me, I'm nested and a slightly different color."), /*#__PURE__*/_react["default"].createElement(_.ListItem, null, "Lorem ipsum dolor sit amet, consectetur adipiscing.", /*#__PURE__*/_react["default"].createElement(_.OrderedList, null, /*#__PURE__*/_react["default"].createElement(_.ListItem, null, "Lorem ipsum dolor sit amet, consectetur adipiscing."), /*#__PURE__*/_react["default"].createElement(_.ListItem, null, "Lorem ipsum dolor sit amet, consectetur adipiscing.")))))), _ListItem8 || (_ListItem8 = /*#__PURE__*/_react["default"].createElement(_.ListItem, null, "Lorem ipsum dolor sit amet, consectetur adipiscing."))), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/_react["default"].createElement(_ApiLink3.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/OrderedList"
  })));
};

exports.Nested = Nested;

var Skeleton = function Skeleton() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.OrderedListSkeleton, {
    density: _addonKnobs.select.apply(void 0, densities),
    items: (0, _addonKnobs.number)('List items', 4),
    width: (0, _addonKnobs.text)('Width', '18.75rem'),
    animate: (0, _addonKnobs["boolean"])('Animate', false)
  }));
};

exports.Skeleton = Skeleton;