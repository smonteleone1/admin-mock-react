var _BreadcrumbMobileSkel, _BreadcrumbMobileSkel2, _BreadcrumbMobileSkel3;

import * as React from 'react';
import { render } from '../../../test-utils';
import BreadcrumbMobileSkeleton from './BreadcrumbMobileSkeleton';
describe('BreadcrumbMobileSkeleton Snapshots', function () {
  test('BreadcrumbMobileSkeleton default snapshot', function () {
    var _render = render(_BreadcrumbMobileSkel || (_BreadcrumbMobileSkel = /*#__PURE__*/React.createElement(BreadcrumbMobileSkeleton, null))),
        asFragment = _render.asFragment;

    expect(asFragment()).toMatchSnapshot();
  });
  test('BreadcrumbMobileSkeleton animate snapshot', function () {
    var _render2 = render(_BreadcrumbMobileSkel2 || (_BreadcrumbMobileSkel2 = /*#__PURE__*/React.createElement(BreadcrumbMobileSkeleton, {
      animate: true
    }))),
        asFragment = _render2.asFragment;

    expect(asFragment()).toMatchSnapshot();
  });
  test('BreadcrumbMobileSkeleton custom width snapshot', function () {
    var _render3 = render(_BreadcrumbMobileSkel3 || (_BreadcrumbMobileSkel3 = /*#__PURE__*/React.createElement(BreadcrumbMobileSkeleton, {
      width: "30rem"
    }))),
        asFragment = _render3.asFragment;

    expect(asFragment()).toMatchSnapshot();
  });
});