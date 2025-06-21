import React from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Expertise from './Components/Expertise'
import Services from './Components/Services'
import Testimonials from './Components/Testimonials'
import Working from './Components/Working'

const App = () => {
  return (
    <div >
      <Navbar/>
      <Header/>
      <Expertise/>
      <Services/>
      <Testimonials/>
      <Working/>
    </div>
  )
}

export default App
