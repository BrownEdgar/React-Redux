import { configureStore } from '@reduxjs/toolkit'
import prodactSlice from '../features/product/prodactSlice'

export default configureStore({
  reducer: {
    products: prodactSlice,
  },
})


// const reducer = combineReducers(reducers)
// applyMiddleware supercharges createStore with middleware:
// const store = createStore(reducer, applyMiddleware(thunk))