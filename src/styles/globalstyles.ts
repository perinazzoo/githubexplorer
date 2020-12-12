import { createGlobalStyle } from 'styled-components';

import github from '../assets/github_bg.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #F2F2FA url(${github}) no-repeat 75% top;
    -webkit-font-smoothing: antialiased;
  }

  html, body, #root {
    font-size: 62.5%;
    min-height: 100vh;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
  }

  #root {
    max-width: 1000px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }
`;
