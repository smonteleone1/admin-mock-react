var _Toast, _Toast2;

import * as React from 'react';
import { render, fireEvent, act } from '../../test-utils';
import Toast from './Toast';
describe('Toast Tests', () => {
  it('renders', () => {
    const {
      getByText
    } = render(_Toast || (_Toast = /*#__PURE__*/React.createElement(Toast, {
      title: "Title",
      timestamp: "Timestamp [00:00:00]"
    }, "Subtitle")));
    const title = getByText('Title');
    const subtitle = getByText('Subtitle');
    const timestamp = getByText('Timestamp [00:00:00]');
    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(timestamp).toBeInTheDocument();
  });
  it('should be able to supply a custom date object', () => {
    const {
      getByText
    } = render( /*#__PURE__*/React.createElement(Toast, {
      title: "Title",
      date: new Date('May 12, 2020 07:22:13')
    }, "Subtitle"));
    const timestamp = getByText('07:22:13');
    expect(timestamp).toBeInTheDocument();
  });
  it('should be able to supply a custom timestamp string', () => {
    const {
      getByText
    } = render(_Toast2 || (_Toast2 = /*#__PURE__*/React.createElement(Toast, {
      title: "Title",
      timestamp: "Custom Timestamp 5-12-1993"
    }, "Subtitle")));
    const timestamp = getByText('Custom Timestamp 5-12-1993');
    expect(timestamp).toBeInTheDocument();
  });
  describe('event: close', () => {
    it('should trigger `onClose` when Close icon clicked', () => {
      const onCloseSpy = jest.fn();
      const {
        container
      } = render( /*#__PURE__*/React.createElement(Toast, {
        title: "Title",
        onClose: onCloseSpy,
        timestamp: "Timestamp [00:00:00]"
      }, "Subtitle"));
      const close = container.querySelector('.icon-close');
      fireEvent.click(close);
      expect(onCloseSpy).toHaveBeenCalledTimes(1);
    });
    it('should trigger `onClose` when `Enter` button clicked on Close icon', () => {
      const onCloseSpy = jest.fn();
      const {
        container
      } = render( /*#__PURE__*/React.createElement(Toast, {
        title: "Title",
        onClose: onCloseSpy,
        timestamp: "Timestamp [00:00:00]"
      }, "Subtitle"));
      const close = container.querySelector('.icon-close');
      fireEvent.keyDown(close, {
        key: 'Enter'
      });
      expect(onCloseSpy).toHaveBeenCalledTimes(1);
    });
    it('should trigger `onClose` when closed prop changed', () => {
      var _AutoCloseToast;

      jest.useFakeTimers();
      const onCloseSpy = jest.fn();

      function AutoCloseToast() {
        const [closed, setClosed] = React.useState(false);
        React.useEffect(() => {
          setTimeout(() => {
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

      act(() => {
        render(_AutoCloseToast || (_AutoCloseToast = /*#__PURE__*/React.createElement(AutoCloseToast, null)));
      });
      act(() => {
        jest.runAllTimers();
      });
      expect(onCloseSpy).toHaveBeenCalledTimes(1);
    });
    it('should trigger `onClose` after auto close', () => {
      var _Toast3, _AutoCloseToast2;

      jest.useFakeTimers();
      const onCloseSpy = jest.fn();

      function AutoCloseToast() {
        return _Toast3 || (_Toast3 = /*#__PURE__*/React.createElement(Toast, {
          title: "Title",
          autoCloseAfter: 10,
          onClose: onCloseSpy,
          timestamp: "Timestamp [00:00:00]"
        }, "Subtitle"));
      }

      act(() => {
        render(_AutoCloseToast2 || (_AutoCloseToast2 = /*#__PURE__*/React.createElement(AutoCloseToast, null)));
      });
      act(() => {
        jest.runAllTimers();
      });
      expect(onCloseSpy).toHaveBeenCalledTimes(1);
    });
  });
});