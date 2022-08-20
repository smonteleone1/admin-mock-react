import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";

var _Bullet;

const _excluded = ["src", "alt", "component"],
      _excluded2 = ["alt", "children", "className", "item", "src", "onClick", "renderThumbnail", "excessRender", "variant", "wrapperProps", "maxThumbnails"];
import * as React from 'react';
import classNames from 'classnames';
import Bullet from '@backyard/icons/Bullet';
import IconButton from '../IconButton';
import Typography from '../Typography';
import { GalleryContext } from './GalleryProvider';
import GalleryThumbnailWrapper from './styles/GalleryThumbnailWrapper';
/**
 * Backyard React Gallery Default Thumbnail
 *
 * Default thumbnail to be rendered.
 * This can be overridden by the `renderThumbnail` prop.
 */

const GalleryDefaultThumbnail = /*#__PURE__*/React.forwardRef(function GalleryDefaultThumbnail(_ref, ref) {
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
});
/**
 * Backyard React Product Gallery Thumbnail
 *
 * Handles the render of the thumbnail, and provides a button for the user to click on
 * and set the current selected item with.
 *
 * Example:
 * ```
 *  <GalleryThumbnail
 *      src="http://some.where/img.jpg"
 *      item={0}
 *  />
 * ```
 */

const GalleryThumbnail = /*#__PURE__*/React.forwardRef(function GalleryThumbnail(_ref2, ref) {
  let {
    alt: altProp,
    children,
    className,
    item,
    src,
    onClick,
    renderThumbnail = (props, ref) => /*#__PURE__*/React.createElement(GalleryDefaultThumbnail, _extends({}, props, {
      ref: ref
    })),
    excessRender,
    variant,
    wrapperProps = {},
    maxThumbnails
  } = _ref2,
      props = _objectWithoutPropertiesLoose(_ref2, _excluded2);

  // Get context from `GalleryProvider`
  const {
    item: curItem,
    items,
    setItem,
    onExcessClick,
    onChange,
    shape
  } = React.useContext(GalleryContext); // Provide alternate text if not defined

  const alt = altProp || `gallery thumbnail for item ${item}`;
  /**
   * Handle click event
   *
   * Sets current selected item
   *
   * @param event - click event
   */

  const handleClick = event => {
    // Set current item
    const newItem = setItem(item); // If excess button, and `onExcessClick` defined,

    if (variant === 'excess' && onExcessClick) {
      // Trigger `onExcessClick`
      onExcessClick(event);
    } else if (onClick) {
      // Else if `onClick` defined,
      // Trigger `onClick`
      onClick(event);
    } // If onChange is defined


    if (onChange) {
      // trigger onChange
      onChange(event, newItem);
    }
  };
  /**
   * Modifying the custom (excessRender) text
   */


  const getModifiedExcessText = () => {
    const dataTexts = excessRender.match(new RegExp('%(max|current|excess)', 'g'));
    let excessText = `${excessRender}`;
    /*
     * Getting the exact data for
     * %max: maxThumbnails
     * %current: current Item index (currItem)
     * %excess: the no. of items remaining to show in thumbnail group
     */

    if (dataTexts && dataTexts.length) {
      dataTexts.forEach(dataText => {
        const dataObj = {
          data: undefined,
          flag: true
        };

        switch (dataText) {
          case '%max':
            dataObj.data = maxThumbnails;
            break;

          case '%current':
            dataObj.data = curItem;
            break;

          case '%excess':
            dataObj.data = items.length - item;
            break;

          default:
            dataObj.flag = false;
        }

        if (dataObj.flag) {
          excessText = excessText.replace(dataText, `${dataObj.data}`);
        }
      });
    }

    return excessText;
  };
  /**
   * Compute relative content for the thumbnail
   * Depends on the `variant` prop
   */


  const content = (() => {
    switch (variant) {
      // For an `excess` thumbnail,
      case 'excess':
        {
          // Modifying the custom (excessRender) text 
          const excessText = excessRender ? getModifiedExcessText() : `+${items.length - item}`; // Content is the number of thumbnails in excess of current

          return /*#__PURE__*/React.createElement(Typography, {
            className: excessText && 'excess-custom',
            variant: "body_1",
            color: "text_tertiary",
            align: "center"
          }, /*#__PURE__*/React.createElement("b", null, excessText));
        }
      // For a `dot` thumbnail,

      case 'dot':
        // Display bullet, for mobile
        return _Bullet || (_Bullet = /*#__PURE__*/React.createElement(Bullet, null));
      // For a `content` thumbnail,

      case 'content':
        // Display customized children
        return children;
      // By default,

      default:
        // Render the thumbnail as defined by `renderThumbnail`
        return renderThumbnail(_extends({
          alt,
          className: classNames('gallery-thumbnail-item', className),
          src
        }, props), ref);
    }
  })();
  /**
   * Layout:
   *  <div wrapper>
   *      <button icon>
   *          ...
   *      </button>
   *  </div>
   */


  return /*#__PURE__*/React.createElement(GalleryThumbnailWrapper, _extends({}, wrapperProps, {
    className: classNames(`gallery-thumbnail shape--${shape}`, variant, wrapperProps?.className, curItem === item && 'selected')
  }), /*#__PURE__*/React.createElement(IconButton, {
    variant: "secondary",
    color: "neutral",
    onClick: handleClick,
    shape: shape
  }, content));
});
GalleryDefaultThumbnail.bdsName = 'GalleryDefaultThumbnail';
GalleryThumbnail.bdsName = 'GalleryThumbnail';
export { GalleryThumbnail, GalleryDefaultThumbnail };
export default GalleryThumbnail;