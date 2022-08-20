"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var React = _interopRequireWildcard(require("react"));

var _testUtils = require("../../../test-utils");

var _DataTable3 = _interopRequireDefault(require("../DataTable"));

var _data = require("../utils/data.names");

var _DataTable, _DataTable2;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('DataTableToolbarTests', function () {
  it('renders', function () {
    var _render = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_DataTable3["default"], {
      columns: [],
      data: [],
      showToolbar: true
    })),
        container = _render.container;

    var component = container.querySelector('.data-table-toolbar');
    expect(component).toBeInTheDocument();
  });
  it('shows the filters', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var _render2, container, filterButton, dataTableHeaderRows;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _render2 = (0, _testUtils.render)(_DataTable || (_DataTable = /*#__PURE__*/React.createElement(_DataTable3["default"], {
              columns: _data.columns,
              data: _data.fifteen,
              showToolbar: true,
              enableFilters: true
            }))), container = _render2.container;
            filterButton = container.querySelector('.filter-button');

            _testUtils.fireEvent.click(filterButton);

            dataTableHeaderRows = container.querySelectorAll('.data-table-header .data-table-row');
            expect(dataTableHeaderRows.length).toEqual(2);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  it('shows the searchbar', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    var _render3, container, searchButton, searchBar;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _render3 = (0, _testUtils.render)(_DataTable2 || (_DataTable2 = /*#__PURE__*/React.createElement(_DataTable3["default"], {
              columns: _data.columns,
              data: _data.fifteen,
              enableFilters: true,
              showToolbar: true,
              enableSearch: true
            }))), container = _render3.container;
            searchButton = container.querySelector('.search-button');

            _testUtils.fireEvent.click(searchButton);

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
    var _render4 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_DataTable3["default"], {
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