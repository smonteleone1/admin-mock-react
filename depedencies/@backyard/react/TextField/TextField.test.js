"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var React = _interopRequireWildcard(require("react"));

var _testUtils = require("../../test-utils");

var _TextField2 = _interopRequireDefault(require("./TextField"));

var _TextField;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('TextField Tests', function () {
  it('renders', function () {
    var _render = (0, _testUtils.render)(_TextField || (_TextField = /*#__PURE__*/React.createElement(_TextField2["default"], {
      defaultValue: "text"
    }))),
        getByDisplayValue = _render.getByDisplayValue;

    var textinput = getByDisplayValue('text');
    expect(textinput).toBeInTheDocument();
  });
  it('correctly uses the event.target for onChange handler', function () {
    var testState = {
      field: 'one'
    };
    var onChangeSpy = jest.fn(function (event) {
      return testState[event.target.name] = event.target.value;
    });

    var _render2 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_TextField2["default"], {
      label: "Field",
      name: "field",
      value: testState.field,
      onChange: onChangeSpy
    })),
        getByLabelText = _render2.getByLabelText;

    var input = getByLabelText('Field');
    expect(onChangeSpy).not.toHaveBeenCalled();
    expect(testState.field).toBe('one');
    expect(input).toHaveValue('one');
    (0, _testUtils.act)(function () {
      _testUtils.fireEvent.change(input, {
        target: {
          name: 'field',
          value: 'two'
        }
      });
    });
    expect(onChangeSpy).toHaveBeenCalled();
    expect(testState.field).toBe('two');
    expect(input).toHaveValue('two');
  });
  it('simulates change event correctly with enzyme', function () {
    var testState = {
      field: 'one'
    };
    var onChangeSpy = jest.fn(function (event) {
      return testState[event.target.name] = event.target.value;
    });
    var wrapper = (0, _testUtils.mount)( /*#__PURE__*/React.createElement(_TextField2["default"], {
      name: "field",
      value: testState.field,
      onChange: onChangeSpy
    }));

    var getInput = function getInput() {
      return wrapper.find('input');
    };

    expect(onChangeSpy).not.toHaveBeenCalled();
    expect(testState.field).toBe('one');
    expect(getInput().instance().value).toBe('one');
    (0, _testUtils.act)(function () {
      getInput().props().onChange({
        target: {
          name: 'field',
          value: 'two'
        }
      });
    });
    expect(onChangeSpy).toHaveBeenCalled();
    expect(testState.field).toBe('two');
    expect(getInput().instance().value).toBe('two');
  });
});