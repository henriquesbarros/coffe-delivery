import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  html {
    @media (max-width: 390px) {
      font-size: 75%;
    }
  }

  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    -webkit-font-smoothing: antialiased;
    max-width: 71.25rem; /* 1140px */
    margin: 0 auto;
  }

  body, input-security, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`

export const Flex = styled.div`
  display: flex;
  gap: 0.75rem;
`
