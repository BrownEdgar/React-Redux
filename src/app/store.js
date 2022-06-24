import { configureStore } from '@reduxjs/toolkit'
import prodactSlice from '../features/product/prodactSlice'

export default configureStore({
  reducer: {
    prodacts: prodactSlice,
  },
})