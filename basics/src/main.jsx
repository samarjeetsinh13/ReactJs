import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <h1> Custom Fucntion</h1>
  )
}
// here this fucntion conver into js object

// const reactElement = {
//     type: 'a',
//     props: {
//         href:'https://google.com',
//         target:'_blank'
//     },
//     children: 'click me to visit google'
// } 

// create using react properties

const variable = "hello react"

const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank'
  },
  'click here to visit google',
  //all the variable insert after html code
  variable
)


//like this but in different formate which read by 2... number code 


const reactStyleElement = (<a href = "https://google.com" target='_blank'>visit google</a>)

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
      <MyApp />
    </StrictMode>
    
    // MyApp() also run this valid 

    // reactStyleElement 

    //using react properties
    // reactElement



    /* //run Object which is according to the react render reactStyleElement */
    
)
// 2... number code
