"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var React = _interopRequireWildcard(require("react"));

var _testUtils = require("../../test-utils");

var _TextInput6 = _interopRequireDefault(require("./TextInput"));

var _TextInput, _TextInput2, _TextInput3, _TextInput4, _TextInput5;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('TextInput Tests', function () {
  it('renders', function () {
    var _render = (0, _testUtils.render)(_TextInput || (_TextInput = /*#__PURE__*/React.createElement(_TextInput6["default"], {
      defaultValue: "text"
    }))),
        getByDisplayValue = _render.getByDisplayValue;

    var textinput = getByDisplayValue('text');
    expect(textinput).toBeInTheDocument();
  });
  describe('prop: onChange', function () {
    it('doesnt trigger `onChange` when not defined', function () {
      var onChangeSpy = jest.fn(function (event) {
        return event.defaultPrevented;
      });

      var _render2 = (0, _testUtils.render)(_TextInput2 || (_TextInput2 = /*#__PURE__*/React.createElement(_TextInput6["default"], {
        defaultValue: "text"
      }))),
          getByDisplayValue = _render2.getByDisplayValue;

      var textInput = getByDisplayValue('text');

      _testUtils.fireEvent.change(textInput, {
        target: {
          value: 'changed'
        }
      });

      expect(onChangeSpy).not.toHaveBeenCalled();
    });
    it('triggers `onChange` when change event occurs', function () {
      var onChangeSpy = jest.fn(function (event) {
        return event.defaultPrevented;
      });

      var _render3 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_TextInput6["default"], {
        defaultValue: "text",
        onChange: onChangeSpy
      })),
          getByDisplayValue = _render3.getByDisplayValue;

      var textInput = getByDisplayValue('text');
      expect(onChangeSpy).not.toHaveBeenCalled();

      _testUtils.fireEvent.change(textInput, {
        target: {
          value: 'changed'
        }
      });

      expect(onChangeSpy).toHaveBeenCalled();
    });
  });
  describe('prop: onFocus', function () {
    it('doesnt trigger `onFocus` when not defined', function () {
      var onFocusSpy = jest.fn(function (event) {
        return event.defaultPrevented;
      });

      var _render4 = (0, _testUtils.render)(_TextInput3 || (_TextInput3 = /*#__PURE__*/React.createElement(_TextInput6["default"], {
        defaultValue: "text"
      }))),
          getByDisplayValue = _render4.getByDisplayValue;

      var textInput = getByDisplayValue('text');

      _testUtils.fireEvent.focus(textInput);

      expect(onFocusSpy).not.toHaveBeenCalled();
    });
    it('triggers `onFocus` when focus event occurs', function () {
      var onFocusSpy = jest.fn(function (event) {
        return event.defaultPrevented;
      });

      var _render5 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_TextInput6["default"], {
        defaultValue: "text",
        onFocus: onFocusSpy
      })),
          getByDisplayValue = _render5.getByDisplayValue;

      var textInput = getByDisplayValue('text');
      expect(onFocusSpy).not.toHaveBeenCalled();

      _testUtils.fireEvent.focus(textInput);

      expect(onFocusSpy).toHaveBeenCalled();
    });
  });
  describe('prop: onBlur', function () {
    it('doesnt trigger `onBlur` when not defined', function () {
      var onBlurSpy = jest.fn(function (event) {
        return event.defaultPrevented;
      });

      var _render6 = (0, _testUtils.render)(_TextInput4 || (_TextInput4 = /*#__PURE__*/React.createElement(_TextInput6["default"], {
        defaultValue: "text"
      }))),
          getByDisplayValue = _render6.getByDisplayValue;

      var textInput = getByDisplayValue('text');

      _testUtils.fireEvent.blur(textInput);

      expect(onBlurSpy).not.toHaveBeenCalled();
    });
    it('triggers `onBlur` when blur event occurs', function () {
      var onBlurSpy = jest.fn(function (event) {
        return event.defaultPrevented;
      });

      var _render7 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_TextInput6["default"], {
        defaultValue: "text",
        onBlur: onBlurSpy
      })),
          getByDisplayValue = _render7.getByDisplayValue;

      var textInput = getByDisplayValue('text');

      _testUtils.fireEvent.focus(textInput);

      expect(onBlurSpy).not.toHaveBeenCalled();

      _testUtils.fireEvent.blur(textInput);

      expect(onBlurSpy).toHaveBeenCalled();
    });
  });
  describe('prop: onClick', function () {
    it('doesnt trigger `onClick` when not defined', function () {
      var onClickSpy = jest.fn(function (event) {
        return event.defaultPrevented;
      });

      var _render8 = (0, _testUtils.render)(_TextInput5 || (_TextInput5 = /*#__PURE__*/React.createElement(_TextInput6["default"], {
        defaultValue: "text"
      }))),
          getByDisplayValue = _render8.getByDisplayValue;

      var textInput = getByDisplayValue('text');

      _testUtils.fireEvent.click(textInput);

      expect(onClickSpy).not.toHaveBeenCalled();
    });
    it('triggers `onClick` when click event occurs', function () {
      var onClickSpy = jest.fn(function (event) {
        return event.defaultPrevented;
      });

      var _render9 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_TextInput6["default"], {
        defaultValue: "text",
        onClick: onClickSpy
      })),
          getByDisplayValue = _render9.getByDisplayValue;

      var textInput = getByDisplayValue('text');
      expect(onClickSpy).not.toHaveBeenCalled();

      _testUtils.fireEvent.click(textInput);

      expect(onClickSpy).toHaveBeenCalled();
    });
  });
});