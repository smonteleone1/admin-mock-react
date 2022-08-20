import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "defaultItem", "disableNavigation", "disableThumbnails", "item", "items", "maxThumbnails", "override", "onExcessClick", "onChange", "onClickNext", "onClickPrevious", "shape", "excessRender"];
import * as React from 'react';
import GalleryBase from './GalleryBase';
import GalleryProvider from './GalleryProvider';

/**
 * Backyard React Gallery
 *
 * Gallery takes a list of items and render thumbnails and original sources as `img` tags.
 *
 * It provides functionality to handle clicking on thumbnails and navigation buttons for the
 * user to navigate through the list of gallery items, via the `GalleryProvider`, to all its children.
 *
 * Think of each `img` with original src as a Viewport Item,
 * and each `img` with the thumbnail as a Thumbnail item.
 *
 * Each Viewport Item and Thumbnail can be customized via
 * the `renderViewportItem` and `renderThumbnail` props in `GalleryItem`.
 *
 * This allows the UI/UX of the Gallery itself to be separated from the logic that handles state
 * as well as the logic that handles rendering individual viewport items or thumbnails.
 *
 * In special use-cases, instead of using Gallery, it is possible to wrap
 * `GalleryThumbnailGroup` and `GalleryViewport as children of `GalleryProvider` so that the layout
 * can be customized, such as in a `Modal`.
 *
 * See documentation site code examples for more.
 *
 * Example:
 * ```
 *  <Gallery
 *      items={[
 *          {
 *              original: 'https://via.placeholder.com/1500/FFFFFF/000000?text=Original',
 *              thumbnail: 'https://via.placeholder.com/150/FFFFFF/000000?text=Thumb',
 *          },
 *          {
 *              original: 'https://via.placeholder.com/1600/0000FF/FFFFFF?text=Original',
 *              thumbnail: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Thumb',
 *          },
 *          {
 *              original: 'https://via.placeholder.com/1500x1000/00FF00/FFFFFF?text=Original',
 *              thumbnail: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Thumb',
 *          }
 *      ]}
 *  />
 * ```
 */
var Gallery = /*#__PURE__*/React.forwardRef(function Gallery(_ref, ref) {
  var children = _ref.children,
      _ref$defaultItem = _ref.defaultItem,
      defaultItem = _ref$defaultItem === void 0 ? 0 : _ref$defaultItem,
      disableNavigation = _ref.disableNavigation,
      disableThumbnails = _ref.disableThumbnails,
      item = _ref.item,
      items = _ref.items,
      maxThumbnails = _ref.maxThumbnails,
      override = _ref.override,
      onExcessClick = _ref.onExcessClick,
      onChange = _ref.onChange,
      onClickNext = _ref.onClickNext,
      onClickPrevious = _ref.onClickPrevious,
      shape = _ref.shape,
      excessRender = _ref.excessRender,
      props = _objectWithoutProperties(_ref, _excluded);

  /**
   * Layout:
   *  <div gallery-base>
   *      ...
   *  </div>
   */
  return /*#__PURE__*/React.createElement(GalleryProvider, _extends({
    item: item,
    disableNavigation: disableNavigation,
    defaultItem: defaultItem,
    items: items,
    onExcessClick: onExcessClick,
    onChange: onChange,
    onClickNext: onClickNext,
    onClickPrevious: onClickPrevious,
    shape: shape,
    excessRender: excessRender
  }, override), /*#__PURE__*/React.createElement(GalleryBase, _extends({
    disableThumbnails: disableThumbnails,
    maxThumbnails: maxThumbnails
  }, props, {
    ref: ref
  }), children));
});
Gallery.bdsName = 'Gallery';
export { Gallery };
export default Gallery;