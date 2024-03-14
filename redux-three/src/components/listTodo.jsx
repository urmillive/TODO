import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todoSlice'
import { decrement } from '../features/counterSlice';

const ListTodo = () => {
    const todos = useSelector(state => state.todo.todos);
    const counter = useSelector(state => state.counter.value)
    const dispatch = useDispatch();
    return (
        <div>
            { <h1 style={ { color: 'lightsalmon' } }>{ counter }</h1> }
            <h1>Todos</h1>  
            <ul>
                { todos.map((todo) => (
                    <li key={ todo.id }>
                        { todo.text }
                        <button onClick={ () => { dispatch(removeTodo(todo.id)); dispatch(decrement()) } }>Remove</button>
                    </li>
                )) }
            </ul>
        </div>
    )
}

export default ListTodo
