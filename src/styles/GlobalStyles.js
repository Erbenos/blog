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

    @media screen and (prefers-reduced-motion: no-preference) {
      transition:
        color .2s ease-in-out,
        background .2s ease-in-out;
    }
  }
`;

export default GlobalStyle;
