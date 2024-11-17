import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../firebase.init/firebase";

const Navbar = () => {

    const googleProvider = new GoogleAuthProvider();
    const signIn = ()=>{
        signInWithPopup(auth, googleProvider)
        .then(res => console.log(res.user));
    }
    return (
        <div className="text-red-400"> 
            navbar
            <button onClick={signIn} className="btn">submit</button>


        </div>
    );
};

export default Navbar;