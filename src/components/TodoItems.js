import { Checkbox } from '@material-ui/core'
import React from 'react'
import "./TodoItems.css"
import {useDispatch} from 'react-redux'
import {saveCheck} from "../features/todoSlice"
function TodoItems({name,done,id}) {
    const dispatch =useDispatch()
    const handleCheck = ()=>{
        dispatch(saveCheck(id))
    }
    return (
        <div className="todoItems">
          <Checkbox
          checked={done}
          color='secondary'
          value="start"
          onChange={handleCheck}
          inputProps={{ 'aria-label': 'Checkbox A' }}
          />

            <p className={done && "todoItem--done"}>{name}</p>
        </div>
    )
}

export default TodoItems
