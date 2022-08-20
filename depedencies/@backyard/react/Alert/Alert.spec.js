"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var React = _interopRequireWildcard(require("react"));

var _testUtils = require("../../test-utils");

var _ThemeProvider2 = require("../ThemeProvider");

var _Alert5 = _interopRequireDefault(require("./Alert"));

var _Alert, _React$Fragment, _Alert4;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('Alert Snapshots', function () {
  test('Alert default snapshot', function () {
    var _render = (0, _testUtils.render)(_Alert || (_Alert = /*#__PURE__*/React.createElement(_Alert5["default"], {
      title: "Title"
    }))),
        asFragment = _render.asFragment;

    expect(asFragment()).toMatchSnapshot();
  });
  describe('themes', function () {
    var themes = ['light', 'dark'];
    themes.forEach(function (theme) {
      var _ThemeProvider;

      test("Alert ".concat(theme, " theme snapshot"), function () {
        var _render2 = (0, _testUtils.render)(_ThemeProvider || (_ThemeProvider = /*#__PURE__*/React.createElement(_ThemeProvider2.ThemeProvider, {
          theme: theme
        }, _React$Fragment || (_React$Fragment = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Alert5["default"], {
          title: "Title"
        })))))),
            asFragment = _render2.asFragment;

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('prop: sizes', function () {
    var sizes = ['medium', 'jumbo'];
    sizes.forEach(function (size) {
      var _Alert2;

      test("Alert ".concat(size, " size snapshot"), function () {
        var _render3 = (0, _testUtils.render)(_Alert2 || (_Alert2 = /*#__PURE__*/React.createElement(_Alert5["default"], {
          multiline: true,
          title: "Title",
          subtitle: "Subtitle",
          action: "Action",
          size: size
        }))),
            asFragment = _render3.asFragment;

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('prop: type', function () {
    var types = ['info', 'success', 'error', 'warning'];
    types.forEach(function (type) {
      var _Alert3;

      test("Alert ".concat(type, " type snapshot"), function () {
        var _render4 = (0, _testUtils.render)(_Alert3 || (_Alert3 = /*#__PURE__*/React.createElement(_Alert5["default"], {
          subtitle: "Subtitle",
          type: type
        }))),
            asFragment = _render4.asFragment;

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('prop: actionProps', function () {
    test("Alert action snapshot", function () {
      var _render5 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_Alert5["default"], {
        title: "Title",
        action: "Action",
        actionLinkProps: {
          color: 'primary'
        }
      })),
          asFragment = _render5.asFragment;

      expect(asFragment()).toMatchSnapshot();
    });
  });
  describe('extra props', function () {
    test('Alert DOM props (id, className) snapshot', function () {
      var _render6 = (0, _testUtils.render)(_Alert4 || (_Alert4 = /*#__PURE__*/React.createElement(_Alert5["default"], {
        id: "id",
        className: "classname",
        title: "Title"
      }))),
          asFragment = _render6.asFragment;

      expect(asFragment()).toMatchSnapshot();
    });
  });
});