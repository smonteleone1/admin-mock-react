import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["src", "alt", "component"],
    _excluded2 = ["alt", "className", "renderViewportItem", "item", "src", "wrapperProps"];
import * as React from 'react';
import classNames from 'classnames';

/**
 * Backyard React Gallery Default ViewportItem
 *
 * Default viewport item to be rendered.
 * This can be overridden by the `renderViewportItem` prop.
 */
var GalleryDefaultViewportItem = /*#__PURE__*/React.forwardRef(function DefaultViewportItem(_ref, ref) {
  var src = _ref.src,
      alt = _ref.alt,
      component = _ref.component,
      props = _objectWithoutProperties(_ref, _excluded);

  // customize component, default to `img`
  var Component = component || 'img';
  /**
   * Layout:
   *  <img />
   */

  return /*#__PURE__*/React.createElement(Component, _extends({
    src: src,
    alt: alt
  }, props, {
    ref: ref
  }));
}); // Default `src` is an empty pixel

var defaultSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=';
/**
 * Backyard React Product Gallery Viewport Item
 *
 * Handles the render of the viewport item, and provides navigation buttons
 * for the user to click on and set the current selected item with.
 *
 * Example:
 * ```
 *  <GalleryViewportItem
 *      src="http://some.where/img.jpg"
 *      item={0}
 *  />
 * ```
 */

var GalleryViewportItem = /*#__PURE__*/React.forwardRef(function GalleryViewportItem(_ref2, ref) {
  var altProp = _ref2.alt,
      className = _ref2.className,
      _ref2$renderViewportI = _ref2.renderViewportItem,
      renderViewportItem = _ref2$renderViewportI === void 0 ? function (props, ref) {
    return /*#__PURE__*/React.createElement(GalleryDefaultViewportItem, _extends({}, props, {
      ref: ref
    }));
  } : _ref2$renderViewportI,
      item = _ref2.item,
      _ref2$src = _ref2.src,
      src = _ref2$src === void 0 ? defaultSrc : _ref2$src,
      wrapperProps = _ref2.wrapperProps,
      props = _objectWithoutProperties(_ref2, _excluded2);

  // Provide alternate text if not defined
  var alt = altProp || "gallery item ".concat(item);
  /**
   * Layout:
   *  <li wrapper>
   *      <div viewport>
   *          ...
   *      </div>
   *  </li>
   */

  return /*#__PURE__*/React.createElement("li", {
    className: "gallery-list-item"
  }, /*#__PURE__*/React.createElement("div", _extends({
    className: "viewport"
  }, wrapperProps), renderViewportItem(_extends({
    alt: alt,
    className: classNames('gallery-viewport-item', className),
    src: src
  }, props), ref)));
});
GalleryDefaultViewportItem.bdsName = 'GalleryDefaultViewportItem';
GalleryViewportItem.bdsName = 'GalleryViewportItem';
export { GalleryViewportItem, GalleryDefaultViewportItem };
export default GalleryViewportItem;