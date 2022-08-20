"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var React = _interopRequireWildcard(require("react"));

var _testUtils = require("../../test-utils");

var _TextArea2 = _interopRequireDefault(require("./TextArea"));

var _TextArea;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('TextArea Tests', function () {
  it('renders', function () {
    var _render = (0, _testUtils.render)(_TextArea || (_TextArea = /*#__PURE__*/React.createElement(_TextArea2["default"], {
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

      var _render2 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_TextArea2["default"], {
        defaultValue: "text",
        onChange: onChangeSpy
      })),
          getByDisplayValue = _render2.getByDisplayValue;

      var textArea = getByDisplayValue('text');
      expect(onChangeSpy).not.toHaveBeenCalled();

      _testUtils.fireEvent.change(textArea, {
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

      var _render3 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_TextArea2["default"], {
        defaultValue: "text",
        max: 5,
        onChange: onChangeSpy
      })),
          getByDisplayValue = _render3.getByDisplayValue;

      var textArea = getByDisplayValue('text');
      /** input value greater then max */

      _testUtils.fireEvent.change(textArea, {
        target: {
          value: 'changed'
        }
      });
      /** should add data-invalid attribute */


      expect(textArea.attributes['data-invalid'].value).toBeTruthy();
      /** change input to a valid text length */

      _testUtils.fireEvent.change(textArea, {
        target: {
          value: 'valid'
        }
      });
      /** should remove the data-invalid attribute */


      expect(textArea.attributes['data-invalid']).toBeUndefined();
    });
  });
});