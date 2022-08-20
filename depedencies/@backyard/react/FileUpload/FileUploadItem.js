"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.FileUploadItem = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _SuccessFilled2 = _interopRequireDefault(require("@backyard/icons/SuccessFilled"));

var _Close = _interopRequireDefault(require("@backyard/icons/Close"));

var _ErrorFilled2 = _interopRequireDefault(require("@backyard/icons/ErrorFilled"));

var _Typography = _interopRequireDefault(require("../Typography"));

var _Spinner2 = _interopRequireDefault(require("../Spinner"));

var _FileUploadProvider = require("./FileUploadProvider");

var _FileUploadItemWrapper = _interopRequireDefault(require("./styles/FileUploadItemWrapper"));

var _Spinner, _SuccessFilled;

var _excluded = ["children", "className", "state", "name", "id"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Backyard React File Upload Item
 *
 * @internal
 *
 * Handles the UI for each file item the user submits in `FileUpload`
 *
 * API:
 *
 * - [FileUploadItem API](https://dev.carbon.gcp.lowes.com/bds/documentation/ComponentsAPI/FileUploadItem)
 */
var FileUploadItem = /*#__PURE__*/React.forwardRef(function FileUploadItem(_ref, ref) {
  var _ErrorFilled, _CloseIcon;

  var children = _ref.children,
      className = _ref.className,
      _ref$state = _ref.state,
      stateProp = _ref$state === void 0 ? 'enabled' : _ref$state,
      name = _ref.name,
      id = _ref.id,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  // Hold current state of the file item
  var _React$useState = React.useState(stateProp),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1]; // Use context from `FileUploadProvider`


  var _React$useContext = React.useContext(_FileUploadProvider.FileUploadContext),
      removeFile = _React$useContext.removeFile,
      delayCompleted = _React$useContext.delayCompleted,
      shape = _React$useContext.shape; // File removing function handler


  var handleRemove = function handleRemove() {
    return removeFile(id);
  }; // Calculate `icon` for...


  var icon = function () {
    // When `state` is...
    switch (state) {
      // ... loading, show spinner
      case 'loading':
        return _Spinner || (_Spinner = /*#__PURE__*/React.createElement(_Spinner2["default"], {
          show: true,
          small: true,
          inline: true,
          color: "icon_interactive"
        }));
      // ... completed, show completion icon

      case 'completed':
        return _SuccessFilled || (_SuccessFilled = /*#__PURE__*/React.createElement(_SuccessFilled2["default"], {
          color: "icon_green",
          size: "size_20"
        }));
      // ... rejected or error, show red close circle

      case 'rejected':
      case 'error':
        return _ErrorFilled || (_ErrorFilled = /*#__PURE__*/React.createElement(_ErrorFilled2["default"], {
          size: "size_20",
          color: "icon_red",
          "aria-hidden": "false",
          "aria-label": "close",
          role: "button",
          tabIndex: 0,
          onClick: handleRemove
        }));
      // ... accepted or enabled, show close icon

      case 'accepted':
      case 'enabled':
      default:
        return _CloseIcon || (_CloseIcon = /*#__PURE__*/React.createElement(_Close["default"], {
          color: "text_tertiary",
          "aria-label": "close",
          "aria-hidden": "false",
          role: "button",
          tabIndex: 0,
          onClick: handleRemove
        }));
    }
  }(); // Side effect to animate transition from `completed` to `accepted` automatically


  React.useEffect(function () {
    var timeout; // Set new component's state from parent change

    setState(stateProp); // If `delayComplete` is defined and `state` is `completed`,

    if (delayCompleted && stateProp === 'completed') {
      // Set timeout to delay transition to `accepted`
      timeout = setTimeout(function () {
        setState('accepted');
      }, delayCompleted);
    } // Clean up `timeout` if component unmounts during transition


    return function () {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [stateProp]);
  return /*#__PURE__*/React.createElement(_FileUploadItemWrapper["default"], (0, _extends2["default"])({
    className: (0, _classnames["default"])("file-upload-item shape--".concat(shape), state, className)
  }, props, {
    ref: ref
  }), /*#__PURE__*/React.createElement(_Typography["default"], {
    variant: "caption",
    className: "file-upload-item-label"
  }, name), /*#__PURE__*/React.createElement("span", {
    className: "file-upload-item-icon"
  }, icon));
});
exports.FileUploadItem = FileUploadItem;
FileUploadItem.bdsName = 'FileUploadItem';
var _default = FileUploadItem;
exports["default"] = _default;