var _MultiselectSkeleton, _MultiselectSkeleton2, _MultiselectSkeleton3, _MultiselectSkeleton4;

import * as React from 'react';
import { render } from '../../../test-utils';
import MultiselectSkeleton from './MultiselectSkeleton';
describe('MultiselectSkeleton Tests', function () {
  it('renders', function () {
    var _render = render(_MultiselectSkeleton || (_MultiselectSkeleton = /*#__PURE__*/React.createElement(MultiselectSkeleton, {
      "data-testid": "skeleton"
    }))),
        getByTestId = _render.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should have custom width', function () {
    var _render2 = render(_MultiselectSkeleton2 || (_MultiselectSkeleton2 = /*#__PURE__*/React.createElement(MultiselectSkeleton, {
      width: "20rem",
      "data-testid": "skeleton"
    }))),
        getByTestId = _render2.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should accept custom size', function () {
    var _render3 = render(_MultiselectSkeleton3 || (_MultiselectSkeleton3 = /*#__PURE__*/React.createElement(MultiselectSkeleton, {
      size: "small",
      "data-testid": "skeleton"
    }))),
        getByTestId = _render3.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should animate', function () {
    var _render4 = render(_MultiselectSkeleton4 || (_MultiselectSkeleton4 = /*#__PURE__*/React.createElement(MultiselectSkeleton, {
      animate: true,
      "data-testid": "skeleton"
    }))),
        getByTestId = _render4.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
});