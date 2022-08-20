var lightOrDark = function lightOrDark(theme, light, dark) {
  return theme.name === 'light' ? light : dark;
};

export { lightOrDark };
export default lightOrDark;