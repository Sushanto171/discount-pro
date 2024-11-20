/* eslint-disable no-unused-vars */
import { FaEye, FaEyeSlash, FaFacebook, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import signUpBanner from "../../assets/Illustration (1).png"
import { useContext, useState } from "react";
import { AuthContext } from "../../Hooks/AuthContext";
import Swal from 'sweetalert2';


const SignUp = () => {
    const [passVisible, setPassVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const {createUser, signInWithGoogle, setFirstName, setLastName , setPhoto} = useContext(AuthContext);
    const navigate = useNavigate();

        const submitFormHandler = (e)=>{
        e.preventDefault();

        setFirstName(e.target.firstName.value);
         setLastName(e.target.lastName.value);
        setPhoto(e.target.photo.value);
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.terms.checked;

        if(errorMessage){
            alertMessage("Follow all requirements!", "warning");
      
            return
        }
        if(! terms){
            alertMessage("Please Accept our terms & conditions", "warning")
            return
        }
        
        // user create
        createUser(email, password)
        .then(res => {
            navigate("/"); 
            successAlert("Sign up Success!");
        })
        .catch(error =>{
            alertMessage(error.message === "Firebase: Error (auth/email-already-in-use)."? "This email already exist": errorMessage, "error" );
        })

        e.target.reset();
        setSuccessMessage('');
    }

    // password visibility 
    const passwordVisibilityHandler =(e)=>{
        e.preventDefault();
        setPassVisible(!passVisible);
    }
// with an upper & lower case, and a special character
    const passwordFocusHandler = (e)=>{
        e.preventDefault();
    }

    // password validation
    const passwordOnChangeHandler = (e)=>{
        setErrorMessage("")
           const pass = e.target.value;

           if(! /[a-z]/.test(pass)){
               setErrorMessage("Password must contain at least one lowercase letter!");
               return;
            }
            if(! /[A-Z]/.test(pass)){
                setErrorMessage("Password must contain at least one Uppercase letter!");
                return;
            }
            if(! /[0-9]/.test(pass)){
                setErrorMessage("Password must contain at least one number!");
                return;
            }
            if(! /[@$!%*?&]/.test(pass)){
                setErrorMessage("Password must contain at least one special character!");
                return;
            }
            if( pass.length < 6 ){
                setErrorMessage("Password must include at least 6 characters!");
                return;
            }
        else{
             setSuccessMessage("This password is strong!")
        }
    }

    // Log  in with google
    const googleSignInHandler = ()=>{
        signInWithGoogle()
        .then(res => {
            successAlert("Log in Success!");
            navigate("/"); 
        })
        .catch(error => {
            alertMessage(error.message, "error")
        })
    }

    const alertMessage = (message, icon)=>{
        Swal.fire({
            title: `${message}!`,
            icon: icon,
            confirmButtonText: 'Continue',
            background: "black",
            color: "white"
          })
          timeCounter();
    };
    const successAlert = (message)=>{
        Swal.fire({
            title: `${message}!`,
            icon: "success",
            confirmButtonText: 'Continue',
            background: "black",
            color: "white",
            width: "auto",
            showConfirmButton : false,
          })
          timeCounter();
    };

           const timeCounter = ()=>{
            setTimeout(()=>{
                Swal.close()	
            },2000)
        };
     
    return (
<div className="">
            <Navbar />

            <div className="w-11/12 md:w-10/12  mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10  mb-10">
                <div className="p-10">
                    <img className="w-full h-full" src={signUpBanner} alt="" />
                </div>
            <div className="card bg-base-200 max-h-fit w-full md:max-w-full sm:max-w-sm  mx-auto shrink-0 border shadow mt-10 flex justify-center ">
                <div className="text-center mt-5">
                    <h3 className="font-semibold text-3xl">Create an account</h3>
                </div>
            <form onSubmit={submitFormHandler} className="card-body">
                <div className="flex flex-col lg:flex-row gap-4">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">First Name</span>
                </label>
                <input type="text" name="firstName" placeholder="First name" className="input input-bordered rounded-full" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Last Name</span>
                </label>
                <input type="text" name="lastName" placeholder="Last Name" className="input input-bordered rounded-full" required />
                </div>
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Photo</span>
                </label>
                <input type="text" name="photo" placeholder="Photo-URL" className="input input-bordered rounded-full" />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered rounded-full" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <div className="form-control relative">
                <input name="password" onChange={passwordOnChangeHandler} onClick={passwordFocusHandler} type={passVisible? "text": "password"} placeholder="password" className="input input-bordered rounded-full" required />
                <span className="absolute right-5 top-3"><button onClick={passwordVisibilityHandler}>{passVisible? <FaEyeSlash />: <FaEye />}</button></span>
                {errorMessage && <p className={`text-xs absolute left-4 -bottom-7 sm:-bottom-5 text-error`}>{errorMessage} </p> ||
                successMessage && <p className={`text-xs absolute left-4 -bottom-5 text-success`}>{successMessage} </p>
                }
                </div>
                 <label className="label cursor-pointer justify-normal gap-2 mt-6">
                    <input name="terms" type="checkbox" className="checkbox rounded-full w-5 h-5" />
                    <span className="label-text text-xs">Accept terms & conditions</span>
                </label>
                    </div>
                <div className="form-control mt-6">
                <button className="btn bg-[#0056D2] text-white hover:bg-amber-400 rounded-full">Sign up</button>
                </div>
            </form>
            <div className="px-8">
            <div className="divider text-sm">Or Log in</div>
            <div className="flex justify-center gap-5 mb-5">
            <button onClick={googleSignInHandler} className="btn btn-sm rounded-full "><FcGoogle size={20} /></button>
            {/* <button className="btn btn-sm rounded-full"><FaFacebook color="blue" /> </button>
            <button className="btn btn-sm rounded-full"><FaGithub /></button> */}

            </div>
            </div>
                <p className="px-8 pb-5 text-sm">Already have an account? <Link to="/login" className="underline text-[#181819]">Log in</Link></p>
            </div>
            </div>
        </div>
    );
};


export default SignUp;