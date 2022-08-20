var _BreadcrumbDesktop;

import * as React from 'react';
import { render } from '../../test-utils';
import BreadcrumbDesktop from './BreadcrumbDesktop';
var crumbs = [{
  label: 'Appliances',
  to: '/',
  className: 'crumb-1'
}, {
  label: 'Refrigerators',
  to: '/',
  className: 'crumb-2'
}, {
  label: 'French Door Refrigerators',
  to: '/',
  className: 'crumb-3 currentPage'
}];
describe('BreadcrumbDesktop Tests', function () {
  it('renders', function () {
    var _render = render(_BreadcrumbDesktop || (_BreadcrumbDesktop = /*#__PURE__*/React.createElement(BreadcrumbDesktop, {
      crumbs: crumbs
    }))),
        getByText = _render.getByText;

    var crumb1 = getByText('Appliances');
    var crumb2 = getByText('Refrigerators');
    var crumb3 = getByText('French Door Refrigerators');
    expect(crumb1).toBeInTheDocument();
    expect(crumb2).toBeInTheDocument();
    expect(crumb3).toBeInTheDocument();
  });
});