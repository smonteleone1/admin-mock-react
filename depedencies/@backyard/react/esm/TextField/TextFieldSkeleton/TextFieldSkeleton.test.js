var _TextFieldSkeleton, _TextFieldSkeleton2, _TextFieldSkeleton3, _TextFieldSkeleton4;

import * as React from 'react';
import { render } from '../../../test-utils';
import TextFieldSkeleton from './TextFieldSkeleton';
describe('TextFieldSkeleton Tests', function () {
  it('renders', function () {
    var _render = render(_TextFieldSkeleton || (_TextFieldSkeleton = /*#__PURE__*/React.createElement(TextFieldSkeleton, {
      "data-testid": "skeleton"
    }))),
        getByTestId = _render.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should have custom width', function () {
    var _render2 = render(_TextFieldSkeleton2 || (_TextFieldSkeleton2 = /*#__PURE__*/React.createElement(TextFieldSkeleton, {
      width: "20rem",
      "data-testid": "skeleton"
    }))),
        getByTestId = _render2.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should accept custom size', function () {
    var _render3 = render(_TextFieldSkeleton3 || (_TextFieldSkeleton3 = /*#__PURE__*/React.createElement(TextFieldSkeleton, {
      size: "small",
      "data-testid": "skeleton"
    }))),
        getByTestId = _render3.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should animate', function () {
    var _render4 = render(_TextFieldSkeleton4 || (_TextFieldSkeleton4 = /*#__PURE__*/React.createElement(TextFieldSkeleton, {
      animate: true,
      "data-testid": "skeleton"
    }))),
        getByTestId = _render4.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
});