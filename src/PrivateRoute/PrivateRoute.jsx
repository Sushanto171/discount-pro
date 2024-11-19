import { useContext } from "react";
import { AuthContext } from "../Hooks/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);

    const location = useLocation();

    if(user){
        return children;
    }
    return (
        <div className="w-11/12 sm:w-10/12 mx-auto">
            <Navigate state={{from: location.pathname}} to="/login"/>
        </div>
    );
};

export default PrivateRoute;