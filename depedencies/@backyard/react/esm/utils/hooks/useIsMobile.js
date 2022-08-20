import { useContext } from 'react';
import { ThemeContext } from '../../ThemeProvider';
import useMediaQuery from './useMediaQuery';

var useIsMobile = function useIsMobile(query) {
  var theme = useContext(ThemeContext);
  /**
      * Matchers for which device it is on
      */

  var isMobile = useMediaQuery("only screen and (max-width: ".concat(theme.grid.breakpoint.md.min, ")"));
  var isTablet = useMediaQuery("only screen and \n         (min-width: ".concat(theme.grid.breakpoint.md.min, ") and \n         (max-width: ").concat(theme.grid.breakpoint.lg.max, ")"));
  var isDesktop = useMediaQuery("only screen and (min-width: ".concat(query || theme.grid.breakpoint.xl.min, ")"));
  return {
    isDesktop: isDesktop,
    isTablet: isTablet,
    isMobile: isMobile
  };
};

export default useIsMobile;