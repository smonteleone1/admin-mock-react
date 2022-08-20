"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var React = _interopRequireWildcard(require("react"));

var _testUtils = require("../../../test-utils");

var _StubPagination3 = require("./StubPagination");

var _StubPagination, _StubPagination2;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('TablePagination Tests', function () {
  it('renders', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var _render, container, pages;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _render = (0, _testUtils.render)(_StubPagination || (_StubPagination = /*#__PURE__*/React.createElement(_StubPagination3.StubPagination, {
              length: 10
            }))), container = _render.container;
            pages = container.querySelectorAll('.type--page');
            pages.forEach(function (page) {
              expect(page).toBeInTheDocument();
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  it('renders 2 pages when totalRecords is 50 and itemsPerPage is 30', function () {
    var _render2 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_StubPagination3.StubPagination, {
      length: 50,
      rowsPerPageOptions: [30]
    })),
        container = _render2.container;

    var pages = container.querySelectorAll('.type--page');
    pages.forEach(function (page) {
      expect(page).toBeInTheDocument();
    });
    expect(pages.length).toEqual(5);
  });
  it('renders 2 pages when totalRecords is 47 and itemsPerPage is 30', function () {
    var _render3 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_StubPagination3.StubPagination, {
      length: 47,
      rowsPerPageOptions: [30]
    })),
        container = _render3.container;

    var pages = container.querySelectorAll('.type--page');
    pages.forEach(function (page) {
      expect(pages.length).toEqual(5);
      expect(page).toBeInTheDocument();
    });
  });
  it('calls the onChange handler', function () {
    var events = {
      onChangeFn: function onChangeFn() {}
    };
    var eventSpy = jest.spyOn(events, 'onChangeFn');

    var _render4 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_StubPagination3.StubPagination, {
      length: 50,
      onChange: eventSpy
    })),
        container = _render4.container;

    var nextBtn = container.querySelector('.type--next');

    _testUtils.fireEvent.click(nextBtn);

    expect(eventSpy).toBeCalledTimes(1);
  });
  it('should change the number of rows to 25', function () {
    var _render5 = (0, _testUtils.render)(_StubPagination2 || (_StubPagination2 = /*#__PURE__*/React.createElement(_StubPagination3.StubPagination, {
      length: 50
    }))),
        container = _render5.container,
        getByText = _render5.getByText;

    var select = container.querySelector('.select--input');

    _testUtils.fireEvent.keyPress(select, {
      key: 'Down'
    });

    _testUtils.fireEvent.keyPress(select, {
      key: 'Down'
    });

    _testUtils.fireEvent.keyPress(select, {
      key: 'Enter'
    });

    var rowQuantity = getByText('25');
    expect(rowQuantity).toBeInTheDocument();
  });
});