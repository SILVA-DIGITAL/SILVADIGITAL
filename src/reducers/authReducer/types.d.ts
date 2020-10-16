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
  payload?: any
  authData: any
}

export { IAuthInitialState, IState, IReducerAction }
