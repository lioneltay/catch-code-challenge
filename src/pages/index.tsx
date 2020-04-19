import React from "react"
import styled from "styled-components"
import { noopTemplate as css } from "lib/utils"
import { getProducts, Product, ProductSortOption } from "services/api"
import { InputLabel, Select, MenuItem, FormControl, Text } from "lib/components"
import { ProductGrid, PaginationNavigation } from "components"

const query = "best sellers"

export default () => {
  // Initialize page to 1, this would probably come from the current route
  const [currentPage, setCurrentPage] = React.useState(1)
  const [totalPages, setTotalPages] = React.useState<number | null>(null)
  const [products, setProducts] = React.useState<Product[]>([])
  const [sortBy, setSortby] = React.useState<ProductSortOption>(
    "price-high-to-low",
  )
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    async function effect() {
      setLoading(true)

      const res = await getProducts({
        page: currentPage,
        query,
        sortBy,
      })

      setProducts(res.results)
      setTotalPages(res.metadata.pages)
      setLoading(false)
    }

    effect()
  }, [currentPage, sortBy])

  return (
    <div
      className="p-4 fj-c"
      css={css`
        background: #fafafa;
        min-height: 100vh;
        width: 100%;
      `}
    >
      <div style={{ maxWidth: 1200, width: "100%" }}>
        <div className="fa-c fj-sb">
          <img
            src="/assets/catch-logo.svg"
            alt="Catch Logo"
            css={css`
              width: 200px;
            `}
          />
        </div>

        <div
          className="mt-4 fj-sb fa-c"
          css={css`
            padding-left: ${ProductGrid.gridSpacing}px;
            padding-right: ${ProductGrid.gridSpacing}px;
          `}
        >
          <div>
            <Text variant="h5">Showing results for {`"${query}"`}</Text>
            {currentPage && totalPages ? (
              <Text color="textSecondary" variant="body2">
                Page {currentPage} of {totalPages}
              </Text>
            ) : null}
          </div>

          <FormControl variant="outlined">
            <InputLabel id="product-sort">Sort by</InputLabel>
            <Select
              css={css`
                min-width: 200px;
              `}
              labelId="product-sort"
              value={sortBy}
              onChange={(e, g) =>
                setSortby(e.target.value as ProductSortOption)
              }
              label="Sort by"
            >
              <MenuItem value={"price-high-to-low"}>Highest Price</MenuItem>
              <MenuItem value={"price-low-to-high"}>Lowest Price</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div
          className="mt-4"
          css={css`
            position: relative;
            min-height: 200px;
          `}
        >
          <ProductGrid products={products} />

          {currentPage && totalPages ? (
            <div className="fj-c pt-4">
              <PaginationNavigation
                pages={totalPages}
                currentPage={currentPage}
                onPageChange={(page) => {
                  setCurrentPage(page)
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }}
              />
            </div>
          ) : null}

          {/* Loader is only shown if loading takes > 500ms */}
          <Overlay className="fa-c fj-c" show={loading} data-testid="loader" />
        </div>
      </div>
    </div>
  )
}

const Overlay = styled.div<{ show: boolean }>`
  background: rgba(200, 200, 200, 0.4);
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
