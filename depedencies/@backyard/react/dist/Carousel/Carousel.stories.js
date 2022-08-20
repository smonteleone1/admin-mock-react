"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Skeleton = exports.DefaultCarousel = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _addonKnobs = require("@storybook/addon-knobs");

var _ApiLink2 = require("../utils/storybook/ApiLink");

var _ = require("../");

var _CarouselItem, _CarouselItem2, _CarouselItem3, _CarouselItem4, _CarouselItem5, _CarouselItem6, _CarouselItem7, _CarouselItem8, _CarouselItem9, _CarouselItem10, _CarouselItem11, _CarouselItem12, _CarouselItem13, _CarouselItem14, _CarouselItem15, _CarouselItem16, _CarouselItem17, _CarouselItem18, _CarouselItem19, _CarouselItem20, _CarouselItem21, _CarouselItem22, _CarouselItem23, _CarouselItem24, _CarouselItem25, _CarouselItem26, _CarouselItem27, _ApiLink, _FormHeading, _br;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = {
  title: '@backyard/react/Carousel',
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;

var Block = _styledComponents["default"].div.withConfig({
  displayName: "Carouselstories__Block",
  componentId: "sc-nvzlsn-0"
})(["height:8rem;width:", ";background-color:#d2d2d2;"], function (_ref) {
  var width = _ref.width;
  return width ? "".concat(width, "rem") : "2.5rem";
});

var DefaultCarousel = function DefaultCarousel() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_.GridV3.Row, null, /*#__PURE__*/React.createElement(_.GridV3.Column, {
    start: 6,
    end: 12,
    style: {
      marginBottom: '1rem'
    }
  }, /*#__PURE__*/React.createElement(_.Typography, {
    variant: "h4",
    style: {
      marginTop: '1rem',
      paddingBottom: '1rem'
    }
  }, "Carousel Example"), /*#__PURE__*/React.createElement(_.Carousel, {
    noScrollbar: (0, _addonKnobs["boolean"])('No Scrollbar', false),
    noButtons: (0, _addonKnobs["boolean"])('No Buttons', false),
    scrollDistance: (0, _addonKnobs.number)('Scroll Distance', 100)
  }, _CarouselItem || (_CarouselItem = /*#__PURE__*/React.createElement(_.CarouselItem, null, /*#__PURE__*/React.createElement(Block, null))), _CarouselItem2 || (_CarouselItem2 = /*#__PURE__*/React.createElement(_.CarouselItem, null, /*#__PURE__*/React.createElement(Block, {
    width: 4
  }))), _CarouselItem3 || (_CarouselItem3 = /*#__PURE__*/React.createElement(_.CarouselItem, null, /*#__PURE__*/React.createElement(Block, {
    width: 8
  }))), _CarouselItem4 || (_CarouselItem4 = /*#__PURE__*/React.createElement(_.CarouselItem, null, /*#__PURE__*/React.createElement(Block, null))), _CarouselItem5 || (_CarouselItem5 = /*#__PURE__*/React.createElement(_.CarouselItem, null, /*#__PURE__*/React.createElement(Block, {
    width: 4
  }))), _CarouselItem6 || (_CarouselItem6 = /*#__PURE__*/React.createElement(_.CarouselItem, null, /*#__PURE__*/React.createElement(Block, null))), _CarouselItem7 || (_CarouselItem7 = /*#__PURE__*/React.createElement(_.CarouselItem, null, /*#__PURE__*/React.createElement(Block, {
    width: 1
  }))), _CarouselItem8 || (_CarouselItem8 = /*#__PURE__*/React.createElement(_.CarouselItem, null, /*#__PURE__*/React.createElement(Block, null))), _CarouselItem9 || (_CarouselItem9 = /*#__PURE__*/React.createElement(_.CarouselItem, null, /*#__PURE__*/React.createElement(Block, null))), _CarouselItem10 || (_CarouselItem10 = /*#__PURE__*/React.createElement(_.CarouselItem, null, /*#__PURE__*/React.createElement(Block, {
    width: 3
  }))), _CarouselItem11 || (_CarouselItem11 = /*#__PURE__*/React.createElement(_.CarouselItem, null, /*#__PURE__*/React.createElement(Block, {
    width: 6
  }))), _CarouselItem12 || (_CarouselItem12 = /*#__PURE__*/React.createElement(_.CarouselItem, null, /*#__PURE__*/React.createElement(Block, null)))))), /*#__PURE__*/React.createElement(_.GridV3.Row, null, /*#__PURE__*/React.createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(_.Typography, {
    variant: "h4",
    style: {
      marginTop: '1rem',
      paddingBottom: '1rem'
    }
  }, "Button Carousel Example"), /*#__PURE__*/React.createElement(_.Carousel, {
    noScrollbar: (0, _addonKnobs["boolean"])('No Scrollbar', false),
    noButtons: (0, _addonKnobs["boolean"])('No Buttons', false),
    scrollDistance: (0, _addonKnobs.number)('Scroll Distance', 100)
  }, _CarouselItem13 || (_CarouselItem13 = /*#__PURE__*/React.createElement(_.CarouselItem, {
    padding: "size_8"
  }, /*#__PURE__*/React.createElement(_.Button, null, "Button 1"))), _CarouselItem14 || (_CarouselItem14 = /*#__PURE__*/React.createElement(_.CarouselItem, {
    padding: "size_8"
  }, /*#__PURE__*/React.createElement(_.Button, null, "Button 2"))), _CarouselItem15 || (_CarouselItem15 = /*#__PURE__*/React.createElement(_.CarouselItem, {
    padding: "size_8"
  }, /*#__PURE__*/React.createElement(_.Button, null, "Button 3"))), _CarouselItem16 || (_CarouselItem16 = /*#__PURE__*/React.createElement(_.CarouselItem, {
    padding: "size_8"
  }, /*#__PURE__*/React.createElement(_.Button, null, "Button 4"))), _CarouselItem17 || (_CarouselItem17 = /*#__PURE__*/React.createElement(_.CarouselItem, {
    padding: "size_8"
  }, /*#__PURE__*/React.createElement(_.Button, null, "Button 5"))), _CarouselItem18 || (_CarouselItem18 = /*#__PURE__*/React.createElement(_.CarouselItem, {
    padding: "size_8"
  }, /*#__PURE__*/React.createElement(_.Button, null, "Button 6"))), _CarouselItem19 || (_CarouselItem19 = /*#__PURE__*/React.createElement(_.CarouselItem, {
    padding: "size_8"
  }, /*#__PURE__*/React.createElement(_.Button, null, "Button 7"))), _CarouselItem20 || (_CarouselItem20 = /*#__PURE__*/React.createElement(_.CarouselItem, {
    padding: "size_8"
  }, /*#__PURE__*/React.createElement(_.Button, null, "Button 8"))), _CarouselItem21 || (_CarouselItem21 = /*#__PURE__*/React.createElement(_.CarouselItem, {
    padding: "size_8"
  }, /*#__PURE__*/React.createElement(_.Button, null, "Button 9"))), _CarouselItem22 || (_CarouselItem22 = /*#__PURE__*/React.createElement(_.CarouselItem, {
    padding: "size_8"
  }, /*#__PURE__*/React.createElement(_.Button, null, "Button 10"))), _CarouselItem23 || (_CarouselItem23 = /*#__PURE__*/React.createElement(_.CarouselItem, {
    padding: "size_8"
  }, /*#__PURE__*/React.createElement(_.Button, null, "Button 11"))), _CarouselItem24 || (_CarouselItem24 = /*#__PURE__*/React.createElement(_.CarouselItem, {
    padding: "size_8"
  }, /*#__PURE__*/React.createElement(_.Button, null, "Button 12"))), _CarouselItem25 || (_CarouselItem25 = /*#__PURE__*/React.createElement(_.CarouselItem, {
    padding: "size_8"
  }, /*#__PURE__*/React.createElement(_.Button, null, "Button 13"))), _CarouselItem26 || (_CarouselItem26 = /*#__PURE__*/React.createElement(_.CarouselItem, {
    padding: "size_8"
  }, /*#__PURE__*/React.createElement(_.Button, null, "Button 14"))), _CarouselItem27 || (_CarouselItem27 = /*#__PURE__*/React.createElement(_.CarouselItem, {
    padding: "size_8"
  }, /*#__PURE__*/React.createElement(_.Button, null, "Button 15")))))), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(_ApiLink2.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Carousel"
  })));
};

exports.DefaultCarousel = DefaultCarousel;

var Skeleton = function Skeleton() {
  return /*#__PURE__*/React.createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(_.FormControl, null, _FormHeading || (_FormHeading = /*#__PURE__*/React.createElement(_.FormHeading, null, "Carousel Skeleton")), _br || (_br = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(_.CarouselSkeleton, {
    animate: (0, _addonKnobs["boolean"])('Animate', false),
    hideButtons: (0, _addonKnobs["boolean"])('Hide Buttons', false),
    hideScrollbar: (0, _addonKnobs["boolean"])('Hide Scrollbar', false)
  })));
};

exports.Skeleton = Skeleton;