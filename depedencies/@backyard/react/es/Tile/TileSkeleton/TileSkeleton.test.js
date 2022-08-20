var _TileSkeleton, _TileSkeleton2, _TileSkeleton3;

import * as React from 'react';
import { render } from '../../../test-utils';
import TileSkeleton from './TileSkeleton';
describe('TileSkeleton Tests', () => {
  it('renders', () => {
    const {
      getByTestId
    } = render(_TileSkeleton || (_TileSkeleton = /*#__PURE__*/React.createElement(TileSkeleton, {
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should have custom width', () => {
    const {
      getByTestId
    } = render(_TileSkeleton2 || (_TileSkeleton2 = /*#__PURE__*/React.createElement(TileSkeleton, {
      width: "20rem",
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should animate', () => {
    const {
      getByTestId
    } = render(_TileSkeleton3 || (_TileSkeleton3 = /*#__PURE__*/React.createElement(TileSkeleton, {
      animate: true,
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
});