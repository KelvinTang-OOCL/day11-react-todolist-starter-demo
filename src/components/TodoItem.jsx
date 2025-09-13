import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

export const TodoItem = ({ todo }) => {
    const { dispatch } = useContext(TodoContext);
    
    const handleToggle = () => {
        dispatch({ type: 'DONE', id: todo.id });
    };
    
    const handleDelete = () => {
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
