import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { gitubInfoLoader } from './components/Github/Github.jsx'
import Terms from './components/Terms/Terms.jsx'
import Policy from './components/Terms/Policy.jsx'
import Login from './components/Login/Login.jsx'
import GetStarted from './components/Login/GetStarted.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element:<Layout/>,
//     children: [
//       {
//         path:'',
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
        
//       }
//     ]
//   }
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<Layout/>}>
        <Route path='' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='user/:userid/:age' element={<User/>} />
        {/* in the place of /:userid it takes the data from backend */}
        <Route
         loader = { gitubInfoLoader }
        //  USE  loader to fetch the data before the page is rendered 
         path='github' 
         element={<Github/>} />
         <Route path='terms' element={<Terms/>}></Route>
         <Route path='policy' element={<Policy/>}></Route>
         <Route path='login' element={<Login/>}></Route>
         <Route path='getstarted' element={<GetStarted/>}></Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>,
)
