import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";

var _DataTable, _DataTable2;

import _regeneratorRuntime from "@babel/runtime/regenerator";
import * as React from 'react';
import { render, fireEvent } from '../../../test-utils';
import DataTable from '../DataTable';
import { columns, fifteen } from '../utils/data.names';
describe('DataTableToolbarTests', function () {
  it('renders', function () {
    var _render = render( /*#__PURE__*/React.createElement(DataTable, {
      columns: [],
      data: [],
      showToolbar: true
    })),
        container = _render.container;

    var component = container.querySelector('.data-table-toolbar');
    expect(component).toBeInTheDocument();
  });
  it('shows the filters', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var _render2, container, filterButton, dataTableHeaderRows;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _render2 = render(_DataTable || (_DataTable = /*#__PURE__*/React.createElement(DataTable, {
              columns: columns,
              data: fifteen,
              showToolbar: true,
              enableFilters: true
            }))), container = _render2.container;
            filterButton = container.querySelector('.filter-button');
            fireEvent.click(filterButton);
            dataTableHeaderRows = container.querySelectorAll('.data-table-header .data-table-row');
            expect(dataTableHeaderRows.length).toEqual(2);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  it('shows the searchbar', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
    var _render3, container, searchButton, searchBar;

    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _render3 = render(_DataTable2 || (_DataTable2 = /*#__PURE__*/React.createElement(DataTable, {
              columns: columns,
              data: fifteen,
              enableFilters: true,
              showToolbar: true,
              enableSearch: true
            }))), container = _render3.container;
            searchButton = container.querySelector('.search-button');
            fireEvent.click(searchButton);
            searchBar = container.querySelector('.textinput--wrapper');
            expect(searchBar).toBeInTheDocument();

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  it('shows the menu', function () {
    var _render4 = render( /*#__PURE__*/React.createElement(DataTable, {
      columns: [],
      data: [],
      showToolbar: true,
      enableFilters: true,
      menuItems: [{
        children: 'One'
      }]
    })),
        container = _render4.container;

    var menuPopover = container.querySelector('.menu-popover');
    expect(menuPopover).toBeInTheDocument();
  });
});