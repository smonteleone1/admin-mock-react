"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var React = _interopRequireWildcard(require("react"));

var _testUtils = require("../../test-utils");

var _ThemeProvider2 = require("../ThemeProvider");

var _TextArea9 = _interopRequireDefault(require("./TextArea"));

var _TextArea, _TextArea2, _TextArea4, _TextArea5, _TextArea6, _TextArea7, _TextArea8;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('TextArea Snapshots', function () {
  test('default snapshot', function () {
    var _render = (0, _testUtils.render)(_TextArea || (_TextArea = /*#__PURE__*/React.createElement(_TextArea9["default"], null))),
        asFragment = _render.asFragment;

    expect(asFragment()).toMatchSnapshot();
  });
  describe('themes', function () {
    var themes = ['light', 'dark'];
    themes.forEach(function (theme) {
      var _ThemeProvider;

      test("TextArea ".concat(theme, " theme snapshot"), function () {
        var _render2 = (0, _testUtils.render)(_ThemeProvider || (_ThemeProvider = /*#__PURE__*/React.createElement(_ThemeProvider2.ThemeProvider, {
          theme: theme
        }, _TextArea2 || (_TextArea2 = /*#__PURE__*/React.createElement(_TextArea9["default"], null))))),
            asFragment = _render2.asFragment;

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('prop: shapes', function () {
    var shapes = ['rounded', 'squared'];
    shapes.forEach(function (shape) {
      var _TextArea3;

      test("TextArea ".concat(shape, " shape snapshot"), function () {
        var _render3 = (0, _testUtils.render)(_TextArea3 || (_TextArea3 = /*#__PURE__*/React.createElement(_TextArea9["default"], {
          shape: shape
        }))),
            asFragment = _render3.asFragment;

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  test('with helper text and max', function () {
    var _render4 = (0, _testUtils.render)(_TextArea4 || (_TextArea4 = /*#__PURE__*/React.createElement(_TextArea9["default"], {
      helperText: "test text",
      max: 200
    }))),
        asFragment = _render4.asFragment;

    expect(asFragment()).toMatchSnapshot();
  });
  test('with disabled, default value', function () {
    var _render5 = (0, _testUtils.render)(_TextArea5 || (_TextArea5 = /*#__PURE__*/React.createElement(_TextArea9["default"], {
      disabled: true,
      defaultValue: "test text"
    }))),
        asFragment = _render5.asFragment;

    expect(asFragment()).toMatchSnapshot();
  });
  test('with rows and resizer', function () {
    var _render6 = (0, _testUtils.render)(_TextArea6 || (_TextArea6 = /*#__PURE__*/React.createElement(_TextArea9["default"], {
      rows: 5,
      resizer: true
    }))),
        asFragment = _render6.asFragment;

    expect(asFragment()).toMatchSnapshot();
  });
  describe('extra props', function () {
    test('TextArea className snapshot', function () {
      var _render7 = (0, _testUtils.render)(_TextArea7 || (_TextArea7 = /*#__PURE__*/React.createElement(_TextArea9["default"], {
        className: "test-class"
      }))),
          asFragment = _render7.asFragment;

      expect(asFragment()).toMatchSnapshot();
    });
    test('TextArea DOM id, name snapshot', function () {
      var _render8 = (0, _testUtils.render)(_TextArea8 || (_TextArea8 = /*#__PURE__*/React.createElement(_TextArea9["default"], {
        id: "test-id",
        name: "test-name"
      }))),
          asFragment = _render8.asFragment;

      expect(asFragment()).toMatchSnapshot();
    });
  });
});