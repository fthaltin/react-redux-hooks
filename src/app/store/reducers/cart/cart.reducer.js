import { ADD_TO_CART, REMOVE_FROM_CART } from "../../types/cart/cart.type";

const INITIAL_STATE = {
  count: 10
}
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {...state, count: state.count + action.payload};

    case REMOVE_FROM_CART:
      return {...state, count: state.count - 1};
  
    default:
      return state;
  }
}

export default cartReducer;