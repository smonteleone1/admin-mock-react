var _DataTable, _DataTable2;

import * as React from 'react';
import { render, fireEvent } from '../../../test-utils';
import DataTable from '../DataTable';
import { columns, fifteen } from '../utils/data.names';
describe('DataTableToolbarTests', () => {
  it('renders', () => {
    const {
      container
    } = render( /*#__PURE__*/React.createElement(DataTable, {
      columns: [],
      data: [],
      showToolbar: true
    }));
    const component = container.querySelector('.data-table-toolbar');
    expect(component).toBeInTheDocument();
  });
  it('shows the filters', async () => {
    const {
      container
    } = render(_DataTable || (_DataTable = /*#__PURE__*/React.createElement(DataTable, {
      columns: columns,
      data: fifteen,
      showToolbar: true,
      enableFilters: true
    })));
    const filterButton = container.querySelector('.filter-button');
    fireEvent.click(filterButton);
    const dataTableHeaderRows = container.querySelectorAll('.data-table-header .data-table-row');
    expect(dataTableHeaderRows.length).toEqual(2);
  });
  it('shows the searchbar', async () => {
    const {
      container
    } = render(_DataTable2 || (_DataTable2 = /*#__PURE__*/React.createElement(DataTable, {
      columns: columns,
      data: fifteen,
      enableFilters: true,
      showToolbar: true,
      enableSearch: true
    })));
    const searchButton = container.querySelector('.search-button');
    fireEvent.click(searchButton);
    const searchBar = container.querySelector('.textinput--wrapper');
    expect(searchBar).toBeInTheDocument();
  });
  it('shows the menu', () => {
    const {
      container
    } = render( /*#__PURE__*/React.createElement(DataTable, {
      columns: [],
      data: [],
      showToolbar: true,
      enableFilters: true,
      menuItems: [{
        children: 'One'
      }]
    }));
    const menuPopover = container.querySelector('.menu-popover');
    expect(menuPopover).toBeInTheDocument();
  });
});