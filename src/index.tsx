import React from 'react'
import ReactDOM from 'react-dom'
import { debugContextDevtool } from 'react-context-devtool'
import Amplify from 'aws-amplify'
import awsmobile from './aws-exports'
import App from './App'

const container = document.getElementById('root')
Amplify.configure(awsmobile)

debugContextDevtool(container, {
  disable: process.env.NODE_ENV === 'production',
})

ReactDOM.render(<App />, container)
