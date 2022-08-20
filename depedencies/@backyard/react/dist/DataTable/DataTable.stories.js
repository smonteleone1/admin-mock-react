"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.WithMenuItems = exports.ThousandRecords = exports.ServerSideExample = exports.RowSelection = exports.NoFooter = exports.EnabledSearch = exports.EnabledFilters = exports.DisabledFilters = exports.CustomFilterRecords = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _PhotosOutlined = _interopRequireDefault(require("@backyard/icons/PhotosOutlined"));

var _ChevronRight2 = _interopRequireDefault(require("@backyard/icons/ChevronRight"));

var _CheckCircleFilled = _interopRequireDefault(require("@backyard/icons/CheckCircleFilled"));

var _CloseCircleFilled = _interopRequireDefault(require("@backyard/icons/CloseCircleFilled"));

var _ApiLink10 = require("../utils/storybook/ApiLink");

var _Spinner = _interopRequireDefault(require("../Spinner"));

var _ = require("../");

var _makeData = _interopRequireDefault(require("./utils/makeData"));

var _DataTableFilters = require("./DataTableFilters");

var _ApiLink, _ApiLink2, _ApiLink3, _ApiLink4, _ApiLink5, _ApiLink6, _CheckCircleFilledIco, _CloseCircleFilledIco, _CheckCircleFilledIco2, _CloseCircleFilledIco2, _Button, _ApiLink7, _ApiLink8, _ChevronRight, _ApiLink9;

var _default = {
  title: '@backyard/react/DataTable',
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;
var shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared'
}, 'rounded'];

var ThousandRecords = function ThousandRecords() {
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

  var data = _react["default"].useMemo(function () {
    return (0, _makeData["default"])(1000);
  }, []);

  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.DataTable, {
    columns: columns,
    data: data,
    shape: _addonKnobs.select.apply(void 0, shapes)
  }), _ApiLink || (_ApiLink = /*#__PURE__*/_react["default"].createElement(_ApiLink10.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/DataTable"
  })));
};

exports.ThousandRecords = ThousandRecords;

var NoFooter = function NoFooter() {
  var columns = _react["default"].useMemo(function () {
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

  var data = _react["default"].useMemo(function () {
    return (0, _makeData["default"])(1000);
  }, []);

  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.DataTable, {
    columns: columns,
    data: data,
    disableFooter: true,
    shape: _addonKnobs.select.apply(void 0, shapes)
  }), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/_react["default"].createElement(_ApiLink10.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/DataTable"
  })));
};

exports.NoFooter = NoFooter;

var DisabledFilters = function DisabledFilters() {
  var columns = _react["default"].useMemo(function () {
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

  var data = _react["default"].useMemo(function () {
    return (0, _makeData["default"])(1000);
  }, []);

  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.DataTable, {
    columns: columns,
    data: data,
    showToolbar: true,
    shape: _addonKnobs.select.apply(void 0, shapes)
  }), _ApiLink3 || (_ApiLink3 = /*#__PURE__*/_react["default"].createElement(_ApiLink10.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/DataTable"
  })));
};

exports.DisabledFilters = DisabledFilters;

var EnabledFilters = function EnabledFilters() {
  var columns = _react["default"].useMemo(function () {
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

  var data = _react["default"].useMemo(function () {
    return (0, _makeData["default"])(1000);
  }, []);

  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.DataTable, {
    columns: columns,
    data: data,
    enableFilters: true,
    showToolbar: true,
    shape: _addonKnobs.select.apply(void 0, shapes)
  }), _ApiLink4 || (_ApiLink4 = /*#__PURE__*/_react["default"].createElement(_ApiLink10.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/DataTable"
  })));
};

exports.EnabledFilters = EnabledFilters;

var EnabledSearch = function EnabledSearch() {
  var columns = _react["default"].useMemo(function () {
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

  var data = _react["default"].useMemo(function () {
    return (0, _makeData["default"])(1000);
  }, []);

  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.DataTable, {
    columns: columns,
    data: data,
    showToolbar: true,
    enableSearch: true,
    shape: _addonKnobs.select.apply(void 0, shapes)
  }), _ApiLink5 || (_ApiLink5 = /*#__PURE__*/_react["default"].createElement(_ApiLink10.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/DataTable"
  })));
};

exports.EnabledSearch = EnabledSearch;

var CustomFilterRecords = function CustomFilterRecords() {
  var columns = _react["default"].useMemo(function () {
    return [{
      Header: 'First Name',
      accessor: 'firstName',
      Filter: _DataTableFilters.TextFilter,
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
      Filter: (0, _DataTableFilters.SelectFilter)(['single', 'relationship', 'complicated']),
      filter: 'equals'
    }, {
      Header: 'Profile Progress',
      accessor: 'progress',
      filter: 'startsWith'
    }];
  }, []);

  var data = _react["default"].useMemo(function () {
    return (0, _makeData["default"])(1000);
  }, []);

  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.DataTable, {
    columns: columns,
    data: data,
    enableFilters: true,
    showToolbar: true,
    shape: _addonKnobs.select.apply(void 0, shapes)
  }), _ApiLink6 || (_ApiLink6 = /*#__PURE__*/_react["default"].createElement(_ApiLink10.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/DataTable"
  })));
};

exports.CustomFilterRecords = CustomFilterRecords;

var RowSelection = function RowSelection() {
  var columns = _react["default"].useMemo(function () {
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
        Filter: (0, _DataTableFilters.SelectFilter)(['single', 'relationship', 'complicated'])
      }, {
        Header: 'Profile Progress',
        accessor: 'progress'
      }]
    }];
  }, []);

  var subColumns = _react["default"].useMemo(function () {
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

  var data = _react["default"].useMemo(function () {
    return (0, _makeData["default"])(1000).map(function (row, index) {
      return index % 2 ? (0, _extends2["default"])({}, row, {
        subRows: [/*#__PURE__*/_react["default"].createElement(_.Typography, {
          as: "div",
          style: {
            // border: '1px dotted red',
            width: '100%'
          }
        }, /*#__PURE__*/_react["default"].createElement(_.DataTable, {
          columns: subColumns,
          data: (0, _makeData["default"])(5),
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

  var _React$useState = _react["default"].useState(appliedFilters),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      filters = _React$useState2[0],
      setFilters = _React$useState2[1];

  var _React$useState3 = _react["default"].useState(appliedSort),
      _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
      sortBy = _React$useState4[0],
      setSortBy = _React$useState4[1];

  var _React$useState5 = _react["default"].useState([]),
      _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
      selectedRows = _React$useState6[0],
      setSelectedRows = _React$useState6[1];

  var _React$useState7 = _react["default"].useState({}),
      _React$useState8 = (0, _slicedToArray2["default"])(_React$useState7, 2),
      selectedIds = _React$useState8[0],
      setSelectedIds = _React$useState8[1];

  var _React$useState9 = _react["default"].useState({}),
      _React$useState10 = (0, _slicedToArray2["default"])(_React$useState9, 2),
      expandedIds = _React$useState10[0],
      setExpandedIds = _React$useState10[1];

  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.DataTable, {
    columns: columns,
    data: data,
    shape: _addonKnobs.select.apply(void 0, shapes),
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
    toolbar: [/*#__PURE__*/_react["default"].createElement(_.Button, {
      variant: "secondary",
      color: "interactive",
      size: "small",
      iconBefore: _CheckCircleFilledIco || (_CheckCircleFilledIco = /*#__PURE__*/_react["default"].createElement(_CheckCircleFilled["default"], null)) // disabled={selectedRows.length === 0}
      ,
      onClick: function onClick() {
        return alert("You approved ".concat(selectedRows.length, " rows!"));
      }
    }, "Approve"), /*#__PURE__*/_react["default"].createElement(_.Button, {
      variant: "secondary",
      color: "red",
      size: "small",
      iconBefore: _CloseCircleFilledIco || (_CloseCircleFilledIco = /*#__PURE__*/_react["default"].createElement(_CloseCircleFilled["default"], null)) // disabled={selectedRows.length === 0}
      ,
      onClick: function onClick() {
        return alert("You denied ".concat(selectedRows.length, " rows!"));
      }
    }, "Deny"), selectedRows.length > 0 ? /*#__PURE__*/_react["default"].createElement(_.MenuPopover, {
      menu: /*#__PURE__*/_react["default"].createElement(_.Menu, null, /*#__PURE__*/_react["default"].createElement(_.MenuItem, {
        variant: "ghost",
        color: "interactive",
        iconBefore: _CheckCircleFilledIco2 || (_CheckCircleFilledIco2 = /*#__PURE__*/_react["default"].createElement(_CheckCircleFilled["default"], null)),
        onClick: function onClick() {
          return alert("You approved ".concat(selectedRows.length, " rows!"));
        }
      }, "Approve"), /*#__PURE__*/_react["default"].createElement(_.MenuItem, {
        variant: "ghost",
        color: "red",
        iconBefore: _CloseCircleFilledIco2 || (_CloseCircleFilledIco2 = /*#__PURE__*/_react["default"].createElement(_CloseCircleFilled["default"], null)),
        onClick: function onClick() {
          return alert("You denied ".concat(selectedRows.length, " rows!"));
        }
      }, "Deny"))
    }, _Button || (_Button = /*#__PURE__*/_react["default"].createElement(_.Button, {
      variant: "ghost",
      color: "interactive",
      size: "small",
      iconBefore: /*#__PURE__*/_react["default"].createElement(_PhotosOutlined["default"], null)
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
  }), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      height: '100vh'
    }
  }), _ApiLink7 || (_ApiLink7 = /*#__PURE__*/_react["default"].createElement(_ApiLink10.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/DataTable"
  })));
};

exports.RowSelection = RowSelection;

var WithMenuItems = function WithMenuItems() {
  var mySelectFilterWithOptions = (0, _DataTableFilters.SelectFilter)(['single', 'relationship', 'complicated']);

  var columns = _react["default"].useMemo(function () {
    return [{
      Header: 'First Name',
      accessor: 'firstName',
      Filter: _DataTableFilters.TextFilter,
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

  var data = _react["default"].useMemo(function () {
    return (0, _makeData["default"])(1000);
  }, []);

  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.DataTable, {
    columns: columns,
    data: data,
    shape: _addonKnobs.select.apply(void 0, shapes),
    menuItems: [{
      children: 'One'
    }],
    showToolbar: true
  }), _ApiLink8 || (_ApiLink8 = /*#__PURE__*/_react["default"].createElement(_ApiLink10.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/DataTable"
  })));
};

exports.WithMenuItems = WithMenuItems;

var GoToPage = function GoToPage(_ref) {
  var toPage = _ref.toPage,
      setToPage = _ref.setToPage,
      setPageIndex = _ref.setPageIndex;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_.Search, {
    size: "small",
    variant: "filled",
    fill: true,
    placeholder: "Go To Page",
    itemBefore: null,
    onChange: function onChange(event, value) {
      setToPage(value);
    }
  }), /*#__PURE__*/_react["default"].createElement(_.Button, {
    size: "small",
    iconAfter: _ChevronRight || (_ChevronRight = /*#__PURE__*/_react["default"].createElement(_ChevronRight2["default"], null)),
    onClick: function onClick() {
      if (Number(toPage) > 0) {
        setPageIndex(Number(toPage) - 1);
      }
    }
  }, "Go"));
};

var ServerSideExample = function ServerSideExample() {
  var FETCH_URL = function FETCH_URL() {
    if (window.location.host.match(/carbon\.?(.*).lowes.com/g)) {
      return '/bds/documentation/api/components/datatable/example?';
    }

    return '/api/components/datatable/example?';
  };

  var columns = _react["default"].useMemo(function () {
    return [{
      Header: function Header() {
        return /*#__PURE__*/_react["default"].createElement(_.Typography, {
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
        return /*#__PURE__*/_react["default"].createElement(_.Typography, {
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
        return /*#__PURE__*/_react["default"].createElement(_.Typography, {
          as: "div",
          variant: "caption"
        }, value);
      }
    }, {
      Header: 'Genre',
      accessor: 'genre',
      Cell: function Cell(_ref4) {
        var value = _ref4.value;
        return /*#__PURE__*/_react["default"].createElement(_.Typography, {
          as: "div",
          variant: "caption"
        }, value.replace(/\|/g, ', '));
      }
    }, {
      Header: 'Producer',
      accessor: 'producer',
      Cell: function Cell(_ref5) {
        var value = _ref5.value;
        return /*#__PURE__*/_react["default"].createElement(_.Typography, {
          as: "div",
          variant: "caption"
        }, value);
      }
    }, {
      Header: 'Studio',
      accessor: 'studio',
      Cell: function Cell(_ref6) {
        var value = _ref6.value;
        return /*#__PURE__*/_react["default"].createElement(_.Typography, {
          as: "div",
          variant: "caption"
        }, value);
      }
    }, {
      Header: 'Revenue',
      accessor: 'revenue',
      Cell: function Cell(_ref7) {
        var value = _ref7.value;
        return /*#__PURE__*/_react["default"].createElement(_.Typography, {
          as: "div",
          variant: "caption"
        }, value);
      }
    }, {
      Header: 'Release Date',
      accessor: 'release',
      Cell: function Cell(_ref8) {
        var value = _ref8.value;
        return /*#__PURE__*/_react["default"].createElement(_.Typography, {
          as: "div",
          variant: "caption"
        }, new Date(value).toDateString());
      }
    }, {
      Header: 'Synopsis',
      accessor: 'synopsis',
      Cell: function Cell(_ref9) {
        var value = _ref9.value;
        return /*#__PURE__*/_react["default"].createElement(_.Typography, {
          as: "div",
          variant: "caption"
        }, value);
      }
    }];
  }, []);

  var _React$useState11 = _react["default"].useState([]),
      _React$useState12 = (0, _slicedToArray2["default"])(_React$useState11, 2),
      data = _React$useState12[0],
      setData = _React$useState12[1];

  var _React$useState13 = _react["default"].useState(false),
      _React$useState14 = (0, _slicedToArray2["default"])(_React$useState13, 2),
      loading = _React$useState14[0],
      setLoading = _React$useState14[1];

  var _React$useState15 = _react["default"].useState({}),
      _React$useState16 = (0, _slicedToArray2["default"])(_React$useState15, 2),
      state = _React$useState16[0],
      setState = _React$useState16[1];

  var _React$useState17 = _react["default"].useState(0),
      _React$useState18 = (0, _slicedToArray2["default"])(_React$useState17, 2),
      pageCount = _React$useState18[0],
      setPageCount = _React$useState18[1];

  var _React$useState19 = _react["default"].useState(0),
      _React$useState20 = (0, _slicedToArray2["default"])(_React$useState19, 2),
      rowCount = _React$useState20[0],
      setRowCount = _React$useState20[1];

  var _React$useState21 = _react["default"].useState(null),
      _React$useState22 = (0, _slicedToArray2["default"])(_React$useState21, 2),
      pageIndex = _React$useState22[0],
      setPageIndex = _React$useState22[1];

  var _React$useState23 = _react["default"].useState(null),
      _React$useState24 = (0, _slicedToArray2["default"])(_React$useState23, 2),
      toPage = _React$useState24[0],
      setToPage = _React$useState24[1];

  var fetchIdRef = _react["default"].useRef(0);

  var fetchData = _react["default"].useCallback( /*#__PURE__*/function () {
    var _ref11 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref10) {
      var pageSize, pageIndex, globalFilter, filters, sortBy, fetchId, response, _data;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              pageSize = _ref10.pageSize, pageIndex = _ref10.pageIndex, globalFilter = _ref10.globalFilter, filters = _ref10.filters, sortBy = _ref10.sortBy;
              // Give this fetch an ID
              fetchId = ++fetchIdRef.current; // Set the loading state

              setLoading(true);
              _context.next = 5;
              return fetch(FETCH_URL() + new URLSearchParams((0, _extends2["default"])({
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

  _react["default"].useEffect(function () {
    fetchData(state);
  }, [fetchData, state]);

  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.DataTable, {
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
    toolbar: [/*#__PURE__*/_react["default"].createElement("div", {
      style: {
        width: '100%'
      }
    }), /*#__PURE__*/_react["default"].createElement(_Spinner["default"], {
      show: loading,
      small: true,
      inline: true
    }), /*#__PURE__*/_react["default"].createElement(GoToPage, {
      toPage: toPage,
      setToPage: setToPage,
      setPageIndex: setPageIndex
    })],
    onTableUpdate: function onTableUpdate(_ref14) {
      var state = _ref14.state;
      setState(state);
    }
  }), _ApiLink9 || (_ApiLink9 = /*#__PURE__*/_react["default"].createElement(_ApiLink10.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/DataTable"
  })));
};

exports.ServerSideExample = ServerSideExample;