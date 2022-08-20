import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

var _GalleryViewport;

var _excluded = ["children", "className", "disableThumbnails", "maxThumbnails"];
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

var GalleryBase = /*#__PURE__*/React.forwardRef(function GalleryBase(_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$disableThumbnail = _ref.disableThumbnails,
      disableThumbnails = _ref$disableThumbnail === void 0 ? false : _ref$disableThumbnail,
      maxThumbnails = _ref.maxThumbnails,
      props = _objectWithoutProperties(_ref, _excluded);

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