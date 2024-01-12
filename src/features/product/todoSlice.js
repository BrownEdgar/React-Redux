import { createSlice, } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: "PRODUCTS",
  initialState: {
    todolist: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todolist.push({
        id: new Date().toISOString(),
        text: action.payload,
        complited: false,
      })
    }
  }
})

export default todoSlice.reducer
export const { addTodo } = todoSlice.actions



