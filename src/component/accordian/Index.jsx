import React, { useState } from 'react'
import data from './Data'
const Index = () => {

const[selected,setselected] = useState(null)
const[multienable,setmultienable] = useState(false)
const[multiselected,setmultiselected] = useState([])

const handelfunc =(getid)=>{
  


  console.log(getid)
setselected(getid ===selected ? null :getid)
}

const handlemulti =(getid)=>{
  let multicpy = [...multiselected]
  const indofmulti = multicpy.indexOf(getid)
  console.log(indofmulti)
  if(indofmulti== -1){
    multicpy.push(getid)
  }
  else{
    multicpy.splice(indofmulti,1)
  }
  setmultiselected(multicpy)
}
  return (
    <div>
    <button onClick={()=>setmultienable (!multienable)}>multiple selection</button>
    
{
  data && data.length >0 ? <div style={{}}>{data?.map((item)=>{
    return <div style={{margin:"20px",backgroundColor:"brown"}} onClick={multienable?()=>handlemulti(item.id) : ()=>handelfunc(item.id)}>{item.question}
    <span>+</span>
{
multienable ?  multiselected.indexOf(item.id) !== -1 && (<div>{item.answer}</div>)  : selected === item.id &&( <div>{item.answer}</div>)
}    

    
    </div>
    
  })}</div> :  "data is not there"
}
        
    </div>
  )
}

export default Index