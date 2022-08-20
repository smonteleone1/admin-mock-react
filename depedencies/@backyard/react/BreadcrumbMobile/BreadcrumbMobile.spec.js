"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var React = _interopRequireWildcard(require("react"));

var _testUtils = require("../../test-utils");

var _ThemeProvider2 = _interopRequireDefault(require("../ThemeProvider"));

var _BreadcrumbMobile2 = _interopRequireDefault(require("./BreadcrumbMobile"));

var _BreadcrumbMobile, _React$Fragment;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var crumbs = [{
  label: 'Appliances',
  to: '/',
  className: 'crumb-1'
}, {
  label: 'Refrigerators',
  to: '/',
  className: 'crumb-2'
}, {
  label: 'French Door Refrigerators',
  to: '/',
  className: 'crumb-3 currentPage'
}];
describe('BreadcrumbMobile Snapshots', function () {
  test('BreadcrumbMobile default snapshot', function () {
    var _render = (0, _testUtils.render)(_BreadcrumbMobile || (_BreadcrumbMobile = /*#__PURE__*/React.createElement(_BreadcrumbMobile2["default"], {
      crumbs: crumbs,
      className: "custom-class-name"
    }))),
        asFragment = _render.asFragment;

    expect(asFragment()).toMatchSnapshot();
  });
  describe('themes', function () {
    var themes = ['light', 'dark'];
    themes.forEach(function (theme) {
      var _ThemeProvider;

      test("BreadcrumbMobile ".concat(theme, " theme snapshot"), function () {
        var _render2 = (0, _testUtils.render)(_ThemeProvider || (_ThemeProvider = /*#__PURE__*/React.createElement(_ThemeProvider2["default"], {
          theme: theme
        }, _React$Fragment || (_React$Fragment = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_BreadcrumbMobile2["default"], {
          crumbs: crumbs,
          className: "custom-class-name"
        })))))),
            asFragment = _render2.asFragment;

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});