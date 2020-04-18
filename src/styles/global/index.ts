import { createGlobalStyle } from "styled-components"

import flex from "./flex"
import spacing from "./spacing"

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Roboto", "Helvetica", "Arial", "sans-serif";
  }

  html, body, .app {
    width: 100%;
    max-width: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    overscroll-behavior-y: none;
  }

  ${flex}
  ${spacing}
`
