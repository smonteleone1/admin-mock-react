var _DropdownSkeleton, _DropdownSkeleton2, _DropdownSkeleton3, _DropdownSkeleton4;

import * as React from 'react';
import { render } from '../../../test-utils';
import DropdownSkeleton from './DropdownSkeleton';
describe('DropdownSkeleton Tests', function () {
  it('renders', function () {
    var _render = render(_DropdownSkeleton || (_DropdownSkeleton = /*#__PURE__*/React.createElement(DropdownSkeleton, {
      "data-testid": "skeleton"
    }))),
        getByTestId = _render.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should have custom width', function () {
    var _render2 = render(_DropdownSkeleton2 || (_DropdownSkeleton2 = /*#__PURE__*/React.createElement(DropdownSkeleton, {
      width: "20rem",
      "data-testid": "skeleton"
    }))),
        getByTestId = _render2.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should accept custom size', function () {
    var _render3 = render(_DropdownSkeleton3 || (_DropdownSkeleton3 = /*#__PURE__*/React.createElement(DropdownSkeleton, {
      size: "small",
      "data-testid": "skeleton"
    }))),
        getByTestId = _render3.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should animate', function () {
    var _render4 = render(_DropdownSkeleton4 || (_DropdownSkeleton4 = /*#__PURE__*/React.createElement(DropdownSkeleton, {
      animate: true,
      "data-testid": "skeleton"
    }))),
        getByTestId = _render4.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
});