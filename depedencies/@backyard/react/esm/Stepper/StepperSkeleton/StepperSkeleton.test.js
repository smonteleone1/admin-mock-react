var _StepperSkeleton, _StepperSkeleton2, _StepperSkeleton3;

import * as React from 'react';
import { render } from '../../../test-utils';
import StepperSkeleton from './StepperSkeleton';
describe('StepperSkeleton Tests', function () {
  it('renders', function () {
    var _render = render(_StepperSkeleton || (_StepperSkeleton = /*#__PURE__*/React.createElement(StepperSkeleton, {
      "data-testid": "skeleton"
    }))),
        getByTestId = _render.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should have custom width', function () {
    var _render2 = render(_StepperSkeleton2 || (_StepperSkeleton2 = /*#__PURE__*/React.createElement(StepperSkeleton, {
      width: "20rem",
      "data-testid": "skeleton"
    }))),
        getByTestId = _render2.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should animate', function () {
    var _render3 = render(_StepperSkeleton3 || (_StepperSkeleton3 = /*#__PURE__*/React.createElement(StepperSkeleton, {
      animate: true,
      "data-testid": "skeleton"
    }))),
        getByTestId = _render3.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
});