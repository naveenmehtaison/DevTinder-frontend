import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Base_Url } from '../utils/constant'
import { useNavigate } from 'react-router-dom'
import { logout } from '../Redux/authSlice'


const Navbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const profile_photo = useSelector((state) => state?.auth?.user?.photo)
  const HandleLogOut= async ()=>{
    try{
     await axios.post( Base_Url + '/logout',{},{withCredentials:true}) 
     dispatch(logout())
     navigate('/login')

    }
    catch(err){
      console.log('LogOut Unsucessfull')


    }
    

  }
  return (
<div className="navbar bg-base-300">
  <div className="flex-1">
    <Link to='/' className="btn btn-ghost text-xl">DevTinder</Link>
  </div>
  <div className="flex-none gap-2 mx-4">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
   <div className="dropdown dropdown-end">
     {profile_photo && <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src={profile_photo} />
        </div>
      </div>}
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <Link to='/profile' className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><a>Settings</a></li>
        <li onClick={HandleLogOut} ><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
  )
}

export default Navbar