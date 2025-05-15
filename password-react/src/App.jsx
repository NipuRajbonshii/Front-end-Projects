import { useCallback, useEffect, useRef, useState } from "react"


export default function App(){

  const passRef = useRef(null);

  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [chars, setChars] = useState(false);
  const [num, setNum] = useState(false);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const numbers = '1234567890';
    const characters = '!@#$%^&*()';
    if(num) str+=numbers;
    if(chars) str+=characters;

    for(let i=0; i<length;i++){
      const random = Math.floor(Math.random()*str.length);
      pass+=str.charAt(random);
    }
    setPassword(pass);
  }, [length, num, chars]);

  const copyText = () => {
    window.navigator.clipboard.writeText(password);
    passRef.current?.select();
  }

  useEffect(() => {
    generatePassword();
  }, [length, num, chars]);
  
  return(
    <div className="bg-gray-400 h-screen flex justify-center pt-20">

      <div className="border-1 h-30 w-100 flex flex-col rounded">
       <div className="flex px-5 pt-2 justify-between mb-3"> 
        <input className="bg-white w-80 px-2 font-sm outline-none" type="text" value={password} ref={passRef} readOnly  />
        <button className="bg-blue-500 px-2 py-1" onClick={copyText}>Copy</button>
        </div>
        <div className="flex px-5 pt-2 justify-between mb-3">
          <label className="text-sm flex space-x-1 " >
          <input type="range"
          className="w-20  mt-1" 
          min={1}
          max={50}
          value={length}
          onChange={(e) => setLength(e.target.value)}
          /> 
            <div className="flex w-18 "> Lenght: {length}</div>
          </label>
          <label className="flex items-center text-sm pl-6">Number:
            <input type="checkbox"
            className="ml-1 size-4 mt-1"
          value={num}
          onChange={() => setNum(current => !current)}
          /></label>
          <label className="flex items-center text-sm"> Characters:
            <input type="checkbox"
               className="ml-1 size-4 mt-1"
          value={chars}
          onChange={() => {
            setChars(current => !current)
          }}
          />
          </label>
        </div>
      </div>
    </div>
  )
}