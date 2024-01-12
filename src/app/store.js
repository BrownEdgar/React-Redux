import { configureStore, combineReducers } from '@reduxjs/toolkit'
import todoSlice from '../features/product/todoSlice'

//ավելացնում ենք անհրաժեշտ import-ը
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
  key: 'root',
  storage,
  // blacklist: ['navigation'] // ինչ Չպետք է պահել localStorage-ում
  // whitelist: ['navigation'] // ինչ պետք է պահել localStorage-ում
}

const myMiddleware = (store) => (next) => (action) => {
  console.log('myMiddleware')
  next(action)
}

const rootReducer = combineReducers({
  todos: todoSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  //ավելանում է նաև անհրաժեշտ middleware-ը
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,],
      },
    }).concat(myMiddleware)
})

export const persistor = persistStore(store)

export default store


// const reducer = combineReducers(reducers)
// applyMiddleware supercharges createStore with middleware:
// const store = createStore(reducer, applyMiddleware(thunk))