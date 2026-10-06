import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)
  //hooks 

  // let counter = 5

  const addValue = () => {
    if (counter <= 16){
      //L-8 Interview Question
      // setCounter(counter+=1)
      // setCounter(counter+=1)
      // setCounter(counter+=1)
      // setCounter(counter+=1)

      //here for it can update 1 time increse by 1 bcs useState send this command in bunch and all the statements/work is same in bunch is can do one time

      //use preState for solve it

      setCounter(preState => preState + 1)
      setCounter(preState => preState + 1)
      setCounter(preState => preState + 1)
      setCounter(preState => preState + 1)
      //after click add it increse 4 number

    }
    
  }
  const removeValue = () => {
    if(counter>0){
      setCounter(counter-=1)
    } 
  }

  return (
    <>
      <h2>Counter Value: {counter}</h2>
      {/* not update by cliking -- so comes Hooks*/}
      <button onClick={addValue}>Increment</button>
      <br/>
      <button onClick={removeValue}>Decrement</button>
    </>
  )
}

export default App
