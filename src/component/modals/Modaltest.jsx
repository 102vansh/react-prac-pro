import React from 'react'
import Modal from './Modal'
import { useState } from 'react' 
import './modal.css'
const Modaltest = () => {
    const[open,setopen] = useState(false)
const popup = ()=>{
setopen(!open)

}
function handleclose(){
    setopen(false)
}

  return (
    <div>

        <button onClick={popup}>modal pop-up</button>

        {open && <Modal body={<div> customize body</div>} footer={<div>footer</div>} header={<div>header</div>} handleclose={handleclose}/>}
    </div>
  )
}

export default Modaltest