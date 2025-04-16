import React from 'react'
import Navbar from '@/component/Navbar.jsx'
import Hero from './sections/hero.jsx'
import About from './sections/about.jsx'
import Officials from './sections/officials.jsx'

const LandingPage = () => {
  return (
    <div className="bg-[#31578B]">
      <Navbar />
      <Hero />
      <About />
      <Officials />

    </div>
  )
}

export default LandingPage