import React from "react"
import { noopTemplate as css } from "lib/utils"

export type AspectRatioBoxProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  aspectRatio: number
}

export default ({
  aspectRatio,
  style,
  children,
  ...rest
}: AspectRatioBoxProps) => {
  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <div style={{ paddingTop: `${aspectRatio * 100}%`, width: "100%" }} />
      <div
        {...rest}
        css={css`
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        `}
      >
        {children}
      </div>
    </div>
  )
}
