import axios from "axios"

export type Product = {
  id: string
  name: string
  salePrice?: null | number
  retailPrice: number
  imageUrl: string
  quantityAvailable: number
}

export type ProductSortOption = "price-high-to-low" | "price-low-to-high"

type ProductSearchInput = {
  page: number
  query: string
  sortBy?: ProductSortOption
}

type ProductSearchOutput = {
  metadata: {
    query: string
    total: number
    page: number
    pages: number
  }
  results: Product[]
}

/**
 * Gets products, supports pagination
 * Currently using mock api endpoint
 */
export async function getProducts({
  page,
  query,
  sortBy = "price-high-to-low",
}: ProductSearchInput) {
  console.log("getProducts", { page, query, sortBy })

  const res = await axios.get(
    "http://catch-code-challenge.s3-website-ap-southeast-2.amazonaws.com/challenge-3/response.json",
  )
  const data: ProductSearchOutput = res.data

  // Artificial delay
  await new Promise((res) => setTimeout(res, Math.random() * 1000))

  // TEMPORARY CODE
  function getPrice(product: Product): number {
    return product.salePrice || product.retailPrice
  }

  // TEMPORARY CODE
  function sortByPrice(
    products: Product[],
    direction: "asc" | "desc",
  ): Product[] {
    const dir = direction === "asc" ? -1 : 1
    return [...products].sort((a, b) =>
      getPrice(a) < getPrice(b) ? dir : -dir,
    )
  }

  return {
    ...data,
    /**
     * TEMPORARY CODE
     * mock client sorting for now since the real api would have to handle sorting.
     * it is impossible to sort a paginated query on the client.
     */
    results:
      sortBy === "price-high-to-low"
        ? sortByPrice(data.results, "desc")
        : sortBy === "price-low-to-high"
        ? sortByPrice(data.results, "asc")
        : data.results,
  }
}
