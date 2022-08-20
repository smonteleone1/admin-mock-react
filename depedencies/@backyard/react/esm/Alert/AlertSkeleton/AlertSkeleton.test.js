var _AlertSkeleton, _AlertSkeleton2, _AlertSkeleton3, _AlertSkeleton4;

import * as React from 'react';
import { render } from '../../../test-utils';
import AlertSkeleton from './AlertSkeleton';
describe('AlertSkeleton Tests', function () {
  it('renders', function () {
    var _render = render(_AlertSkeleton || (_AlertSkeleton = /*#__PURE__*/React.createElement(AlertSkeleton, {
      "data-testid": "skeleton"
    }))),
        getByTestId = _render.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should have custom width', function () {
    var _render2 = render(_AlertSkeleton2 || (_AlertSkeleton2 = /*#__PURE__*/React.createElement(AlertSkeleton, {
      width: "20rem",
      "data-testid": "skeleton"
    }))),
        getByTestId = _render2.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should accept custom size', function () {
    var _render3 = render(_AlertSkeleton3 || (_AlertSkeleton3 = /*#__PURE__*/React.createElement(AlertSkeleton, {
      multiline: true,
      "data-testid": "skeleton"
    }))),
        getByTestId = _render3.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should animate', function () {
    var _render4 = render(_AlertSkeleton4 || (_AlertSkeleton4 = /*#__PURE__*/React.createElement(AlertSkeleton, {
      animate: true,
      "data-testid": "skeleton"
    }))),
        getByTestId = _render4.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
});