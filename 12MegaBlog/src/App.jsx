import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import {login, logout} from "./store/authSlice"
import {Header, Footer} from "./components/index"
import { Outlet } from 'react-router-dom';

function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .catch((error) => {
      console.error("Failed to restore Appwrite session:", error)
    })
    .finally(() => setLoading(false))
  },[dispatch])

  return !loading ? (
    <>
      <div className='bg-gray-600 min-h-screen flex-wrap content-between '>
        <div className='w-full blcok'>
          <Header />
          <main><Outlet /></main>
          <Footer />
        </div>
      </div>
    </>
  ) : null
}

export default App