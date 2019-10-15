import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans Condensed';
    padding: 30px 80px;

    @media screen and (max-width: 800px) {
      padding: 10px;
    }

    @media screen and (max-width: 400px) {
      padding: 0px;
      padding-top: 7px;
    }
  }

  a {
    text-decoration: none;
    color: black;
  }

  * {
    box-sizing: border-box;
  }
`