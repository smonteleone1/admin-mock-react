"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var React = _interopRequireWildcard(require("react"));

var _testUtils = require("../../../test-utils");

var _ThemeProvider2 = require("../../ThemeProvider");

var _StubPagination4 = _interopRequireDefault(require("./StubPagination"));

var _StubPagination, _StubPagination3;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('TablePagination Snapshots', function () {
  test('TablePagination default snapshot', function () {
    var _render = (0, _testUtils.render)(_StubPagination || (_StubPagination = /*#__PURE__*/React.createElement(_StubPagination4["default"], null))),
        asFragment = _render.asFragment;

    expect(asFragment()).toMatchSnapshot();
  });
  describe('prop: size', function () {
    var sizes = ['small', 'medium', 'large'];
    sizes.forEach(function (size) {
      var _StubPagination2;

      test("TablePagination ".concat(size, " size snapshot"), function () {
        var _render2 = (0, _testUtils.render)(_StubPagination2 || (_StubPagination2 = /*#__PURE__*/React.createElement(_StubPagination4["default"], {
          size: size
        }))),
            asFragment = _render2.asFragment;

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('themes', function () {
    var themes = ['light', 'dark'];
    themes.forEach(function (theme) {
      var _ThemeProvider;

      test("TablePagination  ".concat(theme, " theme snapshot"), function () {
        var _render3 = (0, _testUtils.render)(_ThemeProvider || (_ThemeProvider = /*#__PURE__*/React.createElement(_ThemeProvider2.ThemeProvider, {
          theme: theme
        }, _StubPagination3 || (_StubPagination3 = /*#__PURE__*/React.createElement(_StubPagination4["default"], null))))),
            asFragment = _render3.asFragment;
      });
    });
  });
});