import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todoList.push(action.payload);
    },

    saveCheck: (state, action) => {
      /* eslint-disable no-return-assign, no-param-reassign */
      state.todoList.map(item => {
        if (action.payload === item.itemId) {
          if (item.done === true) {
          item.done = false;
          } else {
          item.done = true;
          }
        }
      }
      );
    },
  },
});
/* eslint-disable no-return-assign, no-param-reassign */
export const { saveTodo,saveCheck } = todoSlice.actions;
export const selectTodoList = (state) => state.todos.todoList;
export default todoSlice.reducer;
