var _PasswordSkeleton, _PasswordSkeleton2, _PasswordSkeleton3, _PasswordSkeleton4;

import * as React from 'react';
import { render } from '../../../test-utils';
import PasswordSkeleton from './PasswordSkeleton';
describe('PasswordSkeleton Tests', function () {
  it('renders', function () {
    var _render = render(_PasswordSkeleton || (_PasswordSkeleton = /*#__PURE__*/React.createElement(PasswordSkeleton, {
      "data-testid": "skeleton"
    }))),
        getByTestId = _render.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should have custom width', function () {
    var _render2 = render(_PasswordSkeleton2 || (_PasswordSkeleton2 = /*#__PURE__*/React.createElement(PasswordSkeleton, {
      width: "20rem",
      "data-testid": "skeleton"
    }))),
        getByTestId = _render2.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should accept custom size', function () {
    var _render3 = render(_PasswordSkeleton3 || (_PasswordSkeleton3 = /*#__PURE__*/React.createElement(PasswordSkeleton, {
      size: "small",
      "data-testid": "skeleton"
    }))),
        getByTestId = _render3.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should animate', function () {
    var _render4 = render(_PasswordSkeleton4 || (_PasswordSkeleton4 = /*#__PURE__*/React.createElement(PasswordSkeleton, {
      animate: true,
      "data-testid": "skeleton"
    }))),
        getByTestId = _render4.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
});