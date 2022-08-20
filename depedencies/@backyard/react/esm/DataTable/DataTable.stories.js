import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _extends from "@babel/runtime/helpers/esm/extends";

var _ApiLink, _ApiLink2, _ApiLink3, _ApiLink4, _ApiLink5, _ApiLink6, _CheckCircleFilledIco, _CloseCircleFilledIco, _CheckCircleFilledIco2, _CloseCircleFilledIco2, _Button, _ApiLink7, _ApiLink8, _ChevronRight, _ApiLink9;

import _regeneratorRuntime from "@babel/runtime/regenerator";
import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import PhotosIcon from '@backyard/icons/PhotosOutlined';
import ChevronRight from '@backyard/icons/ChevronRight';
import CheckCircleFilledIcon from '@backyard/icons/CheckCircleFilled';
import CloseCircleFilledIcon from '@backyard/icons/CloseCircleFilled';
import { ApiLink } from '../utils/storybook/ApiLink';
import Spinner from '../Spinner';
import { GridV3 as Grid, DataTable, Typography, MenuPopover, Menu, MenuItem, Button, Search } from '../';
import makeData from './utils/makeData';
import { TextFilter, SelectFilter } from './DataTableFilters';
export default {
  title: '@backyard/react/DataTable',
  decorators: [withKnobs]
};
var shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared'
}, 'rounded'];
export var ThousandRecords = function ThousandRecords() {
  var columns = [{
    Header: 'First Name',
    accessor: 'firstName'
  }, {
    Header: 'Last Name',
    accessor: 'lastName'
  }, {
    Header: 'Age',
    accessor: 'age'
  }, {
    Header: 'Visits',
    accessor: 'visits'
  }, {
    Header: 'Status',
    accessor: 'status'
  }, {
    Header: 'Profile Progress',
    accessor: 'progress'
  }];
  var data = React.useMemo(function () {
    return makeData(1000);
  }, []);
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(DataTable, {
    columns: columns,
    data: data,
    shape: select.apply(void 0, shapes)
  }), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/DataTable"
  })));
};
export var NoFooter = function NoFooter() {
  var columns = React.useMemo(function () {
    return [{
      Header: 'First Name',
      accessor: 'firstName'
    }, {
      Header: 'Last Name',
      accessor: 'lastName'
    }, {
      Header: 'Age',
      accessor: 'age'
    }, {
      Header: 'Visits',
      accessor: 'visits'
    }, {
      Header: 'Status',
      accessor: 'status'
    }, {
      Header: 'Profile Progress',
      accessor: 'progress'
    }];
  }, []);
  var data = React.useMemo(function () {
    return makeData(1000);
  }, []);
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(DataTable, {
    columns: columns,
    data: data,
    disableFooter: true,
    shape: select.apply(void 0, shapes)
  }), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/DataTable"
  })));
};
export var DisabledFilters = function DisabledFilters() {
  var columns = React.useMemo(function () {
    return [{
      Header: 'First Name',
      accessor: 'firstName',
      filter: 'startsWith'
    }, {
      Header: 'Last Name',
      accessor: 'lastName',
      filter: 'startsWith'
    }, {
      Header: 'Age',
      accessor: 'age',
      filter: 'startsWith'
    }, {
      Header: 'Visits',
      accessor: 'visits',
      filter: 'startsWith'
    }, {
      Header: 'Status',
      accessor: 'status',
      filter: 'startsWith'
    }, {
      Header: 'Profile Progress',
      accessor: 'progress',
      filter: 'startsWith'
    }];
  }, []);
  var data = React.useMemo(function () {
    return makeData(1000);
  }, []);
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(DataTable, {
    columns: columns,
    data: data,
    showToolbar: true,
    shape: select.apply(void 0, shapes)
  }), _ApiLink3 || (_ApiLink3 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/DataTable"
  })));
};
export var EnabledFilters = function EnabledFilters() {
  var columns = React.useMemo(function () {
    return [{
      Header: 'First Name',
      accessor: 'firstName',
      filter: 'startsWith'
    }, {
      Header: 'Last Name',
      accessor: 'lastName',
      filter: 'startsWith'
    }, {
      Header: 'Age',
      accessor: 'age',
      filter: 'startsWith'
    }, {
      Header: 'Visits',
      accessor: 'visits',
      filter: 'startsWith'
    }, {
      Header: 'Status',
      accessor: 'status',
      filter: 'startsWith'
    }, {
      Header: 'Profile Progress',
      accessor: 'progress',
      filter: 'startsWith'
    }];
  }, []);
  var data = React.useMemo(function () {
    return makeData(1000);
  }, []);
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(DataTable, {
    columns: columns,
    data: data,
    enableFilters: true,
    showToolbar: true,
    shape: select.apply(void 0, shapes)
  }), _ApiLink4 || (_ApiLink4 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/DataTable"
  })));
};
export var EnabledSearch = function EnabledSearch() {
  var columns = React.useMemo(function () {
    return [{
      Header: 'First Name',
      accessor: 'firstName',
      filter: 'startsWith'
    }, {
      Header: 'Last Name',
      accessor: 'lastName',
      filter: 'startsWith'
    }, {
      Header: 'Age',
      accessor: 'age',
      filter: 'startsWith'
    }, {
      Header: 'Visits',
      accessor: 'visits',
      filter: 'startsWith'
    }, {
      Header: 'Status',
      accessor: 'status',
      filter: 'startsWith'
    }, {
      Header: 'Profile Progress',
      accessor: 'progress',
      filter: 'startsWith'
    }];
  }, []);
  var data = React.useMemo(function () {
    return makeData(1000);
  }, []);
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(DataTable, {
    columns: columns,
    data: data,
    showToolbar: true,
    enableSearch: true,
    shape: select.apply(void 0, shapes)
  }), _ApiLink5 || (_ApiLink5 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/DataTable"
  })));
};
export var CustomFilterRecords = function CustomFilterRecords() {
  var columns = React.useMemo(function () {
    return [{
      Header: 'First Name',
      accessor: 'firstName',
      Filter: TextFilter,
      filter: 'contains'
    }, {
      Header: 'Last Name',
      accessor: 'lastName',
      filter: 'startsWith'
    }, {
      Header: 'Age',
      accessor: 'age',
      filter: 'equals'
    }, {
      Header: 'Visits',
      accessor: 'visits',
      filter: 'startsWith'
    }, {
      Header: 'Status',
      accessor: 'status',
      Filter: SelectFilter(['single', 'relationship', 'complicated']),
      filter: 'equals'
    }, {
      Header: 'Profile Progress',
      accessor: 'progress',
      filter: 'startsWith'
    }];
  }, []);
  var data = React.useMemo(function () {
    return makeData(1000);
  }, []);
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(DataTable, {
    columns: columns,
    data: data,
    enableFilters: true,
    showToolbar: true,
    shape: select.apply(void 0, shapes)
  }), _ApiLink6 || (_ApiLink6 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/DataTable"
  })));
};
export var RowSelection = function RowSelection() {
  var columns = React.useMemo(function () {
    return [{
      Header: 'Name',
      columns: [{
        Header: 'First Name',
        accessor: 'firstName'
      }, {
        Header: 'Last Name',
        accessor: 'lastName'
      }]
    }, {
      Header: 'Info',
      columns: [{
        Header: 'Age',
        accessor: 'age'
      }, {
        Header: 'Visits',
        accessor: 'visits'
      }, {
        Header: 'Status',
        accessor: 'status',
        Filter: SelectFilter(['single', 'relationship', 'complicated'])
      }, {
        Header: 'Profile Progress',
        accessor: 'progress'
      }]
    }];
  }, []);
  var subColumns = React.useMemo(function () {
    return [{
      Header: 'Additional Info',
      columns: [{
        Header: 'Age',
        accessor: 'age'
      }, {
        Header: 'Visits',
        accessor: 'visits'
      }, {
        Header: 'Status',
        accessor: 'status'
      }]
    }];
  }, []);
  var data = React.useMemo(function () {
    return makeData(1000).map(function (row, index) {
      return index % 2 ? _extends({}, row, {
        subRows: [/*#__PURE__*/React.createElement(Typography, {
          as: "div",
          style: {
            // border: '1px dotted red',
            width: '100%'
          }
        }, /*#__PURE__*/React.createElement(DataTable, {
          columns: subColumns,
          data: makeData(5),
          disableFooter: true
        }))]
      }) : row;
    });
  }, []);
  var appliedFilters = [{
    id: 'firstName',
    value: 'motor'
  }, {
    id: 'status',
    value: 'single'
  }];
  var appliedSort = [{
    id: 'lastName',
    desc: true
  }, {
    id: 'age',
    asc: true
  }];

  var _React$useState = React.useState(appliedFilters),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      filters = _React$useState2[0],
      setFilters = _React$useState2[1];

  var _React$useState3 = React.useState(appliedSort),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      sortBy = _React$useState4[0],
      setSortBy = _React$useState4[1];

  var _React$useState5 = React.useState([]),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      selectedRows = _React$useState6[0],
      setSelectedRows = _React$useState6[1];

  var _React$useState7 = React.useState({}),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      selectedIds = _React$useState8[0],
      setSelectedIds = _React$useState8[1];

  var _React$useState9 = React.useState({}),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      expandedIds = _React$useState10[0],
      setExpandedIds = _React$useState10[1];

  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(DataTable, {
    columns: columns,
    data: data,
    shape: select.apply(void 0, shapes),
    enableSortBy: true,
    enableRowSelection: true,
    enableRowExpansion: true,
    enableZebraStripes: true,
    showToolbar: true,
    enableFilters: true,
    enableSearch: true,
    filters: filters,
    sortBy: sortBy,
    globalFilter: "tor",
    toolbar: [/*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      color: "interactive",
      size: "small",
      iconBefore: _CheckCircleFilledIco || (_CheckCircleFilledIco = /*#__PURE__*/React.createElement(CheckCircleFilledIcon, null)) // disabled={selectedRows.length === 0}
      ,
      onClick: function onClick() {
        return alert("You approved ".concat(selectedRows.length, " rows!"));
      }
    }, "Approve"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      color: "red",
      size: "small",
      iconBefore: _CloseCircleFilledIco || (_CloseCircleFilledIco = /*#__PURE__*/React.createElement(CloseCircleFilledIcon, null)) // disabled={selectedRows.length === 0}
      ,
      onClick: function onClick() {
        return alert("You denied ".concat(selectedRows.length, " rows!"));
      }
    }, "Deny"), selectedRows.length > 0 ? /*#__PURE__*/React.createElement(MenuPopover, {
      menu: /*#__PURE__*/React.createElement(Menu, null, /*#__PURE__*/React.createElement(MenuItem, {
        variant: "ghost",
        color: "interactive",
        iconBefore: _CheckCircleFilledIco2 || (_CheckCircleFilledIco2 = /*#__PURE__*/React.createElement(CheckCircleFilledIcon, null)),
        onClick: function onClick() {
          return alert("You approved ".concat(selectedRows.length, " rows!"));
        }
      }, "Approve"), /*#__PURE__*/React.createElement(MenuItem, {
        variant: "ghost",
        color: "red",
        iconBefore: _CloseCircleFilledIco2 || (_CloseCircleFilledIco2 = /*#__PURE__*/React.createElement(CloseCircleFilledIcon, null)),
        onClick: function onClick() {
          return alert("You denied ".concat(selectedRows.length, " rows!"));
        }
      }, "Deny"))
    }, _Button || (_Button = /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      color: "interactive",
      size: "small",
      iconBefore: /*#__PURE__*/React.createElement(PhotosIcon, null)
    }, "Actions"))) : null],
    menuItems: [{
      label: 'Apply Filters',
      onClick: function onClick() {
        return setFilters(appliedFilters);
      }
    }, {
      label: 'Clear Filters',
      onClick: function onClick() {
        return setFilters([]);
      }
    }, {
      label: 'Apply Sorting',
      onClick: function onClick() {
        return setSortBy(appliedSort);
      }
    }, {
      label: 'Clear Sorting',
      onClick: function onClick() {
        return setSortBy([]);
      }
    }, {
      label: 'Clear Selections',
      onClick: function onClick() {
        return setSelectedIds({});
      }
    }, {
      label: 'Collapse All',
      onClick: function onClick() {
        return setExpandedIds({});
      }
    }],
    onSelect: function onSelect(info) {
      var ids = info.ids,
          rows = info.rows;
      setSelectedRows(rows);
      setSelectedIds(ids);
    },
    selectedRowIds: selectedIds,
    expanded: expandedIds,
    rowsPerPageOptions: [10, 20, 50, 100],
    pageSize: 50,
    height: "100vh"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100vh'
    }
  }), _ApiLink7 || (_ApiLink7 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/DataTable"
  })));
};
export var WithMenuItems = function WithMenuItems() {
  var mySelectFilterWithOptions = SelectFilter(['single', 'relationship', 'complicated']);
  var columns = React.useMemo(function () {
    return [{
      Header: 'First Name',
      accessor: 'firstName',
      Filter: TextFilter,
      filter: 'contains'
    }, {
      Header: 'Last Name',
      accessor: 'lastName',
      filter: 'startsWith'
    }, {
      Header: 'Age',
      accessor: 'age',
      filter: 'equals'
    }, {
      Header: 'Visits',
      accessor: 'visits',
      filter: 'startsWith'
    }, {
      Header: 'Status',
      accessor: 'status',
      Filter: mySelectFilterWithOptions,
      filter: 'startsWith'
    }, {
      Header: 'Profile Progress',
      accessor: 'progress',
      filter: 'startsWith'
    }];
  }, []);
  var data = React.useMemo(function () {
    return makeData(1000);
  }, []);
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(DataTable, {
    columns: columns,
    data: data,
    shape: select.apply(void 0, shapes),
    menuItems: [{
      children: 'One'
    }],
    showToolbar: true
  }), _ApiLink8 || (_ApiLink8 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/DataTable"
  })));
};

var GoToPage = function GoToPage(_ref) {
  var toPage = _ref.toPage,
      setToPage = _ref.setToPage,
      setPageIndex = _ref.setPageIndex;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Search, {
    size: "small",
    variant: "filled",
    fill: true,
    placeholder: "Go To Page",
    itemBefore: null,
    onChange: function onChange(event, value) {
      setToPage(value);
    }
  }), /*#__PURE__*/React.createElement(Button, {
    size: "small",
    iconAfter: _ChevronRight || (_ChevronRight = /*#__PURE__*/React.createElement(ChevronRight, null)),
    onClick: function onClick() {
      if (Number(toPage) > 0) {
        setPageIndex(Number(toPage) - 1);
      }
    }
  }, "Go"));
};

export var ServerSideExample = function ServerSideExample() {
  var FETCH_URL = function FETCH_URL() {
    if (window.location.host.match(/carbon\.?(.*).lowes.com/g)) {
      return '/bds/documentation/api/components/datatable/example?';
    }

    return '/api/components/datatable/example?';
  };

  var columns = React.useMemo(function () {
    return [{
      Header: function Header() {
        return /*#__PURE__*/React.createElement(Typography, {
          as: "div",
          bold: true,
          variant: "h5",
          align: "center",
          style: {
            width: '100%'
          }
        }, "ID");
      },
      accessor: 'id',
      minWidth: '5rem',
      maxWidth: '5rem',
      Filter: function Filter() {
        return null;
      },
      Cell: function Cell(_ref2) {
        var value = _ref2.value;
        return /*#__PURE__*/React.createElement(Typography, {
          as: "div",
          variant: "caption",
          align: "center",
          style: {
            width: '100%'
          }
        }, value);
      }
    }, {
      Header: 'Title',
      accessor: 'title',
      Cell: function Cell(_ref3) {
        var value = _ref3.value;
        return /*#__PURE__*/React.createElement(Typography, {
          as: "div",
          variant: "caption"
        }, value);
      }
    }, {
      Header: 'Genre',
      accessor: 'genre',
      Cell: function Cell(_ref4) {
        var value = _ref4.value;
        return /*#__PURE__*/React.createElement(Typography, {
          as: "div",
          variant: "caption"
        }, value.replace(/\|/g, ', '));
      }
    }, {
      Header: 'Producer',
      accessor: 'producer',
      Cell: function Cell(_ref5) {
        var value = _ref5.value;
        return /*#__PURE__*/React.createElement(Typography, {
          as: "div",
          variant: "caption"
        }, value);
      }
    }, {
      Header: 'Studio',
      accessor: 'studio',
      Cell: function Cell(_ref6) {
        var value = _ref6.value;
        return /*#__PURE__*/React.createElement(Typography, {
          as: "div",
          variant: "caption"
        }, value);
      }
    }, {
      Header: 'Revenue',
      accessor: 'revenue',
      Cell: function Cell(_ref7) {
        var value = _ref7.value;
        return /*#__PURE__*/React.createElement(Typography, {
          as: "div",
          variant: "caption"
        }, value);
      }
    }, {
      Header: 'Release Date',
      accessor: 'release',
      Cell: function Cell(_ref8) {
        var value = _ref8.value;
        return /*#__PURE__*/React.createElement(Typography, {
          as: "div",
          variant: "caption"
        }, new Date(value).toDateString());
      }
    }, {
      Header: 'Synopsis',
      accessor: 'synopsis',
      Cell: function Cell(_ref9) {
        var value = _ref9.value;
        return /*#__PURE__*/React.createElement(Typography, {
          as: "div",
          variant: "caption"
        }, value);
      }
    }];
  }, []);

  var _React$useState11 = React.useState([]),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      data = _React$useState12[0],
      setData = _React$useState12[1];

  var _React$useState13 = React.useState(false),
      _React$useState14 = _slicedToArray(_React$useState13, 2),
      loading = _React$useState14[0],
      setLoading = _React$useState14[1];

  var _React$useState15 = React.useState({}),
      _React$useState16 = _slicedToArray(_React$useState15, 2),
      state = _React$useState16[0],
      setState = _React$useState16[1];

  var _React$useState17 = React.useState(0),
      _React$useState18 = _slicedToArray(_React$useState17, 2),
      pageCount = _React$useState18[0],
      setPageCount = _React$useState18[1];

  var _React$useState19 = React.useState(0),
      _React$useState20 = _slicedToArray(_React$useState19, 2),
      rowCount = _React$useState20[0],
      setRowCount = _React$useState20[1];

  var _React$useState21 = React.useState(null),
      _React$useState22 = _slicedToArray(_React$useState21, 2),
      pageIndex = _React$useState22[0],
      setPageIndex = _React$useState22[1];

  var _React$useState23 = React.useState(null),
      _React$useState24 = _slicedToArray(_React$useState23, 2),
      toPage = _React$useState24[0],
      setToPage = _React$useState24[1];

  var fetchIdRef = React.useRef(0);
  var fetchData = React.useCallback( /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(_ref10) {
      var pageSize, pageIndex, globalFilter, filters, sortBy, fetchId, response, _data;

      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              pageSize = _ref10.pageSize, pageIndex = _ref10.pageIndex, globalFilter = _ref10.globalFilter, filters = _ref10.filters, sortBy = _ref10.sortBy;
              // Give this fetch an ID
              fetchId = ++fetchIdRef.current; // Set the loading state

              setLoading(true);
              _context.next = 5;
              return fetch(FETCH_URL() + new URLSearchParams(_extends({
                items: pageSize,
                page: pageIndex + 1
              }, globalFilter ? {
                globalFilter: globalFilter
              } : {}, Array.isArray(filters) && filters.length > 0 ? filters.reduce(function (acc, _ref12) {
                var id = _ref12.id,
                    value = _ref12.value;
                acc["filters[".concat(id, "]")] = value;
                return acc;
              }, {}) : {}, Array.isArray(sortBy) && sortBy.length > 0 ? sortBy.reduce(function (acc, _ref13) {
                var id = _ref13.id,
                    desc = _ref13.desc;
                acc["sorts[".concat(id, "]")] = desc ? 'desc' : 'asc';
                return acc;
              }, {}) : {})));

            case 5:
              response = _context.sent;

              if (!(fetchId === fetchIdRef.current)) {
                _context.next = 14;
                break;
              }

              _context.next = 9;
              return response.json();

            case 9:
              _data = _context.sent;
              setData(_data.table);
              setPageCount(_data.info.pages);
              setRowCount(_data.info.count);
              setLoading(false);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref11.apply(this, arguments);
    };
  }(), []);
  React.useEffect(function () {
    fetchData(state);
  }, [fetchData, state]);
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(DataTable, {
    columns: columns,
    data: data,
    enableZebraStripes: true,
    showToolbar: true,
    enableFilters: true,
    enableSearch: true,
    enableSortBy: true,
    pageIndex: pageIndex,
    options: {
      manualPagination: true,
      manualGlobalFilter: true,
      manualFilters: true,
      manualSortBy: true,
      pageCount: pageCount,
      rowCount: rowCount
    },
    toolbar: [/*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%'
      }
    }), /*#__PURE__*/React.createElement(Spinner, {
      show: loading,
      small: true,
      inline: true
    }), /*#__PURE__*/React.createElement(GoToPage, {
      toPage: toPage,
      setToPage: setToPage,
      setPageIndex: setPageIndex
    })],
    onTableUpdate: function onTableUpdate(_ref14) {
      var state = _ref14.state;
      setState(state);
    }
  }), _ApiLink9 || (_ApiLink9 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/DataTable"
  })));
};