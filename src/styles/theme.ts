const theme = {
  metrics: {
    fontSize: '0.85rem',
  },
  palette: {
    white: '#FFF',
  },
};

type Theme = typeof theme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}

export default theme;
