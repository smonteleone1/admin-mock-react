"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ScrollToRef = exports.DefaultScrollToTop = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _addonKnobs = require("@storybook/addon-knobs");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../");

var _ApiLink3 = require("../utils/storybook/ApiLink");

var _Button, _Grid$Column, _Button2, _Grid$Column2, _Button3, _Grid$Column3, _Button4, _ApiLink, _Grid$Column4, _Grid$Column5, _ApiLink2;

var _default = {
  title: '@backyard/react/ScrollToTop',
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;

var FillerDiv = _styledComponents["default"].div.withConfig({
  displayName: "ScrollToTopstories__FillerDiv",
  componentId: "sc-1muh7hk-0"
})(["background-color:#bfe5bf;height:", ";min-height:4rem;width:100%;margin-bottom:1rem;"], function (_ref) {
  var size = _ref.size;
  return "".concat(size * 10, "rem");
});

var DefaultScrollToTop = function DefaultScrollToTop() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      backgroundColor: 'lightgray',
      marginBottom: '1.5rem',
      height: '8rem',
      width: '100%'
    }
  }), _Button || (_Button = /*#__PURE__*/_react["default"].createElement(_.Button, null, "Button0")), /*#__PURE__*/_react["default"].createElement(_.GridV3.Row, null, _Grid$Column || (_Grid$Column = /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.Typography, {
    variant: "h1"
  }, "Header 1"))), (0, _toConsumableArray2["default"])(Array(10)).map(function (value, index) {
    return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
      start: 6,
      end: 12
    }, /*#__PURE__*/_react["default"].createElement(FillerDiv, {
      size: index % 2
    }));
  })), _Button2 || (_Button2 = /*#__PURE__*/_react["default"].createElement(_.Button, null, "Button1")), /*#__PURE__*/_react["default"].createElement(_.GridV3.Row, null, _Grid$Column2 || (_Grid$Column2 = /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.Typography, {
    variant: "h1"
  }, "Header 2"))), (0, _toConsumableArray2["default"])(Array(10)).map(function (value, index) {
    return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
      start: 6,
      end: 12
    }, /*#__PURE__*/_react["default"].createElement(FillerDiv, {
      size: index % 2
    }));
  })), _Button3 || (_Button3 = /*#__PURE__*/_react["default"].createElement(_.Button, null, "Button2")), /*#__PURE__*/_react["default"].createElement(_.GridV3.Row, null, _Grid$Column3 || (_Grid$Column3 = /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.Typography, {
    variant: "h1"
  }, "Header 3"))), (0, _toConsumableArray2["default"])(Array(10)).map(function (value, index) {
    return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
      start: 6,
      end: 12
    }, /*#__PURE__*/_react["default"].createElement(FillerDiv, {
      size: index % 2
    }));
  })), _Button4 || (_Button4 = /*#__PURE__*/_react["default"].createElement(_.Button, null, "Button3")), /*#__PURE__*/_react["default"].createElement(_.ScrollToTop, {
    hide: (0, _addonKnobs["boolean"])('Hide', false),
    noAnimation: (0, _addonKnobs["boolean"])('no Animation', false),
    showAt: (0, _addonKnobs.number)('Show At', 400),
    bottomPosition: (0, _addonKnobs.text)('Bottom Position', 'size-48'),
    rightPosition: (0, _addonKnobs.text)('Right Position', 'size-32')
  }), _ApiLink || (_ApiLink = /*#__PURE__*/_react["default"].createElement(_ApiLink3.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/ScrollToTop"
  })));
};

exports.DefaultScrollToTop = DefaultScrollToTop;

var ScrollToRef = function ScrollToRef() {
  var header1Ref = _react["default"].useRef(null);

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      backgroundColor: 'lightgray',
      marginBottom: '1.5rem',
      height: '8rem',
      width: '100%'
    }
  }), /*#__PURE__*/_react["default"].createElement(_.GridV3.Row, null, /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.Typography, {
    variant: "h1",
    ref: header1Ref
  }, "Header 1")), (0, _toConsumableArray2["default"])(Array(10)).map(function (value, index) {
    return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
      start: 6,
      end: 12
    }, /*#__PURE__*/_react["default"].createElement(FillerDiv, {
      size: index % 2
    }));
  })), /*#__PURE__*/_react["default"].createElement(_.GridV3.Row, null, _Grid$Column4 || (_Grid$Column4 = /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.Typography, {
    variant: "h1"
  }, "Header 2"))), (0, _toConsumableArray2["default"])(Array(10)).map(function (value, index) {
    return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
      start: 6,
      end: 12
    }, /*#__PURE__*/_react["default"].createElement(FillerDiv, {
      size: index % 2
    }));
  })), /*#__PURE__*/_react["default"].createElement(_.GridV3.Row, null, _Grid$Column5 || (_Grid$Column5 = /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.Typography, {
    variant: "h1"
  }, "Header 3"))), (0, _toConsumableArray2["default"])(Array(10)).map(function (value, index) {
    return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
      start: 6,
      end: 12
    }, /*#__PURE__*/_react["default"].createElement(FillerDiv, {
      size: index % 2
    }));
  })), /*#__PURE__*/_react["default"].createElement(_.ScrollToTop, {
    scrollToRef: header1Ref,
    hide: (0, _addonKnobs["boolean"])('Hide', false),
    noAnimation: (0, _addonKnobs["boolean"])('no Animation', false),
    showAt: (0, _addonKnobs.number)('Show At', 400),
    bottomPosition: (0, _addonKnobs.text)('Bottom Position', 'size-48'),
    rightPosition: (0, _addonKnobs.text)('Right Position', 'size-32')
  }), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/_react["default"].createElement(_ApiLink3.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/ScrollToTop"
  })));
};

exports.ScrollToRef = ScrollToRef;