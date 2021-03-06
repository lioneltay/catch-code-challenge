import React from "react"
import { noopTemplate as css } from "lib/utils"

import ProductCard, { ProductCardProps } from "./ProductCard"

export type ProductGridProps = Stylable & {
  products: ProductCardProps[]
  /**
   * key: number of columns
   * value: minimum media width in px before the column number is adopted
   */
  columnBreakpoints?: Breakpoints
}

/**
 * Displays a list of products in a grid layout
 */
const ProductGrid = ({
  products,
  columnBreakpoints = defaultColumnBreakpoints,
  ...rest
}: ProductGridProps) => {
  return (
    <div
      css={css`
        width: 100%;
      `}
      {...rest}
    >
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;

          ${ProductGrid.getBreakpoints(columnBreakpoints)}

          & > * {
            padding: ${ProductGrid.gridSpacing}px;
          }
        `}
      >
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductGrid

ProductGrid.gridSpacing = 6

/**
 * Turns a map of column breakpoints into the approriate css
 */
ProductGrid.getBreakpoints = (breakpoints: Breakpoints) => {
  const orderedBreakpoints = Object.entries(breakpoints).sort(([a], [b]) =>
    parseInt(a) < parseInt(b) ? -1 : 1,
  )

  return orderedBreakpoints
    .map(
      ([columns, minWidth]) => css`
        @media (min-width: ${minWidth}px) {
          & > * {
            width: ${100 / parseInt(columns)}%;
            max-width: ${100 / parseInt(columns)}%;
          }
        }
      `,
    )
    .join("\n")
}

type Breakpoints = Record<number, number>

const defaultColumnBreakpoints: Breakpoints = {
  1: 0,
  2: 600,
  3: 800,
  4: 950,
}
