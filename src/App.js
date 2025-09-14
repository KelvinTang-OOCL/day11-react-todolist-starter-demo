import {useReducer} from "react";
import './App.css';
import {initialState, todoReducer} from "./reducers/todoReducer";
import {TodoList} from "./components/TodoList";
import {TodoContext} from './contexts/TodoContext';
import {createBrowserRouter, NavLink, Outlet, RouterProvider} from "react-router";

function Layout() {
    return <>
        <nav>
            <ul>
                <li>
                    <NavLink to={'/'}>Home </NavLink>
                </li>
                <li><NavLink to={'/todos'}>Todo List</NavLink></li>
                <li><NavLink to={'/about'}>About Us</NavLink></li>
            </ul>
        </nav>
        <main>
            <Outlet/>
        </main>
    </>;
}

function About() {
    return <h2>About us</h2>;
}

function App() {
    const [todos, dispatch] = useReducer(todoReducer, initialState);
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout/>,
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
