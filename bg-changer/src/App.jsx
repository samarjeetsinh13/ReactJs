import { useState } from 'react'
import './index.css'
function App() {
  const [color, setColor] = useState('green')

  return (
    <>
      <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
        <div className='fixed flex flex-wrap justify-center align-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center align-center gap-4 shadow-xl bg-white/10 backdrop-blur-lg rounded-3xl p-4'>
            <button className='outline-none px-4 py-2 rounded-full bg-red-500 text-white hover:bg-red-600' onClick={() => setColor('red')}>Red</button>
            <button className='outline-none px-4 py-2 rounded-full bg-yellow-500 text-white hover:bg-yellow-600' onClick={() => setColor('yellow')}>Yellow</button>
            <button className='outline-none px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600' onClick={() => setColor('blue')}>Blue</button>
            <button className='outline-none px-4 py-2 rounded-full bg-green-500 text-white hover:bg-green-600' onClick={() => setColor('green')}>Green</button>
            <button className='outline-none px-4 py-2 rounded-full bg-black text-white hover:bg-gray-800' onClick={() => setColor('black')}>Black</button>
            <button className='outline-none px-4 py-2 rounded-full bg-white text-black hover:bg-gray-200' onClick={() => setColor('white')}>White</button>
            <button className='outline-none px-4 py-2 rounded-full bg-pink-500 text-white hover:bg-pink-600' onClick={() => setColor('pink')}>Pink</button>
            <button className='outline-none px-4 py-2 rounded-full bg-purple-500 text-white hover:bg-purple-600' onClick={() => setColor('purple')}>Purple</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
