import { FcAbout } from "react-icons/fc";
import { IoIosHome } from "react-icons/io";
import { MdProductionQuantityLimits } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png"
import { useContext } from "react";
import { AuthContext } from "../../Hooks/AuthContext";
import {  RiBarChartHorizontalLine } from "react-icons/ri";

const Navbar = () => {
    const {user, firstName, userSignOut, photo} = useContext(AuthContext);
    const navigate = useNavigate();
    console.log(user)

    const links =(
        <>
        <li><NavLink className={({isActive})=> isActive? "border border-black rounded-none": "border border-transparent"} to="/"><IoIosHome /> Home</NavLink></li>
        <li><NavLink className={({isActive})=> isActive? "border border-black rounded-none": "border border-transparent"} to= "/brands" ><MdProductionQuantityLimits /> Brands</NavLink></li>
        <li><NavLink className={({isActive})=> isActive? "border border-black rounded-none": "border border-transparent"} to="/about-dev"><FcAbout /> About Dev</NavLink></li>
        {user && <li><NavLink className={({isActive})=> isActive? "border border-black rounded-none": "border border-transparent"} to="/profile"><RxAvatar /> My Profile</NavLink></li>
    }
        </>
    )
    
    const signOutHandler = ()=>{
        userSignOut()
        .then(()=> navigate("/login"))
    }
    return (
        <nav className=""> 
                <div className="navbar bg-base-100 md:w-10/12 mx-auto">
            <div className="navbar-start ">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <RiBarChartHorizontalLine size={20} />
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow ">
                 <Link to="/">
                <span className="flex items-center gap-1">
               <img src={logo} alt="" className=" w-12" />
               <div className="flex flex-col">
               <h2 className="font-bold text-lg">Coupon Oasis</h2>
               <p className="text-xs">collect & save</p>
               </div>
                </span>
                </Link>
                    {links}
                </ul>
                </div>
                <Link to="/" className="hidden sm:block">
                <span className="flex items-center gap-1">
               <img src={logo} alt="" className=" w-12" />
               <div className="flex flex-col">
               <h2 className="font-bold text-lg">Coupon Oasis</h2>
               <p className="text-xs">collect & save</p>
               </div>
                </span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-1">
                {links}
                </ul>
            </div>
            <div className="navbar-end flex justify-between items-center w-full lg:max-w-72 ">
            <div className="ml-3 flex items-center">
            {user && user?.photoURL && <Link to="/profile" className="mr-2 shadow rounded-full"><img className="w-10 rounded-full block ring " src={user?.photoURL}/></Link>}
            {photo && <Link to="/profile" className="mr-2 shadow rounded-full"><img className="w-10 rounded-full block ring " src={photo}/></Link>}
            {user && <h4 className="font-semibold ">Hi, {user?.displayName?.slice(0,8)}{user?.displayName?.length > 8 && "..." || firstName }</h4>}
            </div>
            <div className="flex items-center justify-end">
                {! user? <>
                <Link to="/login" className="btn btn-outline hover:bg-amber-400 hover:border-amber-400 rounded-none">Log in</Link>
                <Link to="/signup" className=" ml-2 btn btn-outline hover:bg-amber-400 hover:border-amber-400 rounded-none text-white bg-[#0056D2]">Sign Up</Link>
                </> :
                <>
                <button onClick={signOutHandler} className=" ml-2 btn btn-outline hover:bg-amber-400 hover:border-amber-400 rounded-none text-white bg-[#0056D2]">Sign out </button>
                </>
            }
            </div>
            </div>
            </div>
        </nav>
    );
};
export default Navbar;