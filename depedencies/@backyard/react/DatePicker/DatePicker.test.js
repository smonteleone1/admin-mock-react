"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var React = _interopRequireWildcard(require("react"));

var _testUtils = require("../../test-utils");

var _ThemeProvider = require("../ThemeProvider");

var _DatePicker7 = _interopRequireDefault(require("./DatePicker"));

var _DatePicker, _DatePicker2, _DatePicker3, _DatePicker4, _DatePicker6;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('DatePicker Tests', function () {
  it('renders', function () {
    var _render = (0, _testUtils.render)(_DatePicker || (_DatePicker = /*#__PURE__*/React.createElement(_DatePicker7["default"], {
      label: "Date"
    }))),
        getByLabelText = _render.getByLabelText;

    var picker = getByLabelText('Date');
    expect(picker).toBeInTheDocument();
  });
  describe('prop: dates', function () {
    describe('without', function () {
      it('renders a text input as the native picker', function () {
        var _render2 = (0, _testUtils.render)(_DatePicker2 || (_DatePicker2 = /*#__PURE__*/React.createElement(_DatePicker7["default"], {
          label: "Date"
        }))),
            getByLabelText = _render2.getByLabelText;

        var picker = getByLabelText('Date');
        expect(picker.tagName).toBe('INPUT');
      });
      describe('prop: onChange', function () {
        it('doesnt trigger `onChange` when not defined', function () {
          var onChangeSpy = jest.fn();

          var _render3 = (0, _testUtils.render)(_DatePicker3 || (_DatePicker3 = /*#__PURE__*/React.createElement(_DatePicker7["default"], {
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

          var _render4 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_DatePicker7["default"], {
            label: "Date",
            onChange: onChangeSpy
          })),
              getByLabelText = _render4.getByLabelText;

          var picker = getByLabelText('Date');
          expect(onChangeSpy).not.toHaveBeenCalled();

          _testUtils.fireEvent.change(picker, {
            target: {
              value: '2020-12-01'
            }
          });

          expect(onChangeSpy).toHaveBeenCalled();
        });
        it('doesn\'t trigger `onChange` when invalid value change event occurs', function () {
          var onChangeSpy = jest.fn();

          var _render5 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_DatePicker7["default"], {
            label: "Date",
            onChange: onChangeSpy
          })),
              getByLabelText = _render5.getByLabelText;

          var picker = getByLabelText('Date');
          expect(onChangeSpy).not.toHaveBeenCalled();

          _testUtils.Simulate.change(picker, {
            target: {
              value: '99999999'
            } // EventTarget (test)

          });

          expect(onChangeSpy).not.toHaveBeenCalled();
        });
      });
    });
    describe('with', function () {
      it('renders a select as the native picker', function () {
        var _render6 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_DatePicker7["default"], {
          label: "Date",
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
            getByLabelText = _render6.getByLabelText;

        var picker = getByLabelText('Date');
        expect(picker.tagName).toBe('SELECT');
      });
      it('parses dates as string', function () {
        var _render7 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_DatePicker7["default"], {
          label: "Date",
          date: "2020-07-19",
          dates: ['2020-07-18', '2020-07-19', '2020-07-20', '2020-07-21']
        })),
            getByLabelText = _render7.getByLabelText;

        var picker = getByLabelText('Date');
        expect(picker).toBeInTheDocument();
      });
      it('parses dates as an object', function () {
        var _render8 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_DatePicker7["default"], {
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
      it('checks for list picker onChange', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        var wrapper, _wrapper, getByLabelText, container, picker, day;

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
                          }, _DatePicker4 || (_DatePicker4 = /*#__PURE__*/React.createElement(_DatePicker7["default"], {
                            open: true,
                            label: "Date",
                            date: "2020-07-19",
                            render: "custom"
                          }))));

                        case 1:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                })));

              case 2:
                _wrapper = wrapper, getByLabelText = _wrapper.getByLabelText, container = _wrapper.container;
                picker = getByLabelText('Date');
                day = container.querySelector('[aria-label="Jul 19, 2020"]');
                expect(picker.value).toBe('07/19/2020');
                _context3.next = 8;
                return (0, _testUtils.act)( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
                  return _regenerator["default"].wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          picker.focus();

                          _testUtils.fireEvent.mouseDown(day);

                        case 2:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                })));

              case 8:
                expect(picker.value).toBe('07/19/2020');

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      })));
      it('updates value and triggers onChange when list picker is selected', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
        var _DatePicker5;

        var onChangeSpy, wrapper, _wrapper2, getByLabelText, container, picker, day;

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
                          }, _DatePicker5 || (_DatePicker5 = /*#__PURE__*/React.createElement(_DatePicker7["default"], {
                            open: true,
                            label: "Date",
                            onChange: onChangeSpy,
                            date: "2020-07-19",
                            render: "custom"
                          }))));

                        case 1:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4);
                })));

              case 3:
                _wrapper2 = wrapper, getByLabelText = _wrapper2.getByLabelText, container = _wrapper2.container;
                picker = getByLabelText('Date');
                day = container.querySelector('[aria-label="Jul 19, 2020"]');
                expect(onChangeSpy).toHaveBeenCalledTimes(0);
                expect(picker.value).toBe('07/19/2020');
                _context6.next = 10;
                return (0, _testUtils.act)( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
                  return _regenerator["default"].wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          picker.focus();

                          _testUtils.fireEvent.mouseDown(day);

                        case 2:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                })));

              case 10:
                expect(onChangeSpy).toHaveBeenCalledTimes(1);
                expect(picker.value).toBe('07/19/2020');

              case 12:
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

      var _render9 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_DatePicker7["default"], {
        onFocus: onFocusSpy,
        label: "Date"
      })),
          getByLabelText = _render9.getByLabelText;

      var picker = getByLabelText('Date');
      expect(onFocusSpy).not.toHaveBeenCalled();

      _testUtils.fireEvent.focus(picker);

      expect(onFocusSpy).toHaveBeenCalled();
    });
  });
  describe('prop: onBlur', function () {
    it('hides list picker popover', function () {
      var onBlurSpy = jest.fn();

      var _render10 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_DatePicker7["default"], {
        onBlur: onBlurSpy,
        label: "Date"
      })),
          getByLabelText = _render10.getByLabelText;

      var picker = getByLabelText('Date');

      _testUtils.fireEvent.focus(picker);

      expect(onBlurSpy).not.toHaveBeenCalled();

      _testUtils.fireEvent.blur(picker);

      expect(onBlurSpy).toHaveBeenCalled();
    });
  });
  describe('prop: onClick', function () {
    // it('renders calendar without dates', async () => {
    //     let wrapper
    //     const onClickSpy = jest.fn()
    //     await act(async () => {
    //         wrapper = render(
    //             <ThemeProvider override={{ isMobile: false, isDesktop: true }}>
    //                 <DatePicker
    //                     onClick={onClickSpy}
    //                     label="Date"
    //                     render="custom"
    //                 />
    //             </ThemeProvider>
    //         )
    //     })
    //     const { getAllByLabelText } = wrapper
    //     const picker = getAllByLabelText('Date')[0]
    //     const list = picker.parentNode.parentNode.parentNode.nextSibling
    //     expect(onClickSpy).not.toHaveBeenCalled()
    //     expect(list).toBeInTheDocument()
    // })
    it('shows calendar picker popover', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9() {
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
                        }, /*#__PURE__*/React.createElement(_DatePicker7["default"], {
                          delayOpen: 0,
                          onClick: onClickSpy,
                          label: "Date",
                          dates: ['2020-07-18', '2020-07-19', '2020-07-20', '2020-07-21']
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
              picker = getByLabelText('Date'); // const list = picker.parentNode.parentNode.parentNode.nextSibling

              expect(onClickSpy).not.toHaveBeenCalled(); // expect(list).not.toBeVisible()

              _context9.next = 8;
              return (0, _testUtils.act)( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8() {
                return _regenerator["default"].wrap(function _callee8$(_context8) {
                  while (1) {
                    switch (_context8.prev = _context8.next) {
                      case 0:
                        picker.click();

                      case 1:
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
      var onClickSpy, wrapper, _wrapper4, getAllByLabelText, container, picker;

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
                        }, /*#__PURE__*/React.createElement(_DatePicker7["default"], {
                          delayOpen: 0,
                          onClick: onClickSpy,
                          label: "Date",
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
                        return _context10.stop();
                    }
                  }
                }, _callee10);
              })));

            case 3:
              _wrapper4 = wrapper, getAllByLabelText = _wrapper4.getAllByLabelText, container = _wrapper4.container;
              picker = getAllByLabelText('Date')[0]; // const list = picker.parentNode.parentNode.parentNode.nextSibling

              expect(onClickSpy).not.toHaveBeenCalled(); // expect(list).not.toBeVisible()

              _context13.next = 8;
              return (0, _testUtils.act)( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11() {
                return _regenerator["default"].wrap(function _callee11$(_context11) {
                  while (1) {
                    switch (_context11.prev = _context11.next) {
                      case 0:
                        picker.click();

                      case 1:
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
                        }, /*#__PURE__*/React.createElement(_DatePicker7["default"], {
                          onOpen: onOpenSpy,
                          onClose: onCloseSpy,
                          label: "Date",
                          date: "2020-07-19",
                          disableDates: ['2020-07-18', '2020-07-19', '2020-07-20', '2020-07-21']
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
              picker = getByLabelText('Date');
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
                      }, /*#__PURE__*/React.createElement(_DatePicker7["default"], {
                        onKeyDown: onKeyDownSpy,
                        label: "Date",
                        date: "2020-07-19",
                        disableDates: ['2020-07-18', '2020-07-19', '2020-07-20', '2020-07-21']
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
            input = container.querySelector('input');
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
                      }, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_DatePicker7["default"], {
                        className: "main",
                        delayClose: 0,
                        delayOpen: 0,
                        onFocus: onFocusSpy,
                        label: "Date",
                        date: "2020-07-19",
                        disableDates: ['2020-07-18', '2020-07-19', '2020-07-20', '2020-07-21']
                      }), _DatePicker6 || (_DatePicker6 = /*#__PURE__*/React.createElement(_DatePicker7["default"], {
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
            expect(onFocusSpy).toHaveBeenCalled();
            _context24.next = 9;
            return (0, _testUtils.act)( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee22() {
              return _regenerator["default"].wrap(function _callee22$(_context22) {
                while (1) {
                  switch (_context22.prev = _context22.next) {
                    case 0:
                      _testUtils.fireEvent.focus(input);

                    case 1:
                    case "end":
                      return _context22.stop();
                  }
                }
              }, _callee22);
            })));

          case 9:
            expect(onFocusSpy).toHaveBeenCalledTimes(2);
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
            expect(onFocusSpy).toHaveBeenCalledTimes(2);

          case 13:
          case "end":
            return _context24.stop();
        }
      }
    }, _callee24);
  })));
});