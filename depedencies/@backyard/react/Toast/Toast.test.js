"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var React = _interopRequireWildcard(require("react"));

var _testUtils = require("../../test-utils");

var _Toast4 = _interopRequireDefault(require("./Toast"));

var _Toast, _Toast2;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('Toast Tests', function () {
  it('renders', function () {
    var _render = (0, _testUtils.render)(_Toast || (_Toast = /*#__PURE__*/React.createElement(_Toast4["default"], {
      title: "Title",
      timestamp: "Timestamp [00:00:00]"
    }, "Subtitle"))),
        getByText = _render.getByText;

    var title = getByText('Title');
    var subtitle = getByText('Subtitle');
    var timestamp = getByText('Timestamp [00:00:00]');
    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(timestamp).toBeInTheDocument();
  });
  it('should be able to supply a custom date object', function () {
    var _render2 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_Toast4["default"], {
      title: "Title",
      date: new Date('May 12, 2020 07:22:13')
    }, "Subtitle")),
        getByText = _render2.getByText;

    var timestamp = getByText('07:22:13');
    expect(timestamp).toBeInTheDocument();
  });
  it('should be able to supply a custom timestamp string', function () {
    var _render3 = (0, _testUtils.render)(_Toast2 || (_Toast2 = /*#__PURE__*/React.createElement(_Toast4["default"], {
      title: "Title",
      timestamp: "Custom Timestamp 5-12-1993"
    }, "Subtitle"))),
        getByText = _render3.getByText;

    var timestamp = getByText('Custom Timestamp 5-12-1993');
    expect(timestamp).toBeInTheDocument();
  });
  describe('event: close', function () {
    it('should trigger `onClose` when Close icon clicked', function () {
      var onCloseSpy = jest.fn();

      var _render4 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_Toast4["default"], {
        title: "Title",
        onClose: onCloseSpy,
        timestamp: "Timestamp [00:00:00]"
      }, "Subtitle")),
          container = _render4.container;

      var close = container.querySelector('.icon-close');

      _testUtils.fireEvent.click(close);

      expect(onCloseSpy).toHaveBeenCalledTimes(1);
    });
    it('should trigger `onClose` when `Enter` button clicked on Close icon', function () {
      var onCloseSpy = jest.fn();

      var _render5 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_Toast4["default"], {
        title: "Title",
        onClose: onCloseSpy,
        timestamp: "Timestamp [00:00:00]"
      }, "Subtitle")),
          container = _render5.container;

      var close = container.querySelector('.icon-close');

      _testUtils.fireEvent.keyDown(close, {
        key: 'Enter'
      });

      expect(onCloseSpy).toHaveBeenCalledTimes(1);
    });
    it('should trigger `onClose` when closed prop changed', function () {
      var _AutoCloseToast;

      jest.useFakeTimers();
      var onCloseSpy = jest.fn();

      function AutoCloseToast() {
        var _React$useState = React.useState(false),
            _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
            closed = _React$useState2[0],
            setClosed = _React$useState2[1];

        React.useEffect(function () {
          setTimeout(function () {
            setClosed(true);
          }, 10);
        }, []);
        return /*#__PURE__*/React.createElement(_Toast4["default"], {
          closed: closed,
          title: "Title",
          onClose: onCloseSpy,
          timestamp: "Timestamp [00:00:00]"
        }, "Subtitle");
      }

      (0, _testUtils.act)(function () {
        (0, _testUtils.render)(_AutoCloseToast || (_AutoCloseToast = /*#__PURE__*/React.createElement(AutoCloseToast, null)));
      });
      (0, _testUtils.act)(function () {
        jest.runAllTimers();
      });
      expect(onCloseSpy).toHaveBeenCalledTimes(1);
    });
    it('should trigger `onClose` after auto close', function () {
      var _Toast3, _AutoCloseToast2;

      jest.useFakeTimers();
      var onCloseSpy = jest.fn();

      function AutoCloseToast() {
        return _Toast3 || (_Toast3 = /*#__PURE__*/React.createElement(_Toast4["default"], {
          title: "Title",
          autoCloseAfter: 10,
          onClose: onCloseSpy,
          timestamp: "Timestamp [00:00:00]"
        }, "Subtitle"));
      }

      (0, _testUtils.act)(function () {
        (0, _testUtils.render)(_AutoCloseToast2 || (_AutoCloseToast2 = /*#__PURE__*/React.createElement(AutoCloseToast, null)));
      });
      (0, _testUtils.act)(function () {
        jest.runAllTimers();
      });
      expect(onCloseSpy).toHaveBeenCalledTimes(1);
    });
  });
});