import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";

var _GalleryViewport;

const _excluded = ["children", "className", "disableThumbnails", "maxThumbnails"];
import * as React from 'react';
import classNames from 'classnames';
import GalleryWrapper from './styles/GalleryWrapper';
import GalleryViewport from './GalleryViewport';
import GalleryThumbnailGroup from './GalleryThumbnailGroup';
/**
 * Backyard React Product Gallery Base
 *
 * @internal
 *
 * This component is for the `Gallery` component to auto render with our base layout
 *
 * It is not needed for the functionality of the `Gallery
 */

const GalleryBase = /*#__PURE__*/React.forwardRef(function GalleryBase(_ref, ref) {
  let {
    className,
    disableThumbnails = false,
    maxThumbnails
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  /**
   * Layout:
   *  <div wrapper>
   *      ...
   *  </div>
   */
  return /*#__PURE__*/React.createElement(GalleryWrapper, _extends({
    className: classNames('gallery', className)
  }, props, {
    ref: ref
  }), _GalleryViewport || (_GalleryViewport = /*#__PURE__*/React.createElement(GalleryViewport, null)), !disableThumbnails ? /*#__PURE__*/React.createElement(GalleryThumbnailGroup, {
    maxThumbnails: maxThumbnails
  }) : null);
});
GalleryBase.bdsName = 'GalleryBase';
export { GalleryBase };
export default GalleryBase;