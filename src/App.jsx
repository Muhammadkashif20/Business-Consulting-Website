import React from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Expertise from './Components/Expertise'
import Services from './Components/Services'
import Testimonials from './Components/Testimonials'
import ValueableService from './Components/ValueableService'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div >
      <Navbar/>
      <Header/>
      <Expertise/>
      <Services/>
      <Testimonials/>
      <ValueableService/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
