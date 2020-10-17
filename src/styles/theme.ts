const theme = {
  metrics: {
    fontSize: '0.85rem',
    headerHeight: '0rem',
    headerOverlayHeight: '2.7rem',
    headerTotalHeight: '6.5rem',
    sideNavWidth: '15vw',
  },
  palette: {
    primaryGreen: '#57b560',
    primaryRed: '#ff00cc',
    secondaryBlue: '#1592fe',
    textColor: 'black',
    navGreyColor: '#838383',
    darkGrey: '#d7d7d7',
    lightGrey: '#e1e1e1',
    lighterGrey: '#83838347',
    textGrey: '#999999',
    bodyBgColor: 'white',
    topBarBgColor: '#141414',
    sideNavBgColor: 'black',
    formBgColor: '#f6f6f6',
    inputBorderColor: '#57b560',
  },
};

type Theme = typeof theme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}

export default theme;
