import React from "react"
import { asyncRender, waitFor, getByText } from "testing"
import user from "@testing-library/user-event"
import Page from "../index"
import { getProducts } from "services/api"
const getProductsMock: jest.Mock<any, any> = getProducts as any

window.scrollTo = jest.fn()

jest.mock("services/api", () => {
  const { generateProducts } = require("testing")

  return {
    getProducts: jest.fn(() =>
      Promise.resolve({
        metadata: {
          query: "best sellers",
          total: 102,
          page: 1,
          pages: 3,
        },
        results: generateProducts(20),
      }),
    ),
  }
})

it("page updates its products as the page/sortBy values change", async () => {
  const { getByText, getByLabelText } = await asyncRender(<Page />)

  expect(getProductsMock).toHaveBeenCalledTimes(1)
  expect(getProductsMock).toHaveBeenCalledWith({
    page: 1,
    query: "best sellers",
    sortBy: "price-high-to-low",
  })
  getProductsMock.mockClear()

  user.click(getByText(/^2$/))

  await waitFor(() => {
    expect(getProductsMock).toHaveBeenCalledTimes(1)
    expect(getProductsMock).toHaveBeenCalledWith({
      page: 2,
      query: "best sellers",
      sortBy: "price-high-to-low",
    })
  })
  getProductsMock.mockClear()

  user.click(getByLabelText(/sort by/i))
  user.click(getByText(/lowest price/i))

  await waitFor(() => {
    expect(getProductsMock).toHaveBeenCalledTimes(1)
    expect(getProductsMock).toHaveBeenCalledWith({
      page: 2,
      query: "best sellers",
      sortBy: "price-low-to-high",
    })
  })
  getProductsMock.mockClear()

  user.click(getByLabelText(/sort by/i))
  user.click(getByText(/highest price/i))

  await waitFor(() => {
    expect(getProductsMock).toHaveBeenCalledTimes(1)
    expect(getProductsMock).toHaveBeenCalledWith({
      page: 2,
      query: "best sellers",
      sortBy: "price-high-to-low",
    })
  })
  getProductsMock.mockClear()
})

it("Opens and closes the modal", async () => {
  const r = await asyncRender(<Page />)

  const modalButton = r.getByText(/view my cart/i)
  modalButton.click()

  // Modal is open
  const modal = r.getByTestId("modal")

  const closeButton = getByText(modal, /close/i)
  closeButton.click()

  expect(r.queryByTestId("modal")).toBeNull()
})

it.only("Add to cart button adds and item to the cart", async () => {})
