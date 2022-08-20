"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var React = _interopRequireWildcard(require("react"));

var _testUtils = require("../../test-utils");

var _icons = require("@backyard/icons");

var _ = require("../");

var _data = require("./utils/data.names");

var _DataTable, _DataTable2, _Button, _Button2, _MenuPopover;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('DataTable Snapshots', function () {
  test("default snapshot", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
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
                      wrapper = (0, _testUtils.render)(_DataTable || (_DataTable = /*#__PURE__*/React.createElement(_.DataTable, {
                        columns: _data.columns,
                        data: _data.fifteen
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
  describe('themes', function () {
    var themes = ['light', 'dark'];
    themes.forEach(function (theme) {
      var _ThemeProvider;

      test("theme ".concat(theme, " snapshot"), /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
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
                          wrapper = (0, _testUtils.render)(_ThemeProvider || (_ThemeProvider = /*#__PURE__*/React.createElement(_.ThemeProvider, {
                            theme: theme
                          }, _DataTable2 || (_DataTable2 = /*#__PURE__*/React.createElement(_.DataTable, {
                            columns: _data.columns,
                            data: _data.fifteen
                          })))));

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
  test("feature snapshot", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
    var wrapper, filters, sortBy, _wrapper3, asFragment;

    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            filters = [{
              id: 'firstName',
              value: 'hellfire'
            }, {
              id: 'lastName',
              value: 'strap'
            }];
            sortBy = [{
              id: 'lastName',
              desc: true
            }, {
              id: 'age',
              asc: true
            }];
            _context6.next = 4;
            return (0, _testUtils.act)( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
              return _regenerator["default"].wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      wrapper = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_.DataTable, {
                        columns: _data.columns,
                        data: _data.fifteen,
                        enableSortBy: true,
                        enableRowSelection: true,
                        enableRowExpansion: true,
                        enableZebraStripes: true,
                        showToolbar: true,
                        enableFilters: true,
                        enableSearch: true,
                        filters: filters,
                        sortBy: sortBy,
                        globalFilter: "ll",
                        toolbar: [_Button || (_Button = /*#__PURE__*/React.createElement(_.Button, {
                          variant: "secondary",
                          color: "interactive",
                          size: "small"
                        }, "Approve")), _Button2 || (_Button2 = /*#__PURE__*/React.createElement(_.Button, {
                          variant: "secondary",
                          color: "red",
                          size: "small"
                        }, "Deny")), _MenuPopover || (_MenuPopover = /*#__PURE__*/React.createElement(_.MenuPopover, {
                          menu: /*#__PURE__*/React.createElement(_.Menu, null, /*#__PURE__*/React.createElement(_.MenuItem, {
                            variant: "ghost",
                            color: "interactive",
                            iconBefore: /*#__PURE__*/React.createElement(_icons.CheckCircleFilled, null)
                          }, "Approve"), /*#__PURE__*/React.createElement(_.MenuItem, {
                            variant: "ghost",
                            color: "red",
                            iconBefore: /*#__PURE__*/React.createElement(_icons.CloseCircleFilled, null)
                          }, "Deny"))
                        }, /*#__PURE__*/React.createElement(_.Button, {
                          variant: "ghost",
                          color: "interactive",
                          size: "small",
                          iconBefore: /*#__PURE__*/React.createElement(_icons.PhotosOutlined, null)
                        }, "Actions")))],
                        menuItems: [{
                          label: 'Apply Filters'
                        }, {
                          label: 'Clear Filters'
                        }, {
                          label: 'Apply Sorting'
                        }, {
                          label: 'Clear Sorting'
                        }, {
                          label: 'Clear Selections'
                        }],
                        selectedRowIds: {
                          1: true
                        },
                        expanded: {
                          0: true
                        },
                        rowsPerPageOptions: [10, 20, 50, 100]
                      }));

                    case 1:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5);
            })));

          case 4:
            _wrapper3 = wrapper, asFragment = _wrapper3.asFragment;
            expect(asFragment()).toMatchSnapshot();

          case 6:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  })));
});