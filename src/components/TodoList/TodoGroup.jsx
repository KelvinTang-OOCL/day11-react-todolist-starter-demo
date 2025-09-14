import React, {useContext, useEffect} from 'react';
import {TodoContext} from '../../contexts/TodoContext';
import {TodoItem} from './TodoItem';
import {getTodos} from "../../apis/api";

export const TodoGroup = () => {
    const {todos, dispatch} = useContext(TodoContext);

    useEffect(() => {
        getTodos().then(data => {
            dispatch({type: 'LOAD_TODOS', todos: data});
        });
    }, [dispatch]);

    return (
        <div className="todo-group">
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo}/>
            ))}
        </div>
    );
};
