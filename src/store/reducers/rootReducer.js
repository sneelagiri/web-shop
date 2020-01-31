// src/store/reducer.js
import { combineReducers } from "redux";
import productsReducer from "./products/reducer";
import cartReducer from "./cart/reducer";
export default combineReducers({
  productsReducer: productsReducer,
  cartReducer: cartReducer
  // we can add more "slice" subreducers here later on...
});
