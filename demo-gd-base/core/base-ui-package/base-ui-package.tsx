import React, { ReactNode } from 'react'
import GdButton from './src/components/button/gdButton'

export type BaseUiPackageProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: JSX.Element;
};

export function BaseUiPackage() {
 return (
    <GdButton />
  )
}
