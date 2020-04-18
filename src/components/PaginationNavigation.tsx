import React from "react"
import { noopTemplate as css } from "lib/utils"
import { Text, TextProps } from "lib/components"
import { theme } from "theme"

export type PaginationNavigationProps = {
  currentPage: number
  pages: number
  onPageChange: (page: number) => void
}

const PaginationNavigation = ({
  currentPage,
  pages,
  onPageChange,
}: PaginationNavigationProps) => {
  function renderButton(pageNumber: number) {
    return (
      <Button
        selected={pageNumber === currentPage}
        onClick={() => {
          if (currentPage !== pageNumber) {
            onPageChange(pageNumber)
          }
        }}
      >
        {pageNumber}
      </Button>
    )
  }

  function renderMiddleButton(pageNumber: number) {
    return pageNumber > 1 && pageNumber < pages
      ? renderButton(pageNumber)
      : null
  }

  return (
    <div className="fa-c">
      <Button
        onClick={() => {
          if (currentPage > 1) {
            onPageChange(currentPage - 1)
          }
        }}
      >
        Back
      </Button>

      {renderButton(1)}

      {currentPage >= 4 ? "..." : null}

      {renderMiddleButton(currentPage - 1)}
      {renderMiddleButton(currentPage)}
      {renderMiddleButton(currentPage + 1)}

      {currentPage <= pages - 3 ? "..." : null}

      {renderButton(pages)}

      <Button
        onClick={() => {
          if (currentPage < pages) {
            onPageChange(currentPage + 1)
          }
        }}
      >
        More
      </Button>
    </div>
  )
}

export default PaginationNavigation

type ButtonProps = TextProps & {
  selected?: boolean
}

const Button = ({ selected, ...rest }: ButtonProps) => {
  return (
    <Text
      component="button"
      variant="caption"
      color="textSecondary"
      css={css`
        min-width: 32px;
        padding: 8px;
        border: 1px solid ${theme.colors.outline};
        background-color: ${selected ? "#555" : "white"};
        ${selected ? "color: white;" : ""}
      `}
      {...rest}
    />
  )
}
