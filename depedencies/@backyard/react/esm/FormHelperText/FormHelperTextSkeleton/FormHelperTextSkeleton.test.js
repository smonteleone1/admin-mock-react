var _FormHelperTextSkelet, _FormHelperTextSkelet2, _FormHelperTextSkelet3;

import * as React from 'react';
import { render } from '../../../test-utils';
import FormHelperTextSkeleton from './FormHelperTextSkeleton';
describe('FormHelperTextSkeleton Tests', function () {
  it('renders', function () {
    var _render = render(_FormHelperTextSkelet || (_FormHelperTextSkelet = /*#__PURE__*/React.createElement(FormHelperTextSkeleton, {
      "data-testid": "skeleton"
    }))),
        getByTestId = _render.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should have custom width', function () {
    var _render2 = render(_FormHelperTextSkelet2 || (_FormHelperTextSkelet2 = /*#__PURE__*/React.createElement(FormHelperTextSkeleton, {
      width: "20rem",
      "data-testid": "skeleton"
    }))),
        getByTestId = _render2.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should animate', function () {
    var _render3 = render(_FormHelperTextSkelet3 || (_FormHelperTextSkelet3 = /*#__PURE__*/React.createElement(FormHelperTextSkeleton, {
      animate: true,
      "data-testid": "skeleton"
    }))),
        getByTestId = _render3.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
});