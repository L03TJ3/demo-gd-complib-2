import React, { ReactNode } from 'react'
// 1. Import the extendTheme function
import { extendTheme, NativeBaseProvider } from 'native-base';
// 2. Extend the theme to include custom colors, fonts, etc
const newColorTheme = {
  brand: {
    'gdBlue': '#0094ec',
    'gdBlueLight': 'rgba(0, 176, 255, 0.1)',
    'gdGreen': 'rgb(0, 195, 174)',
    900: '#8287af',
    800: '#7c83db',
    700: '#b3bef6',
  },
};

export type gdThemeProviderProps = {
  /**
   * a node to be rendered in the special component.
   */
   childComponent?: ReactNode;
};

const theme = extendTheme({ colors: newColorTheme });
// 3. Pass the `theme` prop to the `NativeBaseProvider`
export default function GdThemeProvider({childComponent}: gdThemeProviderProps) {
  return (
    <NativeBaseProvider theme={theme}>
      {childComponent}
    </NativeBaseProvider>
  );
} 