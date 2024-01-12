
import { configureStore } from '@reduxjs/toolkit';
import usersSlice from '../features/usersSlice';

const store = configureStore({
  reducer: {
    users: usersSlice
  }
})

export default store