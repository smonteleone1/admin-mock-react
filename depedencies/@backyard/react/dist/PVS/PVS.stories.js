"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Skeleton = exports.DefaultPVS = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _ApiLink2 = require("../utils/storybook/ApiLink");

var _ = require("../");

var _ApiLink, _DefaultPVSExample;

var _default = {
  title: '@backyard/react/PVS',
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;
var colors = ['Color', {
  dark_blue: 'interactive',
  green: 'green'
}, 'interactive'];

var DefaultPVSExample = function DefaultPVSExample() {
  // @todo tokens
  // remove any
  var theme = (0, _.useBackyardTheme)();
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.RadioGroup, {
    name: "pvs-example",
    direction: "row",
    defaultValue: "crema-oak",
    onChange: (0, _addonActions.action)('selected')
  }, /*#__PURE__*/_react["default"].createElement(_.PVS, {
    value: "natural-oak",
    title: "Natural Oak",
    fill: "https://lda.lowes.com/is/image/Lowes/7391753008645_swatch",
    color: _addonKnobs.select.apply(void 0, colors)
  }), /*#__PURE__*/_react["default"].createElement(_.PVS, {
    value: "cambridge-abbey-oak",
    title: "Cambridge Abbey Oak",
    unavailable: (0, _addonKnobs["boolean"])('Unavailable', false),
    fill: "https://lda.lowes.com/is/image/Lowes/1000128595_swatch",
    color: _addonKnobs.select.apply(void 0, colors)
  }), /*#__PURE__*/_react["default"].createElement(_.PVS, {
    value: "crema-oak",
    title: "Crema Oak",
    fill: "https://lda.lowes.com/is/image/Lowes/7391753349960_swatch",
    color: _addonKnobs.select.apply(void 0, colors)
  }), /*#__PURE__*/_react["default"].createElement(_.PVS, {
    value: "black-stainless",
    unavailable: true,
    title: "Fingerprint Resistant Black Stainless",
    fill: "https://lda.lowes.com/is/image/Lowes/1000236845_swatch",
    color: _addonKnobs.select.apply(void 0, colors)
  }), /*#__PURE__*/_react["default"].createElement(_.PVS, {
    value: "grey",
    title: "Grey",
    fill: "https://lda.lowes.com/is/image/Lowes/1000286265_swatch",
    color: _addonKnobs.select.apply(void 0, colors)
  }), /*#__PURE__*/_react["default"].createElement(_.PVS, {
    value: "stainless-steel",
    title: "Fingerprint Resistant Stainless Steel",
    fill: "https://lda.lowes.com/is/image/Lowes/1000236847_swatch",
    color: _addonKnobs.select.apply(void 0, colors)
  }), /*#__PURE__*/_react["default"].createElement(_.PVS, {
    value: "black",
    fill: "#000",
    title: "Black",
    color: _addonKnobs.select.apply(void 0, colors)
  }), /*#__PURE__*/_react["default"].createElement(_.PVS, {
    value: "white",
    fill: "#ffffff",
    title: "White",
    color: _addonKnobs.select.apply(void 0, colors)
  }), /*#__PURE__*/_react["default"].createElement(_.PVS, {
    value: "green",
    fill: "#789987",
    title: "Green-ish",
    color: _addonKnobs.select.apply(void 0, colors)
  }), /*#__PURE__*/_react["default"].createElement(_.PVS, {
    value: "text_primary",
    fill: theme.color.text_primary,
    title: "Text Primary Token",
    color: _addonKnobs.select.apply(void 0, colors)
  }), /*#__PURE__*/_react["default"].createElement(_.PVS, {
    value: "text_secondary",
    fill: theme.color.text_secondary,
    title: "Text Secondary Token",
    color: _addonKnobs.select.apply(void 0, colors)
  }), /*#__PURE__*/_react["default"].createElement(_.PVS, {
    value: "overlay",
    fill: theme.color.overlay,
    title: "Overlay Token",
    color: _addonKnobs.select.apply(void 0, colors)
  })), _ApiLink || (_ApiLink = /*#__PURE__*/_react["default"].createElement(_ApiLink2.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/PVS"
  })));
};

var DefaultPVS = function DefaultPVS() {
  return _DefaultPVSExample || (_DefaultPVSExample = /*#__PURE__*/_react["default"].createElement(DefaultPVSExample, null));
};

exports.DefaultPVS = DefaultPVS;

var Skeleton = function Skeleton() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.PVSSkeleton, {
    items: (0, _addonKnobs.number)('Items', 1),
    animate: (0, _addonKnobs["boolean"])('Animate', false)
  }));
};

exports.Skeleton = Skeleton;