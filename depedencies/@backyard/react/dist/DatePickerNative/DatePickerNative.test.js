"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var React = _interopRequireWildcard(require("react"));

var _testUtils = require("../../test-utils");

var _ThemeProvider = require("../ThemeProvider");

var _DatePickerNative4 = _interopRequireDefault(require("./DatePickerNative"));

var _DatePickerNative, _DatePickerNative2, _DatePickerNative3;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('DatePickerNative Tests', function () {
  it('renders', function () {
    var _render = (0, _testUtils.render)(_DatePickerNative || (_DatePickerNative = /*#__PURE__*/React.createElement(_DatePickerNative4["default"], {
      label: "Date"
    }))),
        getByLabelText = _render.getByLabelText;

    var picker = getByLabelText('Date');
    expect(picker).toBeInTheDocument();
  });
  describe('prop: dates', function () {
    describe('without', function () {
      it('renders a text input as the native picker', function () {
        var _render2 = (0, _testUtils.render)(_DatePickerNative2 || (_DatePickerNative2 = /*#__PURE__*/React.createElement(_DatePickerNative4["default"], {
          label: "Date"
        }))),
            getByLabelText = _render2.getByLabelText;

        var picker = getByLabelText('Date');
        expect(picker.tagName).toBe('INPUT');
      });
      describe('prop: onChange', function () {
        it('doesnt trigger `onChange` when not defined', function () {
          var onChangeSpy = jest.fn(function (event) {
            return event.defaultPrevented;
          });

          var _render3 = (0, _testUtils.render)(_DatePickerNative3 || (_DatePickerNative3 = /*#__PURE__*/React.createElement(_DatePickerNative4["default"], {
            label: "Date"
          }))),
              getByLabelText = _render3.getByLabelText;

          var picker = getByLabelText('Date');

          _testUtils.fireEvent.change(picker, {
            target: {
              value: '2020-07-19'
            }
          });

          expect(onChangeSpy).not.toHaveBeenCalled();
        });
        it('triggers `onChange` when value change event occurs', function () {
          var onChangeSpy = jest.fn();

          var _render4 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_DatePickerNative4["default"], {
            label: "Date",
            onChange: onChangeSpy
          })),
              getByLabelText = _render4.getByLabelText;

          var picker = getByLabelText('Date');
          expect(onChangeSpy).not.toHaveBeenCalled();

          _testUtils.Simulate.change(picker, {
            target: {
              value: '2020-07-19'
            } // EventTarget

          });

          expect(onChangeSpy).toHaveBeenCalled();
        });
        it('always triggers `onChange`', function () {
          var onChangeSpy = jest.fn();

          var _render5 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_DatePickerNative4["default"], {
            label: "Date",
            onChange: onChangeSpy
          })),
              getByLabelText = _render5.getByLabelText;

          var picker = getByLabelText('Date');
          expect(onChangeSpy).not.toHaveBeenCalled();

          _testUtils.Simulate.change(picker, {
            target: {
              value: '9999-99-99'
            } // EventTarget

          });

          expect(onChangeSpy).toHaveBeenCalled();
        });
      });
    });
    describe('with', function () {
      it('renders a select as the native picker', function () {
        var _render6 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_DatePickerNative4["default"], {
          label: "Date",
          dates: ['2020-07-17', '2020-07-18', '2020-07-19', '2020-07-20', '2020-07-21', '2020-07-22']
        })),
            getByLabelText = _render6.getByLabelText;

        var picker = getByLabelText('Date');
        expect(picker.tagName).toBe('SELECT');
      });
      it('parses dates as string', function () {
        var _render7 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_DatePickerNative4["default"], {
          label: "Date",
          date: "2020-07-19",
          dates: ['2020-07-17', '2020-07-18', '2020-07-19', '2020-07-20', '2020-07-21', '2020-07-22']
        })),
            getByLabelText = _render7.getByLabelText;

        var picker = getByLabelText('Date');
        expect(picker).toBeInTheDocument();
      });
      it('parses dates as an object', function () {
        var _render8 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_DatePickerNative4["default"], {
          label: "Date",
          date: "2020-07-19",
          dates: [{
            label: 'Yesterday 8:00 AM',
            value: '2020-07-18'
          }, {
            label: 'Today 9:15 AM',
            value: '2020-07-19'
          }, {
            label: 'Tomorrow 9:45 AM',
            value: '2020-07-20',
            disabled: true
          }, {
            label: 'Next Day 10:15 AM',
            value: '2020-07-21'
          }]
        })),
            getByLabelText = _render8.getByLabelText;

        var picker = getByLabelText('Date');
        expect(picker).toBeInTheDocument();
      });
      it('triggers `onChange` when value change event occurs', function () {
        var onChangeSpy = jest.fn();

        var _render9 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_DatePickerNative4["default"], {
          label: "Date",
          onChange: onChangeSpy,
          date: "2020-07-19",
          dates: [{
            label: 'Yesterday 8:00 AM',
            value: '2020-07-18'
          }, {
            label: 'Today 9:15 AM',
            value: '2020-07-19'
          }, {
            label: 'Tomorrow 9:45 AM',
            value: '2020-07-20',
            disabled: true
          }, {
            label: 'Next Day 10:15 AM',
            value: '2020-07-21'
          }]
        })),
            getByLabelText = _render9.getByLabelText;

        var picker = getByLabelText('Date');
        expect(onChangeSpy).not.toHaveBeenCalled();
        expect(picker.value).toBe('2020-07-19');

        _testUtils.Simulate.change(picker, {
          target: {
            value: '2020-07-18'
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
                          }, /*#__PURE__*/React.createElement(_DatePickerNative4["default"], {
                            label: "Date",
                            withCustom: true,
                            dates: [{
                              label: 'Yesterday 8:00 AM',
                              value: '2020-07-18'
                            }, {
                              label: 'Today 9:15 AM',
                              value: '2020-07-19'
                            }, {
                              label: 'Tomorrow 9:45 AM',
                              value: '2020-07-20',
                              disabled: true
                            }, {
                              label: 'Next Day 10:15 AM',
                              value: '2020-07-21'
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
                picker = getByLabelText('Date');

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
    it('shows calendar picker popover', function () {
      var onFocusSpy = jest.fn();

      var _render10 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_DatePickerNative4["default"], {
        onFocus: onFocusSpy,
        label: "Date"
      })),
          getByLabelText = _render10.getByLabelText;

      var picker = getByLabelText('Date');
      expect(onFocusSpy).not.toHaveBeenCalled();

      _testUtils.fireEvent.focus(picker);

      expect(onFocusSpy).toHaveBeenCalled();
    });
  });
  describe('prop: onBlur', function () {
    it('hides calendar picker popover', function () {
      var onBlurSpy = jest.fn();

      var _render11 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_DatePickerNative4["default"], {
        onBlur: onBlurSpy,
        label: "Date"
      })),
          getByLabelText = _render11.getByLabelText;

      var picker = getByLabelText('Date');

      _testUtils.fireEvent.focus(picker);

      expect(onBlurSpy).not.toHaveBeenCalled();

      _testUtils.fireEvent.blur(picker);

      expect(onBlurSpy).toHaveBeenCalled();
    });
  });
});