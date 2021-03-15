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
      state.todoList.map(item => {
        if (action.payload === item.itemId) {
          if (item.done === true) {
           return (item.done = false);
          } else {
           return(item.done = true);
          }
        }
      }
      );
    },
  },
});

export const { saveTodo,saveCheck } = todoSlice.actions;
export const selectTodoList = (state) => state.todos.todoList;
export default todoSlice.reducer;
