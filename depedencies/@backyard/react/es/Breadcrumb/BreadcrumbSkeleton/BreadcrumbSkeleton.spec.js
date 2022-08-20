var _BreadcrumbSkeleton, _BreadcrumbSkeleton2, _BreadcrumbSkeleton3;

import * as React from 'react';
import { render } from '../../../test-utils';
import BreadcrumbSkeleton from './BreadcrumbSkeleton';
describe('BreadcrumbSkeleton Snapshots', () => {
  test('BreadcrumbSkeleton default snapshot', () => {
    const {
      asFragment
    } = render(_BreadcrumbSkeleton || (_BreadcrumbSkeleton = /*#__PURE__*/React.createElement(BreadcrumbSkeleton, null)));
    expect(asFragment()).toMatchSnapshot();
  });
  test('BreadcrumbSkeleton animate snapshot', () => {
    const {
      asFragment
    } = render(_BreadcrumbSkeleton2 || (_BreadcrumbSkeleton2 = /*#__PURE__*/React.createElement(BreadcrumbSkeleton, {
      animate: true
    })));
    expect(asFragment()).toMatchSnapshot();
  });
  test('BreadcrumbSkeleton custom width snapshot', () => {
    const {
      asFragment
    } = render(_BreadcrumbSkeleton3 || (_BreadcrumbSkeleton3 = /*#__PURE__*/React.createElement(BreadcrumbSkeleton, {
      width: "30rem"
    })));
    expect(asFragment()).toMatchSnapshot();
  });
  describe('prop: render', () => {
    const renders = ['auto', 'desktop', 'mobile'];
    renders.forEach(rend => {
      var _BreadcrumbSkeleton4;

      test(`Breadcrumb ${rend} 'render' snapshot`, () => {
        const {
          asFragment
        } = render(_BreadcrumbSkeleton4 || (_BreadcrumbSkeleton4 = /*#__PURE__*/React.createElement(BreadcrumbSkeleton, {
          render: rend
        })));
        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});