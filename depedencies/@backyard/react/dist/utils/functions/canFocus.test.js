"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var React = _interopRequireWildcard(require("react"));

var _testUtils = require("../../../test-utils");

var _canFocus = _interopRequireDefault(require("./canFocus"));

var _div, _div2, _div3, _div4, _div5;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('utils/functions/canFocus Tests', function () {
  it('true -> blanket document active element test validates', function () {
    var _render = (0, _testUtils.render)(_div || (_div = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      className: "prev"
    }), /*#__PURE__*/React.createElement("button", {
      className: "next"
    })))),
        container = _render.container;

    var prev = container.querySelector('.prev');
    var next = container.querySelector('.next');
    expect((0, _canFocus["default"])(prev, next)).toBe(true);
  });
  it('false -> prev invalid args', function () {
    expect((0, _canFocus["default"])()).toBe(false);
  });
  it('false -> next invalid args', function () {
    expect((0, _canFocus["default"])(true)).toBe(false);
  });
  it('false -> next tabIndex = -1', function () {
    var _render2 = (0, _testUtils.render)(_div2 || (_div2 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      className: "prev"
    }), /*#__PURE__*/React.createElement("button", {
      className: "next",
      tabIndex: -1
    })))),
        container = _render2.container;

    var prev = container.querySelector('.prev');
    var next = container.querySelector('.next');
    expect((0, _canFocus["default"])(prev, next)).toBe(false);
  });
  it('false -> no test validated', function () {
    var _render3 = (0, _testUtils.render)(_div3 || (_div3 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      className: "prev"
    }), /*#__PURE__*/React.createElement("div", {
      className: "next",
      tabIndex: 0
    })))),
        container = _render3.container;

    var prev = container.querySelector('.prev');
    var next = container.querySelector('.next');

    next.focus = function () {
      return null;
    };

    expect((0, _canFocus["default"])(prev, next)).toBe(false);
  });
  it('false -> no test validated & prev no focus', function () {
    var _render4 = (0, _testUtils.render)(_div4 || (_div4 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      className: "prev"
    }), /*#__PURE__*/React.createElement("div", {
      className: "next",
      tabIndex: 0
    })))),
        container = _render4.container;

    var prev = container.querySelector('.prev');
    var next = container.querySelector('.next');
    prev.focus = null; // should never happen, but need to check just in case

    next.focus = function () {
      return null;
    };

    expect((0, _canFocus["default"])(prev, next)).toBe(false);
  });
  it('false -> no test validated no focus', function () {
    var _render5 = (0, _testUtils.render)(_div5 || (_div5 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      className: "prev"
    }), /*#__PURE__*/React.createElement("div", {
      className: "next",
      tabIndex: 0
    })))),
        container = _render5.container;

    var prev = container.querySelector('.prev');
    var next = container.querySelector('.next');
    next.focus = null;
    expect((0, _canFocus["default"])(prev, next)).toBe(false);
  });
});