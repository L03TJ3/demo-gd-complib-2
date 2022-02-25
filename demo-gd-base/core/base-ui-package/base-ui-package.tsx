import React, { ReactNode } from 'react';
import GdThemeProvider from './theme/gdThemeProvider'
import gdButton from './src/components/button'

export type BaseUiPackageProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function BaseUiPackage({ children }: BaseUiPackageProps) {
  return (
    <GdThemeProvider childComponent={gdButton} />
  );
}
