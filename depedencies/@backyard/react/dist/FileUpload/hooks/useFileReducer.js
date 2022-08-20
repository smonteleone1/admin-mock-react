"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
exports.generateId = generateId;
exports.getPropsDerived = getPropsDerived;
exports.useFileReducer = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _toPropertyKey2 = _interopRequireDefault(require("@babel/runtime/helpers/toPropertyKey"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends4 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Gets and returns properties from an instance of Object
 *
 * Used for extending and creating a mutable `File`
 * without modifying its instance
 *
 * @param obj - instance to get props from
 */
function getPropsDerived(obj) {
  // Item will be converted to new type
  var item = {}; // For each property in object,
  // eslint-disable-next-line guard-for-in, no-restricted-syntax

  for (var prop in obj) {
    // Set new property
    item[prop] = obj[prop];
  } // Returns new object


  return item;
}
/**
 * Generates a random ID to track file uniqueness
 */


function generateId() {
  return "backyard-file-".concat(Math.round(Math.random() * 1e9));
}
/**
 * Backyard React File Upload useFileReducer Hook
 *
 * @internal
 *
 * Used as a state reducer to manage files to be handled by the `FileUpload` UI
 *
 * Documentation:
 *
 * - [FileUpload](https://dev.carbon.gcp.lowes.com/bds/documentation/Components/FileUpload)
 */


var useFileReducer = function useFileReducer(_ref) {
  var maxFiles = _ref.maxFiles,
      defaultFiles = _ref.defaultFiles,
      onFileAdd = _ref.onFileAdd,
      onFileRemove = _ref.onFileRemove,
      onDrop = _ref.onDrop,
      onChange = _ref.onChange,
      onSuccess = _ref.onSuccess,
      onError = _ref.onError;

  // State for whether or not all files are successful
  var _React$useState = React.useState(false),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      hasSuccess = _React$useState2[0],
      setHasSuccess = _React$useState2[1]; // State for whether or not any file has an error


  var _React$useState3 = React.useState(false),
      _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
      hasError = _React$useState4[0],
      setHasError = _React$useState4[1]; // State reducer for all files managed by `FileUpload`


  var _React$useReducer = React.useReducer(stateReducerHelper, defaultFiles, reduceFiles),
      _React$useReducer2 = (0, _slicedToArray2["default"])(_React$useReducer, 2),
      state = _React$useReducer2[0],
      stateReducer = _React$useReducer2[1];

  var _React$useState5 = React.useState(state),
      _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
      prevState = _React$useState6[0],
      setPrevState = _React$useState6[1];
  /**
   * Creates an extended `File` object out of its instance
   *
   * @param file - `File` instance to create `FileUploadFile` out of
   */


  function createFile(file) {
    // Convert properties to new type
    var newFile = file; // Set default file state if not already defined

    newFile.state = newFile.state || 'created'; // Set default ID if not defined

    newFile.id = (newFile === null || newFile === void 0 ? void 0 : newFile.id) || generateId();
    /**
     * Modify file dispatcher
     * Add or modify new properties for `FileUploadFile`
     *
     * @param fileProps - New file properties to add/overwrite
     */

    newFile.modify = function (fileProps) {
      // Hold modified `File`
      var newFileModified = newFile; // For each file prop,

      Object.keys(fileProps).forEach(function (prop) {
        // Modify `File` to new file prop
        newFileModified[prop] = fileProps[prop];
      }); // If `fileReducer` defined,

      if (stateReducer) {
        // Run modify fileReducer
        stateReducer({
          type: 'modify',
          file: newFileModified
        });
      }
    };
    /**
     * Remove file from `FileUpload`
     */


    newFile.remove = function () {
      // Trigger remove file with id
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      removeFile(newFile.id);
    };
    /**
     * Modify file state dispatcher
     * Change state of the file
     *
     * @param state - state of the file
     * @param errors - errors to add/modify
     */


    newFile.setState = function (state, errors) {
      return newFile.modify({
        state: state,
        errors: errors
      });
    };
    /**
     * Modify file errors dispatcher
     * Add/modify/remove errors for file
     *
     * @param errors - list of `FileError`s
     */


    newFile.setErrors = function (errors) {
      return newFile.modify({
        errors: errors
      });
    }; // `FileUploadFile`


    return newFile;
  }
  /**
   * Add a file to the file reducer
   *
   * @param file - file to add
   */


  function addFile(file) {
    var newFile = createFile(file);
    stateReducer({
      type: 'add',
      file: newFile
    });
  }
  /**
   * Remove a file from the dispatcher
   *
   * @param id - id of file to remove
   */


  function removeFile(id) {
    stateReducer({
      type: 'remove',
      id: id
    });
  }
  /**
   * Handle `onDrop` event
   * This function depends on `react-dropzone` handler
   *
   * @param acceptedFiles - list of accepted files from `react-dropzone` handler
   * @param rejectedFiles - list of rejected files from `react-dropzone` handler
   * @param event - drop event from `react-dropzone` handler
   */


  function handleDrop(acceptedFiles, rejectedFiles, event) {
    // Create `FileUploadFile`s from accepted files
    var newAcceptedFiles = acceptedFiles.map(function (file) {
      // Create `FileUploadFile` from accepted `File`
      var acceptedFile = createFile(file); // Set state to accepted

      acceptedFile.state = 'accepted'; // Return accepted `FileUploadFile`

      return acceptedFile;
    }); // Create `FileUploadFile`s from rejected files

    var newRejectedFiles = rejectedFiles.map(function (_ref2) {
      var file = _ref2.file,
          errorList = _ref2.errors;
      // Create `FileUploadFile` from rejected `File`
      var rejectedFile = createFile(file); // Set state and errors to rejected

      rejectedFile.state = 'rejected';
      rejectedFile.errors = errorList; // Return rejected `FileUploadFile`

      return rejectedFile;
    }); // Add list of new files to file reducer

    stateReducer({
      type: 'add',
      file: [].concat((0, _toConsumableArray2["default"])(newAcceptedFiles), (0, _toConsumableArray2["default"])(newRejectedFiles)),
      callback: function callback(newFiles) {
        // After adding files,
        // If `onDrop` trigger defined,
        if (onDrop) {
          // Trigger `onDrop`
          onDrop(event, {
            files: Object.values(newFiles),
            acceptedFiles: Object.values(newAcceptedFiles),
            rejectedFiles: Object.values(newRejectedFiles)
          });
        }
      }
    });
  }
  /**
   * Validates errors from new file states
   *
   * @param files - list of new files to validate
   */


  function validateFiles(files) {
    // Hold file types here
    var successFiles = [];
    var errorFiles = [];
    var normalFiles = []; // For each file...

    Object.values(files).forEach(function (file) {
      // Depending on state...
      switch (file.state) {
        // When completed or accepted...
        case 'completed':
        case 'accepted':
          // File was successful
          successFiles.push(file);
          break;
        // When error or rejected...

        case 'error':
        case 'rejected':
          // File had an error
          errorFiles.push(file);
          break;
        // By default,

        default:
          // File is normal
          // Not yet successful or errored
          normalFiles.push(file);
      }
    }); // If files were successful,

    if (successFiles.length > 0) {
      // Update success state to true
      setHasSuccess(true); // If `onSuccess` trigger defined,

      if (onSuccess) {
        // Trigger `onSuccess`
        onSuccess(successFiles, errorFiles, normalFiles);
      } // Else, no successful files,

    } else {
      // Update success state to false
      setHasSuccess(false);
    } // If files had errors,


    if (errorFiles.length > 0) {
      // Update error state to true,
      setHasError(true); // If `onError` trigger is defined,

      if (onError) {
        // Trigger `onError`
        onError(errorFiles, successFiles, normalFiles);
      } // Else, no file had an error,

    } else {
      // Update error state to false
      setHasError(false);
    }
  }
  /**
   * Reduces files from list to add to file reducer
   *
   * @param files - incoming files to reduce
   */


  function reduceFiles(fileList) {
    // Reduce each new file from list...
    var newFilesValue = fileList.reduce(function (newFiles, newFile) {
      // Create file
      var file = createFile(newFile); // Add to file map

      return (0, _extends4["default"])({}, newFiles, (0, _defineProperty2["default"])({}, file.id, file));
    }, {}); // Return new file map

    return {
      value: newFilesValue,
      action: {
        type: 'add',
        file: Object.values(newFilesValue)
      }
    };
  }
  /**
   * Handles state/action logic for `fileReducer` call
   *
   * @param state - current file upload state map
   * @param action - action to perform on file reducer
   */


  function stateReducerHandler(_ref3) {
    var _action$file;

    var value = _ref3.value,
        action = _ref3.action;

    // Depending on action type...
    switch (action.type) {
      // When 'add'...
      case 'add':
        // If action file is a list,
        if (Array.isArray(action.file)) {
          // Reduce file list
          var newFiles = reduceFiles(action.file); // Add new files to file map

          return {
            value: (0, _extends4["default"])({}, value, newFiles.value),
            action: action
          };
        } // Else action file is a single file...
        // Generate new id if not already defined
        // eslint-disable-next-line no-case-declarations


        var _id = (action === null || action === void 0 ? void 0 : (_action$file = action.file) === null || _action$file === void 0 ? void 0 : _action$file.id) || generateId(); // Get properties from `File` instance
        // eslint-disable-next-line no-case-declarations


        var newFile = action.file; // Return file state map

        return {
          value: (0, _extends4["default"])({}, value, (0, _defineProperty2["default"])({}, _id, newFile)),
          action: action
        };
      // When 'remove'...

      case 'remove':
        // If action id is a list of ids,
        if (Array.isArray(action.id)) {
          // Store list of removed files
          var removedFiles = []; // For each id to remove...

          action.id.forEach(function (fileId) {
            // If file exists in map,
            if (value[fileId]) {
              // Push file to list of removed files
              removedFiles.push(value[fileId]); // Delete file from map
              // eslint-disable-next-line no-param-reassign

              delete value[fileId];
            }
          }); // Return state map without files

          return {
            value: value,
            action: action
          };
        } // Else single id was given...
        // Destruct file from map
        // eslint-disable-next-line no-case-declarations


        var _action$id = action.id,
            file = value[_action$id],
            newValueRemove = (0, _objectWithoutProperties2["default"])(value, [_action$id].map(_toPropertyKey2["default"])); // Return file map without file

        return {
          value: newValueRemove,
          action: action
        };
      // When 'modify'...

      case 'modify':
        // If action file is list,
        if (Array.isArray(action.file)) {
          // Return file map with modified files
          return {
            value: (0, _extends4["default"])({}, value, action.file.reduce(function (modifiedState, modifiedFile) {
              // Hold modified file state
              var newFileStateModified = modifiedState; // Set new modified file state

              newFileStateModified[modifiedFile.id] = modifiedFile; // Modify single file by id

              return newFileStateModified;
            }, {})),
            action: action
          };
        } // Else single file to modify...
        // Return file map with modified file
        // eslint-disable-next-line no-case-declarations


        var newStateModify = value; // Set new modified file state

        newStateModify[action.file.id] = action.file;
        return {
          value: newStateModify,
          action: action
        };
      // By default,

      default:
        // Do nothing to file map
        return {
          value: value,
          action: action
        };
    }
  }
  /**
   * Clamps number of files to `maxFiles` number
   *
   * @param newFiles - new files being added
   */


  function clampFilesToMax(_ref4) {
    var value = _ref4.value,
        action = _ref4.action;
    // Get ids from total files
    var newFileIds = Object.keys(value); // If max files is defined, and more files are being added than allowed,

    if (maxFiles > 0 && newFileIds.length > maxFiles) {
      // Remove excess old files
      return stateReducerHandler({
        value: value,
        action: {
          type: 'remove',
          id: newFileIds.slice(0, newFileIds.length - maxFiles)
        }
      });
    } // No change


    return {
      value: value,
      action: action
    };
  }
  /**
   * Helper function to handle before and after `fileReducer` logic
   *
   * @param state - current file map
   * @param action - action to perform on file map
   */


  function stateReducerHelper(_ref5, action) {
    var value = _ref5.value;
    // Run handler logic on state/action
    return clampFilesToMax(stateReducerHandler({
      value: value,
      action: action
    }));
  } // Side effect for when state changes...


  React.useEffect(function () {
    var _current$action2, _current$action$file, _current$action3;

    // If state defined,
    if (state) {
      var _current$action;

      // Get previous and current state
      var current = state;
      var previous = prevState; // If callback defined in action,

      if (typeof ((_current$action = current.action) === null || _current$action === void 0 ? void 0 : _current$action.callback) === 'function') {
        // Trigger action callback
        // `onDrop` is called here
        current.action.callback(current.value);
      } // Validate files


      validateFiles(current.value); // Switch on current action type...

      switch ((_current$action2 = current.action) === null || _current$action2 === void 0 ? void 0 : _current$action2.type) {
        // When adding files,
        case 'add':
          // If multiple files are added,
          if (Array.isArray(current.action.file)) {
            // If files are defined and callback defined,
            if (current.action.file.length > 0 && onFileAdd) {
              // Get files array
              var _files = current.action.file; // Trigger callback

              onFileAdd(_files, Object.values(current.value));
            } // Else if single file defined,

          } else if ((_current$action$file = current.action.file) !== null && _current$action$file !== void 0 && _current$action$file.id) {
            // If callback defined,
            if (onFileAdd) {
              // Convert file to array
              var _files2 = [current.action.file]; // Trigger callback

              onFileAdd(_files2, Object.values(current.value));
            }
          }

          break;
        // When removing files,

        case 'remove':
          // If array of ids provided,
          if (Array.isArray(current.action.id)) {
            // If ids defined and callback defined,
            if (current.action.id.length > 0 && onFileRemove) {
              // Map ids to files from previous state
              var _files3 = current.action.id.map(function (id) {
                return previous.value[id];
              }); // Trigger callback


              onFileRemove(_files3, Object.values(current.value));
            } // Else if one id defined,

          } else if ((_current$action3 = current.action) !== null && _current$action3 !== void 0 && _current$action3.id) {
            // If file existed in previous state and callback defined,
            if (previous !== null && previous !== void 0 && previous.value[current.action.id] && onFileRemove) {
              // Convert file id to array
              var _files4 = [previous.value[current.action.id]]; // Trigger callback

              onFileRemove(_files4, Object.values(current.value));
            }
          }

          break;

        default: // do nothing

      } // If current value is not equal to previous value,


      if (JSON.stringify(current.value) !== JSON.stringify(previous.value)) {
        // If `onChange` trigger defined,
        if (onChange) {
          // Trigger `onChange`
          onChange({
            files: Object.values(current.value)
          });
        }
      } // Update previous state value


      setPrevState(current);
    }
  }, [state]);
  return {
    state: state,
    hasSuccess: hasSuccess,
    hasError: hasError,
    stateReducer: stateReducer,
    createFile: createFile,
    addFile: addFile,
    removeFile: removeFile,
    handleDrop: handleDrop
  };
};
/**
 * File reducer state is a map of files by id
 */


exports.useFileReducer = useFileReducer;
var _default = useFileReducer;
exports["default"] = _default;