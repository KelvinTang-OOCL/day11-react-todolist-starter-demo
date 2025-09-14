import {useReducer} from "react";
import './App.css';
import {initialState, todoReducer} from "./reducers/todoReducer";
import {TodoList} from "./components/TodoList/TodoList";
import {TodoContext} from './contexts/TodoContext';
import {createBrowserRouter, RouterProvider} from "react-router";
import {DefaultLayout} from "./layouts/DefaultLayout";
import {About} from "./components/About";

function App() {
    const [todos, dispatch] = useReducer(todoReducer, initialState);
    const router = createBrowserRouter([
        {
            path: '/',
            element: <DefaultLayout/>,
            children: [
                {
                    path: '',
                    element: <h1>Hello Router</h1>
                },
                {
                    path: 'todos',
                    element: <TodoList/>
                },
                {
                    path:'about',
                    element: <About/>
                }
            ]
        }
    ])
    return (
        <div className="App">
            <TodoContext.Provider value={{todos, dispatch}}>
                <RouterProvider router={router}></RouterProvider>
            </TodoContext.Provider>
        </div>
    );
}

export default App;
