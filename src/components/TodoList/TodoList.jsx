import './TodoList.css'
import { TodoGroup } from "./TodoGroup";
import { TodoGenerator } from "./TodoGenerator";

export const TodoList = () => {
    return (
        <div className="todo-list">
            <h1 className="todo-title">Todo List</h1>
            <TodoGroup />
            <TodoGenerator />
        </div>
    );
}