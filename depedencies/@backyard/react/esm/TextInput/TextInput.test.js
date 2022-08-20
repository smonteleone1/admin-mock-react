var _TextInput, _TextInput2, _TextInput3, _TextInput4, _TextInput5;

import * as React from 'react';
import { render, fireEvent } from '../../test-utils';
import TextInput from './TextInput';
describe('TextInput Tests', function () {
  it('renders', function () {
    var _render = render(_TextInput || (_TextInput = /*#__PURE__*/React.createElement(TextInput, {
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

      var _render2 = render(_TextInput2 || (_TextInput2 = /*#__PURE__*/React.createElement(TextInput, {
        defaultValue: "text"
      }))),
          getByDisplayValue = _render2.getByDisplayValue;

      var textInput = getByDisplayValue('text');
      fireEvent.change(textInput, {
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

      var _render3 = render( /*#__PURE__*/React.createElement(TextInput, {
        defaultValue: "text",
        onChange: onChangeSpy
      })),
          getByDisplayValue = _render3.getByDisplayValue;

      var textInput = getByDisplayValue('text');
      expect(onChangeSpy).not.toHaveBeenCalled();
      fireEvent.change(textInput, {
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

      var _render4 = render(_TextInput3 || (_TextInput3 = /*#__PURE__*/React.createElement(TextInput, {
        defaultValue: "text"
      }))),
          getByDisplayValue = _render4.getByDisplayValue;

      var textInput = getByDisplayValue('text');
      fireEvent.focus(textInput);
      expect(onFocusSpy).not.toHaveBeenCalled();
    });
    it('triggers `onFocus` when focus event occurs', function () {
      var onFocusSpy = jest.fn(function (event) {
        return event.defaultPrevented;
      });

      var _render5 = render( /*#__PURE__*/React.createElement(TextInput, {
        defaultValue: "text",
        onFocus: onFocusSpy
      })),
          getByDisplayValue = _render5.getByDisplayValue;

      var textInput = getByDisplayValue('text');
      expect(onFocusSpy).not.toHaveBeenCalled();
      fireEvent.focus(textInput);
      expect(onFocusSpy).toHaveBeenCalled();
    });
  });
  describe('prop: onBlur', function () {
    it('doesnt trigger `onBlur` when not defined', function () {
      var onBlurSpy = jest.fn(function (event) {
        return event.defaultPrevented;
      });

      var _render6 = render(_TextInput4 || (_TextInput4 = /*#__PURE__*/React.createElement(TextInput, {
        defaultValue: "text"
      }))),
          getByDisplayValue = _render6.getByDisplayValue;

      var textInput = getByDisplayValue('text');
      fireEvent.blur(textInput);
      expect(onBlurSpy).not.toHaveBeenCalled();
    });
    it('triggers `onBlur` when blur event occurs', function () {
      var onBlurSpy = jest.fn(function (event) {
        return event.defaultPrevented;
      });

      var _render7 = render( /*#__PURE__*/React.createElement(TextInput, {
        defaultValue: "text",
        onBlur: onBlurSpy
      })),
          getByDisplayValue = _render7.getByDisplayValue;

      var textInput = getByDisplayValue('text');
      fireEvent.focus(textInput);
      expect(onBlurSpy).not.toHaveBeenCalled();
      fireEvent.blur(textInput);
      expect(onBlurSpy).toHaveBeenCalled();
    });
  });
  describe('prop: onClick', function () {
    it('doesnt trigger `onClick` when not defined', function () {
      var onClickSpy = jest.fn(function (event) {
        return event.defaultPrevented;
      });

      var _render8 = render(_TextInput5 || (_TextInput5 = /*#__PURE__*/React.createElement(TextInput, {
        defaultValue: "text"
      }))),
          getByDisplayValue = _render8.getByDisplayValue;

      var textInput = getByDisplayValue('text');
      fireEvent.click(textInput);
      expect(onClickSpy).not.toHaveBeenCalled();
    });
    it('triggers `onClick` when click event occurs', function () {
      var onClickSpy = jest.fn(function (event) {
        return event.defaultPrevented;
      });

      var _render9 = render( /*#__PURE__*/React.createElement(TextInput, {
        defaultValue: "text",
        onClick: onClickSpy
      })),
          getByDisplayValue = _render9.getByDisplayValue;

      var textInput = getByDisplayValue('text');
      expect(onClickSpy).not.toHaveBeenCalled();
      fireEvent.click(textInput);
      expect(onClickSpy).toHaveBeenCalled();
    });
  });
});