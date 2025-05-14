import { useState } from "react"



export default function App(){

  const [color, setColor] = useState('white');

  function changeColor(clr){
    setColor(clr);
  }

  return (
    <div className="min-h-screen flex justify-center items-end pb-5 duration-500" style={{backgroundColor: color}}>
      <div className="border-1  bg-gray-100 w-100 h-20 rounded-full flex space-x-7 items-center px-10">
        <button className="border-1 w-25 h-10 rounded-full cursor-pointer" onClick={() => changeColor('red')}>Red</button>
        <button className="border-1 w-25 h-10 rounded-full cursor-pointer " onClick={() => changeColor('green')}>Green</button>
        <button className="border-1 w-25 h-10 rounded-full cursor-pointer" onClick={() => changeColor('yellow')}>Yellow</button>
      </div>
    </div>
  )
}
