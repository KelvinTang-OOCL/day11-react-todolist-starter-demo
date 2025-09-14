import './App.css';
import {TodoList} from "./components/TodoList/TodoList";
import {TodoContext} from './contexts/TodoContext';
import {createBrowserRouter, RouterProvider} from "react-router";
import {DefaultLayout} from "./layouts/DefaultLayout";
import {About} from "./components/About";
import {useTodoService} from "./hooks/useTodoService";

function App() {
    const todoService = useTodoService();

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
    ]);

    return (
        <div className="App">
            <TodoContext.Provider value={todoService}>
                <RouterProvider router={router} />
            </TodoContext.Provider>
        </div>
    );
}

export default App;
