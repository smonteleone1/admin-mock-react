import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "theme", "override"];
import * as React from 'react';
import { ThemeProvider as StyledComponentsThemeProvider, ThemeContext as StyledComponentsThemeContext, ThemeConsumer as StyledComponentsThemeConsumer } from 'styled-components';
import light from '@backyard/design-tokens/v3/light/_theme';
import dark from '@backyard/design-tokens/v3/dark/_theme';
import useMediaQuery from '../utils/hooks/useMediaQuery';

/**
 * Combine themes into centralized object for easy access
 *
 * @todo contrast needs to be set here when tokens are created - currently defaults to light theme
 */
var themes = {
  light: light,
  dark: dark
};
/**
 * ThemeContext same as 'styled-components'
 */

var ThemeContext = StyledComponentsThemeContext;
/**
 * ThemeConsumer same as 'styled-components'
 */

var ThemeConsumer = StyledComponentsThemeConsumer;
/**
 * Backyard React Theme Provider
 *
 *  <ThemeProvider theme="light" font="fellix" someOtherContext="value">
 *      <Grid.Container>
 *          ...
 *              <Button />
 *          ...
 *      </Grid.Container>
 *  </ThemeProvider>
 *
 * Custom Theme Provider wrapper to provide extra context and overrides for Backyard Themes.
 */

var ThemeProvider = function ThemeProvider(_ref) {
  var children = _ref.children,
      _ref$theme = _ref.theme,
      themeProp = _ref$theme === void 0 ? 'light' : _ref$theme,
      _ref$override = _ref.override,
      override = _ref$override === void 0 ? {} : _ref$override,
      context = _objectWithoutProperties(_ref, _excluded);

  // Save state of current theme and allow theme to be changed
  var _React$useState = React.useState(themeProp),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      curTheme = _React$useState2[0],
      setTheme = _React$useState2[1]; // Save state of overrides and allow overrides to be changed


  var _React$useState3 = React.useState(override),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      curOverride = _React$useState4[0],
      setOverride = _React$useState4[1]; // Save state of context and allow context to be changed
  // eslint-disable-next-line @typescript-eslint/no-use-before-define


  var _React$useState5 = React.useState(getContext(context)),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      curContext = _React$useState6[0],
      setContextState = _React$useState6[1]; // Side effects to change theme


  React.useEffect(function () {
    return setTheme(themeProp);
  }, [themeProp]); // Get current theme

  var theme = themes[curTheme]; // Default Breakpoint Schema

  var breakpoints = {
    // Extra Small
    xs: theme.grid.breakpoint.xs.max,
    xs_min: theme.grid.breakpoint.xs.min,
    xs_max: theme.grid.breakpoint.xs.max,
    // Small
    sm: theme.grid.breakpoint.sm.max,
    sm_min: theme.grid.breakpoint.sm.min,
    sm_max: theme.grid.breakpoint.sm.max,
    // Medium
    md: theme.grid.breakpoint.md.max,
    md_min: theme.grid.breakpoint.md.min,
    md_max: theme.grid.breakpoint.md.max,
    // Large
    lg: theme.grid.breakpoint.lg.max,
    lg_min: theme.grid.breakpoint.lg.min,
    lg_max: theme.grid.breakpoint.lg.max,
    // Extra Large
    xl: theme.grid.breakpoint.xl.max,
    xl_min: theme.grid.breakpoint.xl.min,
    xl_max: theme.grid.breakpoint.xl.max,
    // Extra-Extra Large
    xxl: theme.grid.breakpoint.xxl.max,
    xxl_min: theme.grid.breakpoint.xxl.min,
    xxl_max: theme.grid.breakpoint.xxl.max
  }; // Media Query Flags

  var mediaQueries = {
    // Device Queries
    isMobile: useMediaQuery("only screen and (max-width: ".concat(breakpoints.md_min, ")")),
    isTablet: useMediaQuery("only screen and \n                 (min-width: ".concat(breakpoints.md_min, ") and \n                 (max-width: ").concat(breakpoints.lg_max, ")")),
    isDesktop: useMediaQuery("only screen and (min-width: ".concat(breakpoints.xl_min, ")")),
    // Breakpoint Queries
    isXS: useMediaQuery("only screen and \n                 (min-width: ".concat(breakpoints.xs_min, ") and \n                 (max-width: ").concat(breakpoints.xs_max, ")")),
    isSM: useMediaQuery("only screen and \n                 (min-width: ".concat(breakpoints.sm_min, ") and \n                 (max-width: ").concat(breakpoints.sm_max, ")")),
    isMD: useMediaQuery("only screen and \n                 (min-width: ".concat(breakpoints.md_min, ") and \n                 (max-width: ").concat(breakpoints.md_max, ")")),
    isLG: useMediaQuery("only screen and \n                 (min-width: ".concat(breakpoints.lg_min, ") and \n                 (max-width: ").concat(breakpoints.lg_max, ")")),
    isXL: useMediaQuery("only screen and \n                 (min-width: ".concat(breakpoints.xl_min, ") and \n                 (max-width: ").concat(breakpoints.xl_max, ")")),
    isXXL: useMediaQuery("only screen and \n                 (min-width: ".concat(breakpoints.xxl_min, ")"))
  };
  /**
   * Merges `newContext` with `curContext` to allow for new context to be added
   *
   * @param {object<string, string>} newContext - New Context to be added
   */

  function getContext(newContext) {
    var oldContext = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _newContext$font = newContext.font,
        font = _newContext$font === void 0 ? 'fellix' : _newContext$font,
        heading = newContext.heading,
        paragraph = newContext.paragraph,
        article = newContext.article,
        caption = newContext.caption,
        link = newContext.link,
        _newContext$canvas = newContext.canvas,
        canvas = _newContext$canvas === void 0 ? 'surface_default' : _newContext$canvas,
        _newContext$shape = newContext.shape,
        shape = _newContext$shape === void 0 ? 'rounded' : _newContext$shape,
        _newContext$typograph = newContext.typography,
        typography = _newContext$typograph === void 0 ? {
      h1: {
        desktop: {
          font_size: light.font.tag.h1.desktop.font_size,
          line_height: light.font.tag.h1.desktop.line_height
        },
        mobile: {
          font_size: light.font.tag.h1.mobile.font_size,
          line_height: light.font.tag.h1.mobile.line_height
        }
      },
      h2: {
        desktop: {
          font_size: light.font.tag.h2.desktop.font_size,
          line_height: light.font.tag.h2.desktop.line_height
        },
        mobile: {
          font_size: light.font.tag.h2.mobile.font_size,
          line_height: light.font.tag.h2.mobile.line_height
        }
      },
      h3: {
        desktop: {
          font_size: light.font.tag.h3.desktop.font_size,
          line_height: light.font.tag.h3.desktop.line_height
        },
        mobile: {
          font_size: light.font.tag.h3.mobile.font_size,
          line_height: light.font.tag.h3.mobile.line_height
        }
      },
      h4: {
        desktop: {
          font_size: light.font.tag.h4.desktop.font_size,
          line_height: light.font.tag.h4.desktop.line_height
        },
        mobile: {
          font_size: light.font.tag.h4.mobile.font_size,
          line_height: light.font.tag.h4.mobile.line_height
        }
      },
      h5: {
        desktop: {
          font_size: light.font.tag.h5.desktop.font_size,
          line_height: light.font.tag.h5.desktop.line_height
        },
        mobile: {
          font_size: light.font.tag.h5.mobile.font_size,
          line_height: light.font.tag.h5.mobile.line_height
        }
      },
      h6: {
        desktop: {
          font_size: light.font.tag.h6.desktop.font_size,
          line_height: light.font.tag.h6.desktop.line_height
        },
        mobile: {
          font_size: light.font.tag.h6.mobile.font_size,
          line_height: light.font.tag.h6.mobile.line_height
        }
      },
      body_1: {
        desktop: {
          font_size: light.font.tag.body_1.desktop.font_size,
          line_height: light.font.tag.body_1.desktop.line_height
        },
        mobile: {
          font_size: light.font.tag.body_1.mobile.font_size,
          line_height: light.font.tag.body_1.mobile.line_height
        }
      },
      body_2: {
        desktop: {
          font_size: light.font.tag.body_2.desktop.font_size,
          line_height: light.font.tag.body_2.desktop.line_height
        },
        mobile: {
          font_size: light.font.tag.body_2.mobile.font_size,
          line_height: light.font.tag.body_2.mobile.line_height
        }
      },
      article: {
        desktop: {
          font_size: light.font.tag.article.desktop.font_size,
          line_height: light.font.tag.article.desktop.line_height
        },
        mobile: {
          font_size: light.font.tag.article.mobile.font_size,
          line_height: light.font.tag.article.mobile.line_height
        }
      },
      caption: {
        desktop: {
          font_size: light.font.tag.caption.desktop.font_size,
          line_height: light.font.tag.caption.desktop.line_height
        },
        mobile: {
          font_size: light.font.tag.caption.mobile.font_size,
          line_height: light.font.tag.caption.mobile.line_height
        }
      },
      footnote: {
        desktop: {
          font_size: light.font.tag.footnote.desktop.font_size,
          line_height: light.font.tag.footnote.desktop.line_height
        },
        mobile: {
          font_size: light.font.tag.footnote.mobile.font_size,
          line_height: light.font.tag.footnote.mobile.line_height
        }
      },
      label: {
        desktop: {
          font_size: light.font.tag.label.desktop.font_size,
          line_height: light.font.tag.label.desktop.line_height
        },
        mobile: {
          font_size: light.font.tag.label.mobile.font_size,
          line_height: light.font.tag.label.mobile.line_height
        }
      },
      overline: {
        desktop: {
          font_size: light.font.tag.overline.desktop.font_size,
          line_height: light.font.tag.overline.desktop.line_height
        },
        mobile: {
          font_size: light.font.tag.overline.mobile.font_size,
          line_height: light.font.tag.overline.mobile.line_height
        }
      },
      helper_text: {
        desktop: {
          font_size: light.font.tag.helper_text.desktop.font_size,
          line_height: light.font.tag.helper_text.desktop.line_height
        },
        mobile: {
          font_size: light.font.tag.helper_text.mobile.font_size,
          line_height: light.font.tag.helper_text.mobile.line_height
        }
      }
    } : _newContext$typograph;
    return _extends({}, oldContext, {
      font: font,
      heading: heading || font,
      paragraph: paragraph || font,
      article: article || font,
      caption: caption || font,
      link: link || font,
      canvas: canvas,
      shape: shape,
      typography: typography
    }, newContext);
  }
  /**
   * Wrap `setContext` to modify `newContext` before it is set into `curContext`
   *
   * @param {object<string, string>} newContext
   */


  function setContext(newContext) {
    setContextState(function (oldContext) {
      return getContext(newContext, oldContext);
    });
  } // Set backyard theme


  var backyardTheme = _extends({}, theme, {
    context: curContext,
    breakpoints: breakpoints
  }, mediaQueries, {
    setTheme: setTheme,
    setOverride: setOverride,
    setContext: setContext
  }, curOverride);

  return /*#__PURE__*/React.createElement(StyledComponentsThemeProvider, {
    theme: backyardTheme
  }, children);
};

ThemeProvider.bdsName = 'ThemeProvider';
export { ThemeProvider, ThemeContext, ThemeConsumer };
export default ThemeProvider;