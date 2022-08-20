var _BreadcrumbMobileSkel, _BreadcrumbMobileSkel2, _BreadcrumbMobileSkel3;

import * as React from 'react';
import { render } from '../../../test-utils';
import BreadcrumbMobileSkeleton from './BreadcrumbMobileSkeleton';
describe('BreadcrumbMobileSkeleton Snapshots', () => {
  test('BreadcrumbMobileSkeleton default snapshot', () => {
    const {
      asFragment
    } = render(_BreadcrumbMobileSkel || (_BreadcrumbMobileSkel = /*#__PURE__*/React.createElement(BreadcrumbMobileSkeleton, null)));
    expect(asFragment()).toMatchSnapshot();
  });
  test('BreadcrumbMobileSkeleton animate snapshot', () => {
    const {
      asFragment
    } = render(_BreadcrumbMobileSkel2 || (_BreadcrumbMobileSkel2 = /*#__PURE__*/React.createElement(BreadcrumbMobileSkeleton, {
      animate: true
    })));
    expect(asFragment()).toMatchSnapshot();
  });
  test('BreadcrumbMobileSkeleton custom width snapshot', () => {
    const {
      asFragment
    } = render(_BreadcrumbMobileSkel3 || (_BreadcrumbMobileSkel3 = /*#__PURE__*/React.createElement(BreadcrumbMobileSkeleton, {
      width: "30rem"
    })));
    expect(asFragment()).toMatchSnapshot();
  });
});