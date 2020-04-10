import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body {
    margin: 0;
    font-family: var(--cd-document-base-font-family);
    -webkit-font-smoothing: antialiased;
    color: var(--cd-document-text-color);
    background: var(--cd-document-background-color);
  }
`;

export default GlobalStyle;
