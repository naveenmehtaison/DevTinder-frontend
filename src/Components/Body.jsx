import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { Base_Url } from '../utils/constant'
import { login } from '../Redux/authSlice'
import { useSelector } from 'react-redux'

const Body = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((state)=>state.auth.user)
  console.log('insinde body')
  const isLoggedInCheck = async ()=>{
    if(user ) return
    try{
    
    const res = await axios.get(`${Base_Url}`+'/profile/view',{withCredentials:true})
    console.log(res)
    dispatch(login({user:res.data}))

    }
    catch(err){
      navigate('/login')
    }

  }
  useEffect(()=>{
    isLoggedInCheck()
  },[location.pathname])
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Body