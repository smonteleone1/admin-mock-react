"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var React = _interopRequireWildcard(require("react"));

var _testUtils = require("../../../test-utils");

var _BreadcrumbMobileSkeleton = _interopRequireDefault(require("./BreadcrumbMobileSkeleton"));

var _BreadcrumbMobileSkel, _BreadcrumbMobileSkel2, _BreadcrumbMobileSkel3;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('BreadcrumbMobileSkeleton Snapshots', function () {
  test('BreadcrumbMobileSkeleton default snapshot', function () {
    var _render = (0, _testUtils.render)(_BreadcrumbMobileSkel || (_BreadcrumbMobileSkel = /*#__PURE__*/React.createElement(_BreadcrumbMobileSkeleton["default"], null))),
        asFragment = _render.asFragment;

    expect(asFragment()).toMatchSnapshot();
  });
  test('BreadcrumbMobileSkeleton animate snapshot', function () {
    var _render2 = (0, _testUtils.render)(_BreadcrumbMobileSkel2 || (_BreadcrumbMobileSkel2 = /*#__PURE__*/React.createElement(_BreadcrumbMobileSkeleton["default"], {
      animate: true
    }))),
        asFragment = _render2.asFragment;

    expect(asFragment()).toMatchSnapshot();
  });
  test('BreadcrumbMobileSkeleton custom width snapshot', function () {
    var _render3 = (0, _testUtils.render)(_BreadcrumbMobileSkel3 || (_BreadcrumbMobileSkel3 = /*#__PURE__*/React.createElement(_BreadcrumbMobileSkeleton["default"], {
      width: "30rem"
    }))),
        asFragment = _render3.asFragment;

    expect(asFragment()).toMatchSnapshot();
  });
});