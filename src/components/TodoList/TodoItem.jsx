import React, { useContext } from 'react';
import { TodoContext } from '../../contexts/TodoContext';
import { updateTodo, deleteTodo } from '../../apis/api';

export const TodoItem = ({ todo }) => {
    const { dispatch } = useContext(TodoContext);
    
    const handleToggle = () => {
        updateTodo(todo.id, { done: !todo.done });
        dispatch({ type: 'DONE', id: todo.id });
    };
    
    const handleDelete = () => {
        deleteTodo(todo.id);
        dispatch({ type: 'DELETE', id: todo.id });
    };
    
    return (
        <div className="todo-item">
            <span 
                className={`todo-text ${todo.done ? 'done' : ''}`}
                onClick={handleToggle}
            >
                {todo.text}
            </span>
            <button 
                className="delete-btn"
                onClick={handleDelete}
            >
                ×
            </button>
        </div>
    );
};
