var _DatePicker, _FormControl, _DatePicker2;

import * as React from 'react';
import { render, act } from '../../test-utils';
import { ThemeProvider } from '../ThemeProvider';
import FormControl from '../FormControl';
import FormHelperText from '../FormHelperText';
import DatePicker from './DatePicker';
describe('DatePicker Snapshots', () => {
  test('default snapshot', () => {
    const {
      asFragment
    } = render(_DatePicker || (_DatePicker = /*#__PURE__*/React.createElement(DatePicker, null)));
    expect(asFragment()).toMatchSnapshot();
  });
  test('with helper text', () => {
    const {
      asFragment
    } = render(_FormControl || (_FormControl = /*#__PURE__*/React.createElement(FormControl, null, /*#__PURE__*/React.createElement(DatePicker, null), /*#__PURE__*/React.createElement(FormHelperText, null, "Text Input Helper"))));
    expect(asFragment()).toMatchSnapshot();
  });
  describe('themes', () => {
    const themes = ['light', 'dark'];
    themes.forEach(theme => {
      var _ThemeProvider;

      test(`DatePicker ${theme} theme snapshot`, () => {
        const {
          asFragment
        } = render(_ThemeProvider || (_ThemeProvider = /*#__PURE__*/React.createElement(ThemeProvider, {
          theme: theme
        }, _DatePicker2 || (_DatePicker2 = /*#__PURE__*/React.createElement(DatePicker, null)))));
        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('prop: dates', () => {
    test(`DatePicker dates snapshot`, () => {
      const {
        asFragment
      } = render( /*#__PURE__*/React.createElement(DatePicker, {
        date: "2020-07-19",
        dates: [{
          label: 'Yesterday 8:00 AM',
          value: '2020-07-18'
        }, {
          label: 'Today 9:15 AM',
          value: '2020-07-19'
        }, {
          label: 'Tomorrow 9:45 AM',
          value: '2020-07-20',
          disabled: true
        }, {
          label: 'Next Day 10:15 AM',
          value: '2020-07-21'
        }]
      }));
      expect(asFragment()).toMatchSnapshot();
    });
    test(`DatePicker dates desktop snapshot`, async () => {
      let wrapper;
      await act(async () => {
        wrapper = render( /*#__PURE__*/React.createElement(ThemeProvider, {
          override: {
            isMobile: false,
            isDesktop: true
          }
        }, /*#__PURE__*/React.createElement(DatePicker, {
          date: "2020-05-19",
          minDate: "2020-05-18",
          maxDate: "2020-05-20",
          dates: [{
            label: 'Yesterday 8:00 AM',
            value: '2020-05-18'
          }, {
            label: 'Today 9:15 AM',
            value: '2020-05-19'
          }, {
            label: 'Tomorrow 9:45 AM',
            value: '2020-05-20',
            disabled: true
          }, {
            label: 'Next Day 10:15 AM',
            value: '2020-05-21'
          }]
        })));
      });
      const {
        asFragment
      } = wrapper;
      expect(asFragment()).toMatchSnapshot();
    });
    describe('render type', () => {
      const types = ['custom', 'native'];
      const viewports = ['desktop', 'mobile'];
      const overrides = {
        desktop: {
          isMobile: false,
          isDesktop: true
        },
        mobile: {
          isMobile: true,
          isDesktop: false
        }
      };
      viewports.forEach(viewport => {
        types.forEach(type => {
          var _DatePicker3;

          test(`DatePicker render=${type} viewport=${viewport} theme snapshot`, async () => {
            let wrapper;
            await act(async () => {
              wrapper = render( /*#__PURE__*/React.createElement(ThemeProvider, {
                override: overrides[viewport]
              }, _DatePicker3 || (_DatePicker3 = /*#__PURE__*/React.createElement(DatePicker, {
                render: type,
                date: "2021-01-01"
              }))));
            });
            const {
              asFragment
            } = wrapper;
            expect(asFragment()).toMatchSnapshot();
          });
        });
      });
    });
  });
});