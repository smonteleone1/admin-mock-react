import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";

var _DataTable, _DataTable2, _DataTable3, _DataTable4;

import _regeneratorRuntime from "@babel/runtime/regenerator";
import * as React from 'react';
import { render, act, fireEvent } from '../../test-utils';
import DataTable from './DataTable';
import { columns, fifteen } from './utils/data.names';
describe('DataTable Tests', function () {
  it('renders', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
    var wrapper, _wrapper, getByTestId, table;

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
                        "data-testid": "data-table",
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
            _wrapper = wrapper, getByTestId = _wrapper.getByTestId;
            table = getByTestId('data-table');
            expect(table).toBeInTheDocument();

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  it('default filters text startsWith', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee6() {
    var wrapper, _wrapper2, container, results, search, clear;

    return _regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            jest.useFakeTimers();
            _context6.next = 3;
            return act( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
              return _regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      wrapper = render(_DataTable2 || (_DataTable2 = /*#__PURE__*/React.createElement(DataTable, {
                        "data-testid": "data-table",
                        columns: columns,
                        data: fifteen,
                        enableFilters: true
                      })));

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            })));

          case 3:
            _wrapper2 = wrapper, container = _wrapper2.container;
            search = container.querySelector('.firstName-filter');
            results = container.querySelectorAll('.data-table-body-row');
            expect(results.length).toBe(10);
            _context6.next = 9;
            return act( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4() {
              return _regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      fireEvent.change(search, {
                        target: {
                          value: 'hellfire'
                        }
                      });
                      jest.runAllTimers();

                    case 2:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4);
            })));

          case 9:
            results = container.querySelectorAll('.data-table-body-row');
            expect(results.length).toBe(2);
            clear = container.querySelector('.firstName-filter + div > .search--clear');
            _context6.next = 14;
            return act( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5() {
              return _regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      fireEvent.click(clear);
                      jest.runAllTimers();

                    case 2:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5);
            })));

          case 14:
            expect(results.length).toBe(2);

          case 15:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  })));
  it('default filters text contains', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee10() {
    var wrapper, _wrapper3, container, results, search, clear;

    return _regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            jest.useFakeTimers();
            _context10.next = 3;
            return act( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee7() {
              return _regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      wrapper = render(_DataTable3 || (_DataTable3 = /*#__PURE__*/React.createElement(DataTable, {
                        "data-testid": "data-table",
                        columns: columns,
                        data: fifteen,
                        enableFilters: true
                      })));

                    case 1:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7);
            })));

          case 3:
            _wrapper3 = wrapper, container = _wrapper3.container;
            search = container.querySelector('.lastName-filter');
            results = container.querySelectorAll('.data-table-body-row');
            expect(results.length).toBe(10);
            _context10.next = 9;
            return act( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee8() {
              return _regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      fireEvent.change(search, {
                        target: {
                          value: 'beard'
                        }
                      });
                      jest.runAllTimers();

                    case 2:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8);
            })));

          case 9:
            results = container.querySelectorAll('.data-table-body-row');
            expect(results.length).toBe(1);
            clear = container.querySelector('.lastName-filter + div > .search--clear');
            _context10.next = 14;
            return act( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee9() {
              return _regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      fireEvent.click(clear);
                      jest.runAllTimers();

                    case 2:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9);
            })));

          case 14:
            expect(results.length).toBe(1);

          case 15:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  })));
  it('default filters select equals', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee14() {
    var wrapper, _wrapper4, container, results, search;

    return _regeneratorRuntime.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            jest.useFakeTimers();
            _context14.next = 3;
            return act( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee11() {
              return _regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      wrapper = render(_DataTable4 || (_DataTable4 = /*#__PURE__*/React.createElement(DataTable, {
                        "data-testid": "data-table",
                        columns: columns,
                        data: fifteen,
                        enableFilters: true
                      })));

                    case 1:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11);
            })));

          case 3:
            _wrapper4 = wrapper, container = _wrapper4.container;
            search = container.querySelector('.status-filter');
            results = container.querySelectorAll('.data-table-body-row');
            expect(results.length).toBe(10);
            _context14.next = 9;
            return act( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee12() {
              return _regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      fireEvent.change(search, {
                        target: {
                          value: 'single'
                        }
                      });
                      jest.runAllTimers();

                    case 2:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12);
            })));

          case 9:
            results = container.querySelectorAll('.data-table-body-row');
            expect(results.length).toBe(3);
            _context14.next = 13;
            return act( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee13() {
              return _regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      fireEvent.change(search, {
                        target: {
                          value: ''
                        }
                      });
                      jest.runAllTimers();

                    case 2:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13);
            })));

          case 13:
            expect(results.length).toBe(3);

          case 14:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14);
  })));
  it('default row selection', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee18() {
    var _DataTable5;

    var wrapper, onSelectSpy, _wrapper5, container, select;

    return _regeneratorRuntime.wrap(function _callee18$(_context18) {
      while (1) {
        switch (_context18.prev = _context18.next) {
          case 0:
            onSelectSpy = jest.fn();
            jest.useFakeTimers();
            _context18.next = 4;
            return act( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee15() {
              return _regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      wrapper = render(_DataTable5 || (_DataTable5 = /*#__PURE__*/React.createElement(DataTable, {
                        "data-testid": "data-table",
                        columns: columns,
                        data: fifteen,
                        enableFilters: true,
                        enableRowSelection: true,
                        onSelect: onSelectSpy
                      })));

                    case 1:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15);
            })));

          case 4:
            _wrapper5 = wrapper, container = _wrapper5.container;
            select = container.querySelector('.row-selection-all');
            expect(onSelectSpy).toHaveBeenCalledTimes(1);
            _context18.next = 9;
            return act( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee16() {
              return _regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      fireEvent.click(select);
                      jest.runAllTimers();

                    case 2:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16);
            })));

          case 9:
            expect(onSelectSpy).toHaveBeenCalledTimes(2);
            _context18.next = 12;
            return act( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee17() {
              return _regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      fireEvent.click(select);
                      jest.runAllTimers();

                    case 2:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17);
            })));

          case 12:
            expect(onSelectSpy).toHaveBeenCalledTimes(3);

          case 13:
          case "end":
            return _context18.stop();
        }
      }
    }, _callee18);
  })));
});