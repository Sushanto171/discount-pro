import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Error from "../Pages/ErrorPage/Error";
import Home from "../Pages/MainContent/Home";
import Brands from "../Pages/Brands/Brands";
import AboutDev from "../Pages/AboutDev/AboutDev";
import Profile from './../Pages/Profile/Profile';
import TopBrands from "../components/TopBrands/TopBrands";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from './../PrivateRoute/PrivateRoute';
import Brand from './../Pages/Brand/Brand';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <Error />,
        children:[
            {
                path: "/",
                loader: ()=> fetch("../data.json"),
                element: <Home />
            },
            {
                path: "/",
                loader: ()=> fetch("../data.json"),
                element:<TopBrands />
            },
            {
                path: "/brands",
                loader: ()=> fetch("../data.json"),
                element: <Brands />
            },
            {
                path: "/about-dev",
                element: <AboutDev />
            },
            {
                path: "/brand/:id",
                element: <PrivateRoute ><Brand /></PrivateRoute>
            },
            {
                path: "/profile",
                element:<PrivateRoute ><Profile /></PrivateRoute>
            }
        ]
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/signup",
        element: <SignUp />
    },
]);

export default router;