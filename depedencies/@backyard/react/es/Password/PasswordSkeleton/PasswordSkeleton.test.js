var _PasswordSkeleton, _PasswordSkeleton2, _PasswordSkeleton3, _PasswordSkeleton4;

import * as React from 'react';
import { render } from '../../../test-utils';
import PasswordSkeleton from './PasswordSkeleton';
describe('PasswordSkeleton Tests', () => {
  it('renders', () => {
    const {
      getByTestId
    } = render(_PasswordSkeleton || (_PasswordSkeleton = /*#__PURE__*/React.createElement(PasswordSkeleton, {
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should have custom width', () => {
    const {
      getByTestId
    } = render(_PasswordSkeleton2 || (_PasswordSkeleton2 = /*#__PURE__*/React.createElement(PasswordSkeleton, {
      width: "20rem",
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should accept custom size', () => {
    const {
      getByTestId
    } = render(_PasswordSkeleton3 || (_PasswordSkeleton3 = /*#__PURE__*/React.createElement(PasswordSkeleton, {
      size: "small",
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should animate', () => {
    const {
      getByTestId
    } = render(_PasswordSkeleton4 || (_PasswordSkeleton4 = /*#__PURE__*/React.createElement(PasswordSkeleton, {
      animate: true,
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
});