var _FormHelperTextSkelet, _FormHelperTextSkelet2, _FormHelperTextSkelet3;

import * as React from 'react';
import { render } from '../../../test-utils';
import FormHelperTextSkeleton from './FormHelperTextSkeleton';
describe('FormHelperTextSkeleton Tests', () => {
  it('renders', () => {
    const {
      getByTestId
    } = render(_FormHelperTextSkelet || (_FormHelperTextSkelet = /*#__PURE__*/React.createElement(FormHelperTextSkeleton, {
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should have custom width', () => {
    const {
      getByTestId
    } = render(_FormHelperTextSkelet2 || (_FormHelperTextSkelet2 = /*#__PURE__*/React.createElement(FormHelperTextSkeleton, {
      width: "20rem",
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should animate', () => {
    const {
      getByTestId
    } = render(_FormHelperTextSkelet3 || (_FormHelperTextSkelet3 = /*#__PURE__*/React.createElement(FormHelperTextSkeleton, {
      animate: true,
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
});