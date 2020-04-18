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
  const divider = <span>...</span>

  function renderButton(props: { pageNumber: number; label?: string }) {
    const { pageNumber, label } = props
    const clampedPageNumber = Math.min(pages, Math.max(1, pageNumber))

    return (
      <Button
        // only number buttons can be selected
        selected={!label && clampedPageNumber === currentPage}
        onClick={() => {
          if (currentPage !== clampedPageNumber) {
            onPageChange(clampedPageNumber)
          }
        }}
      >
        {label || clampedPageNumber}
      </Button>
    )
  }

  function renderMiddleButton(pageNumber: number) {
    return pageNumber > 1 && pageNumber < pages
      ? renderButton({ pageNumber })
      : null
  }

  return (
    <div className="fa-c">
      {renderButton({ pageNumber: currentPage - 1, label: "« Back" })}

      {renderButton({ pageNumber: 1 })}

      {currentPage >= 4 ? divider : null}

      {renderMiddleButton(currentPage - 1)}
      {renderMiddleButton(currentPage)}
      {renderMiddleButton(currentPage + 1)}

      {currentPage <= pages - 3 ? divider : null}

      {renderButton({ pageNumber: pages })}

      {renderButton({ pageNumber: currentPage + 1, label: "More »" })}
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
