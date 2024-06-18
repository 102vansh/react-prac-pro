import React, { useEffect } from 'react'
import Index from './component/accordian/Index'
import Indexrand from './component/randomcolor/Index'
import Star from './component/stars/Star'
import Slider from './component/imageslider/Slider'
import Load from './component/load-more-data/Load'
const App = () => {
// setInterval(()=>{
  
//   const ans= Math.floor(Math.random()*10 +1)
//   console.log(ans)
//   console.log(hex)
// },1000)

// const arr = [1,2,3,4,5,6,7,8,9,"a","b","c","d"]
// var hex = '#'
// for (let i=0; i<6; i++){
// hex += arr[Math.floor(Math.random() * arr.length)]
// }
// useEffect(()=>{
//   console.log(hex)
// })









  return (
    <div>
<h1>hii</h1>
      <Index/>
      <Indexrand/>
      <Star numofstar= {10}/>
       {/* <Slider  />  */}
<Load/>


    </div>
  )
}

export default App