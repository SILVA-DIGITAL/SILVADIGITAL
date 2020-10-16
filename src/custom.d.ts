declare module '*.svg' {
  const content: any
  export const ReactComponent: any
  export default content
}

declare module '*.ttf' {
  const content: any
  export default content
}

declare module '*.scss' {
  const content: any
  export default content
}

declare var Process: {
  env: {
    NODE_ENV: string
    BACKEND_URI: string
  }
}
