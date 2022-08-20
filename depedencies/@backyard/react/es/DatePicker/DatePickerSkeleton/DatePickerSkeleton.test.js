var _DatePickerSkeleton, _DatePickerSkeleton2, _DatePickerSkeleton3, _DatePickerSkeleton4;

import * as React from 'react';
import { render } from '../../../test-utils';
import DatePickerSkeleton from './DatePickerSkeleton';
describe('DatePickerSkeleton Tests', () => {
  it('renders', () => {
    const {
      getByTestId
    } = render(_DatePickerSkeleton || (_DatePickerSkeleton = /*#__PURE__*/React.createElement(DatePickerSkeleton, {
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should have custom width', () => {
    const {
      getByTestId
    } = render(_DatePickerSkeleton2 || (_DatePickerSkeleton2 = /*#__PURE__*/React.createElement(DatePickerSkeleton, {
      width: "20rem",
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should accept custom size', () => {
    const {
      getByTestId
    } = render(_DatePickerSkeleton3 || (_DatePickerSkeleton3 = /*#__PURE__*/React.createElement(DatePickerSkeleton, {
      size: "small",
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should animate', () => {
    const {
      getByTestId
    } = render(_DatePickerSkeleton4 || (_DatePickerSkeleton4 = /*#__PURE__*/React.createElement(DatePickerSkeleton, {
      animate: true,
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
});