/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { AuthContext } from "../Hooks/AuthContext";
import auth from './../firebase.init/firebase';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


const AuthProvider = ({children }) => {
    const [user, setUser] = useState(null);
    const branOnSellRef = useRef();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [photo, setPhoto] = useState("");

    // providers
    const googleProvider = new GoogleAuthProvider();

    // observe user
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (user)=>{
            if(user){
                setUser(user)
            }else{
                setUser(null);
            }
        }
    ) ;
    return ()=> unSubscribe();
    },[])

    // create user 
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password) 
    }

    const signInWithGoogle = ()=>{
       return signInWithPopup(auth, googleProvider)
    };

// sign in with email password
const signInUser =(email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)
};

// userSign out
const userSignOut = ()=>{
    return signOut(auth)
}

// forgot password 
const passwordRecovery= (email)=>{
    return sendPasswordResetEmail(auth, email)
}

    const contextInfo = {
        user,
        branOnSellRef,
        createUser,
        setFirstName, 
        firstName,
        lastName,
        setLastName,
        setPhoto,
        signInWithGoogle,
        signInUser,
        userSignOut,
        photo,
        passwordRecovery,
    }
    return (
       <AuthContext.Provider value={contextInfo}>
        { children }
       </AuthContext.Provider>
    );
};

export default AuthProvider;