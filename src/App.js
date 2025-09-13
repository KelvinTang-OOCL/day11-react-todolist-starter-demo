import {useReducer} from "react";
import './App.css';
import {initialState, todoReducer} from "./reducers/todoReducer";
import {TodoContext} from "./contexts/TodoContext";
import {TodoList} from "./components/TodoList";

function App() {
    const [todos, dispatch] = useReducer(todoReducer, initialState);
    return (
        <div className="App">
            <TodoContext.Provider value={{todos, dispatch}}>
                <TodoList/>
            </TodoContext.Provider>
        </div>
    );
}

export default App;
