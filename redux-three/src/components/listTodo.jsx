import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../reducers/todoSlice'

const ListTodo = () => {
    const todos = useSelector(state => state.todo.todos);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Todos</h1>
            { todos.map((todo) => (
                <li key={ todo.id }>
                    { todo.text }
                    <button onClick={ () => dispatch(removeTodo(todo.id)) }>Remove</button>
                </li>
            )) }
        </div>
    )
}

export default ListTodo
