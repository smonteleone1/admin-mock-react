import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";

var _ChevronLeft, _ChevronRight;

const _excluded = ["children", "className", "height", "width", "padding", "style"];
import * as React from 'react';
import classNames from 'classnames';
import ChevronLeft from '@backyard/icons/ChevronLeft';
import ChevronRight from '@backyard/icons/ChevronRight';
import IconButton from '../IconButton';
import useBackyardTheme from '../ThemeProvider/useBackyardTheme';
import GalleryViewportWrapper from './styles/GalleryViewportWrapper';
import { GalleryContext } from './GalleryProvider';
import GalleryViewportItem from './GalleryViewportItem';
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

const GalleryViewport = /*#__PURE__*/React.forwardRef(function GalleryViewport(_ref, ref) {
  let {
    className,
    height,
    width,
    padding,
    style: styleProp
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard theme context
  const theme = useBackyardTheme(); // Get gallery context from `GalleryProvider`

  const {
    item,
    items,
    disableNavigation,
    onChange,
    onClickNext,
    onClickPrevious,
    setItem,
    shape
  } = React.useContext(GalleryContext); // Render previous button

  const previousButton = // If current item isn't first item, and navigation not disabled
  item > 0 && !disableNavigation ? /*#__PURE__*/React.createElement(IconButton, {
    className: "viewport-button prev",
    variant: "inverse",
    shape: "circle",
    color: "interactive",
    elevation: true,
    onClick: event => {
      const newItem = setItem(i => i - 1); // If onClickPrevious is defined

      if (onClickPrevious) {
        // trigger onClickPrevious
        onClickPrevious(event, newItem);
      } // If onChange is defined


      if (onChange) {
        // trigger onChange
        onChange(event, newItem);
      }
    }
  }, _ChevronLeft || (_ChevronLeft = /*#__PURE__*/React.createElement(ChevronLeft, null))) : null; // Render next button

  const nextButton = // If last item isn't selected, and navigation not disabled
  item < items.length - 1 && !disableNavigation ? /*#__PURE__*/React.createElement(IconButton, {
    className: "viewport-button next",
    variant: "inverse",
    shape: "circle",
    color: "interactive",
    elevation: true,
    onClick: event => {
      const newItem = setItem(i => i + 1); // If onClickNext is defined

      if (onClickNext) {
        // trigger onClickNext
        onClickNext(event, newItem);
      } // If onChange is defined


      if (onChange) {
        // trigger onChange
        onChange(event, newItem);
      }
    }
  }, _ChevronRight || (_ChevronRight = /*#__PURE__*/React.createElement(ChevronRight, null))) : null; // Memoize original `GalleryViewportItem`s to re-render if
  // `items` changes, given by `GalleryProvider`

  const originals = React.useMemo(() => items.map(({
    original,
    renderViewportItem,
    viewportItemProps
  }, index) => /*#__PURE__*/React.createElement(GalleryViewportItem, _extends({
    key: index,
    item: index,
    src: original,
    renderViewportItem: renderViewportItem
  }, viewportItemProps))), [items]); // Memoize style prop and css vars

  const style = React.useMemo(() => _extends({
    '--style-gallery-viewport-height': theme.sizes[height] || height || '25.875rem',
    '--style-gallery-viewport-width': theme.sizes[width] || width || '100%',
    '--style-gallery-viewport-padding': theme.sizes[padding] || padding || 'var(--bds-sizes-size-8)'
  }, styleProp), [theme, styleProp]);
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

  return /*#__PURE__*/React.createElement(GalleryViewportWrapper, _extends({
    className: classNames(`gallery-viewport shape--${shape}`, className),
    style: style
  }, props, {
    ref: ref
  }), previousButton, nextButton, /*#__PURE__*/React.createElement("ul", {
    className: "gallery-list",
    style: {
      marginLeft: `${-1 * item * 100}%`
    }
  }, originals));
});
GalleryViewport.bdsName = 'GalleryViewport';
export { GalleryViewport };
export default GalleryViewport;