var _Link;

/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import { render, fireEvent } from '../../test-utils';
import Link from './Link';
describe('Link Tests', function () {
  it('renders', function () {
    var _render = render(_Link || (_Link = /*#__PURE__*/React.createElement(Link, {
      to: "#"
    }, "Link"))),
        getByText = _render.getByText;

    var link = getByText('Link');
    expect(link).toBeInTheDocument();
  });
  describe('event: focus', function () {
    it('should trigger `onFocus` when enabled', function () {
      var onFocusSpy = jest.fn();

      var _render2 = render( /*#__PURE__*/React.createElement(Link, {
        to: "#",
        onFocus: onFocusSpy
      }, "Link")),
          getByText = _render2.getByText;

      var link = getByText('Link');
      fireEvent.focus(link);
      expect(onFocusSpy).toHaveBeenCalledTimes(1);
    });
  });
  describe('event: click', function () {
    it('should trigger `onClick` when enabled', function () {
      var onClickSpy = jest.fn();

      var _render3 = render( /*#__PURE__*/React.createElement(Link, {
        onClick: onClickSpy
      }, "Link")),
          getByText = _render3.getByText;

      var link = getByText('Link');
      fireEvent.click(link);
      expect(onClickSpy).toHaveBeenCalledTimes(1);
    });
    it('triggers `onClick` and `to` navigation when clicked and defined', function () {
      var onClickSpy = jest.fn();

      var _render4 = render( /*#__PURE__*/React.createElement(Link, {
        to: "http://google.com",
        onClick: onClickSpy
      }, "Link")),
          getByText = _render4.getByText;

      var link = getByText('Link').parentNode;
      fireEvent.click(link);
      expect(onClickSpy).toHaveBeenCalledTimes(1);
    });
  });
  describe('keyboard accessibility', function () {
    it('triggers `onClick` when Enter is pressed on the element', function () {
      var onClickSpy = jest.fn();

      var _render5 = render( /*#__PURE__*/React.createElement(Link, {
        onClick: onClickSpy
      }, "Link")),
          getByRole = _render5.getByRole;

      var link = getByRole('button');
      link.focus();
      fireEvent.keyDown(document.activeElement || document.body, {
        key: 'Enter'
      });
      expect(onClickSpy).toHaveBeenCalled();
    });
    it('triggers `onClick` when Space is pressed on the element', function () {
      var onClickSpy = jest.fn();

      var _render6 = render( /*#__PURE__*/React.createElement(Link, {
        onClick: onClickSpy
      }, "Link")),
          getByRole = _render6.getByRole;

      var link = getByRole('button');
      link.focus();
      fireEvent.keyDown(document.activeElement || document.body, {
        key: ' '
      });
      expect(onClickSpy).toHaveBeenCalled();
    });
    it('triggers `onKeyDown` when K is pressed on the element', function () {
      var onKeyDownSpy = jest.fn();

      var _render7 = render( /*#__PURE__*/React.createElement(Link, {
        onKeyDown: onKeyDownSpy
      }, "Link")),
          getByRole = _render7.getByRole;

      var link = getByRole('button');
      link.focus();
      fireEvent.keyDown(document.activeElement || document.body, {
        key: 'K'
      });
      expect(onKeyDownSpy).toHaveBeenCalled();
    });
  });
});