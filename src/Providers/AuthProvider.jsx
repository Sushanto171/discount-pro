/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { AuthContext } from "../Hooks/AuthContext";


const AuthProvider = ({children }) => {
    const [user, setUser] = useState(null);
    const branOnSellRef = useRef();
    
    const contextInfo = {
        user,
        branOnSellRef
    }
    return (
       <AuthContext.Provider value={contextInfo}>
        { children }
       </AuthContext.Provider>
    );
};

export default AuthProvider;