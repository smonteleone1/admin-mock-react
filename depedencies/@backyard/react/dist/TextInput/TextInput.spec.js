"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var React = _interopRequireWildcard(require("react"));

var _icons = require("@backyard/icons");

var _testUtils = require("../../test-utils");

var _ThemeProvider2 = require("../ThemeProvider");

var _FormControl2 = _interopRequireDefault(require("../FormControl"));

var _FormHelperText = _interopRequireDefault(require("../FormHelperText"));

var _TextInput5 = _interopRequireDefault(require("./TextInput"));

var _TextInput, _FormControl, _TextInput2, _HomeOutlined, _CreditCard;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('TextInput Snapshots', function () {
  test('default snapshot', function () {
    var _render = (0, _testUtils.render)(_TextInput || (_TextInput = /*#__PURE__*/React.createElement(_TextInput5["default"], null))),
        asFragment = _render.asFragment;

    expect(asFragment()).toMatchSnapshot();
  });
  test('with helper text', function () {
    var _render2 = (0, _testUtils.render)(_FormControl || (_FormControl = /*#__PURE__*/React.createElement(_FormControl2["default"], null, /*#__PURE__*/React.createElement(_TextInput5["default"], null), /*#__PURE__*/React.createElement(_FormHelperText["default"], null, "Text Input Helper")))),
        asFragment = _render2.asFragment;

    expect(asFragment()).toMatchSnapshot();
  });
  describe('themes', function () {
    var themes = ['light', 'dark'];
    themes.forEach(function (theme) {
      var _ThemeProvider;

      test("TextInput ".concat(theme, " theme snapshot"), function () {
        var _render3 = (0, _testUtils.render)(_ThemeProvider || (_ThemeProvider = /*#__PURE__*/React.createElement(_ThemeProvider2.ThemeProvider, {
          theme: theme
        }, _TextInput2 || (_TextInput2 = /*#__PURE__*/React.createElement(_TextInput5["default"], null))))),
            asFragment = _render3.asFragment;

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('sizes', function () {
    var sizes = ['small', 'medium', 'large'];
    sizes.forEach(function (size) {
      var _TextInput3;

      test("TextInput ".concat(size, " size snapshot"), function () {
        var _render4 = (0, _testUtils.render)(_TextInput3 || (_TextInput3 = /*#__PURE__*/React.createElement(_TextInput5["default"], {
          size: size
        }))),
            asFragment = _render4.asFragment;

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('prop: icon', function () {
    var icons = [undefined, _HomeOutlined || (_HomeOutlined = /*#__PURE__*/React.createElement(_icons.HomeOutlined, null)), _CreditCard || (_CreditCard = /*#__PURE__*/React.createElement(_icons.CreditCard, null))];
    icons.forEach(function (icon) {
      var _TextInput4;

      test("TextInput ".concat(typeof icon !== 'undefined' ? icon.type.name : 'default', " icon snapshot"), function () {
        var _render5 = (0, _testUtils.render)(_TextInput4 || (_TextInput4 = /*#__PURE__*/React.createElement(_TextInput5["default"], {
          itemBefore: icon,
          itemAfter: icon
        }))),
            asFragment = _render5.asFragment;

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});