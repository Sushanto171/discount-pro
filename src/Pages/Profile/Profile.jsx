import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Hooks/AuthContext";
import bannerImage from "../../assets/profile-banner.jpg";
import avatar from "../../assets/download.png"
import { FaFacebook } from "react-icons/fa6";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { LiaUserEditSolid } from "react-icons/lia";
import ProfileUpdateForm from "../../components/ProfileUpdateFrom/ProfileUpdateForm";
import { MdOutlineManageAccounts } from "react-icons/md";

const Profile = () => {
    const {user, photo, setTitle} = useContext(AuthContext);
    const [profileUpdateField, setProfileUpdateField] = useState (true);

    const {displayName, email, emailVerified, photoURL, firstName} = user;
    useEffect(() => {
        setTitle("Profile");
    }, [setTitle]);
    
    const updateBtnHandler = ()=>{
        setProfileUpdateField(! profileUpdateField)
    }
    return (
        <div className="w-11/12 sm:w-10/12 mx-auto">
            {/* banner */}
            <div>
                <div className="h-28 md:h-52 bg-cover mt-20 relative flex justify-center rounded-md pt-10 md:pt-16" style={{backgroundImage : `url(${bannerImage})`}}>
               <div className="absolute -top-16 md:-top-20 rounded-full p-2 bg-white">
      
                 <img className=" ring shadow-2xl rounded-full w-20 h-20 md:w-28 md:h-28" src={photoURL || photo || avatar} alt="" />
                </div>
                <h3 className="text-white  font-semibold sm:text-xl md:text-3xl text-center"><span className="opacity-70">Welcome, </span>{firstName || displayName} <p className="opacity-70"> We&apos;re delighted to have you here..</p></h3>
                </div>

                {/* user Details */}
                <div className=" sm:grid grid-cols-3 pt-5 gap-5 opacity-90">

                <div className=" col-span-2 border min-h-40 p-5 rounded-lg bg-blue-50 ">
                    <div className="flex justify-end mb-3">
                        <button onClick={updateBtnHandler} className="btn btn-sm btn-outline hover:border-sky-400 hover:text-sky-400 hover:bg-transparent">{profileUpdateField ?<> <LiaUserEditSolid size={20} /> Update Profile</> :<><MdOutlineManageAccounts size={20} /> Back to Profile</>}</button>
                    </div>

              { profileUpdateField && <div className="space-y-3">
                <p><span className="font-semibold text-lg">{displayName || "Unknown person"}</span></p>
                <p><span className="font-semibold">Email: </span>{email}</p>
                <div className="flex justify-between items-center">
                <p><span className="font-semibold">Email Verification status</span>: {emailVerified ? "Verified": "not Verified"}</p>
              { emailVerified ||  <span className="inline-block"><button className="btn btn-outline btn-sm hover:bg-blue-500 ">Verified email</button></span>}
                </div>
                </div>
                }
                {
                    ! profileUpdateField && <ProfileUpdateForm setProfileUpdateField={setProfileUpdateField} />
                }
                </div>

            {/* Social */}
                <div className="border p-5 rounded-md mt-5 sm:mt-0 bg-blue-50">
                    <h3 className="font-semibold text-lg">Follow Social</h3>
                    <div className="flex items-center justify-center gap-5 my-5">
                        <button><FaFacebook /></button>
                        <button><FaTwitter /></button>
                        <button><FaGithub /></button>
                    </div>
                </div>
                </div>
            </div>
          </div>
    );
};

export default Profile;