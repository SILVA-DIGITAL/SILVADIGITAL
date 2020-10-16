import { IAuthInitialState, IState, IReducerAction } from './types'
import { actions } from './actions'

export const authInitialState: IAuthInitialState = {
  accessToken: null,
  isAuthed: false,
  error: false,
}

const authReducer = (state: IState, action: IReducerAction) => {
  switch (action.type) {
    case actions.SET_ACCESS_TOKEN:
      return {
        ...state,
        ...action.payload,
      }
    case actions.RESET_ACCESS_TOKEN:
      return {
        ...authInitialState,
      }
    case actions.ERROR:
      return {
        ...authInitialState,
        ...action.payload,
      }
    default:
      throw new Error('Unexpected action')
  }
}

export default authReducer
