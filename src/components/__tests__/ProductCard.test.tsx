import React from "react"
import { render, generateProduct } from "testing"
import ProductCard from "../ProductCard"
import { displayPrice } from "lib/utils"

describe("<ProductCard />", () => {
  it("should display retailPrice with line-through if salePrice is preset while showing salePrice", async () => {
    const product = generateProduct({ include: { salePrice: true } })
    const { getByText } = render(<ProductCard {...product} />)

    const retailPriceEl = getByText(displayPrice(product.retailPrice))
    const styles = getComputedStyle(retailPriceEl)
    expect(styles.textDecoration).toBe("line-through")

    getByText(displayPrice(product.salePrice!))
  })

  it("should not show retailPrice if retailPrice is 0", async () => {
    const product = generateProduct({
      data: { retailPrice: 0 },
      include: { salePrice: true },
    })
    const { queryByText } = render(<ProductCard {...product} />)

    expect(queryByText(displayPrice(0))).toBeNull()
  })

  it("should render general product information", () => {
    const product = generateProduct({ include: { salePrice: true } })
    const { getByText, getByAltText } = render(<ProductCard {...product} />)

    getByText(product.name)
    getByText(displayPrice(product.retailPrice))
    getByText(displayPrice(product.salePrice!))
    getByAltText(product.name)
  })

  it("should display 'sold out' if quantityAvailable === 0", () => {
    const product = generateProduct({
      data: { quantityAvailable: 0 },
      include: { salePrice: true },
    })
    const { getByText } = render(<ProductCard {...product} />)

    getByText(/sold out/i)
  })
})
