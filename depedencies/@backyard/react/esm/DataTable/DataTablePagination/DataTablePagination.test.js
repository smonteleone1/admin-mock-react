import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";

var _StubPagination, _StubPagination2;

import _regeneratorRuntime from "@babel/runtime/regenerator";
import * as React from 'react';
import { render, fireEvent } from '../../../test-utils';
import { StubPagination } from './StubPagination';
describe('TablePagination Tests', function () {
  it('renders', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var _render, container, pages;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _render = render(_StubPagination || (_StubPagination = /*#__PURE__*/React.createElement(StubPagination, {
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
    var _render2 = render( /*#__PURE__*/React.createElement(StubPagination, {
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
    var _render3 = render( /*#__PURE__*/React.createElement(StubPagination, {
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

    var _render4 = render( /*#__PURE__*/React.createElement(StubPagination, {
      length: 50,
      onChange: eventSpy
    })),
        container = _render4.container;

    var nextBtn = container.querySelector('.type--next');
    fireEvent.click(nextBtn);
    expect(eventSpy).toBeCalledTimes(1);
  });
  it('should change the number of rows to 25', function () {
    var _render5 = render(_StubPagination2 || (_StubPagination2 = /*#__PURE__*/React.createElement(StubPagination, {
      length: 50
    }))),
        container = _render5.container,
        getByText = _render5.getByText;

    var select = container.querySelector('.select--input');
    fireEvent.keyPress(select, {
      key: 'Down'
    });
    fireEvent.keyPress(select, {
      key: 'Down'
    });
    fireEvent.keyPress(select, {
      key: 'Enter'
    });
    var rowQuantity = getByText('25');
    expect(rowQuantity).toBeInTheDocument();
  });
});