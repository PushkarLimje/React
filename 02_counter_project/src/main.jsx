import React ,{ useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Android from './android.jsx'
import Component1 from './Component1.jsx'




createRoot(document.getElementById('root'))
.render(
    <>
    {/* <App /> */}
    <Android />
     {/* <Component1/> */}
    </>
)
