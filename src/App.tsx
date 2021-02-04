import React from 'react'
import { hot } from 'react-hot-loader/root'
import { ThemeProvider } from 'styled-components'
import theme from '~styles/theme'
import { GlobalStyles } from '~styles/index'
import { Routes } from '~root/routes'

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Routes />
  </ThemeProvider>
)

export default hot(App)
