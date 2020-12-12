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
    background: #F2F2FA url(${github}) no-repeat 65% top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-size: 62.5%;
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
