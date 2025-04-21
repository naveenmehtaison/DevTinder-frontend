import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { login } from '../Redux/authSlice'
import { Base_Url } from '../utils/constant'

const Authentication = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
    const [firstName, setfirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [about, setAbout] = useState('');
    const [photo, setPhoto] = useState('');
    const [username, setUsername] = useState('Manav@gmail.com')
    const [password, setPassword] = useState('Manav@123#')
    const [error,seterror] = useState(null)
    const [showLogin, setshowLogin] = useState(true)
    const [emailId, setEmailId] = useState("")
    const [confirmPassword, setconfirmPassword] = useState('')
    const [age,setAge]= useState('')
    const [gender,setGender]= useState('')
    const HandleLogIn = async ()=>{
      try{
        const obj = {emailId:username,password:password}
        console.log(obj)
        const res = await axios.post(`${Base_Url}`+'/login',obj)
        // const res = await axios.post(`http://localhost:7777/login`,obj,{withCredentials:true})
        
        console.log(res.data)
        dispatch(login({user:res.data,token:res.data.token}))
        navigate('/profile')
      }
      catch(err){
        console.log(err)
       seterror(err?.response?.data)
      }

    }
    const handleSignUp = async ()=>{
      try{
        const obj = {firstName,lastName,about,photo,emailId,password}
        const res = await axios.post(`${Base_Url}`+'/signup',obj,{withCredentials:true})
        dispatch(login({user:res.data,token:res.data.token}))
        navigate('/profile')
      }
      catch(err){
        console.log(err)
       seterror(err.response.data)
      }
    }
  return (
    (showLogin ?<div className='flex justify-center'>
    <div className="card bg-base-300 m-2 w-96 shadow-xl ">
  <div className="card-body">
    <h2 className="card-title justify-center">Login</h2>
    <label className="input validator flex flex-row my-2">
  {/* <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg> */}
  <input value={username} onChange={(e)=>setUsername(e.target.value)} type="input" required placeholder="Username" pattern="[A-Za-z][A-Za-z0-9\-]*" minlength="3" maxlength="30" title="Only letters, numbers or dash" />
</label>

<label className="input validator flex flex-row my-2">
  {/* <svg className="h-[1em] opacity-50 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg> */}
  <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="input" required placeholder="Password"  minlength="3" maxlength="30" title="Only letters, numbers or dash" />
</label>
    {error &&  <p className='text-red-500'>{error}</p>}
    <div className="card-actions justify-center">
      <button className="btn btn-primary" onClick={HandleLogIn}>Log In</button>
    </div>
    <p className='text-blue-700 flex justify-center cursor-pointer
    ' onClick={()=>{setshowLogin(!showLogin)}} >Create A New Account</p>
  </div>
</div>
</div> : 
        <div className='flex justify-center'>
        <div className="card bg-base-300 m-2 w-96 shadow-xl ">
        <div className="card-body">
            <h2 className="card-title justify-center">Sign Up</h2>
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
                                <select onChange={(e)=>{setGender(e.target.value)}} className="select select-bordered w-full max-w-xs">
                <option disabled selected>Gender</option>
                <option value={'male'} >Male</option>
                <option value={'female'}>Female</option>
                </select>
                </label>
                <label className="form-control w-full max-w-xs">
                <div className="label">
                </div>
                <span className="label-text">E-MAIL</span>
                    <label className="form-control w-full max-w-xs">
                <input type="text" value={emailId} onChange={(e)=>{setEmailId(e.target.value)}} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </label>
                <div className="label">
                    <span className="label-text">Password</span>
                </div>

                <input type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </label>

            {error && <p className="text-red-500">{error}</p>}
          </div>
          <div className="card-actions justify-center">
      <button className="btn btn-primary" onClick={handleSignUp}>Sign Up</button>
    </div>
          <p className='text-blue-700 flex justify-center cursor-pointer m-4
    ' onClick={()=>{setshowLogin(!showLogin)}} >Already Have an Account</p>
    </div>
    </div>)
  )
}

export default Authentication