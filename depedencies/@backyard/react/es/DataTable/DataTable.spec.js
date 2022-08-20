var _DataTable, _DataTable2, _Button, _Button2, _MenuPopover;

import * as React from 'react';
import { act, render } from '../../test-utils';
import { PhotosOutlined as PhotosIcon, CheckCircleFilled as CheckCircleFilledIcon, CloseCircleFilled as CloseCircleFilledIcon } from '@backyard/icons';
import { ThemeProvider, DataTable, Button, Menu, MenuItem, MenuPopover } from '../';
import { columns, fifteen } from './utils/data.names';
describe('DataTable Snapshots', () => {
  test(`default snapshot`, async () => {
    let wrapper;
    await act(async () => {
      wrapper = render(_DataTable || (_DataTable = /*#__PURE__*/React.createElement(DataTable, {
        columns: columns,
        data: fifteen
      })));
    });
    const {
      asFragment
    } = wrapper;
    expect(asFragment()).toMatchSnapshot();
  });
  describe('themes', () => {
    const themes = ['light', 'dark'];
    themes.forEach(theme => {
      var _ThemeProvider;

      test(`theme ${theme} snapshot`, async () => {
        let wrapper;
        await act(async () => {
          wrapper = render(_ThemeProvider || (_ThemeProvider = /*#__PURE__*/React.createElement(ThemeProvider, {
            theme: theme
          }, _DataTable2 || (_DataTable2 = /*#__PURE__*/React.createElement(DataTable, {
            columns: columns,
            data: fifteen
          })))));
        });
        const {
          asFragment
        } = wrapper;
        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  test(`feature snapshot`, async () => {
    let wrapper;
    const filters = [{
      id: 'firstName',
      value: 'hellfire'
    }, {
      id: 'lastName',
      value: 'strap'
    }];
    const sortBy = [{
      id: 'lastName',
      desc: true
    }, {
      id: 'age',
      asc: true
    }];
    await act(async () => {
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
    });
    const {
      asFragment
    } = wrapper;
    expect(asFragment()).toMatchSnapshot();
  });
});