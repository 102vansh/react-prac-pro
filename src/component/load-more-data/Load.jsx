import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Load = () => {
const[product,setproduct] = useState([])
const[count,setcount] = useState()
const[loading,setloading] = useState(false)

const fetcheddata = async() =>{
    try{
        setloading(!loading)
const res = await axios.get(`https://dummyjson.com/products?limit=20&skip${count === 0? 0 : count*20}`)

setproduct((prevdata)=>[...prevdata,...res.data.products])
setloading(loading)
    }catch(err){
console.log(err)
setloading(loading)
console.log(res.data)
    }
}

useEffect(()=>{
    fetcheddata()
},[count])
if(loading){
    return <div>LOading data!</div>
}
console.log(product)
const loadmore = () =>{
    setcount(count +1)
}

  return (
    <div className='prod-cont'>
    <div className='cont'>
    
{
     product?.map((item,i)=>{
        
        return <>
        <div className='product'>
            <img src={item.thumbnail} key={item.id}></img>
            <p>{item.title}</p>
        </div>
</>
     }
    

    )
}
<div className='btn'>
<button onClick={loadmore}>Loadmore</button>
</div>
</div>
    </div>
  )
}

export default Load