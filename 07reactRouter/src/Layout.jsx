import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'   // use this layout as a base

function Layout() {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout