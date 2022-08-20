import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

var _Toast, _Toast2;

import * as React from 'react';
import { render, fireEvent, act } from '../../test-utils';
import Toast from './Toast';
describe('Toast Tests', function () {
  it('renders', function () {
    var _render = render(_Toast || (_Toast = /*#__PURE__*/React.createElement(Toast, {
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
    var _render2 = render( /*#__PURE__*/React.createElement(Toast, {
      title: "Title",
      date: new Date('May 12, 2020 07:22:13')
    }, "Subtitle")),
        getByText = _render2.getByText;

    var timestamp = getByText('07:22:13');
    expect(timestamp).toBeInTheDocument();
  });
  it('should be able to supply a custom timestamp string', function () {
    var _render3 = render(_Toast2 || (_Toast2 = /*#__PURE__*/React.createElement(Toast, {
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

      var _render4 = render( /*#__PURE__*/React.createElement(Toast, {
        title: "Title",
        onClose: onCloseSpy,
        timestamp: "Timestamp [00:00:00]"
      }, "Subtitle")),
          container = _render4.container;

      var close = container.querySelector('.icon-close');
      fireEvent.click(close);
      expect(onCloseSpy).toHaveBeenCalledTimes(1);
    });
    it('should trigger `onClose` when `Enter` button clicked on Close icon', function () {
      var onCloseSpy = jest.fn();

      var _render5 = render( /*#__PURE__*/React.createElement(Toast, {
        title: "Title",
        onClose: onCloseSpy,
        timestamp: "Timestamp [00:00:00]"
      }, "Subtitle")),
          container = _render5.container;

      var close = container.querySelector('.icon-close');
      fireEvent.keyDown(close, {
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
            _React$useState2 = _slicedToArray(_React$useState, 2),
            closed = _React$useState2[0],
            setClosed = _React$useState2[1];

        React.useEffect(function () {
          setTimeout(function () {
            setClosed(true);
          }, 10);
        }, []);
        return /*#__PURE__*/React.createElement(Toast, {
          closed: closed,
          title: "Title",
          onClose: onCloseSpy,
          timestamp: "Timestamp [00:00:00]"
        }, "Subtitle");
      }

      act(function () {
        render(_AutoCloseToast || (_AutoCloseToast = /*#__PURE__*/React.createElement(AutoCloseToast, null)));
      });
      act(function () {
        jest.runAllTimers();
      });
      expect(onCloseSpy).toHaveBeenCalledTimes(1);
    });
    it('should trigger `onClose` after auto close', function () {
      var _Toast3, _AutoCloseToast2;

      jest.useFakeTimers();
      var onCloseSpy = jest.fn();

      function AutoCloseToast() {
        return _Toast3 || (_Toast3 = /*#__PURE__*/React.createElement(Toast, {
          title: "Title",
          autoCloseAfter: 10,
          onClose: onCloseSpy,
          timestamp: "Timestamp [00:00:00]"
        }, "Subtitle"));
      }

      act(function () {
        render(_AutoCloseToast2 || (_AutoCloseToast2 = /*#__PURE__*/React.createElement(AutoCloseToast, null)));
      });
      act(function () {
        jest.runAllTimers();
      });
      expect(onCloseSpy).toHaveBeenCalledTimes(1);
    });
  });
});