import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchProducts } from './ProductAPI'

//about createAsyncThunk
// link => https://redux-toolkit.js.org/api/createAsyncThunk
// link => https://youtu.be/mVVQNVpfUsQ
export const addProductsAsync = createAsyncThunk(
  "PRODUCTS/getAsync",
  async (url) => {
    console.log('url', url)
    const response = await fetchProducts(url)
    return response
  })

export const productSlice = createSlice({
  name: "PRODUCTS",
  initialState: {
    simpleProduct: [],
    asyncProduct: [],
  },
  reducers: {
    getAll: (state) => {
      state.simpleProduct = [{ id: 1 }]
    },
    getByID: (state, action) => {
      state.value -= 1
    },
    deleteByID: (state, action) => {
      state.value += action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addProductsAsync.pending, (state) => {
        return {
          ...state,
          status: "loading"
        }
      })
      .addCase(addProductsAsync.fulfilled, (state, action) => {
        console.log('action', action)
        return {
          ...state,
          status: "success",
          asyncProduct: action.payload
        }
      })
      .addCase(addProductsAsync.rejected, (state, action) => {
        console.log('action')
        return {
          ...state,
          status: "fail"
        }
      })
  }
})

export const { getAll, getByID, deleteByID, } = productSlice.actions
export default productSlice.reducer