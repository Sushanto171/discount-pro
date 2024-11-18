import { FcAbout } from "react-icons/fc";
import { IoIosHome } from "react-icons/io";
import { MdProductionQuantityLimits } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png"

const Navbar = () => {

    const links =(
        <>
        <li><NavLink className={({isActive})=> isActive? "border border-black rounded-none": "border border-transparent"} to="/"><IoIosHome /> Home</NavLink></li>
        <li><NavLink className={({isActive})=> isActive? "border border-black rounded-none": "border border-transparent"} to= "/brands" ><MdProductionQuantityLimits /> Brands</NavLink></li>
        <li><NavLink className={({isActive})=> isActive? "border border-black rounded-none": "border border-transparent"} to="/about-dev"><FcAbout /> About Dev</NavLink></li>
        <li><NavLink className={({isActive})=> isActive? "border border-black rounded-none": "border border-transparent"} to="/profile"><RxAvatar /> My Profile</NavLink></li>
        </>
    )
    
    return (
        <nav className=""> 
                <div className="navbar bg-base-100 md:w-10/12 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow ">
                 <Link>
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
                <div className="ml-3 inline-block sm:hidden">
                <h4>Hi, jone</h4>
            </div>
                </div>
                <Link className="hidden sm:block">
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
            <div className="navbar-end flex justify-between items-center">
            <div className="ml-3 hidden sm:block">
                <h4>Hi, jone</h4>
            </div>
            <div className="flex items-center ">
                <Link to="/login" className="btn btn-outline hover:bg-amber-400 hover:border-amber-400 rounded-none">Log in</Link>
                <Link to="/signup" className=" ml-2 btn btn-outline hover:bg-amber-400 hover:border-amber-400 rounded-none text-white bg-[#0056D2]">Sign Up</Link>
            </div>
            </div>
            </div>
        </nav>
    );
};
export default Navbar;