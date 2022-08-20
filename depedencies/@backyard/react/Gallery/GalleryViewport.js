"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.GalleryViewport = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ChevronLeft2 = _interopRequireDefault(require("@backyard/icons/ChevronLeft"));

var _ChevronRight2 = _interopRequireDefault(require("@backyard/icons/ChevronRight"));

var _IconButton = _interopRequireDefault(require("../IconButton"));

var _useBackyardTheme = _interopRequireDefault(require("../ThemeProvider/useBackyardTheme"));

var _GalleryViewportWrapper = _interopRequireDefault(require("./styles/GalleryViewportWrapper"));

var _GalleryProvider = require("./GalleryProvider");

var _GalleryViewportItem = _interopRequireDefault(require("./GalleryViewportItem"));

var _ChevronLeft, _ChevronRight;

var _excluded = ["children", "className", "height", "width", "padding", "style"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Backyard React Product Gallery Viewport
 *
 * This component automatically renders a group of viewport items that are provided by the `GalleryProvider`
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
var GalleryViewport = /*#__PURE__*/React.forwardRef(function GalleryViewport(_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      height = _ref.height,
      width = _ref.width,
      padding = _ref.padding,
      styleProp = _ref.style,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // Get Backyard theme context
  var theme = (0, _useBackyardTheme["default"])(); // Get gallery context from `GalleryProvider`

  var _React$useContext = React.useContext(_GalleryProvider.GalleryContext),
      item = _React$useContext.item,
      items = _React$useContext.items,
      disableNavigation = _React$useContext.disableNavigation,
      onChange = _React$useContext.onChange,
      onClickNext = _React$useContext.onClickNext,
      onClickPrevious = _React$useContext.onClickPrevious,
      setItem = _React$useContext.setItem,
      shape = _React$useContext.shape; // Render previous button


  var previousButton = // If current item isn't first item, and navigation not disabled
  item > 0 && !disableNavigation ? /*#__PURE__*/React.createElement(_IconButton["default"], {
    className: "viewport-button prev",
    variant: "inverse",
    shape: "circle",
    color: "interactive",
    elevation: true,
    onClick: function onClick(event) {
      var newItem = setItem(function (i) {
        return i - 1;
      }); // If onClickPrevious is defined

      if (onClickPrevious) {
        // trigger onClickPrevious
        onClickPrevious(event, newItem);
      } // If onChange is defined


      if (onChange) {
        // trigger onChange
        onChange(event, newItem);
      }
    }
  }, _ChevronLeft || (_ChevronLeft = /*#__PURE__*/React.createElement(_ChevronLeft2["default"], null))) : null; // Render next button

  var nextButton = // If last item isn't selected, and navigation not disabled
  item < items.length - 1 && !disableNavigation ? /*#__PURE__*/React.createElement(_IconButton["default"], {
    className: "viewport-button next",
    variant: "inverse",
    shape: "circle",
    color: "interactive",
    elevation: true,
    onClick: function onClick(event) {
      var newItem = setItem(function (i) {
        return i + 1;
      }); // If onClickNext is defined

      if (onClickNext) {
        // trigger onClickNext
        onClickNext(event, newItem);
      } // If onChange is defined


      if (onChange) {
        // trigger onChange
        onChange(event, newItem);
      }
    }
  }, _ChevronRight || (_ChevronRight = /*#__PURE__*/React.createElement(_ChevronRight2["default"], null))) : null; // Memoize original `GalleryViewportItem`s to re-render if
  // `items` changes, given by `GalleryProvider`

  var originals = React.useMemo(function () {
    return items.map(function (_ref2, index) {
      var original = _ref2.original,
          renderViewportItem = _ref2.renderViewportItem,
          viewportItemProps = _ref2.viewportItemProps;
      return /*#__PURE__*/React.createElement(_GalleryViewportItem["default"], (0, _extends2["default"])({
        key: index,
        item: index,
        src: original,
        renderViewportItem: renderViewportItem
      }, viewportItemProps));
    });
  }, [items]); // Memoize style prop and css vars

  var style = React.useMemo(function () {
    return (0, _extends2["default"])({
      '--style-gallery-viewport-height': theme.sizes[height] || height || '25.875rem',
      '--style-gallery-viewport-width': theme.sizes[width] || width || '100%',
      '--style-gallery-viewport-padding': theme.sizes[padding] || padding || 'var(--bds-sizes-size-8)'
    }, styleProp);
  }, [theme, styleProp]);
  /**
   * Layout:
   *  <div wrapper>
   *      <button prev />
   *      <button next />
   *      <ul gallery-list>
   *          ...
   *      </ul>
   *  </div>
   */

  return /*#__PURE__*/React.createElement(_GalleryViewportWrapper["default"], (0, _extends2["default"])({
    className: (0, _classnames["default"])("gallery-viewport shape--".concat(shape), className),
    style: style
  }, props, {
    ref: ref
  }), previousButton, nextButton, /*#__PURE__*/React.createElement("ul", {
    className: "gallery-list",
    style: {
      marginLeft: "".concat(-1 * item * 100, "%")
    }
  }, originals));
});
exports.GalleryViewport = GalleryViewport;
GalleryViewport.bdsName = 'GalleryViewport';
var _default = GalleryViewport;
exports["default"] = _default;