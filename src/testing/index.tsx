import React from "react"
import { render as rtlRender } from "@testing-library/react"

import { StylesProvider } from "@material-ui/core"
import GlobalStyles from "styles/global"

export * from "@testing-library/react"

export const renderWithWrappers = (
  ui: Parameters<typeof rtlRender>[0],
  options?: Parameters<typeof rtlRender>[1],
) => {
  const Wrapper: React.FC = ({ children }) => {
    return (
      <StylesProvider injectFirst>
        <GlobalStyles />
        {children}
      </StylesProvider>
    )
  }

  return rtlRender(ui, { wrapper: Wrapper, ...options })
}
