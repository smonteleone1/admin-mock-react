"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Skeleton = exports.DefaultRating = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("../");

var _RatingEmpty = _interopRequireDefault(require("@backyard/icons/RatingEmpty"));

var _RatingFull = _interopRequireDefault(require("@backyard/icons/RatingFull"));

var _ApiLink2 = require("../utils/storybook/ApiLink");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _RatingOutline, _RatingFilled, _ApiLink;

var _default = {
  title: '@backyard/react/Rating',
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;
var sizes = {
  small: 'small',
  medium: 'medium',
  large: 'large',
  jumbo: 'jumbo'
};

var DefaultRating = function DefaultRating() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.Rating, {
    interactive: (0, _addonKnobs["boolean"])('Interactive', false),
    name: (0, _addonKnobs.text)('Name', 'name'),
    value: Number((0, _addonKnobs.text)('Value', '3.5')),
    count: (0, _addonKnobs.number)('Ratings', 734),
    emptyIcon: _RatingOutline || (_RatingOutline = /*#__PURE__*/_react["default"].createElement(_RatingEmpty["default"], null)),
    icon: _RatingFilled || (_RatingFilled = /*#__PURE__*/_react["default"].createElement(_RatingFull["default"], null)),
    size: (0, _addonKnobs.select)('Sizes', sizes, 'medium'),
    precision: (0, _addonKnobs.number)('Precision', 0.5),
    onChange: (0, _addonActions.action)('rating-change'),
    onChangeHover: (0, _addonActions.action)('rating-change-hover'),
    onMouseLeave: (0, _addonActions.action)('rating-mouse-leave')
  }), _ApiLink || (_ApiLink = /*#__PURE__*/_react["default"].createElement(_ApiLink2.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Rating"
  })));
};

exports.DefaultRating = DefaultRating;

var Skeleton = function Skeleton() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.RatingSkeleton, {
    size: (0, _addonKnobs.select)('Sizes', sizes, 'medium'),
    animate: (0, _addonKnobs["boolean"])('Animate', false),
    withValue: (0, _addonKnobs["boolean"])('withValue', false)
  }));
};

exports.Skeleton = Skeleton;