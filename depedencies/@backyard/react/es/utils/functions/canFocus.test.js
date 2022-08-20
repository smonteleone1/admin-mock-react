var _div, _div2, _div3, _div4, _div5;

import * as React from 'react';
import { render } from '../../../test-utils';
import canFocus from './canFocus';
describe('utils/functions/canFocus Tests', () => {
  it('true -> blanket document active element test validates', () => {
    const {
      container
    } = render(_div || (_div = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      className: "prev"
    }), /*#__PURE__*/React.createElement("button", {
      className: "next"
    }))));
    const prev = container.querySelector('.prev');
    const next = container.querySelector('.next');
    expect(canFocus(prev, next)).toBe(true);
  });
  it('false -> prev invalid args', () => {
    expect(canFocus()).toBe(false);
  });
  it('false -> next invalid args', () => {
    expect(canFocus(true)).toBe(false);
  });
  it('false -> next tabIndex = -1', () => {
    const {
      container
    } = render(_div2 || (_div2 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      className: "prev"
    }), /*#__PURE__*/React.createElement("button", {
      className: "next",
      tabIndex: -1
    }))));
    const prev = container.querySelector('.prev');
    const next = container.querySelector('.next');
    expect(canFocus(prev, next)).toBe(false);
  });
  it('false -> no test validated', () => {
    const {
      container
    } = render(_div3 || (_div3 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      className: "prev"
    }), /*#__PURE__*/React.createElement("div", {
      className: "next",
      tabIndex: 0
    }))));
    const prev = container.querySelector('.prev');
    const next = container.querySelector('.next');

    next.focus = () => null;

    expect(canFocus(prev, next)).toBe(false);
  });
  it('false -> no test validated & prev no focus', () => {
    const {
      container
    } = render(_div4 || (_div4 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      className: "prev"
    }), /*#__PURE__*/React.createElement("div", {
      className: "next",
      tabIndex: 0
    }))));
    const prev = container.querySelector('.prev');
    const next = container.querySelector('.next');
    prev.focus = null; // should never happen, but need to check just in case

    next.focus = () => null;

    expect(canFocus(prev, next)).toBe(false);
  });
  it('false -> no test validated no focus', () => {
    const {
      container
    } = render(_div5 || (_div5 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      className: "prev"
    }), /*#__PURE__*/React.createElement("div", {
      className: "next",
      tabIndex: 0
    }))));
    const prev = container.querySelector('.prev');
    const next = container.querySelector('.next');
    next.focus = null;
    expect(canFocus(prev, next)).toBe(false);
  });
});