import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";

var _DatePicker, _FormControl, _DatePicker2;

import _regeneratorRuntime from "@babel/runtime/regenerator";
import * as React from 'react';
import { render, act } from '../../test-utils';
import { ThemeProvider } from '../ThemeProvider';
import FormControl from '../FormControl';
import FormHelperText from '../FormHelperText';
import DatePicker from './DatePicker';
describe('DatePicker Snapshots', function () {
  test('default snapshot', function () {
    var _render = render(_DatePicker || (_DatePicker = /*#__PURE__*/React.createElement(DatePicker, null))),
        asFragment = _render.asFragment;

    expect(asFragment()).toMatchSnapshot();
  });
  test('with helper text', function () {
    var _render2 = render(_FormControl || (_FormControl = /*#__PURE__*/React.createElement(FormControl, null, /*#__PURE__*/React.createElement(DatePicker, null), /*#__PURE__*/React.createElement(FormHelperText, null, "Text Input Helper")))),
        asFragment = _render2.asFragment;

    expect(asFragment()).toMatchSnapshot();
  });
  describe('themes', function () {
    var themes = ['light', 'dark'];
    themes.forEach(function (theme) {
      var _ThemeProvider;

      test("DatePicker ".concat(theme, " theme snapshot"), function () {
        var _render3 = render(_ThemeProvider || (_ThemeProvider = /*#__PURE__*/React.createElement(ThemeProvider, {
          theme: theme
        }, _DatePicker2 || (_DatePicker2 = /*#__PURE__*/React.createElement(DatePicker, null))))),
            asFragment = _render3.asFragment;

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('prop: dates', function () {
    test("DatePicker dates snapshot", function () {
      var _render4 = render( /*#__PURE__*/React.createElement(DatePicker, {
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
          asFragment = _render4.asFragment;

      expect(asFragment()).toMatchSnapshot();
    });
    test("DatePicker dates desktop snapshot", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
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
                        }, /*#__PURE__*/React.createElement(DatePicker, {
                          date: "2020-05-19",
                          minDate: "2020-05-18",
                          maxDate: "2020-05-20",
                          dates: [{
                            label: 'Yesterday 8:00 AM',
                            value: '2020-05-18'
                          }, {
                            label: 'Today 9:15 AM',
                            value: '2020-05-19'
                          }, {
                            label: 'Tomorrow 9:45 AM',
                            value: '2020-05-20',
                            disabled: true
                          }, {
                            label: 'Next Day 10:15 AM',
                            value: '2020-05-21'
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
    describe('render type', function () {
      var types = ['custom', 'native'];
      var viewports = ['desktop', 'mobile'];
      var overrides = {
        desktop: {
          isMobile: false,
          isDesktop: true
        },
        mobile: {
          isMobile: true,
          isDesktop: false
        }
      };
      viewports.forEach(function (viewport) {
        types.forEach(function (type) {
          var _DatePicker3;

          test("DatePicker render=".concat(type, " viewport=").concat(viewport, " theme snapshot"), /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4() {
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
                                override: overrides[viewport]
                              }, _DatePicker3 || (_DatePicker3 = /*#__PURE__*/React.createElement(DatePicker, {
                                render: type,
                                date: "2021-01-01"
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
        });
      });
    });
  });
});