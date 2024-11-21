/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { AuthContext } from "../Hooks/AuthContext";
import auth from './../firebase.init/firebase';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


const AuthProvider = ({children }) => {
    const [user, setUser] = useState(null);
    const branOnSellRef = useRef();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [photo, setPhoto] = useState("");
    const [loader, setLoader] = useState(true);
    const [title, setTitle] = useState("Home");
    const emailRef = useRef();

    // providers
    const googleProvider = new GoogleAuthProvider();


    // 
    useEffect(()=>{
        document.title = title + " | Discount pro";
    } ,[title]);


    // observe user
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (user)=>{
            if(user){
                setUser(user);
                setLoader(false);
            }else{
                setUser(null);
                setLoader(false);
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


// update profile
const updateUserProfile =(name, photo)=>{
    return updateProfile(auth.currentUser, {displayName: name, photoURL: photo})
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
        loader,
        setTitle,
        updateUserProfile,
        setUser,
        emailRef,
    }
    return (
       <AuthContext.Provider value={contextInfo}>
        { children }
       </AuthContext.Provider>
    );
};

export default AuthProvider;