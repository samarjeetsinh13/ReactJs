import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import { Home, About, Contact, Github, User } from "./components/index.js"
import './index.css'
import { githubInfoLoader } from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element:<Layout />,
//     children: [
//       {
//         path: "Home",
//         element: <Home />
//       },
//       {
//         path: "About",
//         element:<About />
//       },
//       {
//         path:"Contact", 
//         element: <Contact />
//       }
//   ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
       <Route path='about' element={<About />}/>
       {/* <route path="samar"/> => for furthur nesting link look like "/about/samar"*/}
       <Route path='home' element={<Home />}/>
       <Route path='contact' element={<Contact />}/>
       <Route loader={githubInfoLoader} path='github' element={<Github />}/>
       <Route path='user/:userID' element={<User />}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider  router={router} />
  </StrictMode>,
)
