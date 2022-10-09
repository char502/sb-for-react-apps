import React from 'react'
import { ThemeProvider } from 'styled-components'
import { DecoratorFn } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { GlobalStyle } from '../src/styles/GlobalStyle'
import { lightTheme, darkTheme } from '../src/styles/theme'

export const withTheme: DecoratorFn = (StoryFn, context) => {
  // check if theme exists, if not, fall back to the globals
  const theme = context.parameters.theme || context.globals.theme
  const storyTheme = theme === 'dark' ? darkTheme : lightTheme

  return (
    <ThemeProvider theme={storyTheme}>
      <GlobalStyle />
      <StoryFn />
    </ThemeProvider>
  )
}

export const globalDecorators = [withTheme, withDesign]
