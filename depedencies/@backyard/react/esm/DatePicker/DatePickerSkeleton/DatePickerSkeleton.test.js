var _DatePickerSkeleton, _DatePickerSkeleton2, _DatePickerSkeleton3, _DatePickerSkeleton4;

import * as React from 'react';
import { render } from '../../../test-utils';
import DatePickerSkeleton from './DatePickerSkeleton';
describe('DatePickerSkeleton Tests', function () {
  it('renders', function () {
    var _render = render(_DatePickerSkeleton || (_DatePickerSkeleton = /*#__PURE__*/React.createElement(DatePickerSkeleton, {
      "data-testid": "skeleton"
    }))),
        getByTestId = _render.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should have custom width', function () {
    var _render2 = render(_DatePickerSkeleton2 || (_DatePickerSkeleton2 = /*#__PURE__*/React.createElement(DatePickerSkeleton, {
      width: "20rem",
      "data-testid": "skeleton"
    }))),
        getByTestId = _render2.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should accept custom size', function () {
    var _render3 = render(_DatePickerSkeleton3 || (_DatePickerSkeleton3 = /*#__PURE__*/React.createElement(DatePickerSkeleton, {
      size: "small",
      "data-testid": "skeleton"
    }))),
        getByTestId = _render3.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should animate', function () {
    var _render4 = render(_DatePickerSkeleton4 || (_DatePickerSkeleton4 = /*#__PURE__*/React.createElement(DatePickerSkeleton, {
      animate: true,
      "data-testid": "skeleton"
    }))),
        getByTestId = _render4.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
});