import _extends from "@babel/runtime/helpers/esm/extends";

var _ApiLink, _ApiLink2, _ApiLink3, _ApiLink4, _ApiLink5, _ApiLink6, _CheckCircleFilledIco, _CloseCircleFilledIco, _CheckCircleFilledIco2, _CloseCircleFilledIco2, _Button, _ApiLink7, _ApiLink8, _ChevronRight, _ApiLink9;

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
const shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared'
}, 'rounded'];
export const ThousandRecords = () => {
  const columns = [{
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
  const data = React.useMemo(() => makeData(1000), []);
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(DataTable, {
    columns: columns,
    data: data,
    shape: select(...shapes)
  }), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/DataTable"
  })));
};
export const NoFooter = () => {
  const columns = React.useMemo(() => [{
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
  }], []);
  const data = React.useMemo(() => makeData(1000), []);
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(DataTable, {
    columns: columns,
    data: data,
    disableFooter: true,
    shape: select(...shapes)
  }), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/DataTable"
  })));
};
export const DisabledFilters = () => {
  const columns = React.useMemo(() => [{
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
  }], []);
  const data = React.useMemo(() => makeData(1000), []);
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(DataTable, {
    columns: columns,
    data: data,
    showToolbar: true,
    shape: select(...shapes)
  }), _ApiLink3 || (_ApiLink3 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/DataTable"
  })));
};
export const EnabledFilters = () => {
  const columns = React.useMemo(() => [{
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
  }], []);
  const data = React.useMemo(() => makeData(1000), []);
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(DataTable, {
    columns: columns,
    data: data,
    enableFilters: true,
    showToolbar: true,
    shape: select(...shapes)
  }), _ApiLink4 || (_ApiLink4 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/DataTable"
  })));
};
export const EnabledSearch = () => {
  const columns = React.useMemo(() => [{
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
  }], []);
  const data = React.useMemo(() => makeData(1000), []);
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(DataTable, {
    columns: columns,
    data: data,
    showToolbar: true,
    enableSearch: true,
    shape: select(...shapes)
  }), _ApiLink5 || (_ApiLink5 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/DataTable"
  })));
};
export const CustomFilterRecords = () => {
  const columns = React.useMemo(() => [{
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
  }], []);
  const data = React.useMemo(() => makeData(1000), []);
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(DataTable, {
    columns: columns,
    data: data,
    enableFilters: true,
    showToolbar: true,
    shape: select(...shapes)
  }), _ApiLink6 || (_ApiLink6 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/DataTable"
  })));
};
export const RowSelection = () => {
  const columns = React.useMemo(() => [{
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
  }], []);
  const subColumns = React.useMemo(() => [{
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
  }], []);
  const data = React.useMemo(() => makeData(1000).map((row, index) => index % 2 ? _extends({}, row, {
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
  }) : row), []);
  const appliedFilters = [{
    id: 'firstName',
    value: 'motor'
  }, {
    id: 'status',
    value: 'single'
  }];
  const appliedSort = [{
    id: 'lastName',
    desc: true
  }, {
    id: 'age',
    asc: true
  }];
  const [filters, setFilters] = React.useState(appliedFilters);
  const [sortBy, setSortBy] = React.useState(appliedSort);
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [selectedIds, setSelectedIds] = React.useState({});
  const [expandedIds, setExpandedIds] = React.useState({});
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(DataTable, {
    columns: columns,
    data: data,
    shape: select(...shapes),
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
      onClick: () => alert(`You approved ${selectedRows.length} rows!`)
    }, "Approve"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      color: "red",
      size: "small",
      iconBefore: _CloseCircleFilledIco || (_CloseCircleFilledIco = /*#__PURE__*/React.createElement(CloseCircleFilledIcon, null)) // disabled={selectedRows.length === 0}
      ,
      onClick: () => alert(`You denied ${selectedRows.length} rows!`)
    }, "Deny"), selectedRows.length > 0 ? /*#__PURE__*/React.createElement(MenuPopover, {
      menu: /*#__PURE__*/React.createElement(Menu, null, /*#__PURE__*/React.createElement(MenuItem, {
        variant: "ghost",
        color: "interactive",
        iconBefore: _CheckCircleFilledIco2 || (_CheckCircleFilledIco2 = /*#__PURE__*/React.createElement(CheckCircleFilledIcon, null)),
        onClick: () => alert(`You approved ${selectedRows.length} rows!`)
      }, "Approve"), /*#__PURE__*/React.createElement(MenuItem, {
        variant: "ghost",
        color: "red",
        iconBefore: _CloseCircleFilledIco2 || (_CloseCircleFilledIco2 = /*#__PURE__*/React.createElement(CloseCircleFilledIcon, null)),
        onClick: () => alert(`You denied ${selectedRows.length} rows!`)
      }, "Deny"))
    }, _Button || (_Button = /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      color: "interactive",
      size: "small",
      iconBefore: /*#__PURE__*/React.createElement(PhotosIcon, null)
    }, "Actions"))) : null],
    menuItems: [{
      label: 'Apply Filters',
      onClick: () => setFilters(appliedFilters)
    }, {
      label: 'Clear Filters',
      onClick: () => setFilters([])
    }, {
      label: 'Apply Sorting',
      onClick: () => setSortBy(appliedSort)
    }, {
      label: 'Clear Sorting',
      onClick: () => setSortBy([])
    }, {
      label: 'Clear Selections',
      onClick: () => setSelectedIds({})
    }, {
      label: 'Collapse All',
      onClick: () => setExpandedIds({})
    }],
    onSelect: info => {
      const {
        ids,
        rows
      } = info;
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
export const WithMenuItems = () => {
  const mySelectFilterWithOptions = SelectFilter(['single', 'relationship', 'complicated']);
  const columns = React.useMemo(() => [{
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
  }], []);
  const data = React.useMemo(() => makeData(1000), []);
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(DataTable, {
    columns: columns,
    data: data,
    shape: select(...shapes),
    menuItems: [{
      children: 'One'
    }],
    showToolbar: true
  }), _ApiLink8 || (_ApiLink8 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/DataTable"
  })));
};

const GoToPage = ({
  toPage,
  setToPage,
  setPageIndex
}) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Search, {
  size: "small",
  variant: "filled",
  fill: true,
  placeholder: "Go To Page",
  itemBefore: null,
  onChange: (event, value) => {
    setToPage(value);
  }
}), /*#__PURE__*/React.createElement(Button, {
  size: "small",
  iconAfter: _ChevronRight || (_ChevronRight = /*#__PURE__*/React.createElement(ChevronRight, null)),
  onClick: () => {
    if (Number(toPage) > 0) {
      setPageIndex(Number(toPage) - 1);
    }
  }
}, "Go"));

export const ServerSideExample = () => {
  const FETCH_URL = () => {
    if (window.location.host.match(/carbon\.?(.*).lowes.com/g)) {
      return '/bds/documentation/api/components/datatable/example?';
    }

    return '/api/components/datatable/example?';
  };

  const columns = React.useMemo(() => [{
    Header: () => /*#__PURE__*/React.createElement(Typography, {
      as: "div",
      bold: true,
      variant: "h5",
      align: "center",
      style: {
        width: '100%'
      }
    }, "ID"),
    accessor: 'id',
    minWidth: '5rem',
    maxWidth: '5rem',
    Filter: () => null,
    Cell: ({
      value
    }) => /*#__PURE__*/React.createElement(Typography, {
      as: "div",
      variant: "caption",
      align: "center",
      style: {
        width: '100%'
      }
    }, value)
  }, {
    Header: 'Title',
    accessor: 'title',
    Cell: ({
      value
    }) => /*#__PURE__*/React.createElement(Typography, {
      as: "div",
      variant: "caption"
    }, value)
  }, {
    Header: 'Genre',
    accessor: 'genre',
    Cell: ({
      value
    }) => /*#__PURE__*/React.createElement(Typography, {
      as: "div",
      variant: "caption"
    }, value.replace(/\|/g, ', '))
  }, {
    Header: 'Producer',
    accessor: 'producer',
    Cell: ({
      value
    }) => /*#__PURE__*/React.createElement(Typography, {
      as: "div",
      variant: "caption"
    }, value)
  }, {
    Header: 'Studio',
    accessor: 'studio',
    Cell: ({
      value
    }) => /*#__PURE__*/React.createElement(Typography, {
      as: "div",
      variant: "caption"
    }, value)
  }, {
    Header: 'Revenue',
    accessor: 'revenue',
    Cell: ({
      value
    }) => /*#__PURE__*/React.createElement(Typography, {
      as: "div",
      variant: "caption"
    }, value)
  }, {
    Header: 'Release Date',
    accessor: 'release',
    Cell: ({
      value
    }) => /*#__PURE__*/React.createElement(Typography, {
      as: "div",
      variant: "caption"
    }, new Date(value).toDateString())
  }, {
    Header: 'Synopsis',
    accessor: 'synopsis',
    Cell: ({
      value
    }) => /*#__PURE__*/React.createElement(Typography, {
      as: "div",
      variant: "caption"
    }, value)
  }], []);
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [state, setState] = React.useState({});
  const [pageCount, setPageCount] = React.useState(0);
  const [rowCount, setRowCount] = React.useState(0);
  const [pageIndex, setPageIndex] = React.useState(null);
  const [toPage, setToPage] = React.useState(null);
  const fetchIdRef = React.useRef(0);
  const fetchData = React.useCallback(async ({
    pageSize,
    pageIndex,
    globalFilter,
    filters,
    sortBy
  }) => {
    // Give this fetch an ID
    const fetchId = ++fetchIdRef.current; // Set the loading state

    setLoading(true);
    const response = await fetch(FETCH_URL() + new URLSearchParams(_extends({
      items: pageSize,
      page: pageIndex + 1
    }, globalFilter ? {
      globalFilter
    } : {}, Array.isArray(filters) && filters.length > 0 ? filters.reduce((acc, {
      id,
      value
    }) => {
      acc[`filters[${id}]`] = value;
      return acc;
    }, {}) : {}, Array.isArray(sortBy) && sortBy.length > 0 ? sortBy.reduce((acc, {
      id,
      desc
    }) => {
      acc[`sorts[${id}]`] = desc ? 'desc' : 'asc';
      return acc;
    }, {}) : {}))); // Only update the data if this is the latest fetch

    if (fetchId === fetchIdRef.current) {
      const data = await response.json();
      setData(data.table);
      setPageCount(data.info.pages);
      setRowCount(data.info.count);
      setLoading(false);
    }
  }, []);
  React.useEffect(() => {
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
    onTableUpdate: ({
      state
    }) => {
      setState(state);
    }
  }), _ApiLink9 || (_ApiLink9 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/DataTable"
  })));
};