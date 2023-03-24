import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      background-color: ${(props) => props.theme.background};
    }
    body, textarea, button {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 1rem;

      padding: 0 10rem;
    }
    h1 {
      font-size: 3rem;
      color: ${(props) => props.theme['base-title']}
      line-height: 3.9rem;
    }
    h1, h2 {
      font-family: 'Baloo 2', cursive;
      font-weight: 700;
    }

    h3 {
      color: ${(props) => props.theme['base-subtitle']}
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 1.25rem;
    }
    p {
      color: ${(props) => props.theme['base-text']} !important;
      font-size: 1rem;
    }
`
