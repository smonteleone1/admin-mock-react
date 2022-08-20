"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var React = _interopRequireWildcard(require("react"));

var _testUtils = require("../../test-utils");

var _Link2 = _interopRequireDefault(require("./Link"));

var _Link;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('Link Tests', function () {
  it('renders', function () {
    var _render = (0, _testUtils.render)(_Link || (_Link = /*#__PURE__*/React.createElement(_Link2["default"], {
      to: "#"
    }, "Link"))),
        getByText = _render.getByText;

    var link = getByText('Link');
    expect(link).toBeInTheDocument();
  });
  describe('event: focus', function () {
    it('should trigger `onFocus` when enabled', function () {
      var onFocusSpy = jest.fn();

      var _render2 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_Link2["default"], {
        to: "#",
        onFocus: onFocusSpy
      }, "Link")),
          getByText = _render2.getByText;

      var link = getByText('Link');

      _testUtils.fireEvent.focus(link);

      expect(onFocusSpy).toHaveBeenCalledTimes(1);
    });
  });
  describe('event: click', function () {
    it('should trigger `onClick` when enabled', function () {
      var onClickSpy = jest.fn();

      var _render3 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_Link2["default"], {
        onClick: onClickSpy
      }, "Link")),
          getByText = _render3.getByText;

      var link = getByText('Link');

      _testUtils.fireEvent.click(link);

      expect(onClickSpy).toHaveBeenCalledTimes(1);
    });
    it('triggers `onClick` and `to` navigation when clicked and defined', function () {
      var onClickSpy = jest.fn();

      var _render4 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_Link2["default"], {
        to: "http://google.com",
        onClick: onClickSpy
      }, "Link")),
          getByText = _render4.getByText;

      var link = getByText('Link').parentNode;

      _testUtils.fireEvent.click(link);

      expect(onClickSpy).toHaveBeenCalledTimes(1);
    });
  });
  describe('keyboard accessibility', function () {
    it('triggers `onClick` when Enter is pressed on the element', function () {
      var onClickSpy = jest.fn();

      var _render5 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_Link2["default"], {
        onClick: onClickSpy
      }, "Link")),
          getByRole = _render5.getByRole;

      var link = getByRole('button');
      link.focus();

      _testUtils.fireEvent.keyDown(document.activeElement || document.body, {
        key: 'Enter'
      });

      expect(onClickSpy).toHaveBeenCalled();
    });
    it('triggers `onClick` when Space is pressed on the element', function () {
      var onClickSpy = jest.fn();

      var _render6 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_Link2["default"], {
        onClick: onClickSpy
      }, "Link")),
          getByRole = _render6.getByRole;

      var link = getByRole('button');
      link.focus();

      _testUtils.fireEvent.keyDown(document.activeElement || document.body, {
        key: ' '
      });

      expect(onClickSpy).toHaveBeenCalled();
    });
    it('triggers `onKeyDown` when K is pressed on the element', function () {
      var onKeyDownSpy = jest.fn();

      var _render7 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_Link2["default"], {
        onKeyDown: onKeyDownSpy
      }, "Link")),
          getByRole = _render7.getByRole;

      var link = getByRole('button');
      link.focus();

      _testUtils.fireEvent.keyDown(document.activeElement || document.body, {
        key: 'K'
      });

      expect(onKeyDownSpy).toHaveBeenCalled();
    });
  });
});