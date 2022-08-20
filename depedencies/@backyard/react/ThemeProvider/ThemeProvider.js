"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ThemeProvider = exports.ThemeContext = exports.ThemeConsumer = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _styledComponents = require("styled-components");

var _theme = _interopRequireDefault(require("@backyard/design-tokens/v3/light/_theme"));

var _theme2 = _interopRequireDefault(require("@backyard/design-tokens/v3/dark/_theme"));

var _useMediaQuery = _interopRequireDefault(require("../utils/hooks/useMediaQuery"));

var _excluded = ["children", "theme", "override"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Combine themes into centralized object for easy access
 *
 * @todo contrast needs to be set here when tokens are created - currently defaults to light theme
 */
var themes = {
  light: _theme["default"],
  dark: _theme2["default"]
};
/**
 * ThemeContext same as 'styled-components'
 */

var ThemeContext = _styledComponents.ThemeContext;
/**
 * ThemeConsumer same as 'styled-components'
 */

exports.ThemeContext = ThemeContext;
var ThemeConsumer = _styledComponents.ThemeConsumer;
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

exports.ThemeConsumer = ThemeConsumer;

var ThemeProvider = function ThemeProvider(_ref) {
  var children = _ref.children,
      _ref$theme = _ref.theme,
      themeProp = _ref$theme === void 0 ? 'light' : _ref$theme,
      _ref$override = _ref.override,
      override = _ref$override === void 0 ? {} : _ref$override,
      context = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  // Save state of current theme and allow theme to be changed
  var _React$useState = React.useState(themeProp),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      curTheme = _React$useState2[0],
      setTheme = _React$useState2[1]; // Save state of overrides and allow overrides to be changed


  var _React$useState3 = React.useState(override),
      _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
      curOverride = _React$useState4[0],
      setOverride = _React$useState4[1]; // Save state of context and allow context to be changed
  // eslint-disable-next-line @typescript-eslint/no-use-before-define


  var _React$useState5 = React.useState(getContext(context)),
      _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
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
    isMobile: (0, _useMediaQuery["default"])("only screen and (max-width: ".concat(breakpoints.md_min, ")")),
    isTablet: (0, _useMediaQuery["default"])("only screen and \n                 (min-width: ".concat(breakpoints.md_min, ") and \n                 (max-width: ").concat(breakpoints.lg_max, ")")),
    isDesktop: (0, _useMediaQuery["default"])("only screen and (min-width: ".concat(breakpoints.xl_min, ")")),
    // Breakpoint Queries
    isXS: (0, _useMediaQuery["default"])("only screen and \n                 (min-width: ".concat(breakpoints.xs_min, ") and \n                 (max-width: ").concat(breakpoints.xs_max, ")")),
    isSM: (0, _useMediaQuery["default"])("only screen and \n                 (min-width: ".concat(breakpoints.sm_min, ") and \n                 (max-width: ").concat(breakpoints.sm_max, ")")),
    isMD: (0, _useMediaQuery["default"])("only screen and \n                 (min-width: ".concat(breakpoints.md_min, ") and \n                 (max-width: ").concat(breakpoints.md_max, ")")),
    isLG: (0, _useMediaQuery["default"])("only screen and \n                 (min-width: ".concat(breakpoints.lg_min, ") and \n                 (max-width: ").concat(breakpoints.lg_max, ")")),
    isXL: (0, _useMediaQuery["default"])("only screen and \n                 (min-width: ".concat(breakpoints.xl_min, ") and \n                 (max-width: ").concat(breakpoints.xl_max, ")")),
    isXXL: (0, _useMediaQuery["default"])("only screen and \n                 (min-width: ".concat(breakpoints.xxl_min, ")"))
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
          font_size: _theme["default"].font.tag.h1.desktop.font_size,
          line_height: _theme["default"].font.tag.h1.desktop.line_height
        },
        mobile: {
          font_size: _theme["default"].font.tag.h1.mobile.font_size,
          line_height: _theme["default"].font.tag.h1.mobile.line_height
        }
      },
      h2: {
        desktop: {
          font_size: _theme["default"].font.tag.h2.desktop.font_size,
          line_height: _theme["default"].font.tag.h2.desktop.line_height
        },
        mobile: {
          font_size: _theme["default"].font.tag.h2.mobile.font_size,
          line_height: _theme["default"].font.tag.h2.mobile.line_height
        }
      },
      h3: {
        desktop: {
          font_size: _theme["default"].font.tag.h3.desktop.font_size,
          line_height: _theme["default"].font.tag.h3.desktop.line_height
        },
        mobile: {
          font_size: _theme["default"].font.tag.h3.mobile.font_size,
          line_height: _theme["default"].font.tag.h3.mobile.line_height
        }
      },
      h4: {
        desktop: {
          font_size: _theme["default"].font.tag.h4.desktop.font_size,
          line_height: _theme["default"].font.tag.h4.desktop.line_height
        },
        mobile: {
          font_size: _theme["default"].font.tag.h4.mobile.font_size,
          line_height: _theme["default"].font.tag.h4.mobile.line_height
        }
      },
      h5: {
        desktop: {
          font_size: _theme["default"].font.tag.h5.desktop.font_size,
          line_height: _theme["default"].font.tag.h5.desktop.line_height
        },
        mobile: {
          font_size: _theme["default"].font.tag.h5.mobile.font_size,
          line_height: _theme["default"].font.tag.h5.mobile.line_height
        }
      },
      h6: {
        desktop: {
          font_size: _theme["default"].font.tag.h6.desktop.font_size,
          line_height: _theme["default"].font.tag.h6.desktop.line_height
        },
        mobile: {
          font_size: _theme["default"].font.tag.h6.mobile.font_size,
          line_height: _theme["default"].font.tag.h6.mobile.line_height
        }
      },
      body_1: {
        desktop: {
          font_size: _theme["default"].font.tag.body_1.desktop.font_size,
          line_height: _theme["default"].font.tag.body_1.desktop.line_height
        },
        mobile: {
          font_size: _theme["default"].font.tag.body_1.mobile.font_size,
          line_height: _theme["default"].font.tag.body_1.mobile.line_height
        }
      },
      body_2: {
        desktop: {
          font_size: _theme["default"].font.tag.body_2.desktop.font_size,
          line_height: _theme["default"].font.tag.body_2.desktop.line_height
        },
        mobile: {
          font_size: _theme["default"].font.tag.body_2.mobile.font_size,
          line_height: _theme["default"].font.tag.body_2.mobile.line_height
        }
      },
      article: {
        desktop: {
          font_size: _theme["default"].font.tag.article.desktop.font_size,
          line_height: _theme["default"].font.tag.article.desktop.line_height
        },
        mobile: {
          font_size: _theme["default"].font.tag.article.mobile.font_size,
          line_height: _theme["default"].font.tag.article.mobile.line_height
        }
      },
      caption: {
        desktop: {
          font_size: _theme["default"].font.tag.caption.desktop.font_size,
          line_height: _theme["default"].font.tag.caption.desktop.line_height
        },
        mobile: {
          font_size: _theme["default"].font.tag.caption.mobile.font_size,
          line_height: _theme["default"].font.tag.caption.mobile.line_height
        }
      },
      footnote: {
        desktop: {
          font_size: _theme["default"].font.tag.footnote.desktop.font_size,
          line_height: _theme["default"].font.tag.footnote.desktop.line_height
        },
        mobile: {
          font_size: _theme["default"].font.tag.footnote.mobile.font_size,
          line_height: _theme["default"].font.tag.footnote.mobile.line_height
        }
      },
      label: {
        desktop: {
          font_size: _theme["default"].font.tag.label.desktop.font_size,
          line_height: _theme["default"].font.tag.label.desktop.line_height
        },
        mobile: {
          font_size: _theme["default"].font.tag.label.mobile.font_size,
          line_height: _theme["default"].font.tag.label.mobile.line_height
        }
      },
      overline: {
        desktop: {
          font_size: _theme["default"].font.tag.overline.desktop.font_size,
          line_height: _theme["default"].font.tag.overline.desktop.line_height
        },
        mobile: {
          font_size: _theme["default"].font.tag.overline.mobile.font_size,
          line_height: _theme["default"].font.tag.overline.mobile.line_height
        }
      },
      helper_text: {
        desktop: {
          font_size: _theme["default"].font.tag.helper_text.desktop.font_size,
          line_height: _theme["default"].font.tag.helper_text.desktop.line_height
        },
        mobile: {
          font_size: _theme["default"].font.tag.helper_text.mobile.font_size,
          line_height: _theme["default"].font.tag.helper_text.mobile.line_height
        }
      }
    } : _newContext$typograph;
    return (0, _extends2["default"])({}, oldContext, {
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


  var backyardTheme = (0, _extends2["default"])({}, theme, {
    context: curContext,
    breakpoints: breakpoints
  }, mediaQueries, {
    setTheme: setTheme,
    setOverride: setOverride,
    setContext: setContext
  }, curOverride);
  return /*#__PURE__*/React.createElement(_styledComponents.ThemeProvider, {
    theme: backyardTheme
  }, children);
};

exports.ThemeProvider = ThemeProvider;
ThemeProvider.bdsName = 'ThemeProvider';
var _default = ThemeProvider;
exports["default"] = _default;