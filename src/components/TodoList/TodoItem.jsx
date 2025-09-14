import React, { useContext } from 'react';
import { TodoContext } from '../../contexts/TodoContext';

export const TodoItem = ({ todo }) => {
    const { updateTodo, removeTodo } = useContext(TodoContext);
    
    const handleToggle = () => {
        updateTodo(todo.id, { ...todo, done: !todo.done });
    };
    
    const handleDelete = () => {
        removeTodo(todo.id);
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
