/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { AuthContext } from "../../Hooks/AuthContext";
import { alertMessage, successAlert } from "../SuccessAlert/SuccessAlert";


const ProfileUpdateForm = ({setProfileUpdateField}) => {
    const [typingName, setTypingName] = useState("");
    const {updateUserProfile, } = useContext(AuthContext);

    const formHandler = (e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        const photo= e.target.photo.value;

        //    update profile
        updateUserProfile(name, photo)
        .then(()=>{
        setProfileUpdateField(true);
        successAlert("Profile Update Success!");
    })
    .catch(error => alertMessage(error.message))
    }
    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow">
        <form onSubmit={formHandler} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input name="name" onChange={(e)=> setTypingName(e.target.value)} type="text" placeholder="Start typing your name..." className="input input-bordered" required />
          </div>
          <p className="text-sm"> You typeid: {typingName}</p>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input name="photo" type="text" placeholder="Photo url" className="input input-bordered" required />
          </div>
          <div className="form-control mt-6">
            <button className="btn text-white bg-[#0056D2] hover:bg-amber-400">Update Information</button>
          </div>
        </form>
      </div>
    );
};

export default ProfileUpdateForm;