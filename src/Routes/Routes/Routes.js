import Authentication from "../../Layout/Authentication/Authentication";
import Login from "../../Pages/Authentication/Login/Login";
import Register from "../../Pages/Authentication/Register/Register";
import UpdateProfile from "../../Pages/Authentication/Register/UpdateProfile";
import Home from "../../Pages/Home/Home/Home";
import AddService from "../../Pages/Orders/AddService/AddService";
import CheckOut from "../../Pages/Orders/CheckOut/CheckOut";
import Orders from "../../Pages/Orders/Orders/Orders";
import NotFound from "../../Pages/Shared/NotFound/NotFound";
import Profile from "../../Pages/Shared/Profile/Profile";
import ProfileVeryFy from "../../Pages/Shared/Profile/ProfileVeryFy";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

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
                element:<PrivateRoutes><Orders></Orders></PrivateRoutes>
                
            },
            {
                path:'/notfound',
                element:<PrivateRoutes><NotFound></NotFound></PrivateRoutes>
            },
            {
                path:'/checkout/:id',
                element:<PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>,
                loader : ({params}) => fetch(`http://localhost:5000/add/${params.id}`)
            },
            {
                path:'/add/:id',
                element:<PrivateRoutes><AddService></AddService></PrivateRoutes>,
                loader : ({params}) => fetch(`http://localhost:5000/add/${params.id}`)
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
            },
            {
                path:'/auth/update',
                element:<UpdateProfile></UpdateProfile>
            },
            {
                path:'/auth/profile',
                element:<ProfileVeryFy><Profile></Profile></ProfileVeryFy>
            }
        ]
    }
])

export default routes;