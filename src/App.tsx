import React from "react"
import Root from "pages"
import { StylesProvider } from "@material-ui/core"
import GlobalStyles from "styles/global"

import { Provider } from "react-redux"
import { store } from "services/store"

export default () => {
  return (
    <Provider store={store}>
      <StylesProvider injectFirst>
        <GlobalStyles />
        <Root />
      </StylesProvider>
    </Provider>
  )
}
