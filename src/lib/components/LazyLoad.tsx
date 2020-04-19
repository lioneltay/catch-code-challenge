import React from "react"
import ReactLazyLoad, { LazyLoadProps } from "react-lazyload"

const isTest = process.env.NODE_ENV === "test"

const LazyLoad = (props: LazyLoadProps) => {
  return isTest ? (
    <React.Fragment>{props.children}</React.Fragment>
  ) : (
    <ReactLazyLoad {...props} />
  )
}

export default LazyLoad
