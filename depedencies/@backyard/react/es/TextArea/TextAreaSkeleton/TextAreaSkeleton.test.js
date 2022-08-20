var _TextAreaSkeleton, _TextAreaSkeleton2, _TextAreaSkeleton3, _TextAreaSkeleton4;

import * as React from 'react';
import { render } from '../../../test-utils';
import TextAreaSkeleton from './TextAreaSkeleton';
describe('TextAreaSkeleton Tests', () => {
  it('renders', () => {
    const {
      getByTestId
    } = render(_TextAreaSkeleton || (_TextAreaSkeleton = /*#__PURE__*/React.createElement(TextAreaSkeleton, {
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should have custom width', () => {
    const {
      getByTestId
    } = render(_TextAreaSkeleton2 || (_TextAreaSkeleton2 = /*#__PURE__*/React.createElement(TextAreaSkeleton, {
      width: "20rem",
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should accept custom rows', () => {
    const {
      getByTestId
    } = render(_TextAreaSkeleton3 || (_TextAreaSkeleton3 = /*#__PURE__*/React.createElement(TextAreaSkeleton, {
      rows: 9,
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should animate', () => {
    const {
      getByTestId
    } = render(_TextAreaSkeleton4 || (_TextAreaSkeleton4 = /*#__PURE__*/React.createElement(TextAreaSkeleton, {
      animate: true,
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
});