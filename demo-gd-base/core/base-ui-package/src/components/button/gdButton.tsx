import React from 'react'
import gdTheme, { GdThemeProvider} from '../../../theme/gdThemeProvider'
import { NativeBaseProvider } from 'native-base'
import {Button} from 'native-base'

export default function GdButton() {
  return (
    <NativeBaseProvider theme={gdTheme}>
      <Button>Styled gd button</Button>
    </NativeBaseProvider>
  )
}