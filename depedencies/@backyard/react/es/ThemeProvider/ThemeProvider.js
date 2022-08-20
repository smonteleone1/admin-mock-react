import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["children", "theme", "override"];
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
const themes = {
  light,
  dark
};
/**
 * ThemeContext same as 'styled-components'
 */

const ThemeContext = StyledComponentsThemeContext;
/**
 * ThemeConsumer same as 'styled-components'
 */

const ThemeConsumer = StyledComponentsThemeConsumer;
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

const ThemeProvider = _ref => {
  let {
    children,
    theme: themeProp = 'light',
    override = {}
  } = _ref,
      context = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Save state of current theme and allow theme to be changed
  const [curTheme, setTheme] = React.useState(themeProp); // Save state of overrides and allow overrides to be changed

  const [curOverride, setOverride] = React.useState(override); // Save state of context and allow context to be changed
  // eslint-disable-next-line @typescript-eslint/no-use-before-define

  const [curContext, setContextState] = React.useState(getContext(context)); // Side effects to change theme

  React.useEffect(() => setTheme(themeProp), [themeProp]); // Get current theme

  const theme = themes[curTheme]; // Default Breakpoint Schema

  const breakpoints = {
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

  const mediaQueries = {
    // Device Queries
    isMobile: useMediaQuery(`only screen and (max-width: ${breakpoints.md_min})`),
    isTablet: useMediaQuery(`only screen and 
                 (min-width: ${breakpoints.md_min}) and 
                 (max-width: ${breakpoints.lg_max})`),
    isDesktop: useMediaQuery(`only screen and (min-width: ${breakpoints.xl_min})`),
    // Breakpoint Queries
    isXS: useMediaQuery(`only screen and 
                 (min-width: ${breakpoints.xs_min}) and 
                 (max-width: ${breakpoints.xs_max})`),
    isSM: useMediaQuery(`only screen and 
                 (min-width: ${breakpoints.sm_min}) and 
                 (max-width: ${breakpoints.sm_max})`),
    isMD: useMediaQuery(`only screen and 
                 (min-width: ${breakpoints.md_min}) and 
                 (max-width: ${breakpoints.md_max})`),
    isLG: useMediaQuery(`only screen and 
                 (min-width: ${breakpoints.lg_min}) and 
                 (max-width: ${breakpoints.lg_max})`),
    isXL: useMediaQuery(`only screen and 
                 (min-width: ${breakpoints.xl_min}) and 
                 (max-width: ${breakpoints.xl_max})`),
    isXXL: useMediaQuery(`only screen and 
                 (min-width: ${breakpoints.xxl_min})`)
  };
  /**
   * Merges `newContext` with `curContext` to allow for new context to be added
   *
   * @param {object<string, string>} newContext - New Context to be added
   */

  function getContext(newContext, oldContext = {}) {
    const {
      font = 'fellix',
      heading,
      paragraph,
      article,
      caption,
      link,
      canvas = 'surface_default',
      shape = 'rounded',
      typography = {
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
      }
    } = newContext;
    return _extends({}, oldContext, {
      font,
      heading: heading || font,
      paragraph: paragraph || font,
      article: article || font,
      caption: caption || font,
      link: link || font,
      canvas,
      shape,
      typography
    }, newContext);
  }
  /**
   * Wrap `setContext` to modify `newContext` before it is set into `curContext`
   *
   * @param {object<string, string>} newContext
   */


  function setContext(newContext) {
    setContextState(oldContext => getContext(newContext, oldContext));
  } // Set backyard theme


  const backyardTheme = _extends({}, theme, {
    context: curContext,
    breakpoints
  }, mediaQueries, {
    setTheme,
    setOverride,
    setContext
  }, curOverride);

  return /*#__PURE__*/React.createElement(StyledComponentsThemeProvider, {
    theme: backyardTheme
  }, children);
};

ThemeProvider.bdsName = 'ThemeProvider';
export { ThemeProvider, ThemeContext, ThemeConsumer };
export default ThemeProvider;