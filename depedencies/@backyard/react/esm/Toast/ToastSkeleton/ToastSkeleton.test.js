var _ToastSkeleton, _ToastSkeleton2, _ToastSkeleton3;

import * as React from 'react';
import { render } from '../../../test-utils';
import ToastSkeleton from './ToastSkeleton';
describe('ToastSkeleton Tests', function () {
  it('renders', function () {
    var _render = render(_ToastSkeleton || (_ToastSkeleton = /*#__PURE__*/React.createElement(ToastSkeleton, {
      "data-testid": "skeleton"
    }))),
        getByTestId = _render.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should have custom width', function () {
    var _render2 = render(_ToastSkeleton2 || (_ToastSkeleton2 = /*#__PURE__*/React.createElement(ToastSkeleton, {
      width: "20rem",
      "data-testid": "skeleton"
    }))),
        getByTestId = _render2.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should animate', function () {
    var _render3 = render(_ToastSkeleton3 || (_ToastSkeleton3 = /*#__PURE__*/React.createElement(ToastSkeleton, {
      animate: true,
      "data-testid": "skeleton"
    }))),
        getByTestId = _render3.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
});