var _AccordionSkeleton, _AccordionSkeleton2, _AccordionSkeleton3, _AccordionSkeleton4;

import * as React from 'react';
import { render } from '../../../test-utils';
import AccordionSkeleton from './AccordionSkeleton';
describe('AccordionSkeleton Tests', function () {
  it('renders', function () {
    var _render = render(_AccordionSkeleton || (_AccordionSkeleton = /*#__PURE__*/React.createElement(AccordionSkeleton, {
      "data-testid": "skeleton"
    }))),
        getByTestId = _render.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should have custom width', function () {
    var _render2 = render(_AccordionSkeleton2 || (_AccordionSkeleton2 = /*#__PURE__*/React.createElement(AccordionSkeleton, {
      width: "20rem",
      "data-testid": "skeleton"
    }))),
        getByTestId = _render2.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should accept custom size', function () {
    var _render3 = render(_AccordionSkeleton3 || (_AccordionSkeleton3 = /*#__PURE__*/React.createElement(AccordionSkeleton, {
      size: "small",
      "data-testid": "skeleton"
    }))),
        getByTestId = _render3.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should animate', function () {
    var _render4 = render(_AccordionSkeleton4 || (_AccordionSkeleton4 = /*#__PURE__*/React.createElement(AccordionSkeleton, {
      animate: true,
      "data-testid": "skeleton"
    }))),
        getByTestId = _render4.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
});