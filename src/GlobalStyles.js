import { createGlobalStyle } from 'styled-components'

const DARK_MODE_THEME = "monokai";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${(props) => props.theme === DARK_MODE_THEME ? ' #282C35': 'white'};
    color: ${(props) => props.theme === DARK_MODE_THEME ? 'white' : 'black'}
  }
`