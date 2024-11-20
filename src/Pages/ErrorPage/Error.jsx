import Navbar from "../../components/Navbar/Navbar";
import  errorCanvas from "../../assets/error.png";
import {  Link,  useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    return (
        <div className="">
            <Navbar />
            <div className="relative w-11/12 mx-auto flex justify-center items-center flex-col mt-10">
                <img className="max-w-md w-full" src={errorCanvas} alt="" />
            <div className="absolute -bottom-56 text-center space-y-3">
            <h2 className="font-bold text-3xl"> Oops!</h2>
            <h2 className="font-bold text-3xl"> Page not Fund!</h2>
            <p>{error.data}</p>
            <p>{error.status || error.message}</p>
            <button className="btn btn-primary btn-outline"><Link to="/">Go Back</Link></button>
            </div>
            </div>
        </div>
    );
};

export default Error;