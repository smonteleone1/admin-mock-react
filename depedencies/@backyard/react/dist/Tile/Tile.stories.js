"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Skeleton = exports.Radio = exports.Link = exports.Card = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _ApiLink4 = require("../utils/storybook/ApiLink");

var _icons = require("@backyard/icons");

var _ = require("../");

var _br, _br2, _br3, _LocationOutlined, _br4, _br5, _ApiLink, _ApiLink2, _br6, _br7, _br8, _ApiLink3, _FormHeading, _br9;

var _default = {
  title: '@backyard/react/Tile',
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;
var defaultTitle = "Mooresville Lowe's";

var defaultCaption = function defaultCaption() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "509 River Highway", _br || (_br = /*#__PURE__*/_react["default"].createElement("br", null)), "Mooresville, NC", _br2 || (_br2 = /*#__PURE__*/_react["default"].createElement("br", null)), _br3 || (_br3 = /*#__PURE__*/_react["default"].createElement("br", null)), "2.1 miles");
};

var filler = function filler() {
  var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultTitle;
  var caption = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultCaption;
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Container, {
    style: {
      width: '20rem',
      padding: '1rem 0.5rem'
    }
  }, /*#__PURE__*/_react["default"].createElement(_.GridV3.Row, null, /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 1,
    end: 3,
    style: {
      paddingLeft: '0.5rem'
    }
  }, _LocationOutlined || (_LocationOutlined = /*#__PURE__*/_react["default"].createElement(_icons.LocationOutlined, {
    size: "size_24"
  }))), /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 3,
    end: 17
  }, /*#__PURE__*/_react["default"].createElement(_.Typography, {
    variant: "h4",
    style: {
      margin: '0px'
    }
  }, title), _br4 || (_br4 = /*#__PURE__*/_react["default"].createElement("br", null)), _br5 || (_br5 = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_.Typography, {
    variant: "body_1"
  }, caption()))));
};

var colors = ['Color', {
  surface: 'surface',
  subdued: 'subdued'
}, 'surface'];
var shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared'
}, 'rounded'];

var Card = function Card() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Row, null, /*#__PURE__*/_react["default"].createElement(_.CardTile, {
    color: _addonKnobs.select.apply(void 0, colors),
    shape: _addonKnobs.select.apply(void 0, shapes),
    disabled: (0, _addonKnobs["boolean"])('disabled', false),
    id: "test2",
    className: 'test-class2'
  }, filler()), _ApiLink || (_ApiLink = /*#__PURE__*/_react["default"].createElement(_ApiLink4.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Tile"
  })));
};

exports.Card = Card;

var Link = function Link() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_.Tile, {
    href: '#',
    variant: "link",
    disableIcon: (0, _addonKnobs["boolean"])('disableIcon', false),
    color: _addonKnobs.select.apply(void 0, colors),
    shape: _addonKnobs.select.apply(void 0, shapes),
    disabled: (0, _addonKnobs["boolean"])('disabled', false)
  }, filler()), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/_react["default"].createElement(_ApiLink4.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Tile"
  })));
};

exports.Link = Link;

var Radio = function Radio() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_.GridV3.Row, {
    style: {
      marginBottom: '1rem'
    }
  }, /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.FormControl, null, /*#__PURE__*/_react["default"].createElement(_.RadioGroup, {
    name: 'test',
    direction: 'row',
    defaultValue: '2.1',
    onChange: (0, _addonActions.action)('onChange (RadioGroup)')
  }, /*#__PURE__*/_react["default"].createElement(_.Tile, {
    id: '1.1',
    className: 'test',
    variant: "radio",
    value: '1.1',
    color: _addonKnobs.select.apply(void 0, colors),
    shape: _addonKnobs.select.apply(void 0, shapes)
  }, filler("Huntersville Lowe's", function () {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Some Place", _br6 || (_br6 = /*#__PURE__*/_react["default"].createElement("br", null)), _br7 || (_br7 = /*#__PURE__*/_react["default"].createElement("br", null)), _br8 || (_br8 = /*#__PURE__*/_react["default"].createElement("br", null)), "Far Away");
  })), /*#__PURE__*/_react["default"].createElement(_.Tile, {
    variant: "radio",
    id: '2.1',
    value: '2.1',
    color: _addonKnobs.select.apply(void 0, colors),
    shape: _addonKnobs.select.apply(void 0, shapes)
  }, filler()), /*#__PURE__*/_react["default"].createElement(_.Tile, {
    variant: "radio",
    id: '3.1',
    value: '3.1',
    color: _addonKnobs.select.apply(void 0, colors),
    shape: _addonKnobs.select.apply(void 0, shapes),
    disabled: true
  }, filler()))))), _ApiLink3 || (_ApiLink3 = /*#__PURE__*/_react["default"].createElement(_ApiLink4.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Tile"
  })));
};

exports.Radio = Radio;

var Skeleton = function Skeleton() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.FormControl, null, _FormHeading || (_FormHeading = /*#__PURE__*/_react["default"].createElement(_.FormHeading, null, "Tile Skeleton")), _br9 || (_br9 = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_.TileSkeleton, {
    shape: _addonKnobs.select.apply(void 0, shapes),
    animate: (0, _addonKnobs["boolean"])('Animate', false)
  })));
};

exports.Skeleton = Skeleton;