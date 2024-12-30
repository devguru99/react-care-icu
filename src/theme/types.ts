import React from 'react';

enum Themes {
  DARK = 'dark',
  LIGHT = 'light',
}

type CustomThemeProviderProps = {
  children: React.JSX.Element;
};

export type { CustomThemeProviderProps };
export { Themes };
