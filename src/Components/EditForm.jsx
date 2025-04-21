import React, { useState } from "react";
import UserCard from "./UserCard";
import { Base_Url } from "../utils/constant";
import { toast } from "react-toastify";
import axios from "axios";
import { useDispatch } from "react-redux";
import { userEdit } from "../Redux/authSlice";

const EditForm = (user) => {
  console.log(user);

  const [firstName, setfirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [about, setAbout] = useState(user?.about);
  const [photo, setPhoto] = useState(user?.photo);
  const [age, setAge] = useState(user?.age);
  const [gender, setgender] = useState(user?.gender);
  const [error, setError] = useState("");

  const Dispatch = useDispatch()
  const HandleSave = async () => {
    try{
    const updated_data = await axios.post(Base_Url +`/profile/edit`,{firstName,lastName,about,photo,age,gender},{withCredentials:true})
   console.log(updated_data)
    Dispatch(userEdit(updated_data?.data))
    toast.success('Edited Succesfully')
    }
    catch(err){
        toast.error('Uanable to save ' + err)
    }
  };

  return (
    <div className="flex justify-center gap-8">
      <div className="flex justify-center overflow-y-scroll">
        <div className="card bg-base-300 m-2 w-96 shadow-xl ">
          <div className="card-body">
            <h2 className="card-title justify-center">Edit Form</h2>
            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">FirstName</span>
                </div>
                <input type="text" value={firstName} onChange={(e)=>{setfirstName(e.target.value)}} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">LastName</span>
                </div>
                <input type="text" value={lastName} onChange={(e)=>{setLastName(e.target.value)}} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">About</span>
                </div>
                <input type="text" value={about} onChange={(e)=>{setAbout(e.target.value)}} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Photo</span>
                </div>
                <input type="text" value={photo} onChange={(e)=>{setPhoto(e.target.value)}} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Age</span>
                </div>
                <input type="text" value={age} onChange={(e)=>{setAge(e.target.value)}} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Gender</span>
                </div>
                                <select onChange={(e)=>{setgender(e.target.value)}} className="select select-bordered w-full max-w-xs">
                <option disabled selected>Gender</option>
                <option value={'male'} >Male</option>
                <option value={'female'}>Female</option>
                </select>
                </label>

            {error && <p className="text-red-500">{error}</p>}
            <div className="card-actions justify-center">
              <button className="btn btn-primary" onClick={HandleSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <UserCard props={{ firstName, lastName, age, gender, photo,about }} />
    </div>
  );
};

export default EditForm;
