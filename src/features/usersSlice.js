import { asyncThunkCreator, buildCreateSlice, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';

// եթե ուղում ենք ՛createSlice՛-ի մեջ օգտագործենք async ներ հնարավորությունները
// պետք է այս գրառումը
const createAppSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
})


////////////////////// 1 ///////////////////////////////// 

function isRejectedAction(action) {
  return action.type.endsWith('rejected')
}

/////////////////////////////////////////////////////// 


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
      // An object containing `{pending?, rejected?, fulfilled?, settled?, options?}` 
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
        settled: (state) => {
          state.loading = false
        },

      }
    ),
    todoColorSelected: create.preparedReducer(
      // промежуточный ֆունկցիա,որը հաջորդող ֆունկցիայի համար նախապատրաստում է
      // ՛payload՛, ❗️ պետք է անպաըման վերադարձնի օբյեկտ մեջը ՛payload՛
      // 📌 https://redux-toolkit.js.org/api/createslice#createpreparedreducer
      (text) => {
        const id = nanoid()
        return { payload: { id, text } }
      },
      (state, action) => {
        state.users.push(action.payload)
      },
    ),
    add: (state, action) => {
      console.log(action);
      state.count += 1
    }
  }),
  selectors: {
    selectUsers: (state) => state.users,
  },
  extraReducers(builder) {
    ////////////////////// 2 /////////////////////////////
    builder
      .addMatcher(
        isRejectedAction,
        // `action` type guard
        // աշխատում է ամեն անգամ երբ isRejectedAction-ի պայմանը ՛true՛ է տալիս
        (state, action) => {

          state.error = action.error
        }
      )
      //////////////////////// 3 /////////////////////////////
      // and provide a default case if no other handlers matched
      // պետք է կանչվի միայն ՛addMatcher՛-ից հետո
      // աշխատում է եթե ՛action՛-ի (event) համար որևիցե 'reducer' չի աշխատել
      // 📌 https://redux.js.org/tutorials/essentials/part-5-async-logic#reducers-and-loading-actions
      .addDefaultCase((state, action) => {
        console.log(1, action);
        state.count = state.count ? state.count + 1 : 1;
        state.lastAction = action.type
      })
  }
})


export const { selectUsers } = usersSlice.selectors
export const { fetchTodo, todoColorSelected, add } = usersSlice.actions
export default usersSlice.reducer