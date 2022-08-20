import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";

var _DataTable, _DataTable2, _Button, _Button2, _MenuPopover;

import _regeneratorRuntime from "@babel/runtime/regenerator";
import * as React from 'react';
import { act, render } from '../../test-utils';
import { PhotosOutlined as PhotosIcon, CheckCircleFilled as CheckCircleFilledIcon, CloseCircleFilled as CloseCircleFilledIcon } from '@backyard/icons';
import { ThemeProvider, DataTable, Button, Menu, MenuItem, MenuPopover } from '../';
import { columns, fifteen } from './utils/data.names';
describe('DataTable Snapshots', function () {
  test("default snapshot", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
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
                      wrapper = render(_DataTable || (_DataTable = /*#__PURE__*/React.createElement(DataTable, {
                        columns: columns,
                        data: fifteen
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

      test("theme ".concat(theme, " snapshot"), /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4() {
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
                          wrapper = render(_ThemeProvider || (_ThemeProvider = /*#__PURE__*/React.createElement(ThemeProvider, {
                            theme: theme
                          }, _DataTable2 || (_DataTable2 = /*#__PURE__*/React.createElement(DataTable, {
                            columns: columns,
                            data: fifteen
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
  test("feature snapshot", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee6() {
    var wrapper, filters, sortBy, _wrapper3, asFragment;

    return _regeneratorRuntime.wrap(function _callee6$(_context6) {
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
            return act( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5() {
              return _regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      wrapper = render( /*#__PURE__*/React.createElement(DataTable, {
                        columns: columns,
                        data: fifteen,
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
                        toolbar: [_Button || (_Button = /*#__PURE__*/React.createElement(Button, {
                          variant: "secondary",
                          color: "interactive",
                          size: "small"
                        }, "Approve")), _Button2 || (_Button2 = /*#__PURE__*/React.createElement(Button, {
                          variant: "secondary",
                          color: "red",
                          size: "small"
                        }, "Deny")), _MenuPopover || (_MenuPopover = /*#__PURE__*/React.createElement(MenuPopover, {
                          menu: /*#__PURE__*/React.createElement(Menu, null, /*#__PURE__*/React.createElement(MenuItem, {
                            variant: "ghost",
                            color: "interactive",
                            iconBefore: /*#__PURE__*/React.createElement(CheckCircleFilledIcon, null)
                          }, "Approve"), /*#__PURE__*/React.createElement(MenuItem, {
                            variant: "ghost",
                            color: "red",
                            iconBefore: /*#__PURE__*/React.createElement(CloseCircleFilledIcon, null)
                          }, "Deny"))
                        }, /*#__PURE__*/React.createElement(Button, {
                          variant: "ghost",
                          color: "interactive",
                          size: "small",
                          iconBefore: /*#__PURE__*/React.createElement(PhotosIcon, null)
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