import { configureStore } from '@reduxjs/toolkit'
import prodactSlice from '../features/product/prodactSlice'
import { applyMiddleware } from 'redux'



const myMiddleware = (store) => (next) => (action) => {
  console.log('myMiddleware');
  console.log(action);
  next(action)
}
export default configureStore({
  reducer: {
    products: prodactSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(myMiddleware),

})


// const reducer = combineReducers(reducers)
// applyMiddleware supercharges createStore with middleware:
// const store = createStore(reducer, applyMiddleware(thunk))