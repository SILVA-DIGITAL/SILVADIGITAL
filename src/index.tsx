import React from 'react'
import ReactDOM from 'react-dom'
import { debugContextDevtool } from 'react-context-devtool'
import Amplify from 'aws-amplify'
import config from './aws-exports'
import App from './App'

const container = document.getElementById('root')
Amplify.configure(config)

debugContextDevtool(container, {
  disable: process.env.NODE_ENV === 'production',
})

ReactDOM.render(<App />, container)
