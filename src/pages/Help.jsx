import Navbar from "../components/Navbar"
import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import HelpBtn from "../components/HelpBtn"
import Services from "../components/Services"

const Help = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Services/>
        <Footer/>
        <HelpBtn/>
    </div>
  )
}

export default Help