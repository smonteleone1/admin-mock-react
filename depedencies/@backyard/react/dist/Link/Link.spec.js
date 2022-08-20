"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var React = _interopRequireWildcard(require("react"));

var _BookmarkOutlined = _interopRequireDefault(require("@backyard/icons/BookmarkOutlined"));

var _testUtils = require("../../test-utils");

var _ThemeProvider2 = require("../ThemeProvider");

var _Link8 = _interopRequireDefault(require("./Link"));

var _Link, _Link2, _Link3, _Link4, _Link5, _Link6, _Link7;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('Link Snapshots', function () {
  test('Link default snapshot', function () {
    var _render = (0, _testUtils.render)(_Link || (_Link = /*#__PURE__*/React.createElement(_Link8["default"], {
      to: "#"
    }, "Link"))),
        asFragment = _render.asFragment;

    expect(asFragment()).toMatchSnapshot();
  });
  describe('themes', function () {
    var themes = ['light', 'dark'];
    themes.forEach(function (theme) {
      var _ThemeProvider;

      test("Link ".concat(theme, " theme snapshot"), function () {
        var _render2 = (0, _testUtils.render)(_ThemeProvider || (_ThemeProvider = /*#__PURE__*/React.createElement(_ThemeProvider2.ThemeProvider, {
          theme: theme
        }, _Link2 || (_Link2 = /*#__PURE__*/React.createElement(_Link8["default"], {
          to: "#"
        }, "Link"))))),
            asFragment = _render2.asFragment;

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('prop: icons', function () {
    test("Link iconBefore snapshot", function () {
      var _render3 = (0, _testUtils.render)(_Link3 || (_Link3 = /*#__PURE__*/React.createElement(_Link8["default"], {
        to: "#",
        iconBefore: /*#__PURE__*/React.createElement(_BookmarkOutlined["default"], null)
      }, "Link"))),
          asFragment = _render3.asFragment;

      expect(asFragment()).toMatchSnapshot();
    });
    test("Link iconAfter snapshot", function () {
      var _render4 = (0, _testUtils.render)(_Link4 || (_Link4 = /*#__PURE__*/React.createElement(_Link8["default"], {
        to: "#",
        iconAfter: /*#__PURE__*/React.createElement(_BookmarkOutlined["default"], null)
      }, "Link"))),
          asFragment = _render4.asFragment;

      expect(asFragment()).toMatchSnapshot();
    });
  });
  describe('prop: color', function () {
    var types = ['interactive', 'primary', 'variant', 'link'];
    types.forEach(function (type) {
      test("Link type ".concat(type, " snapshot"), function () {
        var _render5 = (0, _testUtils.render)(_Link5 || (_Link5 = /*#__PURE__*/React.createElement(_Link8["default"], {
          to: "#"
        }, "Link"))),
            asFragment = _render5.asFragment;

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('prop: size', function () {
    var sizes = ['small', 'medium'];
    sizes.forEach(function (size) {
      test("Link size ".concat(size, " snapshot"), function () {
        var _render6 = (0, _testUtils.render)(_Link6 || (_Link6 = /*#__PURE__*/React.createElement(_Link8["default"], {
          to: "#"
        }, "Link"))),
            asFragment = _render6.asFragment;

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('other props', function () {
    test('Link DOM id, className snapshot', function () {
      var _render7 = (0, _testUtils.render)(_Link7 || (_Link7 = /*#__PURE__*/React.createElement(_Link8["default"], {
        to: "#",
        id: "link-id",
        className: "link-classname"
      }, "Link"))),
          asFragment = _render7.asFragment;

      expect(asFragment()).toMatchSnapshot();
    });
  });
});