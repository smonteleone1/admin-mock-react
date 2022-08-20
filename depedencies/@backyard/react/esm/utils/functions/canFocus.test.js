var _div, _div2, _div3, _div4, _div5;

import * as React from 'react';
import { render } from '../../../test-utils';
import canFocus from './canFocus';
describe('utils/functions/canFocus Tests', function () {
  it('true -> blanket document active element test validates', function () {
    var _render = render(_div || (_div = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      className: "prev"
    }), /*#__PURE__*/React.createElement("button", {
      className: "next"
    })))),
        container = _render.container;

    var prev = container.querySelector('.prev');
    var next = container.querySelector('.next');
    expect(canFocus(prev, next)).toBe(true);
  });
  it('false -> prev invalid args', function () {
    expect(canFocus()).toBe(false);
  });
  it('false -> next invalid args', function () {
    expect(canFocus(true)).toBe(false);
  });
  it('false -> next tabIndex = -1', function () {
    var _render2 = render(_div2 || (_div2 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      className: "prev"
    }), /*#__PURE__*/React.createElement("button", {
      className: "next",
      tabIndex: -1
    })))),
        container = _render2.container;

    var prev = container.querySelector('.prev');
    var next = container.querySelector('.next');
    expect(canFocus(prev, next)).toBe(false);
  });
  it('false -> no test validated', function () {
    var _render3 = render(_div3 || (_div3 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      className: "prev"
    }), /*#__PURE__*/React.createElement("div", {
      className: "next",
      tabIndex: 0
    })))),
        container = _render3.container;

    var prev = container.querySelector('.prev');
    var next = container.querySelector('.next');

    next.focus = function () {
      return null;
    };

    expect(canFocus(prev, next)).toBe(false);
  });
  it('false -> no test validated & prev no focus', function () {
    var _render4 = render(_div4 || (_div4 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      className: "prev"
    }), /*#__PURE__*/React.createElement("div", {
      className: "next",
      tabIndex: 0
    })))),
        container = _render4.container;

    var prev = container.querySelector('.prev');
    var next = container.querySelector('.next');
    prev.focus = null; // should never happen, but need to check just in case

    next.focus = function () {
      return null;
    };

    expect(canFocus(prev, next)).toBe(false);
  });
  it('false -> no test validated no focus', function () {
    var _render5 = render(_div5 || (_div5 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      className: "prev"
    }), /*#__PURE__*/React.createElement("div", {
      className: "next",
      tabIndex: 0
    })))),
        container = _render5.container;

    var prev = container.querySelector('.prev');
    var next = container.querySelector('.next');
    next.focus = null;
    expect(canFocus(prev, next)).toBe(false);
  });
});