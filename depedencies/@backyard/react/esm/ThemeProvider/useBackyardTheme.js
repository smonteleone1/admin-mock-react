import * as React from 'react';
import { ThemeContext } from './ThemeProvider';

var validateBackyardTheme = function validateBackyardTheme(theme, name) {
  if (!(theme !== null && theme !== void 0 && theme.name)) {
    // eslint-disable-next-line no-console
    throw Error("Backyard: A Backyard component ".concat(name ? "(`".concat(name, "`)") : '', " is missing a Backyard Theme.\n") + 'This component uses Backyard tokens and a Backyard Theme is required.\n' + "Please wrap ".concat(name ? "`".concat(name, "` or") : '', " your entire application in a Backyard `ThemeProvider`.\n") + 'For a getting started guide, see \n' + '`https://stage.carbon.gcp.lowes.com/bds/documentation/GetStarted/Develop#create-theme-provider`');
  }

  return true;
};

var useBackyardTheme = function useBackyardTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _props$validate = props.validate,
      validate = _props$validate === void 0 ? false : _props$validate,
      name = props.name;
  var theme = React.useContext(ThemeContext);

  if (validate && process.env.NODE_ENV !== 'production') {
    React.useEffect(function () {
      validateBackyardTheme(theme, name);
    }, [theme]);
  }

  return theme;
};

export { useBackyardTheme, validateBackyardTheme };
export default useBackyardTheme;