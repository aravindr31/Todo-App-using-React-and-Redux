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
/* eslint-disable no-return-assign, no-param-reassign */
    saveCheck: (state, action) => {
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
/* eslint-enable no-return-assign, no-param-reassign */
  },
});

export const { saveTodo,saveCheck } = todoSlice.actions;
export const selectTodoList = (state) => state.todos.todoList;
export default todoSlice.reducer;
