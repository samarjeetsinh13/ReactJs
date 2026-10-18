import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {


  return (
    <>
      <UserContextProvider>
        <h1>React with samarjeetsinh</h1>
        <Login/>
        <Profile/>
      </UserContextProvider>
    </>
  )
}

export default App
