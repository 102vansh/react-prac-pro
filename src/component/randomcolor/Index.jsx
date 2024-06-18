import React, { useState } from 'react'

const Index = () => {
const[colortype,setcolortype] = useState('hex')
const[color,setcolor] = useState('#000000')

const randfunc = (length) =>{
return Math.floor(Math.random() * length)
}

const funchex = ()=>{

const hexarr = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","f"]
let hex = "#"
for (let index = 0; index < 6; index++) {
    hex +=  hexarr[randfunc(hexarr.length)]
    
}


setcolor(hex)
console.log(color)
}

const rgbafunc =() =>{
const r = randfunc(256)
const g = randfunc(256)
const b = randfunc(256)
setcolor(`rgb$({r},${g},${b})`)

}

  return (
    <div style={{height:"100vh",width:"100vw",backgroundColor:color}}>

<button onClick={()=>setcolortype('hex')}>hexcolor</button>
<button onClick={()=>setcolortype('rgb')}>Rgbacolor</button>
 <button onClick={colortype ==="hex" ? funchex : rgbafunc}>randomcolor</button> 

<h3>{color}</h3>

    </div>
  )
}

export default Index