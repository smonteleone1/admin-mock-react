var _DataTable, _DataTable2, _DataTable3, _DataTable4;

import * as React from 'react';
import { render, act, fireEvent } from '../../test-utils';
import DataTable from './DataTable';
import { columns, fifteen } from './utils/data.names';
describe('DataTable Tests', () => {
  it('renders', async () => {
    let wrapper;
    await act(async () => {
      wrapper = render(_DataTable || (_DataTable = /*#__PURE__*/React.createElement(DataTable, {
        "data-testid": "data-table",
        columns: columns,
        data: fifteen
      })));
    });
    const {
      getByTestId
    } = wrapper;
    const table = getByTestId('data-table');
    expect(table).toBeInTheDocument();
  });
  it('default filters text startsWith', async () => {
    let wrapper;
    jest.useFakeTimers();
    await act(async () => {
      wrapper = render(_DataTable2 || (_DataTable2 = /*#__PURE__*/React.createElement(DataTable, {
        "data-testid": "data-table",
        columns: columns,
        data: fifteen,
        enableFilters: true
      })));
    });
    const {
      container
    } = wrapper;
    let results;
    const search = container.querySelector('.firstName-filter');
    results = container.querySelectorAll('.data-table-body-row');
    expect(results.length).toBe(10);
    await act(async () => {
      fireEvent.change(search, {
        target: {
          value: 'hellfire'
        }
      });
      jest.runAllTimers();
    });
    results = container.querySelectorAll('.data-table-body-row');
    expect(results.length).toBe(2);
    const clear = container.querySelector('.firstName-filter + div > .search--clear');
    await act(async () => {
      fireEvent.click(clear);
      jest.runAllTimers();
    });
    expect(results.length).toBe(2);
  });
  it('default filters text contains', async () => {
    let wrapper;
    jest.useFakeTimers();
    await act(async () => {
      wrapper = render(_DataTable3 || (_DataTable3 = /*#__PURE__*/React.createElement(DataTable, {
        "data-testid": "data-table",
        columns: columns,
        data: fifteen,
        enableFilters: true
      })));
    });
    const {
      container
    } = wrapper;
    let results;
    const search = container.querySelector('.lastName-filter');
    results = container.querySelectorAll('.data-table-body-row');
    expect(results.length).toBe(10);
    await act(async () => {
      fireEvent.change(search, {
        target: {
          value: 'beard'
        }
      });
      jest.runAllTimers();
    });
    results = container.querySelectorAll('.data-table-body-row');
    expect(results.length).toBe(1);
    const clear = container.querySelector('.lastName-filter + div > .search--clear');
    await act(async () => {
      fireEvent.click(clear);
      jest.runAllTimers();
    });
    expect(results.length).toBe(1);
  });
  it('default filters select equals', async () => {
    let wrapper;
    jest.useFakeTimers();
    await act(async () => {
      wrapper = render(_DataTable4 || (_DataTable4 = /*#__PURE__*/React.createElement(DataTable, {
        "data-testid": "data-table",
        columns: columns,
        data: fifteen,
        enableFilters: true
      })));
    });
    const {
      container
    } = wrapper;
    let results;
    const search = container.querySelector('.status-filter');
    results = container.querySelectorAll('.data-table-body-row');
    expect(results.length).toBe(10);
    await act(async () => {
      fireEvent.change(search, {
        target: {
          value: 'single'
        }
      });
      jest.runAllTimers();
    });
    results = container.querySelectorAll('.data-table-body-row');
    expect(results.length).toBe(3);
    await act(async () => {
      fireEvent.change(search, {
        target: {
          value: ''
        }
      });
      jest.runAllTimers();
    });
    expect(results.length).toBe(3);
  });
  it('default row selection', async () => {
    var _DataTable5;

    let wrapper;
    const onSelectSpy = jest.fn();
    jest.useFakeTimers();
    await act(async () => {
      wrapper = render(_DataTable5 || (_DataTable5 = /*#__PURE__*/React.createElement(DataTable, {
        "data-testid": "data-table",
        columns: columns,
        data: fifteen,
        enableFilters: true,
        enableRowSelection: true,
        onSelect: onSelectSpy
      })));
    });
    const {
      container
    } = wrapper;
    const select = container.querySelector('.row-selection-all');
    expect(onSelectSpy).toHaveBeenCalledTimes(1);
    await act(async () => {
      fireEvent.click(select);
      jest.runAllTimers();
    });
    expect(onSelectSpy).toHaveBeenCalledTimes(2);
    await act(async () => {
      fireEvent.click(select);
      jest.runAllTimers();
    });
    expect(onSelectSpy).toHaveBeenCalledTimes(3);
  });
});