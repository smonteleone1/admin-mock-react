"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var React = _interopRequireWildcard(require("react"));

var _icons = require("@backyard/icons");

var _testUtils = require("../../test-utils");

var _ThemeProvider2 = require("../ThemeProvider");

var _FormControl2 = _interopRequireDefault(require("../FormControl"));

var _FormHelperText = _interopRequireDefault(require("../FormHelperText"));

var _TextField5 = _interopRequireDefault(require("./TextField"));

var _TextField, _FormControl, _TextField2, _HomeOutlined, _CreditCard, _TextField4;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('TextField Snapshots', function () {
  test('default snapshot', function () {
    var _render = (0, _testUtils.render)(_TextField || (_TextField = /*#__PURE__*/React.createElement(_TextField5["default"], null))),
        asFragment = _render.asFragment;

    expect(asFragment()).toMatchSnapshot();
  });
  test('with helper text', function () {
    var _render2 = (0, _testUtils.render)(_FormControl || (_FormControl = /*#__PURE__*/React.createElement(_FormControl2["default"], null, /*#__PURE__*/React.createElement(_TextField5["default"], null), /*#__PURE__*/React.createElement(_FormHelperText["default"], null, "Text Field Helper")))),
        asFragment = _render2.asFragment;

    expect(asFragment()).toMatchSnapshot();
  });
  describe('themes', function () {
    var themes = ['light', 'dark'];
    themes.forEach(function (theme) {
      var _ThemeProvider;

      test("Search ".concat(theme, " theme snapshot"), function () {
        var _render3 = (0, _testUtils.render)(_ThemeProvider || (_ThemeProvider = /*#__PURE__*/React.createElement(_ThemeProvider2.ThemeProvider, {
          theme: theme
        }, _TextField2 || (_TextField2 = /*#__PURE__*/React.createElement(_TextField5["default"], null))))),
            asFragment = _render3.asFragment;

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('prop: icon', function () {
    var icons = [undefined, _HomeOutlined || (_HomeOutlined = /*#__PURE__*/React.createElement(_icons.HomeOutlined, null)), _CreditCard || (_CreditCard = /*#__PURE__*/React.createElement(_icons.CreditCard, null))];
    icons.forEach(function (icon) {
      var _TextField3;

      test("TextField ".concat(typeof icon !== 'undefined' ? icon.type.name : 'default', " icon snapshot"), function () {
        var _render4 = (0, _testUtils.render)(_TextField3 || (_TextField3 = /*#__PURE__*/React.createElement(_TextField5["default"], {
          icon: icon
        }))),
            asFragment = _render4.asFragment;

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('prop: info', function () {
    test("TextField info snapshot", function () {
      var _render5 = (0, _testUtils.render)(_TextField4 || (_TextField4 = /*#__PURE__*/React.createElement(_TextField5["default"], {
        info: "Some info"
      }))),
          asFragment = _render5.asFragment;

      expect(asFragment()).toMatchSnapshot();
    });
  });
});