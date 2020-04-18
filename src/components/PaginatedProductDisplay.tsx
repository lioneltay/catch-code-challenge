import React from "react"
import styled from "styled-components"
import { noopTemplate as css } from "lib/utils"

import { CircularProgress } from "lib/components"

import PaginationNavigation, {
  PaginationNavigationProps,
} from "./PaginationNavigation"
import ProductGrid, { ProductGridProps } from "./ProductGrid"

type Products = ProductGridProps["products"]

export type PaginatedProductDisplayProps = Stylable & {
  onFetchPageData: (page: number) => Promise<void>
  products: Products
  pages: null | PaginationNavigationProps["pages"]
  currentPage: PaginationNavigationProps["currentPage"]
  onPageChange: PaginationNavigationProps["onPageChange"]
}

const PaginatedProductDisplay = ({
  onFetchPageData,
  products,
  pages,
  currentPage,
  onPageChange,
  ...rest
}: PaginatedProductDisplayProps) => {
  const [loading, setLoading] = React.useState(false)

  const fetchData = React.useCallback(async (page: number) => {
    setLoading(true)
    await onFetchPageData(page)
    setLoading(false)
  }, [])

  React.useEffect(() => {
    fetchData(currentPage)
  }, [currentPage])

  return (
    <div
      {...rest}
      css={css`
        position: relative;
        min-height: 200px;
      `}
    >
      <ProductGrid products={products} />

      {currentPage && pages ? (
        <div className="fj-c pt-4">
          <PaginationNavigation
            pages={pages}
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
        </div>
      ) : null}

      <Overlay className="fa-c fj-c" show={loading}>
        <CircularProgress size={80} />
      </Overlay>
    </div>
  )
}

export default PaginatedProductDisplay

const Overlay = styled.div<{ show: boolean }>`
  background: rgba(200, 200, 200, 0.5);
  pointer-events: ${({ show }) => (show ? "all" : "none")};
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 250ms;
  transition-delay: 500ms;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
`
