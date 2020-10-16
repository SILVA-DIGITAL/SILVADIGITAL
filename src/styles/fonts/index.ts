import { css } from 'styled-components';
import CircularStdMedium from './CircularStd-Medium.ttf';
import CircularStdBold from './CircularStd-Bold.ttf';

export const GlobalFonts = css`
  @font-face {
    font-family: CircularStdMedium;
    src: url(${CircularStdMedium}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: CircularStdBold;
    src: url(${CircularStdBold}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;
