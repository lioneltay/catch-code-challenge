import { createStore } from "redux"
import { Product } from "services/api"

export type State = {
  cart: Product[]
}

type AddToCartInput = {
  product: Product
}

export const addToCart = ({ product }: AddToCartInput) =>
  ({
    type: "ADD_TO_CART",
    payload: {
      product,
    },
  } as const)

const Actions = {
  addToCart,
}

type Helpers<T> = ReturnType<T[keyof T]>

type Action = Helpers<typeof Actions>

const initialState: State = {
  cart: [],
}

const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      return {
        ...state,
        cart: [...state.cart, action.payload.product],
      }
    }
    default: {
      return state
    }
  }
}

export const store = createStore(reducer)
