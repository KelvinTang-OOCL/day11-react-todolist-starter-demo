import {TodoContext} from "../contexts/TodoContext";
import {useContext} from 'react'
import './TodoList.css'
const TodoList = () => {
    // const value = useContext(TodoContext)
    // const {state , dispatch} = value
    const {state, dispatch} = useContext(TodoContext)
    function toggleDone(id) {
        const action = {type: 'DONE', id: id} ;
        dispatch(action)
    }
    return <div className={'todo-group'}>
        <div>This is the TodoList Component.</div>
        {
            state.map(({id, text, done}) => {
                return <div className={`todo-item ${done? 'done': ''}`}
                            onClick={() => toggleDone(id)}>{text}</div>
            })
        }
    </div>
}

export default TodoList