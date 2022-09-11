import { createAsyncThunk, createSlice, createAction } from '@reduxjs/toolkit'
import { fetchProducts } from './ProductAPI'

// about createAction 
// https://redux-toolkit.js.org/api/createAction
//Redux-ի "helper function"-ից մեկն է, որի միջոցով ստեղծվում է "action"
export const incrementBy = createAction('incrementBy')

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
    createActionData: ""
  },
  reducers: {
    getAll: (state) => {
      // state = Proxy{} որովհետև մենք չունենք անմիջական "доступ" գլոբալ ՛state՛-ին 
      // այս ՛state՛-ը ոչինչ չգիտի մեր գլոբալ ՛state՛-ի մասին, այն մեր "initialState"-ն է
      console.log(state)
      state.simpleProduct = [{ id: 1 }]
    },
    getByID: (state) => {
      state.value -= 1
    },
    deleteByID: (state, action) => {
      state.value += action.payload
    },
  },
  //բացի օրինակում ներկայացված ասինխռոն գործողությանը,
  // extraReducers-ը թույլ է տալիս հետեվել այլ տիպի "action"-ին ևս*  
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
      .addCase(addProductsAsync.rejected, (state) => {
        return {
          ...state,
          status: "fail"
        }
      })
      .addCase(incrementBy, (state) => { // with createAction
        return {
          ...state,
          createActionData: "done!"
        }
      })
  }
})

export default productSlice.reducer
export const { getAll, getByID, deleteByID, } = productSlice.actions




// * extraReducers: {
//     [incrementBy]: (state, action) => {
//       return state + action.payload
//     },
//     'some/other/action': (state, action) => {},
//   },