import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";

var _Multiselect, _Multiselect2, _Multiselect3;

import _regeneratorRuntime from "@babel/runtime/regenerator";
import * as React from 'react';
import { render, act } from '../../test-utils';
import { ThemeProvider } from '../ThemeProvider';
import Option from '../Select/Option';
import OptionGroup from '../Select/OptionGroup';
import Multiselect from './Multiselect';
describe('Multiselect Snapshots', function () {
  test('render on desktop', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
    var wrapper, _wrapper, asFragment;

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
                      }, /*#__PURE__*/React.createElement(Multiselect, {
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
                      })));

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            })));

          case 2:
            _wrapper = wrapper, asFragment = _wrapper.asFragment;
            expect(asFragment()).toMatchSnapshot();

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  test('render on mobile', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4() {
    var wrapper, _wrapper2, asFragment;

    return _regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return act( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
              return _regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      wrapper = render( /*#__PURE__*/React.createElement(ThemeProvider, {
                        override: {
                          isMobile: true,
                          isDesktop: false
                        }
                      }, /*#__PURE__*/React.createElement(Multiselect, {
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
                      })));

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            })));

          case 2:
            _wrapper2 = wrapper, asFragment = _wrapper2.asFragment;
            expect(asFragment()).toMatchSnapshot();

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  })));
  test('render no options', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee6() {
    var wrapper, _wrapper3, asFragment;

    return _regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return act( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5() {
              return _regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      wrapper = render( /*#__PURE__*/React.createElement(ThemeProvider, {
                        override: {
                          isMobile: true,
                          isDesktop: false
                        }
                      }, _Multiselect || (_Multiselect = /*#__PURE__*/React.createElement(Multiselect, {
                        "data-testid": "dropdown"
                      }))));

                    case 1:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5);
            })));

          case 2:
            _wrapper3 = wrapper, asFragment = _wrapper3.asFragment;
            expect(asFragment()).toMatchSnapshot();

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  })));
  test('render children', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee8() {
    var wrapper, _wrapper4, asFragment;

    return _regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return act( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee7() {
              return _regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      wrapper = render( /*#__PURE__*/React.createElement(ThemeProvider, {
                        override: {
                          isMobile: true,
                          isDesktop: false
                        }
                      }, _Multiselect2 || (_Multiselect2 = /*#__PURE__*/React.createElement(Multiselect, {
                        "data-testid": "dropdown"
                      }, /*#__PURE__*/React.createElement(Option, {
                        value: "1"
                      }, "Option 1"), /*#__PURE__*/React.createElement(Option, {
                        value: "2"
                      }, "Option 2"), /*#__PURE__*/React.createElement(Option, {
                        value: "3"
                      }, "Option 3"), /*#__PURE__*/React.createElement(Option, {
                        value: "4"
                      }, "Option 4")))));

                    case 1:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7);
            })));

          case 2:
            _wrapper4 = wrapper, asFragment = _wrapper4.asFragment;
            expect(asFragment()).toMatchSnapshot();

          case 4:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  })));
  test('render option group children', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee10() {
    var wrapper, _wrapper5, asFragment;

    return _regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return act( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee9() {
              return _regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      wrapper = render( /*#__PURE__*/React.createElement(ThemeProvider, {
                        override: {
                          isMobile: true,
                          isDesktop: false
                        }
                      }, _Multiselect3 || (_Multiselect3 = /*#__PURE__*/React.createElement(Multiselect, {
                        "data-testid": "dropdown"
                      }, /*#__PURE__*/React.createElement(Option, {
                        value: "1"
                      }, "Option 1"), /*#__PURE__*/React.createElement(Option, {
                        value: "2"
                      }, "Option 2"), /*#__PURE__*/React.createElement(OptionGroup, {
                        label: "List Group 1"
                      }, /*#__PURE__*/React.createElement(Option, {
                        value: "3"
                      }, "List Option 3"), /*#__PURE__*/React.createElement(Option, {
                        value: "4"
                      }, "List Option 4"))))));

                    case 1:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9);
            })));

          case 2:
            _wrapper5 = wrapper, asFragment = _wrapper5.asFragment;
            expect(asFragment()).toMatchSnapshot();

          case 4:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  })));
  test('render option group options', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee12() {
    var wrapper, _wrapper6, asFragment;

    return _regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.next = 2;
            return act( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee11() {
              return _regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      wrapper = render( /*#__PURE__*/React.createElement(ThemeProvider, {
                        override: {
                          isMobile: false,
                          isDesktop: true
                        }
                      }, /*#__PURE__*/React.createElement(Multiselect, {
                        open: true,
                        "data-testid": "dropdown",
                        options: [{
                          label: 'Option 1',
                          value: '1'
                        }, {
                          label: 'Option 2',
                          value: '2'
                        }, {
                          label: 'List Group 1',
                          options: [{
                            label: 'List Option 3',
                            value: '3'
                          }, {
                            label: 'List Option 4',
                            value: '4'
                          }]
                        }]
                      })));

                    case 1:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11);
            })));

          case 2:
            _wrapper6 = wrapper, asFragment = _wrapper6.asFragment;
            expect(asFragment()).toMatchSnapshot();

          case 4:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  })));
});