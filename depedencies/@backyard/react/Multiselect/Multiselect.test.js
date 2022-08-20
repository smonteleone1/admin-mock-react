"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var React = _interopRequireWildcard(require("react"));

var _testUtils = require("../../test-utils");

var _ThemeProvider = _interopRequireDefault(require("../ThemeProvider"));

var _Multiselect = _interopRequireDefault(require("./Multiselect"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('Multiselect Tests', function () {
  it('renders', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    var wrapper, _wrapper, getByTestId, dropdown;

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
                      wrapper = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_Multiselect["default"], {
                        open: true,
                        "data-testid": "dropdown",
                        options: [{
                          label: 'Option 1',
                          value: '1'
                        }, {
                          label: 'Option 2',
                          value: '2'
                        }, {
                          label: 'Option 3',
                          value: '3'
                        }, {
                          label: 'Option 4',
                          value: '4'
                        }]
                      }));

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            })));

          case 2:
            _wrapper = wrapper, getByTestId = _wrapper.getByTestId;
            dropdown = getByTestId('dropdown');
            expect(dropdown).toBeInTheDocument();

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  it('updates selected on change', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
    var wrapper, onChangeSpy, _wrapper2, getAllByRole, _getAllByRole, _getAllByRole2, item0, item1, item2, item3;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            onChangeSpy = jest.fn();
            _context5.next = 3;
            return (0, _testUtils.act)( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
              return _regenerator["default"].wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      wrapper = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_Multiselect["default"], {
                        open: true,
                        "data-testid": "dropdown",
                        options: [{
                          label: 'Option 1',
                          value: '1'
                        }, {
                          label: 'Option 2',
                          value: '2'
                        }, {
                          label: 'Option 3',
                          value: '3'
                        }, {
                          label: 'Option 4',
                          value: '4'
                        }],
                        onChange: onChangeSpy
                      }));

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            })));

          case 3:
            _wrapper2 = wrapper, getAllByRole = _wrapper2.getAllByRole;
            _getAllByRole = getAllByRole('checkbox'), _getAllByRole2 = (0, _slicedToArray2["default"])(_getAllByRole, 4), item0 = _getAllByRole2[0], item1 = _getAllByRole2[1], item2 = _getAllByRole2[2], item3 = _getAllByRole2[3];
            expect(item0.checked).toEqual(false);
            expect(item1.checked).toEqual(false);
            expect(item2.checked).toEqual(false);
            expect(item3.checked).toEqual(false);
            expect(onChangeSpy).not.toHaveBeenCalled();
            _context5.next = 12;
            return (0, _testUtils.act)( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
              return _regenerator["default"].wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _testUtils.fireEvent.click(item1);

                    case 1:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4);
            })));

          case 12:
            expect(item0.checked).toEqual(true);
            expect(item1.checked).toEqual(true);
            expect(item2.checked).toEqual(false);
            expect(item3.checked).toEqual(false);
            expect(onChangeSpy).toHaveBeenCalledTimes(1);

          case 17:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  })));
  it('hides options on mouse down', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8() {
    var wrapper, onMouseDownSpy, _wrapper3, container, select;

    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            onMouseDownSpy = jest.fn();
            _context8.next = 3;
            return (0, _testUtils.act)( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
              return _regenerator["default"].wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      wrapper = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_Multiselect["default"], {
                        open: true,
                        "data-testid": "dropdown",
                        options: [{
                          label: 'Option 1',
                          value: '1'
                        }, {
                          label: 'Option 2',
                          value: '2'
                        }, {
                          label: 'Option 3',
                          value: '3'
                        }, {
                          label: 'Option 4',
                          value: '4'
                        }],
                        onMouseDown: onMouseDownSpy
                      }));

                    case 1:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6);
            })));

          case 3:
            _wrapper3 = wrapper, container = _wrapper3.container;
            select = container.querySelector('select');
            expect(onMouseDownSpy).not.toHaveBeenCalled();
            _context8.next = 8;
            return (0, _testUtils.act)( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7() {
              return _regenerator["default"].wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _testUtils.fireEvent.mouseDown(select);

                    case 1:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7);
            })));

          case 8:
            expect(onMouseDownSpy).toHaveBeenCalledTimes(1);

          case 9:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  })));
  it('triggers blur event', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11() {
    var wrapper, onBlurSpy, _wrapper4, container, select;

    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            onBlurSpy = jest.fn(function (event) {
              return event.persist();
            });
            _context11.next = 3;
            return (0, _testUtils.act)( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9() {
              return _regenerator["default"].wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      wrapper = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_Multiselect["default"], {
                        open: true,
                        "data-testid": "dropdown",
                        options: [{
                          label: 'Option 1',
                          value: '1'
                        }, {
                          label: 'Option 2',
                          value: '2'
                        }, {
                          label: 'Option 3',
                          value: '3'
                        }, {
                          label: 'Option 4',
                          value: '4'
                        }],
                        onBlur: onBlurSpy
                      }));

                    case 1:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9);
            })));

          case 3:
            _wrapper4 = wrapper, container = _wrapper4.container;
            select = container.querySelector('select');
            expect(onBlurSpy).not.toHaveBeenCalled();
            _context11.next = 8;
            return (0, _testUtils.act)( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10() {
              return _regenerator["default"].wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _testUtils.fireEvent.blur(select);

                    case 1:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10);
            })));

          case 8:
            expect(onBlurSpy).toHaveBeenCalledTimes(1);

          case 9:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  })));
  it('open options on key down', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14() {
    var wrapper, onKeyDownSpy, _wrapper5, container, select;

    return _regenerator["default"].wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            onKeyDownSpy = jest.fn(function (event) {
              return event.persist();
            });
            _context14.next = 3;
            return (0, _testUtils.act)( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12() {
              return _regenerator["default"].wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      wrapper = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_Multiselect["default"], {
                        "data-testid": "dropdown",
                        options: [{
                          label: 'Option 1',
                          value: '1'
                        }, {
                          label: 'Option 2',
                          value: '2'
                        }, {
                          label: 'Option 3',
                          value: '3'
                        }, {
                          label: 'Option 4',
                          value: '4'
                        }],
                        onKeyDown: onKeyDownSpy
                      }));

                    case 1:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12);
            })));

          case 3:
            _wrapper5 = wrapper, container = _wrapper5.container;
            select = container.querySelector('select');
            expect(onKeyDownSpy).not.toHaveBeenCalled();
            _context14.next = 8;
            return (0, _testUtils.act)( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13() {
              return _regenerator["default"].wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      _testUtils.fireEvent.keyDown(select, {
                        key: 'Enter'
                      });

                    case 1:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13);
            })));

          case 8:
            expect(onKeyDownSpy).toHaveBeenCalledTimes(1);

          case 9:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14);
  })));
  it('read only mousedown desktop', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee17() {
    var wrapper, onFocusSpy, _wrapper6, container, select;

    return _regenerator["default"].wrap(function _callee17$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            onFocusSpy = jest.fn();
            _context17.next = 3;
            return (0, _testUtils.act)( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee15() {
              return _regenerator["default"].wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      wrapper = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_ThemeProvider["default"], {
                        override: {
                          isMobile: false,
                          isDesktop: true
                        }
                      }, /*#__PURE__*/React.createElement(_Multiselect["default"], {
                        "data-testid": "dropdown",
                        options: [{
                          label: 'Option 1',
                          value: '1'
                        }, {
                          label: 'Option 2',
                          value: '2'
                        }, {
                          label: 'Option 3',
                          value: '3'
                        }, {
                          label: 'Option 4',
                          value: '4'
                        }],
                        onFocus: onFocusSpy
                      })));

                    case 1:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15);
            })));

          case 3:
            _wrapper6 = wrapper, container = _wrapper6.container;
            select = container.querySelector('select');
            expect(onFocusSpy).not.toHaveBeenCalled();
            _context17.next = 8;
            return (0, _testUtils.act)( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee16() {
              return _regenerator["default"].wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      _testUtils.fireEvent.mouseDown(select);

                    case 1:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16);
            })));

          case 8:
            expect(onFocusSpy).toHaveBeenCalledTimes(1);

          case 9:
          case "end":
            return _context17.stop();
        }
      }
    }, _callee17);
  })));
});