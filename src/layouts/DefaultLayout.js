import {NavLink, Outlet} from "react-router";

export function DefaultLayout() {
    return <>
        <nav>
            <ul>
                <li><NavLink to={'/'}>Home </NavLink></li>
                <li><NavLink to={'/todos'}>Todo List</NavLink></li>
                <li><NavLink to={'/about'}>About Us</NavLink></li>
            </ul>
        </nav>
        <main>
            <Outlet/>
        </main>
    </>;
}