import api from "../../../api";
export function fetchProducts(dispatch, getState) {
  api().then(data => {
    // note: just `dispatch` here now
    console.log("Stage 2: Fetch Developers");
    dispatch(productsFetched(data));
  });
}

export function productsFetched(data) {
  console.log("Stage 3: Dispatch");

  return {
    type: "products/FETCHED",
    payload: data
  };
}
