"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var React = _interopRequireWildcard(require("react"));

var _testUtils = require("../../test-utils");

var _ThemeProvider2 = require("../ThemeProvider");

var _FormControl2 = _interopRequireDefault(require("../FormControl"));

var _FormHelperText = _interopRequireDefault(require("../FormHelperText"));

var _TimePicker3 = _interopRequireDefault(require("./TimePicker"));

var _TimePicker, _FormControl, _TimePicker2;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('TimePicker Snapshots', function () {
  test('default snapshot', function () {
    var _render = (0, _testUtils.render)(_TimePicker || (_TimePicker = /*#__PURE__*/React.createElement(_TimePicker3["default"], null))),
        asFragment = _render.asFragment;

    expect(asFragment()).toMatchSnapshot();
  });
  test('with helper text', function () {
    var _render2 = (0, _testUtils.render)(_FormControl || (_FormControl = /*#__PURE__*/React.createElement(_FormControl2["default"], null, /*#__PURE__*/React.createElement(_TimePicker3["default"], null), /*#__PURE__*/React.createElement(_FormHelperText["default"], null, "Text Input Helper")))),
        asFragment = _render2.asFragment;

    expect(asFragment()).toMatchSnapshot();
  });
  describe('themes', function () {
    var themes = ['light', 'dark'];
    themes.forEach(function (theme) {
      var _ThemeProvider;

      test("TimePicker ".concat(theme, " theme snapshot"), function () {
        var _render3 = (0, _testUtils.render)(_ThemeProvider || (_ThemeProvider = /*#__PURE__*/React.createElement(_ThemeProvider2.ThemeProvider, {
          theme: theme
        }, _TimePicker2 || (_TimePicker2 = /*#__PURE__*/React.createElement(_TimePicker3["default"], null))))),
            asFragment = _render3.asFragment;

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('prop: times', function () {
    test("TimePicker times snapshot", function () {
      var _render4 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_TimePicker3["default"], {
        defaultValue: "8:00",
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
        }, {
          label: 'Afternoon 1:15 PM',
          value: '13:15',
          disabled: true
        }, {
          label: 'Afternoon 1:45 PM',
          value: '13:45'
        }, {
          label: 'Afternoon 3:00 PM',
          value: '15:00',
          disabled: true
        }, {
          label: 'Evening 5:00 PM',
          value: '18:00'
        }, {
          label: 'Evening 5:45 PM',
          value: '18:45'
        }]
      })),
          asFragment = _render4.asFragment;

      expect(asFragment()).toMatchSnapshot();
    });
    test("TimePicker times desktop snapshot", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
      var wrapper, _wrapper, asFragment;

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
                        wrapper = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_ThemeProvider2.ThemeProvider, {
                          override: {
                            isMobile: false,
                            isDesktop: true
                          }
                        }, /*#__PURE__*/React.createElement(_TimePicker3["default"], {
                          defaultValue: "8:00",
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
                          }, {
                            label: 'Afternoon 1:15 PM',
                            value: '13:15',
                            disabled: true
                          }, {
                            label: 'Afternoon 1:45 PM',
                            value: '13:45'
                          }, {
                            label: 'Afternoon 3:00 PM',
                            value: '15:00',
                            disabled: true
                          }, {
                            label: 'Evening 5:00 PM',
                            value: '18:00'
                          }, {
                            label: 'Evening 5:45 PM',
                            value: '18:45'
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
          test("DatePicker render=".concat(type, " viewport=").concat(viewport, " theme snapshot"), /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
            var wrapper, _wrapper2, asFragment;

            return _regenerator["default"].wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return (0, _testUtils.act)( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
                      return _regenerator["default"].wrap(function _callee3$(_context3) {
                        while (1) {
                          switch (_context3.prev = _context3.next) {
                            case 0:
                              wrapper = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_ThemeProvider2.ThemeProvider, {
                                override: overrides[viewport]
                              }, /*#__PURE__*/React.createElement(_TimePicker3["default"], {
                                render: type,
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
                                }, {
                                  label: 'Afternoon 1:15 PM',
                                  value: '13:15',
                                  disabled: true
                                }, {
                                  label: 'Afternoon 1:45 PM',
                                  value: '13:45'
                                }, {
                                  label: 'Afternoon 3:00 PM',
                                  value: '15:00',
                                  disabled: true
                                }, {
                                  label: 'Evening 5:00 PM',
                                  value: '18:00'
                                }, {
                                  label: 'Evening 5:45 PM',
                                  value: '18:45'
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
        });
      });
    });
  });
});