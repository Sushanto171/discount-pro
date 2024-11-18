import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Error from "../Pages/ErrorPage/Error";
import Home from "../Pages/MainContent/Home";
import Brands from "../Pages/Brands/Brands";
import AboutDev from "../Pages/AboutDev/AboutDev";
import Profile from './../Pages/Profile/Profile';
import TopBrands from "../components/TopBrands/TopBrands";

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
                path: "/brands/:name",
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