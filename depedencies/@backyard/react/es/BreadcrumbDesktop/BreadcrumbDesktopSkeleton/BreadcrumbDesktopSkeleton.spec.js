var _BreadcrumbDesktopSke, _BreadcrumbDesktopSke2, _BreadcrumbDesktopSke3;

import * as React from 'react';
import { render } from '../../../test-utils';
import BreadcrumbDesktopSkeleton from './BreadcrumbDesktopSkeleton';
describe('BreadcrumbDesktopSkeleton Snapshots', () => {
  test('BreadcrumbDesktopSkeleton default snapshot', () => {
    const {
      asFragment
    } = render(_BreadcrumbDesktopSke || (_BreadcrumbDesktopSke = /*#__PURE__*/React.createElement(BreadcrumbDesktopSkeleton, null)));
    expect(asFragment()).toMatchSnapshot();
  });
  test('BreadcrumbDesktopSkeleton animate snapshot', () => {
    const {
      asFragment
    } = render(_BreadcrumbDesktopSke2 || (_BreadcrumbDesktopSke2 = /*#__PURE__*/React.createElement(BreadcrumbDesktopSkeleton, {
      animate: true
    })));
    expect(asFragment()).toMatchSnapshot();
  });
  test('BreadcrumbDesktopSkeleton custom width snapshot', () => {
    const {
      asFragment
    } = render(_BreadcrumbDesktopSke3 || (_BreadcrumbDesktopSke3 = /*#__PURE__*/React.createElement(BreadcrumbDesktopSkeleton, {
      width: "30rem"
    })));
    expect(asFragment()).toMatchSnapshot();
  });
});