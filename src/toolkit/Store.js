import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from './slices/products-slice'
import cartSlice from "./slices/cart-slice";

 

export const store = configureStore(({
  reducer: {
    products: ProductsSlice,
    cart: cartSlice,
  }
}))