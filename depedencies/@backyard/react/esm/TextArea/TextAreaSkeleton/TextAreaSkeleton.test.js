var _TextAreaSkeleton, _TextAreaSkeleton2, _TextAreaSkeleton3, _TextAreaSkeleton4;

import * as React from 'react';
import { render } from '../../../test-utils';
import TextAreaSkeleton from './TextAreaSkeleton';
describe('TextAreaSkeleton Tests', function () {
  it('renders', function () {
    var _render = render(_TextAreaSkeleton || (_TextAreaSkeleton = /*#__PURE__*/React.createElement(TextAreaSkeleton, {
      "data-testid": "skeleton"
    }))),
        getByTestId = _render.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should have custom width', function () {
    var _render2 = render(_TextAreaSkeleton2 || (_TextAreaSkeleton2 = /*#__PURE__*/React.createElement(TextAreaSkeleton, {
      width: "20rem",
      "data-testid": "skeleton"
    }))),
        getByTestId = _render2.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should accept custom rows', function () {
    var _render3 = render(_TextAreaSkeleton3 || (_TextAreaSkeleton3 = /*#__PURE__*/React.createElement(TextAreaSkeleton, {
      rows: 9,
      "data-testid": "skeleton"
    }))),
        getByTestId = _render3.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should animate', function () {
    var _render4 = render(_TextAreaSkeleton4 || (_TextAreaSkeleton4 = /*#__PURE__*/React.createElement(TextAreaSkeleton, {
      animate: true,
      "data-testid": "skeleton"
    }))),
        getByTestId = _render4.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
});