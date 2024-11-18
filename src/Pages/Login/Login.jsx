import Navbar from "../../components/Navbar/Navbar";
import logInBanner from "../../assets/Illustration.png";

const Login = () => {
    return (
        <div className="">
            <Navbar />

            <div className="w-11/12 md:w-10/12  mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 max-h-[calc(100vh-200px)] my-5">
                <div className="p-10">
                    <img className="w-full h-full" src={logInBanner} alt="" />
                </div>
            <div className="card bg-base-100 max-h-fit w-full  shrink-0 border shadow mt-10 flex justify-center ">
            <form className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered rounded-full" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <div className="form-control">
                <input type="password" placeholder="password" className="input input-bordered rounded-full" required />
                </div>
                    <div className="flex justify-between mt-4">
                <label className="label cursor-pointer justify-normal gap-2">
                    <input type="checkbox" defaultChecked className="checkbox rounded-full" />
                    <span className="label-text">Remember me</span>
                </label>
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                    </div>
                </div>
                <div className="form-control mt-6">
                <button className="btn btn-primary rounded-full">Login</button>
                </div>
            </form>
            </div>
            </div>
        </div>
    );
};

export default Login;