import React, { useState } from "react";
import "./Input.css";
import { useDispatch } from "react-redux";
import { saveTodo } from "../features/todoSlice";
function Input() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodo = () => {
    dispatch(
      saveTodo({
        itemId: Date.now(),
        item: input,
        done: false,
      })
    );
    setInput('')    
  };


  return (
    <div className="input">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        autoFocus
      />
      {/* <input type="submit" onClick={addTodo} value = 'Add'/> */}
      <button onClick={addTodo} type="submit">Add</button>
    </div>
  );
}

export default Input;
