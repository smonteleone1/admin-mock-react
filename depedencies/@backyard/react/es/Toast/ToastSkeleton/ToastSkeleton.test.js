var _ToastSkeleton, _ToastSkeleton2, _ToastSkeleton3;

import * as React from 'react';
import { render } from '../../../test-utils';
import ToastSkeleton from './ToastSkeleton';
describe('ToastSkeleton Tests', () => {
  it('renders', () => {
    const {
      getByTestId
    } = render(_ToastSkeleton || (_ToastSkeleton = /*#__PURE__*/React.createElement(ToastSkeleton, {
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should have custom width', () => {
    const {
      getByTestId
    } = render(_ToastSkeleton2 || (_ToastSkeleton2 = /*#__PURE__*/React.createElement(ToastSkeleton, {
      width: "20rem",
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should animate', () => {
    const {
      getByTestId
    } = render(_ToastSkeleton3 || (_ToastSkeleton3 = /*#__PURE__*/React.createElement(ToastSkeleton, {
      animate: true,
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
});