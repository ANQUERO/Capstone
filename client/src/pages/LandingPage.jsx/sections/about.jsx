/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import LeftImage from '@/Images/abou.png'

//Left Section Component
const LeftSection = () => {
  return (
    <motion.img
      src={LeftImage}
      alt="About Image"
      className="w-full h-auto rounded-2xl shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  )
}

//Tagline Component
const Tagline = ({ text }) => {
  return (
    <motion.div
      className="max-w-4xl mb-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal">
        {text}
      </h1>
    </motion.div>
  )
}

//Description Component
const Description = ({ paragraph }) => {
  return (
    <motion.p
      className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      {paragraph}
    </motion.p>
  )
}

//Button Component
const RightButton = () => {
  return (
    <motion.button
      className="bg-yellow-100 hover:bg-yellow-50 transition-colors text-black rounded-full py-3 px-8 font-medium w-full sm:w-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      Get Started
    </motion.button>
  )
}

//Right Section Component
const RightSection = () => {
  return (
    <div>
      <Tagline text="Know your rights, demand transparent leadership." />
      <Description paragraph="Our platform empowers citizens by providing clear, actionable information on leadership practices. Stay informed and make your voice count." />
      <RightButton />
    </div>
  )
}

//About Section
const About = () => {
  // State to track if the section is in view and the animation will start
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setInView(true)
          } else {
            setInView(false)
          }
        })
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    )

    //Getting the id of the section About
    const section = document.querySelector('#about')
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  return (
    <section
      id="about"
      className="w-full h-full py-16 px-4 md:px-8 lg:px-16 relative overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8">

          {/* Left Section */}
          <motion.div
            className="lg:w-1/2 flex flex-col justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <LeftSection />
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="lg:w-1/2 flex flex-col justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 1.5 }}
          >
            <RightSection />
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About
