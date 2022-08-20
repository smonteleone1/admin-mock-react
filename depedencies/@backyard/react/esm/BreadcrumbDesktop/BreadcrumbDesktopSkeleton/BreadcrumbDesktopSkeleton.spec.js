var _BreadcrumbDesktopSke, _BreadcrumbDesktopSke2, _BreadcrumbDesktopSke3;

import * as React from 'react';
import { render } from '../../../test-utils';
import BreadcrumbDesktopSkeleton from './BreadcrumbDesktopSkeleton';
describe('BreadcrumbDesktopSkeleton Snapshots', function () {
  test('BreadcrumbDesktopSkeleton default snapshot', function () {
    var _render = render(_BreadcrumbDesktopSke || (_BreadcrumbDesktopSke = /*#__PURE__*/React.createElement(BreadcrumbDesktopSkeleton, null))),
        asFragment = _render.asFragment;

    expect(asFragment()).toMatchSnapshot();
  });
  test('BreadcrumbDesktopSkeleton animate snapshot', function () {
    var _render2 = render(_BreadcrumbDesktopSke2 || (_BreadcrumbDesktopSke2 = /*#__PURE__*/React.createElement(BreadcrumbDesktopSkeleton, {
      animate: true
    }))),
        asFragment = _render2.asFragment;

    expect(asFragment()).toMatchSnapshot();
  });
  test('BreadcrumbDesktopSkeleton custom width snapshot', function () {
    var _render3 = render(_BreadcrumbDesktopSke3 || (_BreadcrumbDesktopSke3 = /*#__PURE__*/React.createElement(BreadcrumbDesktopSkeleton, {
      width: "30rem"
    }))),
        asFragment = _render3.asFragment;

    expect(asFragment()).toMatchSnapshot();
  });
});