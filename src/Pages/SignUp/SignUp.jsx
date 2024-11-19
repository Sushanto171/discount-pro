import { FaEye, FaEyeSlash, FaFacebook, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import signUpBanner from "../../assets/Illustration (1).png"
import { useState } from "react";

const SignUp = () => {
    const [passVisible, setPassVisible] = useState(false);
    const submitFormHandler = (e)=>{

        e.preventDefault();
        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.terms.checked;
        console.log({firstName, lastName, email, password, terms})

    }

    const passwordVisibilityHandler =(e)=>{
        e.preventDefault();
        setPassVisible(!passVisible);
    }
    return (
<div className="">
            <Navbar />

            <div className="w-11/12 md:w-10/12  mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10  mb-10">
                <div className="p-10">
                    <img className="w-full h-full" src={signUpBanner} alt="" />
                </div>
            <div className="card bg-base-100 max-h-fit w-full md:max-w-full sm:max-w-sm  mx-auto shrink-0 border shadow mt-10 flex justify-center ">
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
                    <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered rounded-full" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <div className="form-control relative">
                <input name="password" type={passVisible? "text": "password"} placeholder="password" className="input input-bordered rounded-full" required />
                <span className="absolute right-5 top-3"><button onClick={passwordVisibilityHandler}>{passVisible? <FaEyeSlash />: <FaEye />}</button></span>
                </div>
                 <label className="label cursor-pointer justify-normal gap-2 mt-4">
                    <input name="terms" type="checkbox" className="checkbox rounded-full w-5 h-5" />
                    <span className="label-text text-xs">Accept terms & conditions</span>
                </label>
                    </div>
                <div className="form-control mt-6">
                <button className="btn bg-[#0056D2] text-white hover:bg-amber-400 rounded-full">Sign up</button>
                </div>
            </form>
            <div className="px-8">
            <div className="divider text-sm">OR</div>
            <div className="flex justify-center gap-5 mb-5">
            <button className="btn btn-sm rounded-full "><FcGoogle /></button>
            <button className="btn btn-sm rounded-full"><FaFacebook color="blue" /> </button>
            <button className="btn btn-sm rounded-full"><FaGithub /></button>

            </div>
            </div>
                <p className="px-8 pb-5 text-sm">Don&apos;t have an account? <Link to="/login" className="underline text-[#0056D2]">Log in</Link></p>
            </div>
            </div>
        </div>
    );
};


export default SignUp;