import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Error from "../Pages/ErrorPage/Error";
import Home from "../Pages/MainContent/Home";
import Brands from "../Pages/Brands/Brands";
import AboutDev from "../Pages/AboutDev/AboutDev";
import Profile from './../Pages/Profile/Profile';
import TopBrands from "../components/TopBrands/TopBrands";
import Brand from "../Pages/Brand/Brand";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        loader: ()=> fetch("../data.json"),
        errorElement: <Error />,
        children:[
            {
                path: "/",
                loader: ()=> fetch("../data.json"),
                element: <Home />
            },
            {
                path: "/",
                loader: ()=> fetch("../../public/data.json"),
                element:<TopBrands />
            },
            {
                path: "/brands",
                element: <Brands />
            },
            {
                path: "/brand/:name",
                element: <Brand />
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