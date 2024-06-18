import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Products } from './Dta'

import { TiArrowLeftThick } from "react-icons/ti";
import { FaArrowRight } from "react-icons/fa";
const Slider = () => {
const[images,setimages] = useState([])
const[Slider,setslider] = useState()
const[loading,setloading] = useState(false)

const getimages = () =>{
setimages(Products)
}
useEffect(()=>{
  getimages()
})

const handleNext = ()=>{
setslider(Slider=== images.length-1 ? Slider===0 : Slider +1)
console.log(Slider)
}

const handlePrevious = () =>{
setslider(Slider===0 ? images.length -1:Slider-1)
console.log(Slider)
}

// setimages(Products)
// const fetchimages = async()=>{
// try{
//     setloading(!loading)
// const {data} = await axios.get(`${url}`)

// setimages(data)
// }catch(error){
// console.log(error)
// }
// }
// useEffect(()=>{
// fetchimages()
// },[url])

  return (
    <div className='conatainer'>
    <TiArrowLeftThick
        onClick={handlePrevious}
        className="arrow arrow-left"
      />
    
    {
      images && images.map((item,index)=>{
        return <>
        
<img key={item.id}  src={item.imgSrc} className={Slider===index? "current-image": "hide current-image"}/>
<FaArrowRight
        onClick={handleNext}
        className="arrow arrow-right"
      />


        </>
      })
    }
    <span className='circle-indicators'>
      {
        images && images.length? images.map((_,index)=><button onClick={()=>setslider(index)} key={index} className={Slider=== index? "current-indicator":"hide current-indicator"}></button>):null
      }
    </span>

    </div>
  )
}

export default Slider