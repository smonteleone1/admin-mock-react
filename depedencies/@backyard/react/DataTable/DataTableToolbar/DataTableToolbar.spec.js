"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

var React = _interopRequireWildcard(require("react"));

var _testUtils = require("../../../test-utils");

var _ = require("../../");

var _DataTableToolbar, _DataTableToolbar2, _DataTableToolbar3, _DataTableToolbar4, _DataTableToolbar5;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('DataTableToolbar Snapshots', function () {
  test('DataTableToolbar default snapshot', function () {
    var _render = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_.DataTableProvider, {
      columns: [],
      data: [],
      showToolbar: true
    }, _DataTableToolbar || (_DataTableToolbar = /*#__PURE__*/React.createElement(_.DataTableToolbar, null)))),
        asFragment = _render.asFragment;

    expect(asFragment()).toMatchSnapshot();
  });
  describe('enableFilters', function () {
    var filtering = [true, false];
    filtering.forEach(function (filterEnabled) {
      test("DataTableToolbar enableFilters: ".concat(filterEnabled, " snapshot"), function () {
        var _render2 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_.DataTableProvider, {
          columns: [],
          data: [],
          showToolbar: true,
          enableFilters: filterEnabled
        }, _DataTableToolbar2 || (_DataTableToolbar2 = /*#__PURE__*/React.createElement(_.DataTableToolbar, null)))),
            asFragment = _render2.asFragment;

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('sizes', function () {
    var sizes = ['large', 'medium', 'small', 'custom'];
    sizes.forEach(function (size) {
      test("DataTableToolbar size: ".concat(size, " snapshot"), function () {
        var _render3 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_.DataTableProvider, {
          columns: [],
          data: [],
          showToolbar: true,
          size: size
        }, _DataTableToolbar3 || (_DataTableToolbar3 = /*#__PURE__*/React.createElement(_.DataTableToolbar, null)))),
            asFragment = _render3.asFragment;

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('enableSearch', function () {
    var search = [true, false];
    search.forEach(function (searchEnabled) {
      test("DataTableToolbar enableSearch: ".concat(searchEnabled, " snapshot"), function () {
        var _render4 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_.DataTableProvider, {
          columns: [],
          data: [],
          showToolbar: true,
          enableSearch: searchEnabled
        }, _DataTableToolbar4 || (_DataTableToolbar4 = /*#__PURE__*/React.createElement(_.DataTableToolbar, null)))),
            asFragment = _render4.asFragment;

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('themes', function () {
    var themes = ['light', 'dark'];
    themes.forEach(function (theme) {
      test("DataTable ".concat(theme, " theme snapshot"), function () {
        var _render5 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_.ThemeProvider, {
          theme: theme
        }, /*#__PURE__*/React.createElement(_.DataTableProvider, {
          columns: [],
          data: [],
          showToolbar: true
        }, _DataTableToolbar5 || (_DataTableToolbar5 = /*#__PURE__*/React.createElement(_.DataTableToolbar, null))))),
            asFragment = _render5.asFragment;

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});