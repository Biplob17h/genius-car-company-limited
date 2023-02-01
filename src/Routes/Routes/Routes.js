import Authentication from "../../Layout/Authentication/Authentication";
import Login from "../../Pages/Authentication/Login/Login";
import Register from "../../Pages/Authentication/Register/Register";
import Home from "../../Pages/Home/Home/Home";
import Orders from "../../Pages/Orders/Orders/Orders";
import NotFound from "../../Pages/Shared/NotFound/NotFound";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main/Main");

const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/order',
                element:<Orders></Orders>
            },
            {
                path:'/notfound',
                element:<NotFound></NotFound>
            }
        ]
    },
    {
        path:'/auth',
        element:<Authentication></Authentication>,
        children:[
            {
                path:'/auth/login',
                element:<Login></Login>
            },
            {
                path:'/auth/register',
                element:<Register></Register>
            }
        ]
    }
])

export default routes;