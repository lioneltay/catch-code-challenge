import React from "react"
import { theme } from "theme"
import { noopTemplate as css, isNil, displayPrice } from "lib/utils"

import { Text, AspectRatioBox, LazyLoad } from "lib/components"
import Dotdotdot from "react-dotdotdot"

export type ProductCardProps = Stylable & {
  id: string
  name: string
  salePrice?: number | null
  retailPrice: number
  imageUrl: string
  quantityAvailable: number
}

const ProductCard = ({
  id,
  imageUrl,
  name,
  retailPrice,
  salePrice,
  quantityAvailable,
  ...rest
}: ProductCardProps) => {
  const hasSalePrice = !isNil(salePrice)

  return (
    <div
      css={css`
        border: 1px solid ${theme.colors.outline};
        background: white;
      `}
      {...rest}
    >
      <AspectRatioBox className="fa-c fj-c" aspectRatio={195.52 / 238}>
        <LazyLoad once>
          <img
            src={imageUrl}
            alt={name}
            css={css`
              width: 100%;
              max-height: 100%;
              object-fit: contain;
            `}
          />
        </LazyLoad>

        {quantityAvailable === 0 ? (
          <div
            className="px-3"
            css={css`
              background: grey;
              color: white;
              position: absolute;
              padding-top: 0;
              bottom: 12px;
              right: 12px;
            `}
          >
            <Text
              variant="overline"
              css={css`
                color: white;
              `}
            >
              SOLD OUT
            </Text>
          </div>
        ) : null}
      </AspectRatioBox>

      <div className="p-4">
        <Text
          component="div"
          align="center"
          css={css`
            height: 48px;
          `}
        >
          <Dotdotdot clamp={2}>{name}</Dotdotdot>
        </Text>

        <Text
          variant="body1"
          align="center"
          className="mt-3"
          lineThrough={hasSalePrice}
          css={css`
            height: 24px;
          `}
        >
          {hasSalePrice && retailPrice !== 0 ? displayPrice(retailPrice) : ""}
        </Text>

        <Text variant="h5" component="p" align="center" className="mt-3" bold>
          {salePrice && hasSalePrice
            ? displayPrice(salePrice)
            : displayPrice(retailPrice)}
        </Text>
      </div>
    </div>
  )
}

export default ProductCard
