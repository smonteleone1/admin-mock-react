var _BreadcrumbSkeleton, _BreadcrumbSkeleton2, _BreadcrumbSkeleton3;

import * as React from 'react';
import { render } from '../../../test-utils';
import BreadcrumbSkeleton from './BreadcrumbSkeleton';
describe('BreadcrumbSkeleton Snapshots', function () {
  test('BreadcrumbSkeleton default snapshot', function () {
    var _render = render(_BreadcrumbSkeleton || (_BreadcrumbSkeleton = /*#__PURE__*/React.createElement(BreadcrumbSkeleton, null))),
        asFragment = _render.asFragment;

    expect(asFragment()).toMatchSnapshot();
  });
  test('BreadcrumbSkeleton animate snapshot', function () {
    var _render2 = render(_BreadcrumbSkeleton2 || (_BreadcrumbSkeleton2 = /*#__PURE__*/React.createElement(BreadcrumbSkeleton, {
      animate: true
    }))),
        asFragment = _render2.asFragment;

    expect(asFragment()).toMatchSnapshot();
  });
  test('BreadcrumbSkeleton custom width snapshot', function () {
    var _render3 = render(_BreadcrumbSkeleton3 || (_BreadcrumbSkeleton3 = /*#__PURE__*/React.createElement(BreadcrumbSkeleton, {
      width: "30rem"
    }))),
        asFragment = _render3.asFragment;

    expect(asFragment()).toMatchSnapshot();
  });
  describe('prop: render', function () {
    var renders = ['auto', 'desktop', 'mobile'];
    renders.forEach(function (rend) {
      var _BreadcrumbSkeleton4;

      test("Breadcrumb ".concat(rend, " 'render' snapshot"), function () {
        var _render4 = render(_BreadcrumbSkeleton4 || (_BreadcrumbSkeleton4 = /*#__PURE__*/React.createElement(BreadcrumbSkeleton, {
          render: rend
        }))),
            asFragment = _render4.asFragment;

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});