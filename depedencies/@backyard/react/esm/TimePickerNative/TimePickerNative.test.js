import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";

var _TimePickerNative, _TimePickerNative2, _TimePickerNative3;

import _regeneratorRuntime from "@babel/runtime/regenerator";
import * as React from 'react';
import { Simulate, render, fireEvent, act } from '../../test-utils';
import { ThemeProvider } from '../ThemeProvider';
import TimePickerNative from './TimePickerNative';
describe('TimePickerNative Tests', function () {
  it('renders', function () {
    var _render = render(_TimePickerNative || (_TimePickerNative = /*#__PURE__*/React.createElement(TimePickerNative, {
      label: "Time"
    }))),
        getByLabelText = _render.getByLabelText;

    var picker = getByLabelText('Time');
    expect(picker).toBeInTheDocument();
  });
  describe('prop: times', function () {
    describe('without', function () {
      it('renders a text input as the native picker', function () {
        var _render2 = render(_TimePickerNative2 || (_TimePickerNative2 = /*#__PURE__*/React.createElement(TimePickerNative, {
          label: "Time"
        }))),
            getByLabelText = _render2.getByLabelText;

        var picker = getByLabelText('Time');
        expect(picker.tagName).toBe('INPUT');
      });
      describe('prop: onChange', function () {
        it('doesnt trigger `onChange` when not defined', function () {
          var onChangeSpy = jest.fn(function (event) {
            return event.defaultPrevented;
          });

          var _render3 = render(_TimePickerNative3 || (_TimePickerNative3 = /*#__PURE__*/React.createElement(TimePickerNative, {
            label: "Time"
          }))),
              getByLabelText = _render3.getByLabelText;

          var picker = getByLabelText('Time');
          fireEvent.change(picker, {
            target: {
              value: '8:00'
            }
          });
          expect(onChangeSpy).not.toHaveBeenCalled();
        });
        it('triggers `onChange` when value change event occurs', function () {
          var onChangeSpy = jest.fn();

          var _render4 = render( /*#__PURE__*/React.createElement(TimePickerNative, {
            label: "Time",
            onChange: onChangeSpy
          })),
              getByLabelText = _render4.getByLabelText;

          var picker = getByLabelText('Time');
          expect(onChangeSpy).not.toHaveBeenCalled();
          Simulate.change(picker, {
            target: {
              value: '8:00 AM'
            } // EventTarget

          });
          expect(onChangeSpy).toHaveBeenCalled();
        });
        it('always triggers `onChange`', function () {
          var onChangeSpy = jest.fn();

          var _render5 = render( /*#__PURE__*/React.createElement(TimePickerNative, {
            label: "Time",
            onChange: onChangeSpy
          })),
              getByLabelText = _render5.getByLabelText;

          var picker = getByLabelText('Time');
          expect(onChangeSpy).not.toHaveBeenCalled();
          Simulate.change(picker, {
            target: {
              value: '24:00 AM'
            } // EventTarget

          });
          expect(onChangeSpy).toHaveBeenCalled();
        });
      });
    });
    describe('with', function () {
      it('renders a select as the native picker', function () {
        var _render6 = render( /*#__PURE__*/React.createElement(TimePickerNative, {
          label: "Time",
          times: ['8:00', '9:00', '12:00', '14:00', '15:00']
        })),
            getByLabelText = _render6.getByLabelText;

        var picker = getByLabelText('Time');
        expect(picker.tagName).toBe('SELECT');
      });
      it('parses times as string', function () {
        var _render7 = render( /*#__PURE__*/React.createElement(TimePickerNative, {
          label: "Time",
          time: "9:00",
          times: ['8:00', '9:00', '12:00', '14:00', '15:00']
        })),
            getByLabelText = _render7.getByLabelText;

        var picker = getByLabelText('Time');
        expect(picker).toBeInTheDocument();
      });
      it('parses times as an object', function () {
        var _render8 = render( /*#__PURE__*/React.createElement(TimePickerNative, {
          label: "Time",
          time: "9:15",
          times: [{
            label: 'Morning 8:00 AM',
            value: '8:00'
          }, {
            label: 'Morning 9:15 AM',
            value: '9:15'
          }, {
            label: 'Morning 9:45 AM',
            value: '9:45',
            disabled: true
          }, {
            label: 'Morning 10:15 AM',
            value: '10:15'
          }, {
            label: 'Morning 11:15 AM',
            value: '11:15'
          }, {
            label: 'Noon 12:00 PM',
            value: '12:00'
          }]
        })),
            getByLabelText = _render8.getByLabelText;

        var picker = getByLabelText('Time');
        expect(picker).toBeInTheDocument();
      });
      it('parses times as a range object', function () {
        var _render9 = render( /*#__PURE__*/React.createElement(TimePickerNative, {
          label: "Time",
          time: JSON.stringify(['10:15', '12:00']),
          times: [{
            label: 'Morning 8:00 AM - 9:45 AM',
            start: '8:00',
            end: '9:45'
          }, {
            label: 'Morning 10:15 AM - 12:00 PM',
            start: '10:15',
            end: '12:00'
          }, {
            label: 'Afternoon 1:15 PM - 2:30 PM',
            start: '13:15',
            end: '14:30',
            disabled: true
          }]
        })),
            getByLabelText = _render9.getByLabelText;

        var picker = getByLabelText('Time');
        expect(picker.value).toBe(JSON.stringify(['10:15', '12:00']));
      });
      it('triggers `onChange` when value change event occurs', function () {
        var onChangeSpy = jest.fn();

        var _render10 = render( /*#__PURE__*/React.createElement(TimePickerNative, {
          label: "Time",
          onChange: onChangeSpy,
          time: "09:15",
          times: [{
            label: 'Morning 8:00 AM',
            value: '8:00'
          }, {
            label: 'Morning 9:15 AM',
            value: '9:15'
          }, {
            label: 'Morning 9:45 AM',
            value: '9:45',
            disabled: true
          }, {
            label: 'Morning 10:15 AM',
            value: '10:15'
          }, {
            label: 'Morning 11:15 AM',
            value: '11:15'
          }, {
            label: 'Noon 12:00 PM',
            value: '12:00'
          }]
        })),
            getByLabelText = _render10.getByLabelText;

        var picker = getByLabelText('Time');
        expect(onChangeSpy).not.toHaveBeenCalled();
        expect(picker.value).toBe('09:15');
        Simulate.change(picker, {
          target: {
            value: '08:00'
          } // EventTarget

        });
        expect(onChangeSpy).toHaveBeenCalled();
      });
      it('handles withCustom select onMouseDown', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
        var wrapper, _wrapper, getByLabelText, picker;

        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return act( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
                  return _regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          wrapper = render( /*#__PURE__*/React.createElement(ThemeProvider, {
                            override: {
                              isMobile: false,
                              isDesktop: true
                            }
                          }, /*#__PURE__*/React.createElement(TimePickerNative, {
                            label: "Time",
                            time: "09:15",
                            withCustom: true,
                            times: [{
                              label: 'Morning 8:00 AM',
                              value: '8:00'
                            }, {
                              label: 'Morning 9:15 AM',
                              value: '9:15'
                            }, {
                              label: 'Morning 9:45 AM',
                              value: '9:45',
                              disabled: true
                            }, {
                              label: 'Morning 10:15 AM',
                              value: '10:15'
                            }, {
                              label: 'Morning 11:15 AM',
                              value: '11:15'
                            }, {
                              label: 'Noon 12:00 PM',
                              value: '12:00'
                            }]
                          })));

                        case 1:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                })));

              case 2:
                _wrapper = wrapper, getByLabelText = _wrapper.getByLabelText;
                picker = getByLabelText('Time');
                fireEvent.mouseDown(picker);
                expect(picker).toHaveFocus();

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      })));
    });
  });
  describe('prop: onFocus', function () {
    it('shows list picker popover', function () {
      var onFocusSpy = jest.fn();

      var _render11 = render( /*#__PURE__*/React.createElement(TimePickerNative, {
        onFocus: onFocusSpy,
        label: "Time"
      })),
          getByLabelText = _render11.getByLabelText;

      var picker = getByLabelText('Time');
      expect(onFocusSpy).not.toHaveBeenCalled();
      fireEvent.focus(picker);
      expect(onFocusSpy).toHaveBeenCalled();
    });
  });
  describe('prop: onBlur', function () {
    it('hides list picker popover', function () {
      var onBlurSpy = jest.fn();

      var _render12 = render( /*#__PURE__*/React.createElement(TimePickerNative, {
        onBlur: onBlurSpy,
        label: "Time"
      })),
          getByLabelText = _render12.getByLabelText;

      var picker = getByLabelText('Time');
      fireEvent.focus(picker);
      expect(onBlurSpy).not.toHaveBeenCalled();
      fireEvent.blur(picker);
      expect(onBlurSpy).toHaveBeenCalled();
    });
  });
});