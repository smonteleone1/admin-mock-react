import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["children", "item", "items", "defaultItem", "disableNavigation", "maxThumbnails", "onExcessClick", "onChange", "shape", "excessRender"];
import * as React from 'react';
import { useBackyardTheme, getShape } from '../ThemeProvider';

/**
 * GalleryContext
 */
const GalleryContext = /*#__PURE__*/React.createContext(null);
/**
 * GalleryConsumer
 */

const GalleryConsumer = GalleryContext.Consumer;
/**
 * Clamps a number between a maximum and a minimum number
 *
 * @param num - number to clamp
 * @param a - minumum number
 * @param b - maximum number
 */

const clamp = (num, a, b) => Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));
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


const GalleryProvider = _ref => {
  let {
    children,
    item: itemProp,
    items: itemsProp = [],
    defaultItem = 0,
    disableNavigation = false,
    maxThumbnails,
    onExcessClick,
    onChange,
    shape: shapeProp,
    // = 'rounded',
    excessRender
  } = _ref,
      override = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const {
    shape: shapeContext
  } = useBackyardTheme({
    validate: true,
    name: 'Gallery'
  }).context; // Calculate shape

  const shape = getShape(shapeProp, shapeContext);
  const [item, setItemState] = React.useState(itemProp || defaultItem); // Memoize context value with external changes

  const context = React.useMemo(() => ({
    items: itemsProp || [],
    disableNavigation,
    maxThumbnails,
    onExcessClick,
    onChange,
    shape,
    excessRender
  }), [itemsProp, disableNavigation, maxThumbnails, onExcessClick, onChange, shape, excessRender]);
  /**
   * Setting the item state
   * @param newState 
   * @returns newItem: number
   */

  const setItem = newState => {
    let newItem;

    if (typeof newState === 'function') {
      newItem = clamp(newState(item), 0, context.items.length - 1);
    } else {
      newItem = clamp(newState, 0, context.items.length - 1);
    }

    setItemState(newItem);
    return newItem;
  };

  React.useEffect(() => {
    if (itemProp >= 0 && itemProp !== item) {
      const newItem = setItem(itemProp); // If onChange is defined

      if (onChange) {
        // trigger onChange
        onChange(null, newItem);
      }
    }
  }, [itemProp]);
  return /*#__PURE__*/React.createElement(GalleryContext.Provider, {
    value: _extends({
      item,
      setItem
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