var _Link, _Link2, _Link3, _Link4, _Link5, _Link6, _Link7;

/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Bookmark from '@backyard/icons/BookmarkOutlined';
import { render } from '../../test-utils';
import { ThemeProvider } from '../ThemeProvider';
import Link from './Link';
describe('Link Snapshots', function () {
  test('Link default snapshot', function () {
    var _render = render(_Link || (_Link = /*#__PURE__*/React.createElement(Link, {
      to: "#"
    }, "Link"))),
        asFragment = _render.asFragment;

    expect(asFragment()).toMatchSnapshot();
  });
  describe('themes', function () {
    var themes = ['light', 'dark'];
    themes.forEach(function (theme) {
      var _ThemeProvider;

      test("Link ".concat(theme, " theme snapshot"), function () {
        var _render2 = render(_ThemeProvider || (_ThemeProvider = /*#__PURE__*/React.createElement(ThemeProvider, {
          theme: theme
        }, _Link2 || (_Link2 = /*#__PURE__*/React.createElement(Link, {
          to: "#"
        }, "Link"))))),
            asFragment = _render2.asFragment;

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('prop: icons', function () {
    test("Link iconBefore snapshot", function () {
      var _render3 = render(_Link3 || (_Link3 = /*#__PURE__*/React.createElement(Link, {
        to: "#",
        iconBefore: /*#__PURE__*/React.createElement(Bookmark, null)
      }, "Link"))),
          asFragment = _render3.asFragment;

      expect(asFragment()).toMatchSnapshot();
    });
    test("Link iconAfter snapshot", function () {
      var _render4 = render(_Link4 || (_Link4 = /*#__PURE__*/React.createElement(Link, {
        to: "#",
        iconAfter: /*#__PURE__*/React.createElement(Bookmark, null)
      }, "Link"))),
          asFragment = _render4.asFragment;

      expect(asFragment()).toMatchSnapshot();
    });
  });
  describe('prop: color', function () {
    var types = ['interactive', 'primary', 'variant', 'link'];
    types.forEach(function (type) {
      test("Link type ".concat(type, " snapshot"), function () {
        var _render5 = render(_Link5 || (_Link5 = /*#__PURE__*/React.createElement(Link, {
          to: "#"
        }, "Link"))),
            asFragment = _render5.asFragment;

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('prop: size', function () {
    var sizes = ['small', 'medium'];
    sizes.forEach(function (size) {
      test("Link size ".concat(size, " snapshot"), function () {
        var _render6 = render(_Link6 || (_Link6 = /*#__PURE__*/React.createElement(Link, {
          to: "#"
        }, "Link"))),
            asFragment = _render6.asFragment;

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('other props', function () {
    test('Link DOM id, className snapshot', function () {
      var _render7 = render(_Link7 || (_Link7 = /*#__PURE__*/React.createElement(Link, {
        to: "#",
        id: "link-id",
        className: "link-classname"
      }, "Link"))),
          asFragment = _render7.asFragment;

      expect(asFragment()).toMatchSnapshot();
    });
  });
});