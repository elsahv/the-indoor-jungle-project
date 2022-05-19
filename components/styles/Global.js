import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    color: hsl(192, 100%, 9%);
    font-family: 'Teko', sans-serif;
   
  }

  p {
    opacity: 0.6;
    line-height: 1.5;
  }

  
`




export default GlobalStyles