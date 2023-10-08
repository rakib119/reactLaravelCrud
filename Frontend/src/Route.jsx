import {Navigate, createBrowserRouter} from "react-router-dom"
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";
import Users from "./views/Users";
import Dashboard from "./views/Dashboard";
import NotFound from "../NotFound";
import GuestLayout from "./components/layouts/GuestLayout";
import DefaultLayout from "./components/layouts/DefaultLayout";

const route= createBrowserRouter([
    {
        path:'/',
        element:<Navigate to="/users"/>
    },
    // GUEST ROUTE
    {
        path:'/',
        element: <GuestLayout/>,
        children:[
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            }
        ]
    },
    // AUTHENTICATED ROUTE
    {
        path:'/',
        element: <DefaultLayout/>,
        children:[
            {
                path:'/users',
                element:<Users/>
            },
            {
                path:'/dashboard',
                element:<Dashboard/>
            }
        ]
    },
    {
        path:'*',
        element:<NotFound/>
    }

]);

export default route;
