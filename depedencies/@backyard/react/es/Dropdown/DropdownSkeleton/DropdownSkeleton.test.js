var _DropdownSkeleton, _DropdownSkeleton2, _DropdownSkeleton3, _DropdownSkeleton4;

import * as React from 'react';
import { render } from '../../../test-utils';
import DropdownSkeleton from './DropdownSkeleton';
describe('DropdownSkeleton Tests', () => {
  it('renders', () => {
    const {
      getByTestId
    } = render(_DropdownSkeleton || (_DropdownSkeleton = /*#__PURE__*/React.createElement(DropdownSkeleton, {
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should have custom width', () => {
    const {
      getByTestId
    } = render(_DropdownSkeleton2 || (_DropdownSkeleton2 = /*#__PURE__*/React.createElement(DropdownSkeleton, {
      width: "20rem",
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should accept custom size', () => {
    const {
      getByTestId
    } = render(_DropdownSkeleton3 || (_DropdownSkeleton3 = /*#__PURE__*/React.createElement(DropdownSkeleton, {
      size: "small",
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should animate', () => {
    const {
      getByTestId
    } = render(_DropdownSkeleton4 || (_DropdownSkeleton4 = /*#__PURE__*/React.createElement(DropdownSkeleton, {
      animate: true,
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
});