import React from "react"

import Root from "pages"

import { StylesProvider } from "@material-ui/core"
import GlobalStyles from "styles/global"

export default () => {
  return (
    <StylesProvider injectFirst>
      <GlobalStyles />
      <App />
    </StylesProvider>
  )
}

const App = () => {
  return <Root />
}
