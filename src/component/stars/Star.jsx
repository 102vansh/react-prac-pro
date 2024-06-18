import React, { useState } from 'react'
import { IoStarSharp } from "react-icons/io5";

const Star = ({numofstar}) => {

const[rating,setrating] = useState(0)
const[hover,sethover] = useState(0)

const funleave =(getindex)=>{
setrating(getindex)
}
const handlechange = ()=>{
sethover(rating)
}
const handlemove = (getindex) =>{
sethover(getindex)
}

  return (
    <div>
    {
       
[...Array(numofstar)].map((_,index)=>{
index +=1
   return <IoStarSharp key={index} onClick={()=>handlechange(index)}
   className={index <= (hover || rating) ? "active" :"inactive"}
    onMouseMove={()=>handlemove()}
    onMouseLeave={()=>funleave(index)}
    size={40}
   />



}) 
    }



    </div>
  )
}

export default Star