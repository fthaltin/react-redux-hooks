import { ADD_TO_CART, REMOVE_FROM_CART } from "../../types/cart/cart.type"

export const addToCart = (count) => {
  return {
    type: ADD_TO_CART,
    payload: count || 1,
  }
}

export const removeFromCart = () => {
  return {
    type: REMOVE_FROM_CART
  }
}