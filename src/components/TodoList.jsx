import {TodoContext} from "../contexts/TodoContext";
import {useContext} from 'react'
const TodoList = () => {
    // const value = useContext(TodoContext)
    // const {state , dispatch} = value
    const {state, dispatch} = useContext(TodoContext)
    return <div>
        <div>This is the TodoList Component.</div>
        {
            state.map(todo => {
                return <div>{todo.text}</div>
            })
        }
    </div>
}

export default TodoList