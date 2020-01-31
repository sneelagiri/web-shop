const initialState = { cartItems: [] };
export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "cart/FETCHED": {
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    }
    case "cart/removeItem": {
      return { ...state, cartItems: [...action.payload] };
    }
    default: {
      return state;
    }
  }
}
