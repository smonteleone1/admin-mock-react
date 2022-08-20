import * as React from 'react';
import { ThemeContext } from './ThemeProvider';

const validateBackyardTheme = (theme, name) => {
  if (!theme?.name) {
    // eslint-disable-next-line no-console
    throw Error(`Backyard: A Backyard component ${name ? `(\`${name}\`)` : ''} is missing a Backyard Theme.\n` + 'This component uses Backyard tokens and a Backyard Theme is required.\n' + `Please wrap ${name ? `\`${name}\` or` : ''} your entire application in a Backyard \`ThemeProvider\`.\n` + 'For a getting started guide, see \n' + '`https://stage.carbon.gcp.lowes.com/bds/documentation/GetStarted/Develop#create-theme-provider`');
  }

  return true;
};

const useBackyardTheme = (props = {}) => {
  const {
    validate = false,
    name
  } = props;
  const theme = React.useContext(ThemeContext);

  if (validate && process.env.NODE_ENV !== 'production') {
    React.useEffect(() => {
      validateBackyardTheme(theme, name);
    }, [theme]);
  }

  return theme;
};

export { useBackyardTheme, validateBackyardTheme };
export default useBackyardTheme;