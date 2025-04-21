import React from 'react'
import { Base_Url } from '../utils/constant'
import axios from 'axios'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'

const UserCard = ({props,index,old_index}) => {
  console.log(props)
  const {photo,about, firstName,lastName, age , gender, _id} = props
  const HandleIntrested = async (e) =>{
    console.log('clicked',_id)
    const res = await axios.post(`${Base_Url}`+`/sent/intrested/${_id}`,{withCredentials:true})
  }

  
  return (
    <div className='flex justify-center items-center' >
    <div className=" card bg-base-300 w-96 shadow-xl m-3">
  <figure>
  {/* <div className=''>
      <FaArrowCircleLeft className='absolute ml-[-15%] size-12'/>
      </div> */}

    <img
      src={photo}
      alt="Shoes" className='h-80 w-full' />
      {/* <div className=''>
      <FaArrowCircleRight onClick={()=>{index(old_index+1)}} className='absolute size-12 mx-[2%]' />
      </div> */}
  </figure>
  <div className="card-body m-[-2]">
    {age && gender && <h2>{age + ', ' + gender}</h2>}
    <h2 className="card-title">{firstName + (lastName ? ` ${lastName}` : '')}</h2>
    <p>{about}</p>
    <div className="card-actions justify-start m-3 gap-6">
      <button className="btn btn-primary" onClick={()=>HandleIntrested()}>Intrested</button>
      <button className="btn btn-secondary">Ignored</button>
    </div>
  </div>
</div>
</div>
  )
}

export default UserCard