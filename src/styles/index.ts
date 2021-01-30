import { createGlobalStyle } from 'styled-components'
import { GlobalFonts } from '~styles/fonts/index'
import { rem } from 'polished'

export const GlobalStyles = createGlobalStyle`
  ${GlobalFonts}

  html,
  body,
  #root,
  canvas {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    overflow: hidden;
  }

  #root {
    background: radial-gradient(ellipse at -200% 60%, rgba(209, 209, 209, 0.48) 22%, rgba(182, 182, 182, 0) 71%),
      linear-gradient(160deg, rgb(233, 233, 233), hsl(0, 0%, 100%) 100%);
    overflow: auto;
  }

  #root > a {
    position: absolute;
    top: 50px;
    left: 25px;
  }

  a {
    pointer-events: all;
    cursor: pointer;
    color: black;
    text-decoration: none;
    margin-left: 20px;
  }

  body {
    background: radial-gradient(at 50% 100%, #873740 0%, #272730 40%, #171720 80%, #070710 100%);
    font-size: ${({ theme }) => theme.metrics.fontSize};
    font-family: CircularStdMedium;

    position: fixed;
    overflow: hidden;
    overscroll-behavior-y: none;
    font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial,
      sans-serif;
    color: black;
    -webkit-font-smoothing: antialiased;

    textarea:focus,
    textarea.form-control:focus,
    input.form-control:focus,
    input[type=text]:focus,
    input[type=password]:focus,
    input[type=email]:focus,
    input[type=number]:focus,
    [type=text].form-control:focus,
    [type=password].form-control:focus,
    [type=email].form-control:focus,
    [type=tel].form-control:focus,
    [contenteditable].form-control:focus,

    button {
      box-shadow: inset 0 0 0 #ddd;
    }

    .bg {
      position: absolute;
      background: radial-gradient(at 50% 100%, #873740 0%, #272730 40%, #171720 80%, #070710 100%);
    }

    h1 {
      position: absolute;
      top: 120px;
      left: 50%;
      font-weight: 800;
      font-size: 14em;
      transform: translate3d(-50%, 0, 0);
      margin: 0;
      color: peru;
      line-height: 0.8em;
      letter-spacing: -15px;
      text-align: center;
    }

    @media only screen and (max-width: 600px) {
      a.bottom-left {
        display: none;
      }
    }

    @media only screen and (max-width: 1000px) {
      h1 {
        transform: translate3d(-50%, 0, 0);
        font-size: 8em;
        letter-spacing: -5px;
      }
    }

    @media only screen and (max-width: 500px) {
      h1 {
        transform: translate3d(-50%, 0%, 0);
        font-size: 4em;
        letter-spacing: -5px;
      }
    }
  }
`
