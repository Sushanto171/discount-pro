import { useContext } from "react";
import { AuthContext } from "../../Hooks/AuthContext";
import { useNavigate } from "react-router-dom";
import { alertMessage, successAlert } from "../SuccessAlert/SuccessAlert";

const ForgotPasswordForm = () => {
    const {emailRef, passwordRecovery} = useContext(AuthContext);
    const emailValue= emailRef.current.value;
    const navigate = useNavigate();
    // console.log({emailValue, passwordRecovery})

        // forgot password
        const forgotHandler =async (e)=>{ 
            e.preventDefault();
            const email =e.target.email.value;
            passwordRecovery(email)
            .then(()=>{
                successAlert(`Thank you! We've received your email: ${email}`);
                window.open("https://mail.google.com/", "_blank");
                navigate('/login');
            })
            .catch(()=>{
                alertMessage("Please enter a valid email address.");
            })

        //    modal...........
            // const { value: email }  = await Swal.fire({
            //     title: "Input email address",
            //     input: "email",
            //     inputLabel: "Your email address",
            //     inputPlaceholder: "Enter your email address",
            //     confirmButtonText: 'Reset password',
            //     background: "black",
            //     color: "white",
            //     inputValue: emailValue,
            //   });
            //   if(email){
            //     passwordRecovery(email)
            //     .then(() =>{
            //         // Swal.fire({
            //         //     title: `Thank you!`,
            //         //     text: ` We've received your email: ${email}. Please check your inbox for further instructions.`,
            //         //     confirmButtonText: 'Continue',
            //         //     background: "black",
            //         //     color: "white"
            //         //   })
            //     })
            //     .catch(error => {
            //         alertMessage(error.message, "error");
            //     })
            // }
            // window.open("https://mail.google.com", "_blank");
        }
    
    return (
        <div className="h-screen flex flex-col justify-center items-center"  >
            <h2 className="mb-8 md:mb-14 font-bold text-3xl w-10/12 md:w-1/3 text-center">Password Recovery via Email</h2>
            <div className="border w-8/12  max-w-sm p-10 bg-base-200 shadow rounded">
            <form onSubmit={forgotHandler} className="">
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input name="email" type="email" placeholder="Type your email" defaultValue={emailValue} className="input input-bordered rounded-full" required />
                </div>
                <div className="form-control mt-6">
                <button  className="btn bg-[#0056D2] text-white hover:bg-amber-400 rounded-full">Reset Password</button>
                </div>
            </form>
            </div>
        </div>
    );
};

export default ForgotPasswordForm;