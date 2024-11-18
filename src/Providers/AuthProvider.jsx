import { useState } from "react";
import { AuthContext } from "../Hooks/AuthContext";


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    
    const contextInfo = {
        user,
    }
    return (
       <AuthContext.Provider value={contextInfo}>
        { children }
       </AuthContext.Provider>
    );
};

export default AuthProvider;