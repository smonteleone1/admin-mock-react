var _TextArea;

import * as React from 'react';
import { render, fireEvent } from '../../test-utils';
import TextArea from './TextArea';
describe('TextArea Tests', function () {
  it('renders', function () {
    var _render = render(_TextArea || (_TextArea = /*#__PURE__*/React.createElement(TextArea, {
      defaultValue: "text"
    }))),
        getByDisplayValue = _render.getByDisplayValue;

    var textArea = getByDisplayValue('text');
    expect(textArea).toBeInTheDocument();
  });
  describe('handleChange', function () {
    it('triggers `onChange` when change event occurs', function () {
      var onChangeSpy = jest.fn(function (event) {
        return event.defaultPrevented;
      });

      var _render2 = render( /*#__PURE__*/React.createElement(TextArea, {
        defaultValue: "text",
        onChange: onChangeSpy
      })),
          getByDisplayValue = _render2.getByDisplayValue;

      var textArea = getByDisplayValue('text');
      expect(onChangeSpy).not.toHaveBeenCalled();
      fireEvent.change(textArea, {
        target: {
          value: 'changed'
        }
      });
      expect(onChangeSpy).toHaveBeenCalled();
    });
    it('triggers error when length is greater then max', function () {
      var onChangeSpy = jest.fn(function (event) {
        return event.defaultPrevented;
      });

      var _render3 = render( /*#__PURE__*/React.createElement(TextArea, {
        defaultValue: "text",
        max: 5,
        onChange: onChangeSpy
      })),
          getByDisplayValue = _render3.getByDisplayValue;

      var textArea = getByDisplayValue('text');
      /** input value greater then max */

      fireEvent.change(textArea, {
        target: {
          value: 'changed'
        }
      });
      /** should add data-invalid attribute */

      expect(textArea.attributes['data-invalid'].value).toBeTruthy();
      /** change input to a valid text length */

      fireEvent.change(textArea, {
        target: {
          value: 'valid'
        }
      });
      /** should remove the data-invalid attribute */

      expect(textArea.attributes['data-invalid']).toBeUndefined();
    });
  });
});