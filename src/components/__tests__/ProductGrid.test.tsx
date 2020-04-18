import React from "react"
import { noopTemplate as css } from "lib/utils"
import { render, generateProducts } from "testing"
import ProductGrid from "../ProductGrid"

describe("<ProductCard />", () => {
  it("ProductGrid.getBreakpoints should generate media queries", () => {
    const regex = /\s/g
    expect(
      ProductGrid.getBreakpoints({
        1: 100,
        2: 200,
        4: 400,
      }).replace(regex, ""),
    ).toBe(
      css`
        @media (min-width: 100px) {
          & > * {
            width: 100%;
            max-width: 100%;
          }
        }

        @media (min-width: 200px) {
          & > * {
            width: 50%;
            max-width: 50%;
          }
        }

        @media (min-width: 400px) {
          & > * {
            width: 25%;
            max-width: 25%;
          }
        }
      `.replace(regex, ""),
    )
  })

  it("shows all the products", () => {
    const products = generateProducts(10)

    const { getByAltText, getByText } = render(
      <ProductGrid products={products} />,
    )

    products.forEach((product) => {
      getByAltText(product.name)
      getByText(product.name)
    })
  })
})
