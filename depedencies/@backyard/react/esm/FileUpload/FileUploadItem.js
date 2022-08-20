import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

var _Spinner, _SuccessFilled;

var _excluded = ["children", "className", "state", "name", "id"];
import * as React from 'react';
import classNames from 'classnames';
import SuccessFilled from '@backyard/icons/SuccessFilled';
import CloseIcon from '@backyard/icons/Close';
import ErrorFilled from '@backyard/icons/ErrorFilled';
import Typography from '../Typography';
import Spinner from '../Spinner';
import { FileUploadContext } from './FileUploadProvider';
import FileUploadItemWrapper from './styles/FileUploadItemWrapper';

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
      props = _objectWithoutProperties(_ref, _excluded);

  // Hold current state of the file item
  var _React$useState = React.useState(stateProp),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1]; // Use context from `FileUploadProvider`


  var _React$useContext = React.useContext(FileUploadContext),
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
        return _Spinner || (_Spinner = /*#__PURE__*/React.createElement(Spinner, {
          show: true,
          small: true,
          inline: true,
          color: "icon_interactive"
        }));
      // ... completed, show completion icon

      case 'completed':
        return _SuccessFilled || (_SuccessFilled = /*#__PURE__*/React.createElement(SuccessFilled, {
          color: "icon_green",
          size: "size_20"
        }));
      // ... rejected or error, show red close circle

      case 'rejected':
      case 'error':
        return _ErrorFilled || (_ErrorFilled = /*#__PURE__*/React.createElement(ErrorFilled, {
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
        return _CloseIcon || (_CloseIcon = /*#__PURE__*/React.createElement(CloseIcon, {
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
  return /*#__PURE__*/React.createElement(FileUploadItemWrapper, _extends({
    className: classNames("file-upload-item shape--".concat(shape), state, className)
  }, props, {
    ref: ref
  }), /*#__PURE__*/React.createElement(Typography, {
    variant: "caption",
    className: "file-upload-item-label"
  }, name), /*#__PURE__*/React.createElement("span", {
    className: "file-upload-item-icon"
  }, icon));
});
FileUploadItem.bdsName = 'FileUploadItem';
export { FileUploadItem };
export default FileUploadItem;