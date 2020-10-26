import { createGlobalStyle } from 'styled-components'
import { GlobalFonts } from '~styles/fonts/index'
import { rem } from 'polished'

export const GlobalStyles = createGlobalStyle`
  ${GlobalFonts}

  html,
  body,
  #root,
  .bg,
  canvas {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }

  body {
    background: radial-gradient(at 50% 100%, #873740 0%, #272730 40%, #171720 80%, #070710 100%);
    font-size: ${({ theme }) => theme.metrics.fontSize};
    font-family: CircularStdMedium;

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

    .loading {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      background: #171717;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .loading-bar-container {
      width: 200px;
      height: 3px;
      background: #272727;
    }

    .loading-bar {
      height: 3px;
      background: white;
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

    h1 > span {
      white-space: pre;
    }

    .layer {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 75%;
      background: linear-gradient(0deg, rgba(63, 12, 88, 0.2) 0%, transparent 100%);
      pointer-events: none;
    }

    span.header {
      font-weight: 700;
      position: absolute;
      display: inline-block;
      width: 500px;
      transform: translate3d(0, -50%, 0);
      font-size: 9em;
      line-height: 0.9em;
      pointer-events: none;
      top: 350px;
      left: 50px;
    }

    span.header-left {
      font-weight: 700;
      position: absolute;
      display: inline-block;
      transform: translate3d(0, -50%, 0);
      line-height: 1em;
      top: 200px;
      left: 60px;
      font-size: 4em;
      width: 200px;
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

    a {
      font-weight: 400;
      font-size: 18px;
      color: inherit;
      position: absolute;
      display: inline;
      text-decoration: none;
      z-index: 1;
      color: white;
    }

    a.top-left {
      top: 60px;
      left: 60px;
    }

    a.top-right {
      top: 60px;
      right: 60px;
    }

    a.bottom-left {
      bottom: 60px;
      left: 60px;
    }

    a.bottom-right {
      bottom: 60px;
      right: 60px;
    }
  }
`
