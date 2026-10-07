import { useState, useCallback, useEffect, useRef } from 'react'
import './index.css'

function App() {
  const [count, setCount] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState('');
  const [copied, setCopied] = useState(false);

  const passwordRef = useRef(null);
  
  const copyPassword = useCallback(()=>{
    //
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    //this ref properies apply for input/textareas
    window.navigator.clipboard.writeText(password);

    setCopied(preState => !preState);
    setTimeout(()=>{
      setCopied(preState => !preState);
    }, 500)

  }, [password])

// useCallback is a hook that returns a memoized version of the callback function that only changes if one of the dependencies has changed. It is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.
// useCallback(function, dependencies)

  const passwordGenerator = useCallback(()=>{
    let password = '';
    let content = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if(numberAllowed){
      content+='0123456789';
    }
    if(characterAllowed){
      content+='!@#$%^&*()_+';
    }
    for (let i = 0; i < count; i++){
      password += content.charAt(Math.floor(Math.random() * content.length) + 1);
    }
    setPassword(password);
  }, [count, numberAllowed, characterAllowed, setPassword])
  //if i gave password in usecallback dependencies then it continually change and render that change in the ui

  useEffect(()=>{
    passwordGenerator();
  }, [count, numberAllowed, characterAllowed, passwordGenerator])

  // passwordGenerator();
  //it gave an error bcs it is a function and it is not a component so we can not call it directly in the body of the component so we can use useEffect hook to call it when the component is mounted or when the dependencies change
  return (
    <>
      <div className = 'w-full h-screen duration-200 bg-slate-900 flex items-center justify-center'>
        <div className='flex items-center flex-col justify-center bg-slate-600 w-110 h-40 rounded-2xl' >
          <div className='flex bg-slate-600  w-90 h-10 rounded-2xl'>
            <div className='flex justify-center items-center p-4 bg-white w-80 h-10 rounded-l-2xl '>
              <input className='text-black font-bold text-start w-80 h-10 border-none outline-none' ref={passwordRef} value={password} readOnly/>
            </div>
            <button className='bg-blue-600 text-white p-2 rounded-r-2xl hover:bg-blue-700 ' onClick={copyPassword}>{copied?'Copied!':'Copy'}</button>
          </div>
          <div className='flex justify-center items-center  w-105 h-10 rounded-2xl bg-slate-600 shadow-lg'>
            <div className='flex justify-center items-center gap-1 mt-4 cursor-pointer'>

              <input type="range" min="8" max="24" value={count} onChange={(e)=>setCount(e.currentTarget.value)} className='w-30 h-1 '/>
              <p className='text-white font-bold text-sm'>Length ({count})</p>

              <input type="checkbox" className='ml-2' defaultChecked={numberAllowed} onChange={()=>setNumberAllowed((prev)=>!prev)}/>
              <label className='text-white font-bold text-sm ml-1 text-sm'>Numbers</label>

              <input type="checkbox" className='ml-2' defaultChecked={characterAllowed} onChange={()=>setCharacterAllowed((prev)=>!prev)}/>
              {/* if we do setCharacterAllowed(true) then we click i remain true*/}
              <label className='text-white font-bold text-sm ml-1 text-sm'>characters</label>
            </div>
              
          </div>
        </div>
      </div>
    </>
  )
}

export default App
