import React from "react"
import { render as rtlRender, act, RenderResult } from "@testing-library/react"
import * as faker from "faker"
import { Product } from "services/api"

import { StylesProvider } from "@material-ui/core"
import GlobalStyles from "styles/global"

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
    result = rtlRender(ui, options)
  })
  return (result as unknown) as RenderResult
}

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
