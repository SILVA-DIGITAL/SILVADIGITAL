export const initialState = {
  name: '' as string,
  description: '' as string,
  speakerName: '' as string,
  speakerBio: '' as string,
  talks: [] as Array<[]>,
}

export const enum ActionTypes {
  SET_TALKS = 'SET_TALKS',
  SET_INPUT = 'SET_INPUT',
  CLEAR_INPUT = 'CLEAR_INPUT',
  ADD_TALK = 'ADD_TALK'
}

export const talksReducer = (state: any, action: any) => {
  switch (action.type) {
    case ActionTypes.SET_TALKS:
      return { 
        ...state, 
        talks: action.talks 
      }
    case ActionTypes.SET_INPUT:
      return { 
        ...state, 
        [action.key]: action.value
      }
    case ActionTypes.CLEAR_INPUT:
      return { 
        ...initialState,
        talks: state.talks
      }
    case ActionTypes.ADD_TALK:
      return { 
        ...state,
        talks: [...state.talks, action.talk]
      }
    default:
      return state
  }
}
