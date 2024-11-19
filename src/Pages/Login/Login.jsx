/* eslint-disable no-unused-vars */
import Navbar from "../../components/Navbar/Navbar";
import logInBanner from "../../assets/Illustration.png";
import { Await, Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaFacebook, FaGithub, } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from "../../Hooks/AuthContext";
import Swal from "sweetalert2";

const Login = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const [passVisible, setPassVisible] = useState(false);
    const { signInWithGoogle, signInUser, passwordRecovery} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const submitFormHandler =(e)=>{
        e.preventDefault();

        const formData = new FormData(e.target);
        const email = formData.get("email");
        const password = formData.get("password");
        const remember = formData.get("remember")
 

        // reset error 
        setErrorMessage("");

        // user log in
        signInUser(email, password)
        .then(res => {
            navigate(location.state?.from || "/");
            successAlert("Log in Success!");
        })
        .catch(error =>{
            alertMessage(error.message, "error");
            setErrorMessage(error.message)})
        if(! errorMessage){
            e.target.reset();
        } 
    }

    // forgot password
    const forgotHandler =async (e)=>{
        e.preventDefault();
        setErrorMessage("");
        const { value: email }  = await Swal.fire({
            title: "Input email address",
            input: "email",
            inputLabel: "Your email address",
            inputPlaceholder: "Enter your email address",
            confirmButtonText: 'Done',
          });
          if(email){
            passwordRecovery(email)
            .then(res =>{
                Swal.fire({
                    title: `Thank you!`,
                    text: ` We've received your email: ${email}. Please check your inbox for further instructions.`,
                    confirmButtonText: 'Continue',
                    background: "black",
                    color: "white"
                  })
            })
            .catch(error => {
                alertMessage(error.message, "error");
            })
          }
    }

    const passwordVisibilityHandler =(e)=>{
        e.preventDefault();
        setPassVisible(!passVisible);
    };

        // Log  in with google
        const googleSignInHandler = ()=>{
            signInWithGoogle()
            .then(res => {
                navigate(location.state?.from || "/");
                successAlert("Log in Success!");
        })
            .catch(error =>  alertMessage(error.message, "error"));
            setErrorMessage("");
           
        };

        const alertMessage = (message, icon)=>{
            Swal.fire({
                title: `${message ==="Firebase: Error (auth/invalid-credential)."? "Invalid email or password": message}!`,
                icon: icon,
                confirmButtonText: 'Continue',
                background: "black",
              });
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
                    <img className="w-full h-full" src={logInBanner} alt="" />
                </div>
            <div className="card bg-base-200 max-h-fit w-full md:max-w-sm shrink-0 border shadow mt-10 flex justify-center ">
                <div className="text-center mt-5">
                    <h3 className="font-semibold text-3xl">Welcome back!</h3>
                </div>
            <form onSubmit={submitFormHandler} className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input name="email" type="email" placeholder="email" className="input input-bordered rounded-full" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <div className="form-control relative">
                <input name="password" type={passVisible? "text": "password"} placeholder="password" className="input input-bordered rounded-full" required />
                <span className="absolute right-5 top-3"><button onClick={passwordVisibilityHandler}>{passVisible? <FaEyeSlash />: <FaEye />}</button></span>
                {errorMessage && <p className={`text-xs absolute left-4 -bottom-5 text-error`}>{errorMessage} </p>}
                </div>
                    <div className="flex justify-between mt-4">
                <label className="label cursor-pointer justify-normal gap-2">
                    <input name="remember" type="checkbox" className="checkbox rounded-full w-5 h-5" />
                    <span className="label-text text-xs">Remember me</span>
                </label>
                <label className="label">
                    <button onClick={forgotHandler} className="label-text-alt link link-hover">Forgot password?</button>
                </label>
                    </div>
                </div>
                <div className="form-control mt-6">
                <button className="btn bg-[#0056D2] text-white hover:bg-amber-400 rounded-full">Login</button>
                </div>
            </form>
            <div className="px-8">
            <div className="divider text-sm">OR</div>
            <div className="flex justify-center gap-5 mb-5">
            <button onClick={googleSignInHandler} className="btn btn-sm rounded-full "><FcGoogle /></button>
            {/* <button className="btn btn-sm rounded-full"><FaFacebook color="blue" /> </button>
            <button className="btn btn-sm rounded-full"><FaGithub /></button> */}
            </div>
            </div>
                <p className="px-8 pb-5 text-sm">Don&apos;t have an account? <Link to="/signup" className="underline text-[#0056D2]">Sign up</Link></p>
            </div>
            </div>
        </div>
    );
};

export default Login;