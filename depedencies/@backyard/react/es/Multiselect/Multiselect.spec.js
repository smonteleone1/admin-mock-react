var _Multiselect, _Multiselect2, _Multiselect3;

import * as React from 'react';
import { render, act } from '../../test-utils';
import { ThemeProvider } from '../ThemeProvider';
import Option from '../Select/Option';
import OptionGroup from '../Select/OptionGroup';
import Multiselect from './Multiselect';
describe('Multiselect Snapshots', () => {
  test('render on desktop', async () => {
    let wrapper;
    await act(async () => {
      wrapper = render( /*#__PURE__*/React.createElement(ThemeProvider, {
        override: {
          isMobile: false,
          isDesktop: true
        }
      }, /*#__PURE__*/React.createElement(Multiselect, {
        open: true,
        "data-testid": "dropdown",
        options: [{
          label: 'Option 1',
          value: '1'
        }, {
          label: 'Option 2',
          value: '2'
        }, {
          label: 'Option 3',
          value: '3'
        }, {
          label: 'Option 4',
          value: '4'
        }]
      })));
    });
    const {
      asFragment
    } = wrapper;
    expect(asFragment()).toMatchSnapshot();
  });
  test('render on mobile', async () => {
    let wrapper;
    await act(async () => {
      wrapper = render( /*#__PURE__*/React.createElement(ThemeProvider, {
        override: {
          isMobile: true,
          isDesktop: false
        }
      }, /*#__PURE__*/React.createElement(Multiselect, {
        open: true,
        "data-testid": "dropdown",
        options: [{
          label: 'Option 1',
          value: '1'
        }, {
          label: 'Option 2',
          value: '2'
        }, {
          label: 'Option 3',
          value: '3'
        }, {
          label: 'Option 4',
          value: '4'
        }]
      })));
    });
    const {
      asFragment
    } = wrapper;
    expect(asFragment()).toMatchSnapshot();
  });
  test('render no options', async () => {
    let wrapper;
    await act(async () => {
      wrapper = render( /*#__PURE__*/React.createElement(ThemeProvider, {
        override: {
          isMobile: true,
          isDesktop: false
        }
      }, _Multiselect || (_Multiselect = /*#__PURE__*/React.createElement(Multiselect, {
        "data-testid": "dropdown"
      }))));
    });
    const {
      asFragment
    } = wrapper;
    expect(asFragment()).toMatchSnapshot();
  });
  test('render children', async () => {
    let wrapper;
    await act(async () => {
      wrapper = render( /*#__PURE__*/React.createElement(ThemeProvider, {
        override: {
          isMobile: true,
          isDesktop: false
        }
      }, _Multiselect2 || (_Multiselect2 = /*#__PURE__*/React.createElement(Multiselect, {
        "data-testid": "dropdown"
      }, /*#__PURE__*/React.createElement(Option, {
        value: "1"
      }, "Option 1"), /*#__PURE__*/React.createElement(Option, {
        value: "2"
      }, "Option 2"), /*#__PURE__*/React.createElement(Option, {
        value: "3"
      }, "Option 3"), /*#__PURE__*/React.createElement(Option, {
        value: "4"
      }, "Option 4")))));
    });
    const {
      asFragment
    } = wrapper;
    expect(asFragment()).toMatchSnapshot();
  });
  test('render option group children', async () => {
    let wrapper;
    await act(async () => {
      wrapper = render( /*#__PURE__*/React.createElement(ThemeProvider, {
        override: {
          isMobile: true,
          isDesktop: false
        }
      }, _Multiselect3 || (_Multiselect3 = /*#__PURE__*/React.createElement(Multiselect, {
        "data-testid": "dropdown"
      }, /*#__PURE__*/React.createElement(Option, {
        value: "1"
      }, "Option 1"), /*#__PURE__*/React.createElement(Option, {
        value: "2"
      }, "Option 2"), /*#__PURE__*/React.createElement(OptionGroup, {
        label: "List Group 1"
      }, /*#__PURE__*/React.createElement(Option, {
        value: "3"
      }, "List Option 3"), /*#__PURE__*/React.createElement(Option, {
        value: "4"
      }, "List Option 4"))))));
    });
    const {
      asFragment
    } = wrapper;
    expect(asFragment()).toMatchSnapshot();
  });
  test('render option group options', async () => {
    let wrapper;
    await act(async () => {
      wrapper = render( /*#__PURE__*/React.createElement(ThemeProvider, {
        override: {
          isMobile: false,
          isDesktop: true
        }
      }, /*#__PURE__*/React.createElement(Multiselect, {
        open: true,
        "data-testid": "dropdown",
        options: [{
          label: 'Option 1',
          value: '1'
        }, {
          label: 'Option 2',
          value: '2'
        }, {
          label: 'List Group 1',
          options: [{
            label: 'List Option 3',
            value: '3'
          }, {
            label: 'List Option 4',
            value: '4'
          }]
        }]
      })));
    });
    const {
      asFragment
    } = wrapper;
    expect(asFragment()).toMatchSnapshot();
  });
});