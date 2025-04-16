import React, { useRef } from 'react'
import { Button } from '@/components/ui/button.jsx'
// eslint-disable-next-line no-unused-vars
import { motion, useInView, useAnimation } from 'framer-motion'
import BackgroundImage from '@/Images/abou.png'

const Tagline = ({ text, controls }) => (
  <motion.h1
    className='text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight text-center sm:text-left'
    initial={{ opacity: 0, y: -40 }}
    animate={controls}
    transition={{ duration: 0.8 }}
  >
    {text}
  </motion.h1>
)

const Description = ({ text, controls }) => (
  <motion.p
    className='text-base sm:text-lg md:text-2xl text-gray-300 mt-2 max-w-3xl text-center sm:text-left'
    initial={{ opacity: 0, y: 20 }}
    animate={controls}
    transition={{ delay: 0.4, duration: 0.8 }}
  >
    {text}
  </motion.p>
)

const CTA = ({ text, controls, delay = 0.8 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={controls}
    transition={{ delay, duration: 0.6 }}
  >
    <Button className='w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-6 bg-[#B8336A] text-white text-lg sm:text-xl font-semibold rounded-3xl cursor-pointer'>
      {text}
    </Button>
  </motion.div>
)

const CTA2 = ({ text, controls, delay = 0.9 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={controls}
    transition={{ delay, duration: 0.6 }}
  >
    <Button className='w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-6 bg-white text-black text-lg sm:text-xl font-semibold rounded-3xl cursor-pointer'>
      {text}
    </Button>
  </motion.div>
)

const Background = () => (
  <div
    className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed"
    style={{ backgroundImage: `url(${BackgroundImage})` }}
  >
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-r from-[#b1082a54] to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/10 backdrop-brightness-100"></div>
    </div>
  </div>
)

const Hero = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.4 })
  const controls = useAnimation()

  if (isInView) {
    controls.start({ opacity: 1, y: 0, scale: 1 })
  }

  return (
    <main id='hero' className='relative w-full h-screen overflow-hidden mt-3'>
      <Background />

      <div
        ref={ref}
        className="relative z-10 flex flex-col justify-center items-center sm:items-start h-full px-6 sm:px-8 md:px-16 text-white space-y-4"
      >
        <div className="space-y-3 sm:space-y-2 text-center sm:text-left">
          <Tagline text='Empowered Youth,' controls={controls} />
          <Tagline text='Empowered Democracy.' controls={controls} />
        </div>

        <Description text='Know your rights, demand transparent leadership.' controls={controls} />

        <div className='flex flex-col sm:flex-row gap-4 mt-6 w-full max-w-md sm:max-w-none'>
          <CTA text='Log In' controls={controls} />
          <CTA2 text='Location' controls={controls} />
        </div>
      </div>
    </main>
  )
}

export default Hero
