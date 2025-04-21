import React from 'react'
import { useSelector } from 'react-redux'
import { TiTickOutline } from "react-icons/ti";
import EditForm from './EditForm';
import UserCard from './UserCard';

const Profile = () => {
  const userData = useSelector((state)=>state.auth.user)
  return (
    <div>
  {userData && <EditForm {...userData}/>}
  </div>
  )
}

export default Profile