"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.GalleryThumbnailGroup = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _FormGroup = _interopRequireDefault(require("../FormGroup"));

var _ThemeProvider = require("../ThemeProvider");

var _useForwardedRef = _interopRequireDefault(require("../utils/hooks/useForwardedRef"));

var _GalleryProvider = require("./GalleryProvider");

var _GalleryThumbnail = _interopRequireDefault(require("./GalleryThumbnail"));

var _GalleryThumbnailGroupWrapper = _interopRequireDefault(require("./styles/GalleryThumbnailGroupWrapper"));

var _excluded = ["children", "className", "maxThumbnails", "hideExcessThumbnails", "disableMobile"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Backyard React Product Gallery Thumbnail Group
 *
 * This component automatically rendered a group of thumbnails that are provided by the `GalleryProvider`
 * Can be placed anywhere within `GalleryProvider` to provide custom layout
 *
 * Example:
 * ```
 *  <GalleryProvider
 *      items={[
 *          {
 *              original: 'https://via.placeholder.com/1500/FFFFFF/000000?text=Original',
 *              thumbnail: 'https://via.placeholder.com/150/FFFFFF/000000?text=Thumb',
 *          },
 *          {
 *              original: 'https://via.placeholder.com/1600/0000FF/FFFFFF?text=Original',
 *              thumbnail: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Thumb',
 *          }
 *      ]}
 *  >
 *      <Grid.Row>
 *          <Grid.Column
 *              style={{
 *                  width: '6rem'
 *              }}
 *          >
 *              <GalleryThumbnailGroup
 *                  disableMobile
 *                  maxThumbnails={20}
 *                  direction="column"
 *                  style={{ maxHeight: '32rem' }}
 *              />
 *          </Grid.Column>
 *          <Grid.Column />
 *          <Grid.Column sm={8}>
 *              <GalleryViewport />
 *          </Grid.Column>
 *      </Grid.Row>
 *  </GalleryProvider>
 * ```
 */
var GalleryThumbnailGroup = /*#__PURE__*/React.forwardRef(function GalleryThumbnailGroup(_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$maxThumbnails = _ref.maxThumbnails,
      maxThumbnailsProp = _ref$maxThumbnails === void 0 ? 5 : _ref$maxThumbnails,
      _ref$hideExcessThumbn = _ref.hideExcessThumbnails,
      hideExcessThumbnails = _ref$hideExcessThumbn === void 0 ? false : _ref$hideExcessThumbn,
      _ref$disableMobile = _ref.disableMobile,
      disableMobile = _ref$disableMobile === void 0 ? false : _ref$disableMobile,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // Get the theme context
  var theme = React.useContext(_ThemeProvider.ThemeContext); // Store the forwarded ref

  var innerRef = (0, _useForwardedRef["default"])(ref); // Get the Gallery context from `GalleryProvider`

  var _React$useContext = React.useContext(_GalleryProvider.GalleryContext),
      items = _React$useContext.items,
      maxThumbnailsContext = _React$useContext.maxThumbnails,
      excessRender = _React$useContext.excessRender; // State of the maximum number of thumbnails to be rendered
  // Provided by `GalleryProvider` before using defined prop


  var _React$useState = React.useState(maxThumbnailsContext || maxThumbnailsProp),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      maxThumbnails = _React$useState2[0],
      setMaxThumbnails = _React$useState2[1]; // Side effect to update `maxThumbnails` if it changes externally


  React.useEffect(function () {
    if (maxThumbnails !== maxThumbnailsProp) {
      setMaxThumbnails(maxThumbnailsProp);
    }
  }, [maxThumbnailsProp]); // Each thumbnail renders up to `maxThumbnails`
  // On mobile, all thumbnails are shown by default

  var thumbnails = items // Limit number of thumbnails
  .slice(0, // If is desktop and mobile not disabled,
  !theme.isMobile || disableMobile ? // If number of thumbnails is greater than max thumbnails,
  items.length > maxThumbnails ? // Remove last thumbnail
  maxThumbnails - 1 : // Else, render all thumbnails
  maxThumbnails : // Else, use all thumbnails
  items.length) // For each rendered thumbnail, render a `GalleryThumbnail`
  .map(function (_ref2, index) {
    var thumbnail = _ref2.thumbnail,
        thumbnailAlt = _ref2.thumbnailAlt,
        original = _ref2.original,
        renderThumbnail = _ref2.renderThumbnail,
        thumbnailProps = _ref2.thumbnailProps;
    return /*#__PURE__*/React.createElement(_GalleryThumbnail["default"], (0, _extends2["default"])({
      key: index,
      variant: theme.isMobile && !disableMobile ? 'dot' : 'image',
      src: thumbnail || original,
      alt: thumbnailAlt,
      item: index,
      renderThumbnail: renderThumbnail
    }, thumbnailProps));
  }); // If not hiding excess thumbnails, and
  // total number of thumbnails is greater than rendered number, and
  // desktop view, and
  // mobile view not disabled

  if (!hideExcessThumbnails && items.length > thumbnails.length && (!theme.isMobile || disableMobile)) {
    // Push excess thumbnail to rendered group
    thumbnails.push( /*#__PURE__*/React.createElement(_GalleryThumbnail["default"], {
      key: thumbnails.length,
      variant: "excess",
      item: thumbnails.length,
      excessRender: excessRender,
      maxThumbnails: maxThumbnails
    }));
  }
  /**
   * Layout:
   *  <div wrapper formgroup>
   *      ...
   *  </div>
   */


  return /*#__PURE__*/React.createElement(_GalleryThumbnailGroupWrapper["default"], null, /*#__PURE__*/React.createElement(_FormGroup["default"], (0, _extends2["default"])({
    className: (0, _classnames["default"])('gallery-thumbnail-group', theme.isMobile ? 'mobile' : 'desktop', className),
    direction: "row"
  }, props, {
    ref: innerRef
  }), thumbnails));
});
exports.GalleryThumbnailGroup = GalleryThumbnailGroup;
GalleryThumbnailGroup.bdsName = 'GalleryThumbnailGroup';
var _default = GalleryThumbnailGroup;
exports["default"] = _default;