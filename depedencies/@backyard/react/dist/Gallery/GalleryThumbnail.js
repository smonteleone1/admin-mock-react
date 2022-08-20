"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.GalleryThumbnail = exports.GalleryDefaultThumbnail = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Bullet2 = _interopRequireDefault(require("@backyard/icons/Bullet"));

var _IconButton = _interopRequireDefault(require("../IconButton"));

var _Typography = _interopRequireDefault(require("../Typography"));

var _GalleryProvider = require("./GalleryProvider");

var _GalleryThumbnailWrapper = _interopRequireDefault(require("./styles/GalleryThumbnailWrapper"));

var _Bullet;

var _excluded = ["src", "alt", "component"],
    _excluded2 = ["alt", "children", "className", "item", "src", "onClick", "renderThumbnail", "excessRender", "variant", "wrapperProps", "maxThumbnails"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Backyard React Gallery Default Thumbnail
 *
 * Default thumbnail to be rendered.
 * This can be overridden by the `renderThumbnail` prop.
 */
var GalleryDefaultThumbnail = /*#__PURE__*/React.forwardRef(function GalleryDefaultThumbnail(_ref, ref) {
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

exports.GalleryDefaultThumbnail = GalleryDefaultThumbnail;
var GalleryThumbnail = /*#__PURE__*/React.forwardRef(function GalleryThumbnail(_ref2, ref) {
  var altProp = _ref2.alt,
      children = _ref2.children,
      className = _ref2.className,
      item = _ref2.item,
      src = _ref2.src,
      onClick = _ref2.onClick,
      _ref2$renderThumbnail = _ref2.renderThumbnail,
      renderThumbnail = _ref2$renderThumbnail === void 0 ? function (props, ref) {
    return /*#__PURE__*/React.createElement(GalleryDefaultThumbnail, (0, _extends2["default"])({}, props, {
      ref: ref
    }));
  } : _ref2$renderThumbnail,
      excessRender = _ref2.excessRender,
      variant = _ref2.variant,
      _ref2$wrapperProps = _ref2.wrapperProps,
      wrapperProps = _ref2$wrapperProps === void 0 ? {} : _ref2$wrapperProps,
      maxThumbnails = _ref2.maxThumbnails,
      props = (0, _objectWithoutProperties2["default"])(_ref2, _excluded2);

  // Get context from `GalleryProvider`
  var _React$useContext = React.useContext(_GalleryProvider.GalleryContext),
      curItem = _React$useContext.item,
      items = _React$useContext.items,
      setItem = _React$useContext.setItem,
      onExcessClick = _React$useContext.onExcessClick,
      onChange = _React$useContext.onChange,
      shape = _React$useContext.shape; // Provide alternate text if not defined


  var alt = altProp || "gallery thumbnail for item ".concat(item);
  /**
   * Handle click event
   *
   * Sets current selected item
   *
   * @param event - click event
   */

  var handleClick = function handleClick(event) {
    // Set current item
    var newItem = setItem(item); // If excess button, and `onExcessClick` defined,

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


  var getModifiedExcessText = function getModifiedExcessText() {
    var dataTexts = excessRender.match(new RegExp('%(max|current|excess)', 'g'));
    var excessText = "".concat(excessRender);
    /*
     * Getting the exact data for
     * %max: maxThumbnails
     * %current: current Item index (currItem)
     * %excess: the no. of items remaining to show in thumbnail group
     */

    if (dataTexts && dataTexts.length) {
      dataTexts.forEach(function (dataText) {
        var dataObj = {
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
          excessText = excessText.replace(dataText, "".concat(dataObj.data));
        }
      });
    }

    return excessText;
  };
  /**
   * Compute relative content for the thumbnail
   * Depends on the `variant` prop
   */


  var content = function () {
    switch (variant) {
      // For an `excess` thumbnail,
      case 'excess':
        {
          // Modifying the custom (excessRender) text 
          var excessText = excessRender ? getModifiedExcessText() : "+".concat(items.length - item); // Content is the number of thumbnails in excess of current

          return /*#__PURE__*/React.createElement(_Typography["default"], {
            className: excessText && 'excess-custom',
            variant: "body_1",
            color: "text_tertiary",
            align: "center"
          }, /*#__PURE__*/React.createElement("b", null, excessText));
        }
      // For a `dot` thumbnail,

      case 'dot':
        // Display bullet, for mobile
        return _Bullet || (_Bullet = /*#__PURE__*/React.createElement(_Bullet2["default"], null));
      // For a `content` thumbnail,

      case 'content':
        // Display customized children
        return children;
      // By default,

      default:
        // Render the thumbnail as defined by `renderThumbnail`
        return renderThumbnail((0, _extends2["default"])({
          alt: alt,
          className: (0, _classnames["default"])('gallery-thumbnail-item', className),
          src: src
        }, props), ref);
    }
  }();
  /**
   * Layout:
   *  <div wrapper>
   *      <button icon>
   *          ...
   *      </button>
   *  </div>
   */


  return /*#__PURE__*/React.createElement(_GalleryThumbnailWrapper["default"], (0, _extends2["default"])({}, wrapperProps, {
    className: (0, _classnames["default"])("gallery-thumbnail shape--".concat(shape), variant, wrapperProps === null || wrapperProps === void 0 ? void 0 : wrapperProps.className, curItem === item && 'selected')
  }), /*#__PURE__*/React.createElement(_IconButton["default"], {
    variant: "secondary",
    color: "neutral",
    onClick: handleClick,
    shape: shape
  }, content));
});
exports.GalleryThumbnail = GalleryThumbnail;
GalleryDefaultThumbnail.bdsName = 'GalleryDefaultThumbnail';
GalleryThumbnail.bdsName = 'GalleryThumbnail';
var _default = GalleryThumbnail;
exports["default"] = _default;