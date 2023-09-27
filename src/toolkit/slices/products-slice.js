import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchPorducts= createAsyncThunk('productsSlice/fetchProducts', async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  const data = await res.json();
  return data;
})


export const productsSlice = createSlice({
  initialState: [],
  name:'productsSlice',
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPorducts.fulfilled, (state, action) => {
      return action.payload;
    })
  }

})

export const { } = productsSlice.actions;
export default productsSlice.reducer;