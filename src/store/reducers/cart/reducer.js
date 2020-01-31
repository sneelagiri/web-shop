const initialState = { cartItems: [] };
export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "cart/FETCHED": {
      return {
        cartItems: [...state, action.payload]
      };
    }
    default: {
      return state;
    }
  }
}
