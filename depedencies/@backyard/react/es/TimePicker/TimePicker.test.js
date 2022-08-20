var _TimePicker, _TimePicker2, _TimePicker3, _TimePicker4;

import * as React from 'react';
import { Simulate, render, fireEvent, act } from '../../test-utils';
import { ThemeProvider } from '../ThemeProvider';
import TimePicker from './TimePicker';
describe('TimePicker Tests', () => {
  it('renders', () => {
    const {
      getByLabelText
    } = render(_TimePicker || (_TimePicker = /*#__PURE__*/React.createElement(TimePicker, {
      label: "Time"
    })));
    const picker = getByLabelText('Time');
    expect(picker).toBeInTheDocument();
  });
  describe('prop: times', () => {
    describe('without', () => {
      it('renders a text input as the native picker', () => {
        const {
          getByLabelText
        } = render(_TimePicker2 || (_TimePicker2 = /*#__PURE__*/React.createElement(TimePicker, {
          label: "Time"
        })));
        const picker = getByLabelText('Time');
        expect(picker.tagName).toBe('INPUT');
      });
      describe('prop: onChange', () => {
        it('doesnt trigger `onChange` when not defined', () => {
          const onChangeSpy = jest.fn(event => event.defaultPrevented);
          const {
            getByLabelText
          } = render(_TimePicker3 || (_TimePicker3 = /*#__PURE__*/React.createElement(TimePicker, {
            label: "Time"
          })));
          const picker = getByLabelText('Time');
          fireEvent.change(picker, {
            target: {
              value: '8:00'
            }
          });
          expect(onChangeSpy).not.toHaveBeenCalled();
        });
        it('triggers `onChange` when value change event occurs', () => {
          const onChangeSpy = jest.fn();
          const {
            container
          } = render( /*#__PURE__*/React.createElement(TimePicker, {
            label: "Time",
            onChange: onChangeSpy,
            times: [{
              label: 'Morning 8:00 AM',
              value: '8:00'
            }, {
              label: 'Morning 9:15 AM',
              value: '9:15'
            }, {
              label: 'Morning 9:45 AM',
              value: '9:45',
              disabled: true
            }, {
              label: 'Morning 10:15 AM',
              value: '10:15'
            }, {
              label: 'Morning 11:15 AM',
              value: '11:15'
            }, {
              label: 'Noon 12:00 PM',
              value: '12:00'
            }]
          }));
          const picker = container.querySelector('select');
          expect(onChangeSpy).not.toHaveBeenCalled();
          fireEvent.change(picker, {
            target: {
              value: '08:00'
            }
          });
          expect(onChangeSpy).toHaveBeenCalled();
        });
        it('doesn\'t trigger `onChange` when invalid value change event occurs', () => {
          const onChangeSpy = jest.fn();
          const {
            getByLabelText
          } = render( /*#__PURE__*/React.createElement(TimePicker, {
            label: "Time",
            onChange: onChangeSpy
          }));
          const picker = getByLabelText('Time');
          expect(onChangeSpy).not.toHaveBeenCalled();
          Simulate.change(picker, {
            target: {
              value: '24:00 AM'
            } // EventTarget (test)

          });
          expect(onChangeSpy).not.toHaveBeenCalled();
        });
      });
    });
    describe('with', () => {
      it('renders a select as the native picker', () => {
        const {
          getByLabelText
        } = render( /*#__PURE__*/React.createElement(TimePicker, {
          label: "Time",
          times: ['8:00', '9:00', '12:00', '14:00', '15:00']
        }));
        const picker = getByLabelText('Time');
        expect(picker.tagName).toBe('SELECT');
      });
      it('parses times as string', () => {
        const {
          getByLabelText
        } = render( /*#__PURE__*/React.createElement(TimePicker, {
          label: "Time",
          time: "9:00",
          times: ['8:00', '9:00', '12:00', '14:00', '15:00']
        }));
        const picker = getByLabelText('Time');
        expect(picker).toBeInTheDocument();
      });
      it('parses times as an object', () => {
        const {
          getByLabelText
        } = render( /*#__PURE__*/React.createElement(TimePicker, {
          label: "Time",
          time: "9:15",
          times: [{
            label: 'Morning 8:00 AM',
            value: '8:00'
          }, {
            label: 'Morning 9:15 AM',
            value: '9:15'
          }, {
            label: 'Morning 9:45 AM',
            value: '9:45',
            disabled: true
          }, {
            label: 'Morning 10:15 AM',
            value: '10:15'
          }, {
            label: 'Morning 11:15 AM',
            value: '11:15'
          }, {
            label: 'Noon 12:00 PM',
            value: '12:00'
          }]
        }));
        const picker = getByLabelText('Time');
        expect(picker).toBeInTheDocument();
      });
      it('parses times as a range object', () => {
        const {
          getByLabelText,
          container
        } = render( /*#__PURE__*/React.createElement(TimePicker, {
          label: "Time",
          time: JSON.stringify(['10:15', '12:00']),
          times: [{
            label: 'Morning 8:00 AM - 9:45 AM',
            start: '8:00',
            end: '9:45'
          }, {
            label: 'Morning 10:15 AM - 12:00 PM',
            start: '10:15',
            end: '12:00'
          }, {
            label: 'Afternoon 1:15 PM - 2:30 PM',
            start: '13:15',
            end: '14:30',
            disabled: true
          }]
        }));
        const picker = getByLabelText('Time');
        const options = container.querySelectorAll('option');
        expect(picker.value).toBe(JSON.stringify(['10:15', '12:00']));
        Simulate.change(picker, {
          target: {
            value: options[1].value
          } // EventTarget (test)

        });
        expect(picker.value).toBe(JSON.stringify(['08:00', '09:45']));
      });
      it('checks for list picker onChange', async () => {
        let wrapper;
        await act(async () => {
          wrapper = render( /*#__PURE__*/React.createElement(ThemeProvider, {
            override: {
              isMobile: false,
              isDesktop: true
            }
          }, /*#__PURE__*/React.createElement(TimePicker, {
            label: "Time",
            time: "09:15",
            times: [{
              label: 'Morning 8:00 AM',
              value: '8:00'
            }, {
              label: 'Morning 9:15 AM',
              value: '9:15'
            }, {
              label: 'Morning 9:45 AM',
              value: '9:45',
              disabled: true
            }, {
              label: 'Morning 10:15 AM',
              value: '10:15'
            }, {
              label: 'Morning 11:15 AM',
              value: '11:15'
            }, {
              label: 'Noon 12:00 PM',
              value: '12:00'
            }],
            render: "custom"
          })));
        });
        const {
          getByLabelText,
          container
        } = wrapper;
        const picker = getByLabelText('Time');
        const options = container.querySelectorAll('button');
        expect(picker.value).toBe('09:15');
        await act(async () => {
          picker.focus();
          options[1].click();
        });
        expect(picker.value).toBe('08:00');
      });
      it('updates value and triggers onChange when list picker is selected', async () => {
        const onChangeSpy = jest.fn();
        let wrapper;
        await act(async () => {
          wrapper = render( /*#__PURE__*/React.createElement(ThemeProvider, {
            override: {
              isMobile: false,
              isDesktop: true
            }
          }, /*#__PURE__*/React.createElement(TimePicker, {
            label: "Time",
            onChange: onChangeSpy,
            time: "09:15",
            times: [{
              label: 'Morning 8:00 AM',
              value: '8:00'
            }, {
              label: 'Morning 9:15 AM',
              value: '9:15'
            }, {
              label: 'Morning 9:45 AM',
              value: '9:45',
              disabled: true
            }, {
              label: 'Morning 10:15 AM',
              value: '10:15'
            }, {
              label: 'Morning 11:15 AM',
              value: '11:15'
            }, {
              label: 'Noon 12:00 PM',
              value: '12:00'
            }],
            render: "custom"
          })));
        });
        const {
          getByLabelText,
          container
        } = wrapper;
        const picker = getByLabelText('Time');
        const options = container.querySelectorAll('button'); // expect(onChangeSpy).not.toHaveBeenCalled()

        expect(picker.value).toBe('09:15');
        await act(async () => {
          picker.focus();
          options[1].click();
        });
        expect(onChangeSpy).toHaveBeenCalled();
        expect(picker.value).toBe('08:00');
      });
    });
  });
  describe('prop: onFocus', () => {
    it('shows list picker popover', () => {
      const onFocusSpy = jest.fn();
      const {
        getByLabelText
      } = render( /*#__PURE__*/React.createElement(TimePicker, {
        onFocus: onFocusSpy,
        label: "Time"
      }));
      const picker = getByLabelText('Time');
      expect(onFocusSpy).not.toHaveBeenCalled();
      fireEvent.focus(picker);
      expect(onFocusSpy).toHaveBeenCalled();
    });
  });
  describe('prop: onBlur', () => {
    it('hides list picker popover', () => {
      const onBlurSpy = jest.fn();
      const {
        getByLabelText
      } = render( /*#__PURE__*/React.createElement(TimePicker, {
        onBlur: onBlurSpy,
        label: "Time"
      }));
      const picker = getByLabelText('Time');
      fireEvent.focus(picker);
      expect(onBlurSpy).not.toHaveBeenCalled();
      fireEvent.blur(picker);
      expect(onBlurSpy).toHaveBeenCalled();
    });
  });
  describe('prop: onClick', () => {
    it('does not render list without times', () => {
      const onClickSpy = jest.fn();
      const {
        getByLabelText
      } = render( /*#__PURE__*/React.createElement(ThemeProvider, {
        override: {
          isMobile: false,
          isDesktop: true
        }
      }, /*#__PURE__*/React.createElement(TimePicker, {
        onClick: onClickSpy,
        label: "Time"
      })));
      const picker = getByLabelText('Time');
      const list = picker.parentNode.parentNode.nextSibling;
      expect(onClickSpy).not.toHaveBeenCalled();
      expect(list).not.toBeInTheDocument();
    });
    it('shows list picker popover', async () => {
      const onClickSpy = jest.fn();
      let wrapper;
      await act(async () => {
        wrapper = render( /*#__PURE__*/React.createElement(ThemeProvider, {
          override: {
            isMobile: false,
            isDesktop: true
          }
        }, /*#__PURE__*/React.createElement(TimePicker, {
          delayOpen: 0,
          onClick: onClickSpy,
          label: "Time",
          times: [{
            label: 'Morning 8:00 AM',
            value: '8:00'
          }, {
            label: 'Morning 9:15 AM',
            value: '9:15'
          }, {
            label: 'Morning 9:45 AM',
            value: '9:45',
            disabled: true
          }, {
            label: 'Morning 10:15 AM',
            value: '10:15'
          }, {
            label: 'Morning 11:15 AM',
            value: '11:15'
          }, {
            label: 'Noon 12:00 PM',
            value: '12:00'
          }]
        })));
      });
      const {
        getByLabelText
      } = wrapper;
      const picker = getByLabelText('Time'); // const list = picker.parentNode.parentNode.parentNode.nextSibling

      expect(onClickSpy).not.toHaveBeenCalled(); // expect(list).not.toBeVisible()

      await act(async () => {
        picker.click();
        picker.focus();
      });
      expect(onClickSpy).toHaveBeenCalled(); // expect(list).toBeVisible()
    });
    it('hides list picker popover when user clicks away', async () => {
      const onClickSpy = jest.fn();
      let wrapper;
      await act(async () => {
        wrapper = render( /*#__PURE__*/React.createElement(ThemeProvider, {
          override: {
            isMobile: false,
            isDesktop: true
          }
        }, /*#__PURE__*/React.createElement(TimePicker, {
          delayOpen: 0,
          onClick: onClickSpy,
          label: "Time",
          times: [{
            label: 'Morning 8:00 AM',
            value: '8:00'
          }, {
            label: 'Morning 9:15 AM',
            value: '9:15'
          }, {
            label: 'Morning 9:45 AM',
            value: '9:45',
            disabled: true
          }, {
            label: 'Morning 10:15 AM',
            value: '10:15'
          }, {
            label: 'Morning 11:15 AM',
            value: '11:15'
          }, {
            label: 'Noon 12:00 PM',
            value: '12:00'
          }]
        })));
      });
      const {
        getByLabelText,
        container
      } = wrapper;
      const picker = getByLabelText('Time'); // const list = picker.parentNode.parentNode.parentNode.nextSibling

      expect(onClickSpy).not.toHaveBeenCalled(); // expect(list).not.toBeVisible()

      await act(async () => {
        picker.click();
        picker.focus();
      });
      expect(onClickSpy).toHaveBeenCalled(); // expect(list).toBeVisible()

      await act(async () => {
        container.click();
      }); // expect(list).not.toBeVisible()
    });
  });
  describe('props: onOpen/onClose', () => {
    it('triggers onOpen/onClose when popover opens/closes', async () => {
      const onOpenSpy = jest.fn();
      const onCloseSpy = jest.fn();
      let wrapper;
      await act(async () => {
        wrapper = render( /*#__PURE__*/React.createElement(ThemeProvider, {
          override: {
            isMobile: false,
            isDesktop: true
          }
        }, /*#__PURE__*/React.createElement(TimePicker, {
          onOpen: onOpenSpy,
          onClose: onCloseSpy,
          label: "Time",
          times: [{
            label: 'Morning 8:00 AM',
            value: '8:00'
          }, {
            label: 'Morning 9:15 AM',
            value: '9:15'
          }, {
            label: 'Morning 9:45 AM',
            value: '9:45',
            disabled: true
          }, {
            label: 'Morning 10:15 AM',
            value: '10:15'
          }, {
            label: 'Morning 11:15 AM',
            value: '11:15'
          }, {
            label: 'Noon 12:00 PM',
            value: '12:00'
          }]
        })));
      });
      const {
        getByLabelText,
        container
      } = wrapper;
      const picker = getByLabelText('Time');
      expect(onOpenSpy).toHaveBeenCalledTimes(0);
      expect(onCloseSpy).toHaveBeenCalledTimes(0);
      await act(async () => {
        picker.click();
      });
      expect(onOpenSpy).toHaveBeenCalledTimes(1);
      expect(onCloseSpy).toHaveBeenCalledTimes(0);
      await act(async () => {
        container.click();
      });
      expect(onOpenSpy).toHaveBeenCalledTimes(1);
      expect(onCloseSpy).toHaveBeenCalledTimes(1);
    });
  });
  it('open options on key down', async () => {
    let wrapper;
    const onKeyDownSpy = jest.fn(event => event.persist());
    await act(async () => {
      wrapper = render( /*#__PURE__*/React.createElement(ThemeProvider, {
        override: {
          isMobile: false,
          isDesktop: true
        }
      }, /*#__PURE__*/React.createElement(TimePicker, {
        onKeyDown: onKeyDownSpy,
        label: "Time",
        className: "main",
        times: [{
          label: 'Morning 8:00 AM',
          value: '8:00'
        }, {
          label: 'Morning 9:15 AM',
          value: '9:15'
        }, {
          label: 'Morning 9:45 AM',
          value: '9:45',
          disabled: true
        }, {
          label: 'Morning 10:15 AM',
          value: '10:15'
        }, {
          label: 'Morning 11:15 AM',
          value: '11:15'
        }, {
          label: 'Noon 12:00 PM',
          value: '12:00'
        }]
      })));
    });
    const {
      container
    } = wrapper;
    const input = container.querySelector('.main');
    expect(onKeyDownSpy).not.toHaveBeenCalled();
    await act(async () => {
      fireEvent.keyDown(input, {
        key: 'ArrowDown'
      });
    });
    expect(onKeyDownSpy).toHaveBeenCalledTimes(1);
  });
  it('focus in and focus out', async () => {
    let wrapper;
    const onFocusSpy = jest.fn(event => event.persist());
    await act(async () => {
      wrapper = render( /*#__PURE__*/React.createElement(ThemeProvider, {
        override: {
          isMobile: false,
          isDesktop: true
        }
      }, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TimePicker, {
        onFocus: onFocusSpy,
        className: "main",
        delayClose: 0,
        delayOpen: 0,
        label: "Time",
        times: [{
          label: 'Morning 8:00 AM',
          value: '8:00'
        }, {
          label: 'Morning 9:15 AM',
          value: '9:15'
        }, {
          label: 'Morning 9:45 AM',
          value: '9:45',
          disabled: true
        }, {
          label: 'Morning 10:15 AM',
          value: '10:15'
        }, {
          label: 'Morning 11:15 AM',
          value: '11:15'
        }, {
          label: 'Noon 12:00 PM',
          value: '12:00'
        }]
      }), _TimePicker4 || (_TimePicker4 = /*#__PURE__*/React.createElement(TimePicker, {
        className: "other"
      })))));
    });
    const {
      container
    } = wrapper;
    const input = container.querySelector('.main');
    const other = container.querySelector('.other');
    expect(onFocusSpy).not.toHaveBeenCalled();
    await act(async () => {
      fireEvent.click(input);
    });
    expect(onFocusSpy).toHaveBeenCalledTimes(0);
    await act(async () => {
      fireEvent.focusOut(input, {
        relatedTarget: other
      });
    });
    expect(onFocusSpy).toHaveBeenCalledTimes(0);
  });
});