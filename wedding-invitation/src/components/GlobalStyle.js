import { createGlobalStyle } from 'styled-components';
import SuseongBatang from '../assets/SuseongBatang.woff';
import Blacksword from '../assets/Blacksword.otf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'SuseongBatang';
    src: url(${SuseongBatang}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Blacksword';
    src: url(${Blacksword}) format('opentype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: 'SuseongBatang', serif;
  }

  /* Blacksword 폰트는 특정 요소에서만 적용하도록 */
  .blacksword-font {
    font-family: 'Blacksword', cursive;
  }
`;

export default GlobalStyle;
