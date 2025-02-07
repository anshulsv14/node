import React from 'react'
import {Outlet} from 'react-router-dom'


import Topnav from './components/Navbar'
import Footer from './components/Footer'
const Layout = () => {
  return (
   <>
 
<Topnav/>

   <main>
    <Outlet/>
   </main>

   <Footer/>
   </>
  )
}

export default Layout
