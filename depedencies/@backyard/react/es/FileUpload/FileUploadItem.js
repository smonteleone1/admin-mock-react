import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";

var _Spinner, _SuccessFilled;

const _excluded = ["children", "className", "state", "name", "id"];
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
const FileUploadItem = /*#__PURE__*/React.forwardRef(function FileUploadItem(_ref, ref) {
  var _ErrorFilled, _CloseIcon;

  let {
    className,
    state: stateProp = 'enabled',
    name,
    id
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Hold current state of the file item
  const [state, setState] = React.useState(stateProp); // Use context from `FileUploadProvider`

  const {
    removeFile,
    delayCompleted,
    shape
  } = React.useContext(FileUploadContext); // File removing function handler

  const handleRemove = () => removeFile(id); // Calculate `icon` for...


  const icon = (() => {
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
  })(); // Side effect to animate transition from `completed` to `accepted` automatically


  React.useEffect(() => {
    let timeout; // Set new component's state from parent change

    setState(stateProp); // If `delayComplete` is defined and `state` is `completed`,

    if (delayCompleted && stateProp === 'completed') {
      // Set timeout to delay transition to `accepted`
      timeout = setTimeout(() => {
        setState('accepted');
      }, delayCompleted);
    } // Clean up `timeout` if component unmounts during transition


    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [stateProp]);
  return /*#__PURE__*/React.createElement(FileUploadItemWrapper, _extends({
    className: classNames(`file-upload-item shape--${shape}`, state, className)
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