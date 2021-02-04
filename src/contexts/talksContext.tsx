import React, { FC, createContext, Dispatch, ReactNode, useReducer } from 'react'
import { initialState, reducer } from '~reducers/talksReducer'

interface Talk {
  id: number
  clientId: number | null
  name: string
  description: string
  speakerName: string
  speakerBio: string
  talks: []
}

interface TalksContext {
  talksContext: Talk
  talksDispatch: Dispatch<object>
}

export const TalksContext = createContext(null as TalksContext)

export const TalksProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <TalksContext.Provider value={{ talksContext: state, talksDispatch: dispatch }}>
      {children as React.ReactChildren}
    </TalksContext.Provider>
  )
}
