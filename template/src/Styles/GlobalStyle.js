import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    background-color: white;
    padding: 0;
    box-sizing: border-box;
  }

  .App{
      min-height: 100vh;
      text-align: center;
    }
`;
 
export default GlobalStyle;