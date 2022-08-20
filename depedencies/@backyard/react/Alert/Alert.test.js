"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var React = _interopRequireWildcard(require("react"));

var _testUtils = require("../../test-utils");

var _Alert3 = _interopRequireDefault(require("./Alert"));

var _Alert;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('Alert Tests', function () {
  it('renders', function () {
    var _render = (0, _testUtils.render)(_Alert || (_Alert = /*#__PURE__*/React.createElement(_Alert3["default"], {
      multiline: true,
      title: "Title",
      subtitle: "Subtitle",
      action: "Action"
    }))),
        getByText = _render.getByText;

    var title = getByText('Title');
    var subtitle = getByText('Subtitle');
    var action = getByText('Action');
    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(action).toBeInTheDocument();
  });
  describe('event: action click', function () {
    it('should trigger `onActionClick` when enabled', function () {
      var onClickSpy = jest.fn();

      var _render2 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_Alert3["default"], {
        title: "Title",
        action: "Action",
        onActionClick: onClickSpy
      })),
          getByText = _render2.getByText;

      var action = getByText('Action').parentNode;

      _testUtils.fireEvent.click(action);

      expect(onClickSpy).toHaveBeenCalledTimes(1);
    });
    it('`actionProps` should override `onClick` when defined', function () {
      var onClickSpy = jest.fn();
      var onPropClickSpy = jest.fn();

      var _render3 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_Alert3["default"], {
        multiline: true,
        title: "Title",
        action: "Action",
        onActionClick: onClickSpy,
        actionLinkProps: {
          onClick: onPropClickSpy
        }
      }, "Subtitle")),
          getByText = _render3.getByText;

      var action = getByText('Action').parentNode;

      _testUtils.fireEvent.click(action); // Shouldn't have fired twice, only one `onClick` should fire


      expect(onClickSpy).toHaveBeenCalledTimes(0);
      expect(onPropClickSpy).toHaveBeenCalledTimes(1);
    });
  });
  describe('event: close', function () {
    it('should trigger `onClose` when Close icon clicked', function () {
      var onCloseSpy = jest.fn();

      var _render4 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_Alert3["default"], {
        title: "Title",
        onClose: onCloseSpy
      })),
          container = _render4.container;

      var close = container.querySelector('.icon-close');

      _testUtils.fireEvent.click(close);

      expect(onCloseSpy).toHaveBeenCalledTimes(1);
    });
    it('should trigger `onClose` when `Enter` button clicked on Close icon', function () {
      var onCloseSpy = jest.fn();

      var _render5 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_Alert3["default"], {
        subtitle: "Subtitle",
        onClose: onCloseSpy
      })),
          container = _render5.container;

      var close = container.querySelector('.icon-close');

      _testUtils.fireEvent.keyDown(close, {
        key: 'Enter'
      });

      expect(onCloseSpy).toHaveBeenCalledTimes(1);
    });
    it('should trigger `onClose` when closed prop changed', function () {
      var _AutoCloseAlert;

      jest.useFakeTimers();
      var onCloseSpy = jest.fn();

      function AutoCloseAlert() {
        var _React$useState = React.useState(false),
            _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
            closed = _React$useState2[0],
            setClosed = _React$useState2[1];

        React.useEffect(function () {
          setTimeout(function () {
            setClosed(true);
          }, 10);
        }, []);
        return /*#__PURE__*/React.createElement(_Alert3["default"], {
          closed: closed,
          title: "Title",
          onClose: onCloseSpy
        });
      }

      (0, _testUtils.act)(function () {
        (0, _testUtils.render)(_AutoCloseAlert || (_AutoCloseAlert = /*#__PURE__*/React.createElement(AutoCloseAlert, null)));
      });
      (0, _testUtils.act)(function () {
        jest.runAllTimers();
      });
      expect(onCloseSpy).toHaveBeenCalledTimes(1);
    });
    it('should trigger `onClose` after auto close', function () {
      var _Alert2, _AutoCloseAlert2;

      jest.useFakeTimers();
      var onCloseSpy = jest.fn();

      function AutoCloseAlert() {
        return _Alert2 || (_Alert2 = /*#__PURE__*/React.createElement(_Alert3["default"], {
          title: "Title",
          autoCloseAfter: 10,
          onClose: onCloseSpy
        }));
      }

      (0, _testUtils.act)(function () {
        (0, _testUtils.render)(_AutoCloseAlert2 || (_AutoCloseAlert2 = /*#__PURE__*/React.createElement(AutoCloseAlert, null)));
      });
      (0, _testUtils.act)(function () {
        jest.runAllTimers();
      });
      expect(onCloseSpy).toHaveBeenCalledTimes(1);
    });
  });
});