import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";

var _ThemeProvider, _ThemeProvider2, _ThemeProvider3, _ThemeProvider4;

import _regeneratorRuntime from "@babel/runtime/regenerator";
import * as React from 'react';
import { render, act } from '../../../test-utils';
import { ThemeProvider } from '../../ThemeProvider';
import TextAreaSkeleton from './TextAreaSkeleton';
describe('TextAreaSkeleton Snapshots', function () {
  test('renders', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
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
                      wrapper = render(_ThemeProvider || (_ThemeProvider = /*#__PURE__*/React.createElement(ThemeProvider, null, /*#__PURE__*/React.createElement(TextAreaSkeleton, {
                        animate: true
                      }))));

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
  test('renders with helper text', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4() {
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
                      wrapper = render(_ThemeProvider2 || (_ThemeProvider2 = /*#__PURE__*/React.createElement(ThemeProvider, null, /*#__PURE__*/React.createElement(TextAreaSkeleton, {
                        animate: true,
                        helperText: true
                      }))));

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
  test('renders with max', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee6() {
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
                      wrapper = render(_ThemeProvider3 || (_ThemeProvider3 = /*#__PURE__*/React.createElement(ThemeProvider, null, /*#__PURE__*/React.createElement(TextAreaSkeleton, {
                        animate: true,
                        max: true
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
  test('renders with max and helper text', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee8() {
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
                      wrapper = render(_ThemeProvider4 || (_ThemeProvider4 = /*#__PURE__*/React.createElement(ThemeProvider, null, /*#__PURE__*/React.createElement(TextAreaSkeleton, {
                        animate: true,
                        max: true,
                        helperText: true
                      }))));

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
  test('rows snapshots', function () {
    var rows = [4, 8, 12];
    rows.forEach(function (row) {
      var _render = render( /*#__PURE__*/React.createElement(TextAreaSkeleton, {
        rows: row
      })),
          asFragment = _render.asFragment;

      expect(asFragment()).toMatchSnapshot();
    });
  });
});