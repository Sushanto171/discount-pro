import { Outlet, } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from './../Footer/Footer';
import { useContext } from "react";
import { AuthContext } from "../../Hooks/AuthContext";
import { PulseLoader } from "react-spinners";

const MainLayout = () => {
    const {loader} = useContext(AuthContext);

    if(loader){
        return <p className="min-h-screen w-full flex justify-center items-center"><PulseLoader color="#0056D2" /></p>
    }

    return (
        <div>
            <Navbar />

            {/* dynamic */}
            <Outlet />

            <Footer />
        </div>
    );
};

export default MainLayout;