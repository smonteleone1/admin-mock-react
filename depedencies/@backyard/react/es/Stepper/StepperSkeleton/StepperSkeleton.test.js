var _StepperSkeleton, _StepperSkeleton2, _StepperSkeleton3;

import * as React from 'react';
import { render } from '../../../test-utils';
import StepperSkeleton from './StepperSkeleton';
describe('StepperSkeleton Tests', () => {
  it('renders', () => {
    const {
      getByTestId
    } = render(_StepperSkeleton || (_StepperSkeleton = /*#__PURE__*/React.createElement(StepperSkeleton, {
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should have custom width', () => {
    const {
      getByTestId
    } = render(_StepperSkeleton2 || (_StepperSkeleton2 = /*#__PURE__*/React.createElement(StepperSkeleton, {
      width: "20rem",
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should animate', () => {
    const {
      getByTestId
    } = render(_StepperSkeleton3 || (_StepperSkeleton3 = /*#__PURE__*/React.createElement(StepperSkeleton, {
      animate: true,
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
});