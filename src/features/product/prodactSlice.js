import { createAsyncThunk, createSlice, createAction, createSelector } from '@reduxjs/toolkit'

import { fetchProducts } from './ProductAPI'


// // new way
// createSelector()
// ամեն անգամ կվերադարձնի նոր զանգված + թարմացում
export const complitedTodo = state => {
  console.log(state);
  return state.products.asyncTodo
}

export const selectComplited = createSelector(
  complitedTodo,
  (todos) => {
    return todos.filter(todo => todo.completed)
  }
)


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
    asyncTodo: [],
    todoContainer: [],
    createActionData: ""
  },
  reducers: {
    filteredTodo: (state) => {
      state.asyncTodo = state.todoContainer.filter(todo => todo.completed)
    },
    cancelFilter: (state) => {
      state.asyncTodo = state.todoContainer
    }
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
          asyncTodo: action.payload,
          todoContainer: action.payload
        }
      })
      .addCase(addProductsAsync.rejected, (state) => {
        return {
          ...state,
          status: "fail"
        }
      })
      .addCase(incrementBy, (state) => {
        console.log("asd"); // with createAction(in App.js row 9)
        return {
          ...state,
          createActionData: "asd!"
        }
      })
  }
})

export default productSlice.reducer
export const { filteredTodo, cancelFilter } = productSlice.actions


