declare module '*.svg' {
  const content: string
  export const ReactComponent: React.ReactNode
  export default content
}

declare module '*.ttf' {
  const content: string
  export default content
}

declare module '*.scss' {
  const content: string
  export default content
}

declare let Process: {
  env: {
    NODE_ENV: string
    BACKEND_URI: string
  }
}
