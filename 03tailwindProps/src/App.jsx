import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  // const myObj = { key: "anotherValue", name: "anotherName"}

  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-xl'>Tailwind Test</h1>
      {/* <Card channel="John Doe" someObj = {{ key: "value", name: "samarjeetsinh"}}/>
      <Card channel="Jane Smith" someObj = {myObj} myArr = {[1, 2, 3]}/> */}
      <Card price="0.01" number="#345" />
      <Card price="0.1" />
      {/* here we pass object through props using var and direct object to the card */}
    </>
  )
}

export default App
