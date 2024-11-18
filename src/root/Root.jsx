import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Error from "../Pages/ErrorPage/Error";
import Home from "../Pages/MainContent/Home";
import Brands from "../Pages/Brands/Brands";
import AboutDev from "../Pages/AboutDev/AboutDev";
import Profile from './../Pages/Profile/Profile';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <Error />,
        children:[
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/brands",
                element: <Brands />
            },
            {
                path: "/about-dev",
                element: <AboutDev />
            },
            {
                path: "/profile",
                element: <Profile />
            }
        ]
    },
]);

export default router;