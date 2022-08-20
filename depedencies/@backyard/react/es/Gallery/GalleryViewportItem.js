import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["src", "alt", "component"],
      _excluded2 = ["alt", "className", "renderViewportItem", "item", "src", "wrapperProps"];
import * as React from 'react';
import classNames from 'classnames';

/**
 * Backyard React Gallery Default ViewportItem
 *
 * Default viewport item to be rendered.
 * This can be overridden by the `renderViewportItem` prop.
 */
const GalleryDefaultViewportItem = /*#__PURE__*/React.forwardRef(function DefaultViewportItem(_ref, ref) {
  let {
    src,
    alt,
    component
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // customize component, default to `img`
  const Component = component || 'img';
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

const defaultSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=';
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

const GalleryViewportItem = /*#__PURE__*/React.forwardRef(function GalleryViewportItem(_ref2, ref) {
  let {
    alt: altProp,
    className,
    renderViewportItem = (props, ref) => /*#__PURE__*/React.createElement(GalleryDefaultViewportItem, _extends({}, props, {
      ref: ref
    })),
    item,
    src = defaultSrc,
    wrapperProps
  } = _ref2,
      props = _objectWithoutPropertiesLoose(_ref2, _excluded2);

  // Provide alternate text if not defined
  const alt = altProp || `gallery item ${item}`;
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
    alt,
    className: classNames('gallery-viewport-item', className),
    src
  }, props), ref)));
});
GalleryDefaultViewportItem.bdsName = 'GalleryDefaultViewportItem';
GalleryViewportItem.bdsName = 'GalleryViewportItem';
export { GalleryViewportItem, GalleryDefaultViewportItem };
export default GalleryViewportItem;