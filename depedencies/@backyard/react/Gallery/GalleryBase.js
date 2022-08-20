"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.GalleryBase = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _GalleryWrapper = _interopRequireDefault(require("./styles/GalleryWrapper"));

var _GalleryViewport2 = _interopRequireDefault(require("./GalleryViewport"));

var _GalleryThumbnailGroup = _interopRequireDefault(require("./GalleryThumbnailGroup"));

var _GalleryViewport;

var _excluded = ["children", "className", "disableThumbnails", "maxThumbnails"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  /**
   * Layout:
   *  <div wrapper>
   *      ...
   *  </div>
   */
  return /*#__PURE__*/React.createElement(_GalleryWrapper["default"], (0, _extends2["default"])({
    className: (0, _classnames["default"])('gallery', className)
  }, props, {
    ref: ref
  }), _GalleryViewport || (_GalleryViewport = /*#__PURE__*/React.createElement(_GalleryViewport2["default"], null)), !disableThumbnails ? /*#__PURE__*/React.createElement(_GalleryThumbnailGroup["default"], {
    maxThumbnails: maxThumbnails
  }) : null);
});
exports.GalleryBase = GalleryBase;
GalleryBase.bdsName = 'GalleryBase';
var _default = GalleryBase;
exports["default"] = _default;