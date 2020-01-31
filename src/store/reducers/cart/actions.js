export function fetchProduct(product) {
  console.log("Stage 2: Fetch Cart Products");
  return function thunk(dispatch, getState) {
    dispatch(setCart(product));
  };
}

export function setCart(data) {
  console.log("Stage 3: Dispatch", data);

  return {
    type: "cart/FETCHED",
    payload: data
  };
}

export function removeProduct(id) {
  console.log("Stage 2: Remove Product");
  return function thunk(dispatch, getState) {
    let cart = getState().cartReducer.cartItems;
    // console.log(cart);
    cart.find(cartItem => {
      if (cartItem.id === id) {
        const [cartItem, ...noA] = cart;
        cart = noA;
        return cart;
      }
    });
    // console.log(cart);
    dispatch(removeItem(cart));
  };
}

export function removeItem(data) {
  return {
    type: "cart/removeItem",
    payload: data
  };
}
