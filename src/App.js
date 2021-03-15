import React from "react";
import Input from "./components/Input";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useSelector } from "react-redux";
import {selectTodoList} from './features/todoSlice'

function App() {
  const todoList = useSelector(selectTodoList)
  return (
    <div className="App">
      <h2>TodoApp using React and Redux</h2>
      {/* todo list */}
      {/* <div className="app_container"> */}
      <div className="app_container">
        <div className="todo_container">
          {todoList.map((item) => (
            <TodoItems name={item.item} done={item.done} id={item.itemId} />
          ))}
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
