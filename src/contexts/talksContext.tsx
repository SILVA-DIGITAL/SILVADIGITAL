import React, { FC, createContext, Dispatch, ReactNode, useReducer } from 'react'
import { initialState, talksReducer } from '~reducers/talksReducer'
import { ContextDevTool } from 'react-context-devtool'

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
  const [state, dispatch] = useReducer(talksReducer, initialState)

  return (
    <TalksContext.Provider value={{ talksContext: state, talksDispatch: dispatch }}>
      <ContextDevTool context={TalksContext} id="talksContextId" displayName="talksContext" />
      {children as React.ReactChildren}
    </TalksContext.Provider>
  )
}
