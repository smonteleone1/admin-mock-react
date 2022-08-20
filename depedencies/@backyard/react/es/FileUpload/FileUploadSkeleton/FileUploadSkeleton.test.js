var _FileUploadSkeleton, _FileUploadSkeleton2, _FileUploadSkeleton3;

import * as React from 'react';
import { render } from '../../../test-utils';
import FileUploadSkeleton from './FileUploadSkeleton';
describe('FileUploadSkeleton Tests', () => {
  it('renders', () => {
    const {
      getByTestId
    } = render(_FileUploadSkeleton || (_FileUploadSkeleton = /*#__PURE__*/React.createElement(FileUploadSkeleton, {
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should have custom width', () => {
    const {
      getByTestId
    } = render(_FileUploadSkeleton2 || (_FileUploadSkeleton2 = /*#__PURE__*/React.createElement(FileUploadSkeleton, {
      width: "20rem",
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should animate', () => {
    const {
      getByTestId
    } = render(_FileUploadSkeleton3 || (_FileUploadSkeleton3 = /*#__PURE__*/React.createElement(FileUploadSkeleton, {
      animate: true,
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
});