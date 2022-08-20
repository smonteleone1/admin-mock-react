"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.GalleryProvider = exports.GalleryContext = exports.GalleryConsumer = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _ThemeProvider = require("../ThemeProvider");

var _excluded = ["children", "item", "items", "defaultItem", "disableNavigation", "maxThumbnails", "onExcessClick", "onChange", "shape", "excessRender"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * GalleryContext
 */
var GalleryContext = /*#__PURE__*/React.createContext(null);
/**
 * GalleryConsumer
 */

exports.GalleryContext = GalleryContext;
var GalleryConsumer = GalleryContext.Consumer;
/**
 * Clamps a number between a maximum and a minimum number
 *
 * @param num - number to clamp
 * @param a - minumum number
 * @param b - maximum number
 */

exports.GalleryConsumer = GalleryConsumer;

var clamp = function clamp(num, a, b) {
  return Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));
};
/**
 * Backyard React Gallery Provider
 *
 * Provides values to children and handles state management of the `Gallery`.
 *
 * Use this component to supply your own custom layout.
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


var GalleryProvider = function GalleryProvider(_ref) {
  var children = _ref.children,
      itemProp = _ref.item,
      _ref$items = _ref.items,
      itemsProp = _ref$items === void 0 ? [] : _ref$items,
      _ref$defaultItem = _ref.defaultItem,
      defaultItem = _ref$defaultItem === void 0 ? 0 : _ref$defaultItem,
      _ref$disableNavigatio = _ref.disableNavigation,
      disableNavigation = _ref$disableNavigatio === void 0 ? false : _ref$disableNavigatio,
      maxThumbnails = _ref.maxThumbnails,
      onExcessClick = _ref.onExcessClick,
      onChange = _ref.onChange,
      shapeProp = _ref.shape,
      excessRender = _ref.excessRender,
      override = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // Get Backyard Theme Context
  var shapeContext = (0, _ThemeProvider.useBackyardTheme)({
    validate: true,
    name: 'Gallery'
  }).context.shape; // Calculate shape

  var shape = (0, _ThemeProvider.getShape)(shapeProp, shapeContext);

  var _React$useState = React.useState(itemProp || defaultItem),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      item = _React$useState2[0],
      setItemState = _React$useState2[1]; // Memoize context value with external changes


  var context = React.useMemo(function () {
    return {
      items: itemsProp || [],
      disableNavigation: disableNavigation,
      maxThumbnails: maxThumbnails,
      onExcessClick: onExcessClick,
      onChange: onChange,
      shape: shape,
      excessRender: excessRender
    };
  }, [itemsProp, disableNavigation, maxThumbnails, onExcessClick, onChange, shape, excessRender]);
  /**
   * Setting the item state
   * @param newState 
   * @returns newItem: number
   */

  var setItem = function setItem(newState) {
    var newItem;

    if (typeof newState === 'function') {
      newItem = clamp(newState(item), 0, context.items.length - 1);
    } else {
      newItem = clamp(newState, 0, context.items.length - 1);
    }

    setItemState(newItem);
    return newItem;
  };

  React.useEffect(function () {
    if (itemProp >= 0 && itemProp !== item) {
      var newItem = setItem(itemProp); // If onChange is defined

      if (onChange) {
        // trigger onChange
        onChange(null, newItem);
      }
    }
  }, [itemProp]);
  return /*#__PURE__*/React.createElement(GalleryContext.Provider, {
    value: (0, _extends2["default"])({
      item: item,
      setItem: setItem
    }, context, override)
  }, children);
};
/**
 * Context values that can be passed to children via
 *
 * `const context = React.useContext(GalleryContext)`
 */


exports.GalleryProvider = GalleryProvider;
GalleryProvider.bdsName = 'GalleryProvider';
var _default = GalleryProvider;
exports["default"] = _default;