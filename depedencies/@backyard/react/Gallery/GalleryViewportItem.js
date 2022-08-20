"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.GalleryViewportItem = exports.GalleryDefaultViewportItem = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _excluded = ["src", "alt", "component"],
    _excluded2 = ["alt", "className", "renderViewportItem", "item", "src", "wrapperProps"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // customize component, default to `img`
  var Component = component || 'img';
  /**
   * Layout:
   *  <img />
   */

  return /*#__PURE__*/React.createElement(Component, (0, _extends2["default"])({
    src: src,
    alt: alt
  }, props, {
    ref: ref
  }));
}); // Default `src` is an empty pixel

exports.GalleryDefaultViewportItem = GalleryDefaultViewportItem;
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
    return /*#__PURE__*/React.createElement(GalleryDefaultViewportItem, (0, _extends2["default"])({}, props, {
      ref: ref
    }));
  } : _ref2$renderViewportI,
      item = _ref2.item,
      _ref2$src = _ref2.src,
      src = _ref2$src === void 0 ? defaultSrc : _ref2$src,
      wrapperProps = _ref2.wrapperProps,
      props = (0, _objectWithoutProperties2["default"])(_ref2, _excluded2);
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
  }, /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({
    className: "viewport"
  }, wrapperProps), renderViewportItem((0, _extends2["default"])({
    alt: alt,
    className: (0, _classnames["default"])('gallery-viewport-item', className),
    src: src
  }, props), ref)));
});
exports.GalleryViewportItem = GalleryViewportItem;
GalleryDefaultViewportItem.bdsName = 'GalleryDefaultViewportItem';
GalleryViewportItem.bdsName = 'GalleryViewportItem';
var _default = GalleryViewportItem;
exports["default"] = _default;