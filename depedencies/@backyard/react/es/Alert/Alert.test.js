var _Alert;

import * as React from 'react';
import { render, fireEvent, act } from '../../test-utils';
import Alert from './Alert';
describe('Alert Tests', () => {
  it('renders', () => {
    const {
      getByText
    } = render(_Alert || (_Alert = /*#__PURE__*/React.createElement(Alert, {
      multiline: true,
      title: "Title",
      subtitle: "Subtitle",
      action: "Action"
    })));
    const title = getByText('Title');
    const subtitle = getByText('Subtitle');
    const action = getByText('Action');
    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(action).toBeInTheDocument();
  });
  describe('event: action click', () => {
    it('should trigger `onActionClick` when enabled', () => {
      const onClickSpy = jest.fn();
      const {
        getByText
      } = render( /*#__PURE__*/React.createElement(Alert, {
        title: "Title",
        action: "Action",
        onActionClick: onClickSpy
      }));
      const action = getByText('Action').parentNode;
      fireEvent.click(action);
      expect(onClickSpy).toHaveBeenCalledTimes(1);
    });
    it('`actionProps` should override `onClick` when defined', () => {
      const onClickSpy = jest.fn();
      const onPropClickSpy = jest.fn();
      const {
        getByText
      } = render( /*#__PURE__*/React.createElement(Alert, {
        multiline: true,
        title: "Title",
        action: "Action",
        onActionClick: onClickSpy,
        actionLinkProps: {
          onClick: onPropClickSpy
        }
      }, "Subtitle"));
      const action = getByText('Action').parentNode;
      fireEvent.click(action); // Shouldn't have fired twice, only one `onClick` should fire

      expect(onClickSpy).toHaveBeenCalledTimes(0);
      expect(onPropClickSpy).toHaveBeenCalledTimes(1);
    });
  });
  describe('event: close', () => {
    it('should trigger `onClose` when Close icon clicked', () => {
      const onCloseSpy = jest.fn();
      const {
        container
      } = render( /*#__PURE__*/React.createElement(Alert, {
        title: "Title",
        onClose: onCloseSpy
      }));
      const close = container.querySelector('.icon-close');
      fireEvent.click(close);
      expect(onCloseSpy).toHaveBeenCalledTimes(1);
    });
    it('should trigger `onClose` when `Enter` button clicked on Close icon', () => {
      const onCloseSpy = jest.fn();
      const {
        container
      } = render( /*#__PURE__*/React.createElement(Alert, {
        subtitle: "Subtitle",
        onClose: onCloseSpy
      }));
      const close = container.querySelector('.icon-close');
      fireEvent.keyDown(close, {
        key: 'Enter'
      });
      expect(onCloseSpy).toHaveBeenCalledTimes(1);
    });
    it('should trigger `onClose` when closed prop changed', () => {
      var _AutoCloseAlert;

      jest.useFakeTimers();
      const onCloseSpy = jest.fn();

      function AutoCloseAlert() {
        const [closed, setClosed] = React.useState(false);
        React.useEffect(() => {
          setTimeout(() => {
            setClosed(true);
          }, 10);
        }, []);
        return /*#__PURE__*/React.createElement(Alert, {
          closed: closed,
          title: "Title",
          onClose: onCloseSpy
        });
      }

      act(() => {
        render(_AutoCloseAlert || (_AutoCloseAlert = /*#__PURE__*/React.createElement(AutoCloseAlert, null)));
      });
      act(() => {
        jest.runAllTimers();
      });
      expect(onCloseSpy).toHaveBeenCalledTimes(1);
    });
    it('should trigger `onClose` after auto close', () => {
      var _Alert2, _AutoCloseAlert2;

      jest.useFakeTimers();
      const onCloseSpy = jest.fn();

      function AutoCloseAlert() {
        return _Alert2 || (_Alert2 = /*#__PURE__*/React.createElement(Alert, {
          title: "Title",
          autoCloseAfter: 10,
          onClose: onCloseSpy
        }));
      }

      act(() => {
        render(_AutoCloseAlert2 || (_AutoCloseAlert2 = /*#__PURE__*/React.createElement(AutoCloseAlert, null)));
      });
      act(() => {
        jest.runAllTimers();
      });
      expect(onCloseSpy).toHaveBeenCalledTimes(1);
    });
  });
});