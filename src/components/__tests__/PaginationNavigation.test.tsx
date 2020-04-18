import React from "react"
import { render } from "testing"
import PaginationNavigation from "../PaginationNavigation"
import user from "@testing-library/user-event"

describe("<PaginationNavigation />", () => {
  it("calls onPageChange when clicking a button", () => {
    const onPageChange = jest.fn()
    const { getByText } = render(
      <PaginationNavigation
        currentPage={3}
        pages={5}
        onPageChange={onPageChange}
      />,
    )

    user.click(getByText(/back/i))
    expect(onPageChange).toHaveBeenCalledTimes(1)
    expect(onPageChange).toHaveBeenCalledWith(2)
    onPageChange.mockClear()

    user.click(getByText(/more/i))
    expect(onPageChange).toHaveBeenCalledTimes(1)
    expect(onPageChange).toHaveBeenCalledWith(4)
    onPageChange.mockClear()

    user.click(getByText("5"))
    expect(onPageChange).toHaveBeenCalledTimes(1)
    expect(onPageChange).toHaveBeenCalledWith(5)
    onPageChange.mockClear()
  })

  describe("renders buttons correctly", () => {
    const pages = 8

    it("show correct buttons at first page", () => {
      const { getByText, getAllByText } = render(
        <PaginationNavigation
          currentPage={1}
          pages={pages}
          onPageChange={jest.fn()}
        />,
      )

      getByText(/back/i)
      getByText(/more/i)
      getByText("1")
      getByText("2")
      getByText(`${pages}`)
      expect(getAllByText("...").length).toBe(1)
    })

    it("show correct buttons at last page", () => {
      const { getByText, getAllByText } = render(
        <PaginationNavigation
          currentPage={pages}
          pages={pages}
          onPageChange={jest.fn()}
        />,
      )

      getByText(/back/i)
      getByText(/more/i)
      getByText("1")
      getByText(`${pages - 1}`)
      getByText(`${pages}`)
      expect(getAllByText("...").length).toBe(1)
    })

    it("show correct buttons at second page", () => {
      const { getByText, getAllByText } = render(
        <PaginationNavigation
          currentPage={2}
          pages={pages}
          onPageChange={jest.fn()}
        />,
      )

      getByText(/back/i)
      getByText(/more/i)
      getByText("1")
      getByText("2")
      getByText("3")
      getByText(`${pages}`)
      expect(getAllByText("...").length).toBe(1)
    })

    it("show correct buttons at page 2", () => {
      const { getByText, getAllByText } = render(
        <PaginationNavigation
          currentPage={pages - 1}
          pages={pages}
          onPageChange={jest.fn()}
        />,
      )

      getByText(/back/i)
      getByText(/more/i)
      getByText("1")
      getByText(`${pages - 2}`)
      getByText(`${pages - 1}`)
      getByText(`${pages}`)
      expect(getAllByText("...").length).toBe(1)
    })

    it("show correct buttons at somewhere in the middle of all pages", () => {
      const currentPage = Math.floor(pages / 2)
      const { getByText, getAllByText } = render(
        <PaginationNavigation
          currentPage={currentPage}
          pages={pages}
          onPageChange={jest.fn()}
        />,
      )

      getByText(/back/i)
      getByText(/more/i)
      getByText("1")
      getByText(`${currentPage - 1}`)
      getByText(`${currentPage}`)
      getByText(`${currentPage + 1}`)
      getByText(`${pages}`)
      expect(getAllByText("...").length).toBe(2)
    })
  })
})
