import React from "react"
import { noopTemplate as css } from "lib/utils"
import Typography, { TypographyProps } from "@material-ui/core/Typography"

export type TextProps = TypographyProps & {
  component?: React.ElementType
  bold?: boolean
  lineThrough?: boolean
}

/**
 * Text component that encapsulates all common text styling for the application
 */
const Text = ({ color, bold, lineThrough, ...props }: TextProps) => {
  return (
    <Typography
      {...props}
      color={color || "textPrimary"}
      css={css`
        ${bold ? "font-weight: bold;" : ""}
        ${lineThrough ? "text-decoration: line-through;" : ""}
      `}
    />
  )
}

export default Text