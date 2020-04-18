import React from "react"
import { noopTemplate as css } from "lib/utils"

import { getProducts, Product } from "services/api"

import { PaginatedProductDisplay } from "components"

export default () => {
  const [currentPage, setCurrentPage] = React.useState(1)
  const [totalPages, setTotalPages] = React.useState<number | null>(null)
  const [products, setProducts] = React.useState<Product[]>([])

  return (
    <div
      className="p-4 fj-c"
      css={css`
        background: #fafafa;
        min-height: 100vh;
        width: 100%;
      `}
    >
      <PaginatedProductDisplay
        css={css`
          width: 100%;
        `}
        onFetchPageData={async (pageToFetch) => {
          const {
            results,
            metadata: { page, pages },
          } = await getProducts({ page: pageToFetch, query: "best sellers" })
          setTotalPages(pages)
          setProducts(results.slice(0, 6))
        }}
        products={products}
        pages={totalPages}
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  )
}
