"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var React = _interopRequireWildcard(require("react"));

var _testUtils = require("../../test-utils");

var _ThemeProvider2 = require("../ThemeProvider");

var _Toast5 = _interopRequireDefault(require("./Toast"));

var _Toast, _React$Fragment, _Toast4;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('Toast Snapshots', function () {
  test('Toast default snapshot', function () {
    var _render = (0, _testUtils.render)(_Toast || (_Toast = /*#__PURE__*/React.createElement(_Toast5["default"], {
      title: "Title",
      timestamp: "Timestamp [00:00:00]"
    }, "Subtitle"))),
        asFragment = _render.asFragment;

    expect(asFragment()).toMatchSnapshot();
  });
  describe('themes', function () {
    var themes = ['light', 'dark'];
    themes.forEach(function (theme) {
      var _ThemeProvider;

      test("Toast ".concat(theme, " theme snapshot"), function () {
        var _render2 = (0, _testUtils.render)(_ThemeProvider || (_ThemeProvider = /*#__PURE__*/React.createElement(_ThemeProvider2.ThemeProvider, {
          theme: theme
        }, _React$Fragment || (_React$Fragment = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Toast5["default"], {
          title: "Title",
          timestamp: "Timestamp [00:00:00]"
        }, "Subtitle")))))),
            asFragment = _render2.asFragment;

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('prop: size', function () {
    var sizes = ['medium', 'jumbo'];
    sizes.forEach(function (size) {
      var _Toast2;

      test("Toast ".concat(size, " size snapshot"), function () {
        var _render3 = (0, _testUtils.render)(_Toast2 || (_Toast2 = /*#__PURE__*/React.createElement(_Toast5["default"], {
          title: "Title",
          size: size,
          timestamp: "Timestamp [00:00:00]"
        }, "Subtitle"))),
            asFragment = _render3.asFragment;

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('prop: type', function () {
    var types = ['info', 'success', 'error', 'warning'];
    types.forEach(function (type) {
      var _Toast3;

      test("Toast ".concat(type, " type snapshot"), function () {
        var _render4 = (0, _testUtils.render)(_Toast3 || (_Toast3 = /*#__PURE__*/React.createElement(_Toast5["default"], {
          title: "Title",
          type: type,
          timestamp: "Timestamp [00:00:00]"
        }, "Subtitle"))),
            asFragment = _render4.asFragment;

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('prop: date', function () {
    test('Toast date snapshot', function () {
      var _render5 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_Toast5["default"], {
        id: "id",
        className: "classname",
        title: "Title",
        date: new Date('2021-08-06 8:00:00')
      }, "Subtitle")),
          asFragment = _render5.asFragment;

      expect(asFragment()).toMatchSnapshot();
    });
  });
  describe('extra props', function () {
    test('Toast DOM props (id, className) snapshot', function () {
      var _render6 = (0, _testUtils.render)(_Toast4 || (_Toast4 = /*#__PURE__*/React.createElement(_Toast5["default"], {
        id: "id",
        className: "classname",
        title: "Title",
        timestamp: "Timestamp [00:00:00]"
      }, "Subtitle"))),
          asFragment = _render6.asFragment;

      expect(asFragment()).toMatchSnapshot();
    });
  });
});