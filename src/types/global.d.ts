import { CSSProperties } from "react"

declare global {
  export interface Stylable {
    className?: string
    style?: CSSProperties
  }

  type OptionalKeys<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? K : never
  }[keyof T]
}

export {}
