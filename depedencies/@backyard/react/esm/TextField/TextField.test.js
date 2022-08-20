var _TextField;

import * as React from 'react';
import { render, mount, fireEvent, act } from '../../test-utils';
import TextField from './TextField';
describe('TextField Tests', function () {
  it('renders', function () {
    var _render = render(_TextField || (_TextField = /*#__PURE__*/React.createElement(TextField, {
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

    var _render2 = render( /*#__PURE__*/React.createElement(TextField, {
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
    act(function () {
      fireEvent.change(input, {
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
    var wrapper = mount( /*#__PURE__*/React.createElement(TextField, {
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
    act(function () {
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