import React from 'react'
import { hot } from 'react-hot-loader/root'
import { ThemeProvider } from 'styled-components'
import { AuthProvider } from '~context/authContext'
import theme from '~styles/theme'
import { GlobalStyles } from '~styles/index'
import { Routes } from '~root/routes'

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </ThemeProvider>
)

export default hot(App)
