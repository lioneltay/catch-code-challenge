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
        max-width: 1200px;
        width: 100%;
      `}
      {...rest}
    >
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;

          ${getBreakpoints(columnBreakpoints)}

          & > * {
            padding: 6px;
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

/**
 * Turns a map of column breakpoints into the approriate css
 */
function getBreakpoints(breakpoints: Breakpoints) {
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
            /* flex-basis: ${100 / parseInt(columns)}%; */
          }
        }
      `,
    )
    .join("\n")
}

type Breakpoints = Record<number, number>

const defaultColumnBreakpoints: Breakpoints = {
  1: 0,
  2: 450,
  3: 800,
  4: 950,
}
