import { createGlobalStyle } from 'styled-components';
import SuseongBatang from '../assets/SuseongBatang.woff';
import Blacksword from '../assets/Blacksword.otf';
import BMJUA from '../assets/BMJUA_ttf.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'SuseongBatang';
    src: url(${SuseongBatang}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'BMJUA';
    src: url(${BMJUA}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Blacksword';
    src: url(${Blacksword}) format('opentype');
    font-weight: normal;
    font-style: normal;
  }

  /* 기본 폰트를 SuseongBatang으로 설정 */
  body {
    font-family: 'SuseongBatang', serif;
  }

  .blacksword-font {
    font-family: 'Blacksword', cursive;
  }

  .bmjua-font {
    font-family: 'BMJUA', sans-serif;
  }
`;

export default GlobalStyle;
