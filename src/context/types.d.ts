interface IAuthContext {
  accessToken: string | null
  isAuthenticated: boolean
}

type TState = {
  accessToken: string | null
  isAuthed: boolean
  error: boolean
}

interface IAuthProvider {
  children: React.ReactNode
}

export { IAuthContext, TState, IAuthProvider }
