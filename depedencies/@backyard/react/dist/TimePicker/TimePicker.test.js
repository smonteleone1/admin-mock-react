"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var React = _interopRequireWildcard(require("react"));

var _testUtils = require("../../test-utils");

var _ThemeProvider = require("../ThemeProvider");

var _TimePicker5 = _interopRequireDefault(require("./TimePicker"));

var _TimePicker, _TimePicker2, _TimePicker3, _TimePicker4;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('TimePicker Tests', function () {
  it('renders', function () {
    var _render = (0, _testUtils.render)(_TimePicker || (_TimePicker = /*#__PURE__*/React.createElement(_TimePicker5["default"], {
      label: "Time"
    }))),
        getByLabelText = _render.getByLabelText;

    var picker = getByLabelText('Time');
    expect(picker).toBeInTheDocument();
  });
  describe('prop: times', function () {
    describe('without', function () {
      it('renders a text input as the native picker', function () {
        var _render2 = (0, _testUtils.render)(_TimePicker2 || (_TimePicker2 = /*#__PURE__*/React.createElement(_TimePicker5["default"], {
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

          var _render3 = (0, _testUtils.render)(_TimePicker3 || (_TimePicker3 = /*#__PURE__*/React.createElement(_TimePicker5["default"], {
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

          var _render4 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_TimePicker5["default"], {
            label: "Time",
            onChange: onChangeSpy,
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
              container = _render4.container;

          var picker = container.querySelector('select');
          expect(onChangeSpy).not.toHaveBeenCalled();

          _testUtils.fireEvent.change(picker, {
            target: {
              value: '08:00'
            }
          });

          expect(onChangeSpy).toHaveBeenCalled();
        });
        it('doesn\'t trigger `onChange` when invalid value change event occurs', function () {
          var onChangeSpy = jest.fn();

          var _render5 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_TimePicker5["default"], {
            label: "Time",
            onChange: onChangeSpy
          })),
              getByLabelText = _render5.getByLabelText;

          var picker = getByLabelText('Time');
          expect(onChangeSpy).not.toHaveBeenCalled();

          _testUtils.Simulate.change(picker, {
            target: {
              value: '24:00 AM'
            } // EventTarget (test)

          });

          expect(onChangeSpy).not.toHaveBeenCalled();
        });
      });
    });
    describe('with', function () {
      it('renders a select as the native picker', function () {
        var _render6 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_TimePicker5["default"], {
          label: "Time",
          times: ['8:00', '9:00', '12:00', '14:00', '15:00']
        })),
            getByLabelText = _render6.getByLabelText;

        var picker = getByLabelText('Time');
        expect(picker.tagName).toBe('SELECT');
      });
      it('parses times as string', function () {
        var _render7 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_TimePicker5["default"], {
          label: "Time",
          time: "9:00",
          times: ['8:00', '9:00', '12:00', '14:00', '15:00']
        })),
            getByLabelText = _render7.getByLabelText;

        var picker = getByLabelText('Time');
        expect(picker).toBeInTheDocument();
      });
      it('parses times as an object', function () {
        var _render8 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_TimePicker5["default"], {
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
        var _render9 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_TimePicker5["default"], {
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
            getByLabelText = _render9.getByLabelText,
            container = _render9.container;

        var picker = getByLabelText('Time');
        var options = container.querySelectorAll('option');
        expect(picker.value).toBe(JSON.stringify(['10:15', '12:00']));

        _testUtils.Simulate.change(picker, {
          target: {
            value: options[1].value
          } // EventTarget (test)

        });

        expect(picker.value).toBe(JSON.stringify(['08:00', '09:45']));
      });
      it('checks for list picker onChange', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        var wrapper, _wrapper, getByLabelText, container, picker, options;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
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
                          }, /*#__PURE__*/React.createElement(_TimePicker5["default"], {
                            label: "Time",
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
                            }],
                            render: "custom"
                          })));

                        case 1:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                })));

              case 2:
                _wrapper = wrapper, getByLabelText = _wrapper.getByLabelText, container = _wrapper.container;
                picker = getByLabelText('Time');
                options = container.querySelectorAll('button');
                expect(picker.value).toBe('09:15');
                _context3.next = 8;
                return (0, _testUtils.act)( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
                  return _regenerator["default"].wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          picker.focus();
                          options[1].click();

                        case 2:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                })));

              case 8:
                expect(picker.value).toBe('08:00');

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      })));
      it('updates value and triggers onChange when list picker is selected', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
        var onChangeSpy, wrapper, _wrapper2, getByLabelText, container, picker, options;

        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                onChangeSpy = jest.fn();
                _context6.next = 3;
                return (0, _testUtils.act)( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
                  return _regenerator["default"].wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          wrapper = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_ThemeProvider.ThemeProvider, {
                            override: {
                              isMobile: false,
                              isDesktop: true
                            }
                          }, /*#__PURE__*/React.createElement(_TimePicker5["default"], {
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
                            }],
                            render: "custom"
                          })));

                        case 1:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4);
                })));

              case 3:
                _wrapper2 = wrapper, getByLabelText = _wrapper2.getByLabelText, container = _wrapper2.container;
                picker = getByLabelText('Time');
                options = container.querySelectorAll('button'); // expect(onChangeSpy).not.toHaveBeenCalled()

                expect(picker.value).toBe('09:15');
                _context6.next = 9;
                return (0, _testUtils.act)( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
                  return _regenerator["default"].wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          picker.focus();
                          options[1].click();

                        case 2:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                })));

              case 9:
                expect(onChangeSpy).toHaveBeenCalled();
                expect(picker.value).toBe('08:00');

              case 11:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      })));
    });
  });
  describe('prop: onFocus', function () {
    it('shows list picker popover', function () {
      var onFocusSpy = jest.fn();

      var _render10 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_TimePicker5["default"], {
        onFocus: onFocusSpy,
        label: "Time"
      })),
          getByLabelText = _render10.getByLabelText;

      var picker = getByLabelText('Time');
      expect(onFocusSpy).not.toHaveBeenCalled();

      _testUtils.fireEvent.focus(picker);

      expect(onFocusSpy).toHaveBeenCalled();
    });
  });
  describe('prop: onBlur', function () {
    it('hides list picker popover', function () {
      var onBlurSpy = jest.fn();

      var _render11 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_TimePicker5["default"], {
        onBlur: onBlurSpy,
        label: "Time"
      })),
          getByLabelText = _render11.getByLabelText;

      var picker = getByLabelText('Time');

      _testUtils.fireEvent.focus(picker);

      expect(onBlurSpy).not.toHaveBeenCalled();

      _testUtils.fireEvent.blur(picker);

      expect(onBlurSpy).toHaveBeenCalled();
    });
  });
  describe('prop: onClick', function () {
    it('does not render list without times', function () {
      var onClickSpy = jest.fn();

      var _render12 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_ThemeProvider.ThemeProvider, {
        override: {
          isMobile: false,
          isDesktop: true
        }
      }, /*#__PURE__*/React.createElement(_TimePicker5["default"], {
        onClick: onClickSpy,
        label: "Time"
      }))),
          getByLabelText = _render12.getByLabelText;

      var picker = getByLabelText('Time');
      var list = picker.parentNode.parentNode.nextSibling;
      expect(onClickSpy).not.toHaveBeenCalled();
      expect(list).not.toBeInTheDocument();
    });
    it('shows list picker popover', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9() {
      var onClickSpy, wrapper, _wrapper3, getByLabelText, picker;

      return _regenerator["default"].wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              onClickSpy = jest.fn();
              _context9.next = 3;
              return (0, _testUtils.act)( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7() {
                return _regenerator["default"].wrap(function _callee7$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        wrapper = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_ThemeProvider.ThemeProvider, {
                          override: {
                            isMobile: false,
                            isDesktop: true
                          }
                        }, /*#__PURE__*/React.createElement(_TimePicker5["default"], {
                          delayOpen: 0,
                          onClick: onClickSpy,
                          label: "Time",
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
                        return _context7.stop();
                    }
                  }
                }, _callee7);
              })));

            case 3:
              _wrapper3 = wrapper, getByLabelText = _wrapper3.getByLabelText;
              picker = getByLabelText('Time'); // const list = picker.parentNode.parentNode.parentNode.nextSibling

              expect(onClickSpy).not.toHaveBeenCalled(); // expect(list).not.toBeVisible()

              _context9.next = 8;
              return (0, _testUtils.act)( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8() {
                return _regenerator["default"].wrap(function _callee8$(_context8) {
                  while (1) {
                    switch (_context8.prev = _context8.next) {
                      case 0:
                        picker.click();
                        picker.focus();

                      case 2:
                      case "end":
                        return _context8.stop();
                    }
                  }
                }, _callee8);
              })));

            case 8:
              expect(onClickSpy).toHaveBeenCalled(); // expect(list).toBeVisible()

            case 9:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    })));
    it('hides list picker popover when user clicks away', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13() {
      var onClickSpy, wrapper, _wrapper4, getByLabelText, container, picker;

      return _regenerator["default"].wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              onClickSpy = jest.fn();
              _context13.next = 3;
              return (0, _testUtils.act)( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10() {
                return _regenerator["default"].wrap(function _callee10$(_context10) {
                  while (1) {
                    switch (_context10.prev = _context10.next) {
                      case 0:
                        wrapper = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_ThemeProvider.ThemeProvider, {
                          override: {
                            isMobile: false,
                            isDesktop: true
                          }
                        }, /*#__PURE__*/React.createElement(_TimePicker5["default"], {
                          delayOpen: 0,
                          onClick: onClickSpy,
                          label: "Time",
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
                        return _context10.stop();
                    }
                  }
                }, _callee10);
              })));

            case 3:
              _wrapper4 = wrapper, getByLabelText = _wrapper4.getByLabelText, container = _wrapper4.container;
              picker = getByLabelText('Time'); // const list = picker.parentNode.parentNode.parentNode.nextSibling

              expect(onClickSpy).not.toHaveBeenCalled(); // expect(list).not.toBeVisible()

              _context13.next = 8;
              return (0, _testUtils.act)( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11() {
                return _regenerator["default"].wrap(function _callee11$(_context11) {
                  while (1) {
                    switch (_context11.prev = _context11.next) {
                      case 0:
                        picker.click();
                        picker.focus();

                      case 2:
                      case "end":
                        return _context11.stop();
                    }
                  }
                }, _callee11);
              })));

            case 8:
              expect(onClickSpy).toHaveBeenCalled(); // expect(list).toBeVisible()

              _context13.next = 11;
              return (0, _testUtils.act)( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12() {
                return _regenerator["default"].wrap(function _callee12$(_context12) {
                  while (1) {
                    switch (_context12.prev = _context12.next) {
                      case 0:
                        container.click();

                      case 1:
                      case "end":
                        return _context12.stop();
                    }
                  }
                }, _callee12);
              })));

            case 11:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13);
    })));
  });
  describe('props: onOpen/onClose', function () {
    it('triggers onOpen/onClose when popover opens/closes', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee17() {
      var onOpenSpy, onCloseSpy, wrapper, _wrapper5, getByLabelText, container, picker;

      return _regenerator["default"].wrap(function _callee17$(_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              onOpenSpy = jest.fn();
              onCloseSpy = jest.fn();
              _context17.next = 4;
              return (0, _testUtils.act)( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14() {
                return _regenerator["default"].wrap(function _callee14$(_context14) {
                  while (1) {
                    switch (_context14.prev = _context14.next) {
                      case 0:
                        wrapper = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_ThemeProvider.ThemeProvider, {
                          override: {
                            isMobile: false,
                            isDesktop: true
                          }
                        }, /*#__PURE__*/React.createElement(_TimePicker5["default"], {
                          onOpen: onOpenSpy,
                          onClose: onCloseSpy,
                          label: "Time",
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
                        return _context14.stop();
                    }
                  }
                }, _callee14);
              })));

            case 4:
              _wrapper5 = wrapper, getByLabelText = _wrapper5.getByLabelText, container = _wrapper5.container;
              picker = getByLabelText('Time');
              expect(onOpenSpy).toHaveBeenCalledTimes(0);
              expect(onCloseSpy).toHaveBeenCalledTimes(0);
              _context17.next = 10;
              return (0, _testUtils.act)( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee15() {
                return _regenerator["default"].wrap(function _callee15$(_context15) {
                  while (1) {
                    switch (_context15.prev = _context15.next) {
                      case 0:
                        picker.click();

                      case 1:
                      case "end":
                        return _context15.stop();
                    }
                  }
                }, _callee15);
              })));

            case 10:
              expect(onOpenSpy).toHaveBeenCalledTimes(1);
              expect(onCloseSpy).toHaveBeenCalledTimes(0);
              _context17.next = 14;
              return (0, _testUtils.act)( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee16() {
                return _regenerator["default"].wrap(function _callee16$(_context16) {
                  while (1) {
                    switch (_context16.prev = _context16.next) {
                      case 0:
                        container.click();

                      case 1:
                      case "end":
                        return _context16.stop();
                    }
                  }
                }, _callee16);
              })));

            case 14:
              expect(onOpenSpy).toHaveBeenCalledTimes(1);
              expect(onCloseSpy).toHaveBeenCalledTimes(1);

            case 16:
            case "end":
              return _context17.stop();
          }
        }
      }, _callee17);
    })));
  });
  it('open options on key down', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee20() {
    var wrapper, onKeyDownSpy, _wrapper6, container, input;

    return _regenerator["default"].wrap(function _callee20$(_context20) {
      while (1) {
        switch (_context20.prev = _context20.next) {
          case 0:
            onKeyDownSpy = jest.fn(function (event) {
              return event.persist();
            });
            _context20.next = 3;
            return (0, _testUtils.act)( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee18() {
              return _regenerator["default"].wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      wrapper = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_ThemeProvider.ThemeProvider, {
                        override: {
                          isMobile: false,
                          isDesktop: true
                        }
                      }, /*#__PURE__*/React.createElement(_TimePicker5["default"], {
                        onKeyDown: onKeyDownSpy,
                        label: "Time",
                        className: "main",
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
                      return _context18.stop();
                  }
                }
              }, _callee18);
            })));

          case 3:
            _wrapper6 = wrapper, container = _wrapper6.container;
            input = container.querySelector('.main');
            expect(onKeyDownSpy).not.toHaveBeenCalled();
            _context20.next = 8;
            return (0, _testUtils.act)( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee19() {
              return _regenerator["default"].wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      _testUtils.fireEvent.keyDown(input, {
                        key: 'ArrowDown'
                      });

                    case 1:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19);
            })));

          case 8:
            expect(onKeyDownSpy).toHaveBeenCalledTimes(1);

          case 9:
          case "end":
            return _context20.stop();
        }
      }
    }, _callee20);
  })));
  it('focus in and focus out', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee24() {
    var wrapper, onFocusSpy, _wrapper7, container, input, other;

    return _regenerator["default"].wrap(function _callee24$(_context24) {
      while (1) {
        switch (_context24.prev = _context24.next) {
          case 0:
            onFocusSpy = jest.fn(function (event) {
              return event.persist();
            });
            _context24.next = 3;
            return (0, _testUtils.act)( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee21() {
              return _regenerator["default"].wrap(function _callee21$(_context21) {
                while (1) {
                  switch (_context21.prev = _context21.next) {
                    case 0:
                      wrapper = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_ThemeProvider.ThemeProvider, {
                        override: {
                          isMobile: false,
                          isDesktop: true
                        }
                      }, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_TimePicker5["default"], {
                        onFocus: onFocusSpy,
                        className: "main",
                        delayClose: 0,
                        delayOpen: 0,
                        label: "Time",
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
                      }), _TimePicker4 || (_TimePicker4 = /*#__PURE__*/React.createElement(_TimePicker5["default"], {
                        className: "other"
                      })))));

                    case 1:
                    case "end":
                      return _context21.stop();
                  }
                }
              }, _callee21);
            })));

          case 3:
            _wrapper7 = wrapper, container = _wrapper7.container;
            input = container.querySelector('.main');
            other = container.querySelector('.other');
            expect(onFocusSpy).not.toHaveBeenCalled();
            _context24.next = 9;
            return (0, _testUtils.act)( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee22() {
              return _regenerator["default"].wrap(function _callee22$(_context22) {
                while (1) {
                  switch (_context22.prev = _context22.next) {
                    case 0:
                      _testUtils.fireEvent.click(input);

                    case 1:
                    case "end":
                      return _context22.stop();
                  }
                }
              }, _callee22);
            })));

          case 9:
            expect(onFocusSpy).toHaveBeenCalledTimes(0);
            _context24.next = 12;
            return (0, _testUtils.act)( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee23() {
              return _regenerator["default"].wrap(function _callee23$(_context23) {
                while (1) {
                  switch (_context23.prev = _context23.next) {
                    case 0:
                      _testUtils.fireEvent.focusOut(input, {
                        relatedTarget: other
                      });

                    case 1:
                    case "end":
                      return _context23.stop();
                  }
                }
              }, _callee23);
            })));

          case 12:
            expect(onFocusSpy).toHaveBeenCalledTimes(0);

          case 13:
          case "end":
            return _context24.stop();
        }
      }
    }, _callee24);
  })));
});