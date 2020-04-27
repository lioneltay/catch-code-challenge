import React from "react"
import { render as rtlRender, act, RenderResult } from "@testing-library/react"
import * as faker from "faker"
import { Product } from "services/api"

import { StylesProvider } from "@material-ui/core"
import GlobalStyles from "styles/global"
import { Provider } from "react-redux"
import { store } from "services/store"

export * from "@testing-library/react"

/**
 * Useful for rendering components that call useState update asynchronously in a useEffect hook
 */
export const asyncRender = async (
  ui: Parameters<typeof rtlRender>[0],
  options?: Parameters<typeof rtlRender>[1],
): Promise<RenderResult> => {
  let result
  await act(async () => {
    result = renderWithWrappers(ui, options)
  })
  return (result as unknown) as RenderResult
}

export const renderWithWrappers = (
  ui: Parameters<typeof rtlRender>[0],
  options?: Parameters<typeof rtlRender>[1],
) => {
  const Wrapper: React.FC = ({ children }) => {
    return (
      <Provider store={store}>
        <StylesProvider injectFirst>
          <GlobalStyles />
          {children}
        </StylesProvider>
      </Provider>
    )
  }

  return rtlRender(ui, { wrapper: Wrapper, ...options })
}

type GenerateProductOptions = {
  data?: Partial<Product>
  include?: Record<OptionalKeys<Product>, boolean>
}

export function generateProduct(options?: GenerateProductOptions): Product {
  return {
    id: faker.random.uuid(),
    name: faker.commerce.productName(),
    imageUrl: faker.random.image(),
    quantityAvailable: faker.random.number(),
    retailPrice: faker.random.number(),
    salePrice: options?.include?.salePrice ? faker.random.number() : undefined,
    ...options?.data,
  }
}

export function generateProducts(
  count: number,
  options?: GenerateProductOptions,
): Product[] {
  return Array(count)
    .fill(null)
    .map(() => generateProduct(options))
}
