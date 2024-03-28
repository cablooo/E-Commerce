import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    a, link, li {
        list-style: none;
        color: inherit;
        text-decoration: none;
    }

  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;
 
export default GlobalStyle;