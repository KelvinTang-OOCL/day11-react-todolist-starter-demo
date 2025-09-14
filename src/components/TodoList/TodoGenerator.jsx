import React, {useState, useContext} from 'react';
import {TodoContext} from '../../contexts/TodoContext';

export const TodoGenerator = () => {
    const [inputValue, setInputValue] = useState('');
    const {dispatch} = useContext(TodoContext);

    const handleSubmit = () => {
        if (inputValue && inputValue.trim()) {
            dispatch({
                type: 'ADD',
                text: inputValue.trim(),
                id: Date.now() // 简单的ID生成
            });
            setInputValue('');
        }
    };

    return (
        <div className="todo-generator">
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter a new todo..."
                className="todo-input"
            />
            <button type="submit" className="add-btn" onClick={handleSubmit}>
                add
            </button>
        </div>
    );
};
