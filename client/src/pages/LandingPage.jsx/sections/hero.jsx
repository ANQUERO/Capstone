import React from 'react'
import { Button } from '@/components/ui/button.jsx'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import BackgroundImage from '@/Images/abou.png'

const Tagline = ({ text }) => (
  <motion.h1
    className='text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight'
    initial={{ opacity: 0, y: -40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    {text}
  </motion.h1>
)

const Description = ({ text }) => (
  <motion.p
    className='text-lg sm:text-xl md:text-2xl text-gray-300 mt-4 max-w-3xl'
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4, duration: 0.8 }}
  >
    {text}
  </motion.p>
)

const CTA = ({ text }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.8, duration: 0.6 }}
  >
    <Button className='px-12 py-6 bg-[#B8336A] text-white text-xl font-semibold sm:text-2xl rounded-3xl cursor-pointer'>
      {text}
    </Button>
  </motion.div>
)

const CTA2 = ({ text }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.8, duration: 0.6 }}
  >
    <Button className='px-12 py-6 bg-white text-black text-xl font-semibold sm:text-2xl rounded-3xl cursor-pointer'>
      {text}
    </Button>
  </motion.div>
)



const Background = () => (
  <div className="absolute inset-0 w-full h-full">
    <img
      src={BackgroundImage}
      alt="Hero"
      className="w-full h-full object-cover object-center"
    />
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-r from-[#b1082a54] to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/10 backdrop-brightness-100"></div>
    </div>
  </div>
)

const Hero = () => (
  <main id='hero' className='relative max-w-11/12 h-screen mx-auto overflow-hidden rounded-xl mt-10 '>

    <Background />

    <div className="relative z-10 flex flex-col justify-center items-start h-full px-4 sm:px-8 md:px-12 lg:px-20 text-white space-y-4">
      <div className="space-y-2">
        <Tagline text='Empowered Youth,' />
        <Tagline text='Empowered Democracy.' />
      </div>

      <Description text='Know your rights, demand transparent leadership.' />

      <div className='flex flex-col sm:flex-row gap-4 mt-6'>
        <CTA 
        text='Log In' 
        />
        <CTA2
        text='Location'
         />
      </div>
    </div>
  </main>
)

export default Hero
