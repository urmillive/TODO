import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { addTodo } from "../reducers/todoSlice"
const AddTodo = () => {
    const [ input, setInput ] = useState('');
    const dispatch = useDispatch();
    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }
    return (
        <form onSubmit={ addTodoHandler }>
            <label>
                Name:
                <input type="text" name="name" placeholder='Enter Todo' value={ input } onChange={ (e) => setInput(e.target.value) } />
            </label>
            <input type="submit" value="Add Todo" />
        </form>
    )
}

export default AddTodo