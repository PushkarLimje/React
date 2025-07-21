import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
//outlet = where we use like layout as base and makes constant or fixed the above and below of oulet like header and footer  
function Layout() {
    return (
        <>
            <Header/>
            <Outlet/> 
            <Footer/>
        </>
    )
}

export default Layout
