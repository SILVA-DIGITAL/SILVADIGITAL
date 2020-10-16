import React, { FC, createContext, useReducer } from 'react'
import authReducer, { authInitialState } from '~reducers/authReducer'
import { TState, IAuthProvider } from './types'

export const AuthContext = createContext<[TState, React.Dispatch<any>]>(undefined)

export const AuthProvider: FC<IAuthProvider> = props => {
  const authData = useReducer(authReducer, authInitialState)
  return <AuthContext.Provider value={authData}>{props.children}</AuthContext.Provider>
}

export const AuthConsumer = AuthContext.Consumer
