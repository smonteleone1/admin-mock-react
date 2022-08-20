var _FileUploadSkeleton, _FileUploadSkeleton2, _FileUploadSkeleton3;

import * as React from 'react';
import { render } from '../../../test-utils';
import FileUploadSkeleton from './FileUploadSkeleton';
describe('FileUploadSkeleton Tests', function () {
  it('renders', function () {
    var _render = render(_FileUploadSkeleton || (_FileUploadSkeleton = /*#__PURE__*/React.createElement(FileUploadSkeleton, {
      "data-testid": "skeleton"
    }))),
        getByTestId = _render.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should have custom width', function () {
    var _render2 = render(_FileUploadSkeleton2 || (_FileUploadSkeleton2 = /*#__PURE__*/React.createElement(FileUploadSkeleton, {
      width: "20rem",
      "data-testid": "skeleton"
    }))),
        getByTestId = _render2.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should animate', function () {
    var _render3 = render(_FileUploadSkeleton3 || (_FileUploadSkeleton3 = /*#__PURE__*/React.createElement(FileUploadSkeleton, {
      animate: true,
      "data-testid": "skeleton"
    }))),
        getByTestId = _render3.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
});