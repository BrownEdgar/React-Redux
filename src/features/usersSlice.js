import { asyncThunkCreator, buildCreateSlice, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// եթե ուղում ենք ՛createSlice՛-ի մեջ օգտագործենք async ներ հնարավորությունները
// պետք է այս գրառումը
const createAppSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
})

const usersSlice = createAppSlice({
  name: 'users',
  initialState: {
    loading: false,
    users: [],
    error: null
  },
  reducers: (create) => ({
    fetchTodo: create.asyncThunk(
      async () => {
        const res = await axios('https://jsonplaceholder.typicode.com/users')
        const users = res.data.map(user => user.name);
        return users
      },
      // An object containing `{pending?, rejected?, fulfilled?, settled?, options?}` second
      {
        pending: (state) => {
          state.loading = true
        },
        rejected: (state, action) => {
          state.error = action.payload ?? action.error
        },
        fulfilled: (state, action) => {
          state.users = action.payload
        },
        // settled կանչվում է թե մերժված թե հաջող ավարտված գործողություններից հետո
        settled: (state, action) => {
          state.loading = false
        },
        options
      }
    )
  }),
  selectors: {
    selectUsers: (state) => state.users,
  }
})


export const { selectUsers } = usersSlice.selectors
export const { fetchTodo } = usersSlice.actions
export default usersSlice.reducer