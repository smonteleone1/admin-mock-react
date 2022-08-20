import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "item", "items", "defaultItem", "disableNavigation", "maxThumbnails", "onExcessClick", "onChange", "shape", "excessRender"];
import * as React from 'react';
import { useBackyardTheme, getShape } from '../ThemeProvider';

/**
 * GalleryContext
 */
var GalleryContext = /*#__PURE__*/React.createContext(null);
/**
 * GalleryConsumer
 */

var GalleryConsumer = GalleryContext.Consumer;
/**
 * Clamps a number between a maximum and a minimum number
 *
 * @param num - number to clamp
 * @param a - minumum number
 * @param b - maximum number
 */

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
      override = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme Context
  var shapeContext = useBackyardTheme({
    validate: true,
    name: 'Gallery'
  }).context.shape; // Calculate shape

  var shape = getShape(shapeProp, shapeContext);

  var _React$useState = React.useState(itemProp || defaultItem),
      _React$useState2 = _slicedToArray(_React$useState, 2),
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
    value: _extends({
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


GalleryProvider.bdsName = 'GalleryProvider';
export { GalleryProvider, GalleryContext, GalleryConsumer };
export default GalleryProvider;