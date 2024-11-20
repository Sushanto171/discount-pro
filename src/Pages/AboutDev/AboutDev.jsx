import { useContext, useEffect } from "react";
import { AuthContext } from "../../Hooks/AuthContext";

const AboutDev = () => {
    const {setTitle} = useContext(AuthContext);
    useEffect(() => {
        setTitle("About Dev");
    }, [setTitle]);
    return (
        <div className="w-11/12 sm:w-10/12 mx-auto">
            
        </div>
    );
};

export default AboutDev;