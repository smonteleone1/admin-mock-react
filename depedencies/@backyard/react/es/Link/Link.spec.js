var _Link, _Link2, _Link3, _Link4, _Link5, _Link6, _Link7;

/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Bookmark from '@backyard/icons/BookmarkOutlined';
import { render } from '../../test-utils';
import { ThemeProvider } from '../ThemeProvider';
import Link from './Link';
describe('Link Snapshots', () => {
  test('Link default snapshot', () => {
    const {
      asFragment
    } = render(_Link || (_Link = /*#__PURE__*/React.createElement(Link, {
      to: "#"
    }, "Link")));
    expect(asFragment()).toMatchSnapshot();
  });
  describe('themes', () => {
    const themes = ['light', 'dark'];
    themes.forEach(theme => {
      var _ThemeProvider;

      test(`Link ${theme} theme snapshot`, () => {
        const {
          asFragment
        } = render(_ThemeProvider || (_ThemeProvider = /*#__PURE__*/React.createElement(ThemeProvider, {
          theme: theme
        }, _Link2 || (_Link2 = /*#__PURE__*/React.createElement(Link, {
          to: "#"
        }, "Link")))));
        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('prop: icons', () => {
    test(`Link iconBefore snapshot`, () => {
      const {
        asFragment
      } = render(_Link3 || (_Link3 = /*#__PURE__*/React.createElement(Link, {
        to: "#",
        iconBefore: /*#__PURE__*/React.createElement(Bookmark, null)
      }, "Link")));
      expect(asFragment()).toMatchSnapshot();
    });
    test(`Link iconAfter snapshot`, () => {
      const {
        asFragment
      } = render(_Link4 || (_Link4 = /*#__PURE__*/React.createElement(Link, {
        to: "#",
        iconAfter: /*#__PURE__*/React.createElement(Bookmark, null)
      }, "Link")));
      expect(asFragment()).toMatchSnapshot();
    });
  });
  describe('prop: color', () => {
    const types = ['interactive', 'primary', 'variant', 'link'];
    types.forEach(type => {
      test(`Link type ${type} snapshot`, () => {
        const {
          asFragment
        } = render(_Link5 || (_Link5 = /*#__PURE__*/React.createElement(Link, {
          to: "#"
        }, "Link")));
        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('prop: size', () => {
    const sizes = ['small', 'medium'];
    sizes.forEach(size => {
      test(`Link size ${size} snapshot`, () => {
        const {
          asFragment
        } = render(_Link6 || (_Link6 = /*#__PURE__*/React.createElement(Link, {
          to: "#"
        }, "Link")));
        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('other props', () => {
    test('Link DOM id, className snapshot', () => {
      const {
        asFragment
      } = render(_Link7 || (_Link7 = /*#__PURE__*/React.createElement(Link, {
        to: "#",
        id: "link-id",
        className: "link-classname"
      }, "Link")));
      expect(asFragment()).toMatchSnapshot();
    });
  });
});