interface IAuthInitialState {
  accessToken: string | null
  isAuthed: boolean
  error: boolean
}

interface IState {
  accessToken: string | null
  isAuthed: boolean
  error: boolean
}

interface IReducerAction {
  type: string
  payload?: Record<string, unknown>
  authData: Record<string, unknown>
}

export { IAuthInitialState, IState, IReducerAction }
