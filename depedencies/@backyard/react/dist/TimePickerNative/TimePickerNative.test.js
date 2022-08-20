"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var React = _interopRequireWildcard(require("react"));

var _testUtils = require("../../test-utils");

var _ThemeProvider = require("../ThemeProvider");

var _TimePickerNative4 = _interopRequireDefault(require("./TimePickerNative"));

var _TimePickerNative, _TimePickerNative2, _TimePickerNative3;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('TimePickerNative Tests', function () {
  it('renders', function () {
    var _render = (0, _testUtils.render)(_TimePickerNative || (_TimePickerNative = /*#__PURE__*/React.createElement(_TimePickerNative4["default"], {
      label: "Time"
    }))),
        getByLabelText = _render.getByLabelText;

    var picker = getByLabelText('Time');
    expect(picker).toBeInTheDocument();
  });
  describe('prop: times', function () {
    describe('without', function () {
      it('renders a text input as the native picker', function () {
        var _render2 = (0, _testUtils.render)(_TimePickerNative2 || (_TimePickerNative2 = /*#__PURE__*/React.createElement(_TimePickerNative4["default"], {
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

          var _render3 = (0, _testUtils.render)(_TimePickerNative3 || (_TimePickerNative3 = /*#__PURE__*/React.createElement(_TimePickerNative4["default"], {
            label: "Time"
          }))),
              getByLabelText = _render3.getByLabelText;

          var picker = getByLabelText('Time');

          _testUtils.fireEvent.change(picker, {
            target: {
              value: '8:00'
            }
          });

          expect(onChangeSpy).not.toHaveBeenCalled();
        });
        it('triggers `onChange` when value change event occurs', function () {
          var onChangeSpy = jest.fn();

          var _render4 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_TimePickerNative4["default"], {
            label: "Time",
            onChange: onChangeSpy
          })),
              getByLabelText = _render4.getByLabelText;

          var picker = getByLabelText('Time');
          expect(onChangeSpy).not.toHaveBeenCalled();

          _testUtils.Simulate.change(picker, {
            target: {
              value: '8:00 AM'
            } // EventTarget

          });

          expect(onChangeSpy).toHaveBeenCalled();
        });
        it('always triggers `onChange`', function () {
          var onChangeSpy = jest.fn();

          var _render5 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_TimePickerNative4["default"], {
            label: "Time",
            onChange: onChangeSpy
          })),
              getByLabelText = _render5.getByLabelText;

          var picker = getByLabelText('Time');
          expect(onChangeSpy).not.toHaveBeenCalled();

          _testUtils.Simulate.change(picker, {
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
        var _render6 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_TimePickerNative4["default"], {
          label: "Time",
          times: ['8:00', '9:00', '12:00', '14:00', '15:00']
        })),
            getByLabelText = _render6.getByLabelText;

        var picker = getByLabelText('Time');
        expect(picker.tagName).toBe('SELECT');
      });
      it('parses times as string', function () {
        var _render7 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_TimePickerNative4["default"], {
          label: "Time",
          time: "9:00",
          times: ['8:00', '9:00', '12:00', '14:00', '15:00']
        })),
            getByLabelText = _render7.getByLabelText;

        var picker = getByLabelText('Time');
        expect(picker).toBeInTheDocument();
      });
      it('parses times as an object', function () {
        var _render8 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_TimePickerNative4["default"], {
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
        var _render9 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_TimePickerNative4["default"], {
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

        var _render10 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_TimePickerNative4["default"], {
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

        _testUtils.Simulate.change(picker, {
          target: {
            value: '08:00'
          } // EventTarget

        });

        expect(onChangeSpy).toHaveBeenCalled();
      });
      it('handles withCustom select onMouseDown', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var wrapper, _wrapper, getByLabelText, picker;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testUtils.act)( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
                  return _regenerator["default"].wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          wrapper = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_ThemeProvider.ThemeProvider, {
                            override: {
                              isMobile: false,
                              isDesktop: true
                            }
                          }, /*#__PURE__*/React.createElement(_TimePickerNative4["default"], {
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

                _testUtils.fireEvent.mouseDown(picker);

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

      var _render11 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_TimePickerNative4["default"], {
        onFocus: onFocusSpy,
        label: "Time"
      })),
          getByLabelText = _render11.getByLabelText;

      var picker = getByLabelText('Time');
      expect(onFocusSpy).not.toHaveBeenCalled();

      _testUtils.fireEvent.focus(picker);

      expect(onFocusSpy).toHaveBeenCalled();
    });
  });
  describe('prop: onBlur', function () {
    it('hides list picker popover', function () {
      var onBlurSpy = jest.fn();

      var _render12 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_TimePickerNative4["default"], {
        onBlur: onBlurSpy,
        label: "Time"
      })),
          getByLabelText = _render12.getByLabelText;

      var picker = getByLabelText('Time');

      _testUtils.fireEvent.focus(picker);

      expect(onBlurSpy).not.toHaveBeenCalled();

      _testUtils.fireEvent.blur(picker);

      expect(onBlurSpy).toHaveBeenCalled();
    });
  });
});