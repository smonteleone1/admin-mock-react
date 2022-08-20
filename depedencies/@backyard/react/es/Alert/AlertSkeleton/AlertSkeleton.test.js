var _AlertSkeleton, _AlertSkeleton2, _AlertSkeleton3, _AlertSkeleton4;

import * as React from 'react';
import { render } from '../../../test-utils';
import AlertSkeleton from './AlertSkeleton';
describe('AlertSkeleton Tests', () => {
  it('renders', () => {
    const {
      getByTestId
    } = render(_AlertSkeleton || (_AlertSkeleton = /*#__PURE__*/React.createElement(AlertSkeleton, {
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should have custom width', () => {
    const {
      getByTestId
    } = render(_AlertSkeleton2 || (_AlertSkeleton2 = /*#__PURE__*/React.createElement(AlertSkeleton, {
      width: "20rem",
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should accept custom size', () => {
    const {
      getByTestId
    } = render(_AlertSkeleton3 || (_AlertSkeleton3 = /*#__PURE__*/React.createElement(AlertSkeleton, {
      multiline: true,
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should animate', () => {
    const {
      getByTestId
    } = render(_AlertSkeleton4 || (_AlertSkeleton4 = /*#__PURE__*/React.createElement(AlertSkeleton, {
      animate: true,
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
});