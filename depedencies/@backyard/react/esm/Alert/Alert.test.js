import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

var _Alert;

import * as React from 'react';
import { render, fireEvent, act } from '../../test-utils';
import Alert from './Alert';
describe('Alert Tests', function () {
  it('renders', function () {
    var _render = render(_Alert || (_Alert = /*#__PURE__*/React.createElement(Alert, {
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

      var _render2 = render( /*#__PURE__*/React.createElement(Alert, {
        title: "Title",
        action: "Action",
        onActionClick: onClickSpy
      })),
          getByText = _render2.getByText;

      var action = getByText('Action').parentNode;
      fireEvent.click(action);
      expect(onClickSpy).toHaveBeenCalledTimes(1);
    });
    it('`actionProps` should override `onClick` when defined', function () {
      var onClickSpy = jest.fn();
      var onPropClickSpy = jest.fn();

      var _render3 = render( /*#__PURE__*/React.createElement(Alert, {
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
      fireEvent.click(action); // Shouldn't have fired twice, only one `onClick` should fire

      expect(onClickSpy).toHaveBeenCalledTimes(0);
      expect(onPropClickSpy).toHaveBeenCalledTimes(1);
    });
  });
  describe('event: close', function () {
    it('should trigger `onClose` when Close icon clicked', function () {
      var onCloseSpy = jest.fn();

      var _render4 = render( /*#__PURE__*/React.createElement(Alert, {
        title: "Title",
        onClose: onCloseSpy
      })),
          container = _render4.container;

      var close = container.querySelector('.icon-close');
      fireEvent.click(close);
      expect(onCloseSpy).toHaveBeenCalledTimes(1);
    });
    it('should trigger `onClose` when `Enter` button clicked on Close icon', function () {
      var onCloseSpy = jest.fn();

      var _render5 = render( /*#__PURE__*/React.createElement(Alert, {
        subtitle: "Subtitle",
        onClose: onCloseSpy
      })),
          container = _render5.container;

      var close = container.querySelector('.icon-close');
      fireEvent.keyDown(close, {
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
            _React$useState2 = _slicedToArray(_React$useState, 2),
            closed = _React$useState2[0],
            setClosed = _React$useState2[1];

        React.useEffect(function () {
          setTimeout(function () {
            setClosed(true);
          }, 10);
        }, []);
        return /*#__PURE__*/React.createElement(Alert, {
          closed: closed,
          title: "Title",
          onClose: onCloseSpy
        });
      }

      act(function () {
        render(_AutoCloseAlert || (_AutoCloseAlert = /*#__PURE__*/React.createElement(AutoCloseAlert, null)));
      });
      act(function () {
        jest.runAllTimers();
      });
      expect(onCloseSpy).toHaveBeenCalledTimes(1);
    });
    it('should trigger `onClose` after auto close', function () {
      var _Alert2, _AutoCloseAlert2;

      jest.useFakeTimers();
      var onCloseSpy = jest.fn();

      function AutoCloseAlert() {
        return _Alert2 || (_Alert2 = /*#__PURE__*/React.createElement(Alert, {
          title: "Title",
          autoCloseAfter: 10,
          onClose: onCloseSpy
        }));
      }

      act(function () {
        render(_AutoCloseAlert2 || (_AutoCloseAlert2 = /*#__PURE__*/React.createElement(AutoCloseAlert, null)));
      });
      act(function () {
        jest.runAllTimers();
      });
      expect(onCloseSpy).toHaveBeenCalledTimes(1);
    });
  });
});