// GlobalStyles.js
import { createGlobalStyle } from 'styled-components';
import BMJUA from '../assets/BMJUA_ttf.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'BMJUA';
    src: url(${BMJUA}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: 'BMJUA', sans-serif;
  }
`;

export default GlobalStyle;
