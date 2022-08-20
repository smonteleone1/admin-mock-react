var _AccordionSkeleton, _AccordionSkeleton2, _AccordionSkeleton3, _AccordionSkeleton4;

import * as React from 'react';
import { render } from '../../../test-utils';
import AccordionSkeleton from './AccordionSkeleton';
describe('AccordionSkeleton Tests', () => {
  it('renders', () => {
    const {
      getByTestId
    } = render(_AccordionSkeleton || (_AccordionSkeleton = /*#__PURE__*/React.createElement(AccordionSkeleton, {
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should have custom width', () => {
    const {
      getByTestId
    } = render(_AccordionSkeleton2 || (_AccordionSkeleton2 = /*#__PURE__*/React.createElement(AccordionSkeleton, {
      width: "20rem",
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should accept custom size', () => {
    const {
      getByTestId
    } = render(_AccordionSkeleton3 || (_AccordionSkeleton3 = /*#__PURE__*/React.createElement(AccordionSkeleton, {
      size: "small",
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should animate', () => {
    const {
      getByTestId
    } = render(_AccordionSkeleton4 || (_AccordionSkeleton4 = /*#__PURE__*/React.createElement(AccordionSkeleton, {
      animate: true,
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
});