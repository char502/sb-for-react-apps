import React from 'react'
import { ThemeProvider } from 'styled-components'
import { DecoratorFn } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { BrowserRouter } from 'react-router-dom'
// initialize - a function that will initialise the service
// worker every time storybook runs
// mswDecorator - will allow every story to contain the mock configuration
import { initialize, mswDecorator } from 'msw-storybook-addon'
import { GlobalStyle } from '../src/styles/GlobalStyle'
import { lightTheme, darkTheme } from '../src/styles/theme'

initialize()

const withRouter: DecoratorFn = (StoryFn) => {
  return (
    <BrowserRouter>
      <StoryFn />
    </BrowserRouter>
  )
}

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

export const globalDecorators = [mswDecorator, withTheme, withDesign, withRouter]
